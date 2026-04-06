import Groq from "groq-sdk";
import { GoogleGenAI } from "@google/genai";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const gemini = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT =
  process.env.SYSTEM_PROMPT ?? "You are a helpful assistant.";

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;
const ALLOWED_ROLES = new Set(["user", "assistant"]);
const ALLOWED_PROVIDERS = new Set(["groq", "gemini"]);

type Message = { role: "user" | "assistant"; content: string };

function validateMessages(messages: unknown): Message[] {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error("messages must be a non-empty array");
  }
  if (messages.length > MAX_MESSAGES) {
    throw new Error(`Too many messages (max ${MAX_MESSAGES})`);
  }
  return messages.map((m, i) => {
    if (typeof m !== "object" || m === null) throw new Error(`Message ${i} is not an object`);
    const { role, content } = m as Record<string, unknown>;
    if (typeof role !== "string" || !ALLOWED_ROLES.has(role)) throw new Error(`Message ${i} has invalid role`);
    if (typeof content !== "string") throw new Error(`Message ${i} content must be a string`);
    const trimmed = content.trim();
    if (trimmed.length === 0) throw new Error(`Message ${i} content is empty`);
    if (trimmed.length > MAX_MESSAGE_LENGTH) throw new Error(`Message ${i} exceeds max length`);
    return { role: role as "user" | "assistant", content: trimmed };
  });
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  let messages: Message[];
  try {
    messages = validateMessages(body.messages);
  } catch (e) {
    return new Response((e as Error).message, { status: 400 });
  }

  const providerRaw = typeof body.provider === "string" ? body.provider : "gemini";
  const provider = ALLOWED_PROVIDERS.has(providerRaw) ? providerRaw : "gemini";

  if (provider === "gemini") {
    const history = messages.slice(0, -1).map((m: Message) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const lastMessage = messages.at(-1)!.content;

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
