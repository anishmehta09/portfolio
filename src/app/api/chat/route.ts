import Groq from "groq-sdk";
import { GoogleGenAI } from "@google/genai";
import { resume, chatContext } from "@/data/resume";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const gemini = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `You are an AI assistant on Anish Mehta's personal portfolio website.
Your job is to answer questions about Anish on his behalf — like a smart, friendly recruiter who knows him well.

Keep answers concise and conversational. Don't list everything you know — answer what was asked.
If you don't know something, say so honestly.

--- CONTEXT ---
${JSON.stringify(chatContext, null, 2)}

--- RESUME SUMMARY ---
Name: ${resume.name}
Title: ${resume.title}
Location: ${resume.location}
Summary: ${resume.summary}
`;

type Message = { role: string; content: string };

export async function POST(req: Request) {
  const { messages, provider = "groq" } = await req.json();

  if (provider === "gemini") {
    const history = messages.slice(0, -1).map((m: Message) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const lastMessage = messages.at(-1).content;

    const chat = gemini.chats.create({
      model: "gemini-3-flash-preview",
      config: { systemInstruction: SYSTEM_PROMPT },
      history,
    });

    const stream = await chat.sendMessageStream({ message: lastMessage });
    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.text ?? "";
          if (text) controller.enqueue(encoder.encode(text));
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  // Groq (default)
  const stream = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    stream: true,
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content ?? "";
        if (text) controller.enqueue(encoder.encode(text));
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
