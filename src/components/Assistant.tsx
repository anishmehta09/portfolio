"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { resume } from "@/data/resume";

type Message = { role: "user" | "assistant"; content: string };

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: `Hi! I'm ${resume.name} — ${resume.title} based in ${resume.location}.\n\n${resume.summary}\n\nFeel free to ask me anything, or pick a question below to get started.`,
};

const CHIPS = [
  "What's your tech stack?",
  "Are you open to work?",
  "Tell me about your experience at Fidelity",
  "What are you building next?",
];

export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 1 && messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  async function send(text?: string) {
    const content = text ?? input;
    if (!content.trim() || loading) return;

    const userMessage: Message = { role: "user", content };
    const newMessages = [...messages, userMessage];

    setMessages([...newMessages, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: updated[updated.length - 1].content + chunk,
        };
        return updated;
      });
    }

    setLoading(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  // Only show chips if the only message is the initial greeting
  const showChips = messages.length === 1;

  return (
    <section
      id="assistant"
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-12"
    >
      {/* Profile header */}
      <div className="flex items-center gap-5 mb-8">
        <div className="relative w-36 h-36 rounded-full overflow-hidden shrink-0">
          <Image
            src="/image.png"
            alt="Anish Mehta"
            fill
            className="object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            {resume.name}
          </h1>
          <p className="text-base text-zinc-500 dark:text-zinc-400 mt-2">
            {resume.title}
          </p>
          <p className="text-sm text-zinc-400 dark:text-zinc-600 mt-1">
            📍 {resume.location}
          </p>
        </div>
      </div>

      {/* Message list */}
      <div
        ref={messagesRef}
        className="flex flex-col gap-4 mb-6 max-w-2xl max-h-[60vh] overflow-y-auto"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-4 py-3 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
              }`}
            >
              {msg.content || (loading && i === messages.length - 1 ? "▍" : "")}
            </div>
          </div>
        ))}
      </div>

      {/* Chips */}
      {showChips && (
        <div className="flex flex-wrap gap-2 mb-6 max-w-2xl">
          {CHIPS.map((chip) => (
            <button
              key={chip}
              onClick={() => send(chip)}
              className="px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-xs text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              {chip}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2 max-w-2xl">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask something..."
          rows={1}
          className="flex-1 resize-none rounded-lg border border-zinc-200 dark:border-zinc-700 bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600"
        />
        <button
          onClick={() => send()}
          disabled={loading || !input.trim()}
          className="px-4 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:opacity-80 disabled:opacity-40 transition-opacity cursor-pointer"
        >
          Send
        </button>
      </div>
    </section>
  );
}
