# anishmehta.dev — AI-First Portfolio

Personal portfolio website with an AI assistant powered by Google Gemini. Built to explore the React/Next.js ecosystem while demonstrating AI integration in a real product.

**Live:** [anishmehta.dev](https://anishmehta.dev)

---

## What it does

The landing page is a conversational AI assistant that answers questions about my experience, skills, and background. Instead of a static bio, visitors can ask anything — and get responses grounded in my actual resume and context.

The rest of the portfolio (Experience, Skills, Education, Projects, Contact) is accessible via the sidebar.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| AI | Google Gemini 2.0 Flash (default), Groq / Llama 3.3 70B (fallback) |
| Deployment | Vercel |

---

## Key Features

- **AI assistant as hero** — Gemini-powered chat replaces the traditional static intro
- **Streaming responses** — tokens stream word by word via the Web Streams API
- **Multi-provider support** — swap between Gemini and Groq via a `provider` field in the request
- **Context-grounded** — system prompt is stored as an environment variable, not in source code
- **Dark / Light / Auto theme** — segmented control powered by `next-themes`
- **Fully responsive** — mobile drawer sidebar, full-width chat on small screens

---

## Architecture

```
src/
├── app/
│   ├── page.tsx              # Renders all sections
│   ├── layout.tsx            # Root layout + theme provider
│   └── api/chat/route.ts     # Streaming chat API (Gemini / Groq)
├── components/
│   ├── Assistant.tsx         # AI chat UI — profile header, messages, chips
│   ├── Sidebar.tsx           # Nav, theme toggle, mobile hamburger
│   ├── Experience.tsx        # Work history cards
│   └── ...                   # Skills, Education, Projects, Contact
└── data/
    └── resume.ts             # Single source of truth for all UI content
```

The chat API route reads `SYSTEM_PROMPT` from environment variables — personal context never lives in the codebase.

---

## Running locally

```bash
pnpm install
```

Create `.env.local`:
```
GROQ_API_KEY=...
GEMINI_API_KEY=...
SYSTEM_PROMPT=...
```

```bash
pnpm dev
```

---

## What I learned

This project was built as a deliberate learning exercise — transitioning from 10 years of Angular/NestJS to the React ecosystem. Every line was written to understand, not just ship. Key concepts explored:

- Next.js App Router, file-based routing, and server vs client components
- Streaming HTTP responses with the Web Streams API
- React state patterns for real-time streaming UI
- Tailwind CSS v4 syntax and dark mode via CSS class variants
- SSR hydration and how to handle client/server mismatches
