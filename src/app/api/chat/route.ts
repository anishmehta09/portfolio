import Groq from "groq-sdk";
import { GoogleGenAI } from "@google/genai";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const gemini = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT =
  process.env.SYSTEM_PROMPT ?? "You are a helpful assistant.";

type Message = { role: string; content: string };

export async function POST(req: Request) {
  const { messages, provider = "gemini" } = await req.json();

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
