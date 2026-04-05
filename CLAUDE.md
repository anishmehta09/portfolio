# Portfolio Project — Claude Code Context

## Project

Personal portfolio website with AI chatbot, built as a learning project to transition from Angular/NestJS to the React ecosystem.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript
- next-themes (light/dark/auto toggle)
- Groq SDK (chat — llama-3.3-70b-versatile)
- Google Gemini SDK (chat — gemini-3-flash-preview, secondary)

## Key Conventions

- `src/components/` — all reusable UI components
- `src/app/` — Next.js routes and layout only (no UI components here)
- `src/data/resume.ts` — single source of truth for all personal data and chatbot context
- Dark mode via `@variant dark (&:is(.dark *))` in globals.css (Tailwind v4 syntax)
- CSS variables for background/foreground use `.dark { ... }` class selector (not `prefers-color-scheme`) so next-themes controls them
- Every section gets `min-h-screen` so it fills viewport when scrolled to
- All section padding is `py-12`
- Use `next/image` with `fill` + a sized `relative` parent for all images (not `<img>`)

## Current File Structure

src/
├── app/
│ ├── layout.tsx ← root layout, wraps everything in Providers
│ ├── page.tsx ← imports and renders all sections
│ ├── globals.css ← global styles + Tailwind + smooth scroll
│ └── api/
│ └── chat/
│ └── route.ts ← POST handler, supports `provider` field ("groq" default, "gemini")
├── components/
│ ├── Providers.tsx ← next-themes ThemeProvider (use client)
│ ├── Sidebar.tsx ← left nav, mobile hamburger, segmented theme toggle (use client)
│ ├── Assistant.tsx ← AI-first hero: profile header, inline chat, prompt chips (use client)
│ ├── Experience.tsx ← work history as cards with period + client chips
│ ├── Skills.tsx ← skills grouped by category
│ ├── Education.tsx ← education with course chips
│ ├── Projects.tsx ← project cards with tech chips and links
│ ├── Contact.tsx ← email, github, linkedin links
│ └── presentation/
│ └── Chip.tsx ← reusable pill/chip component
├── data/
│ └── resume.ts ← all personal data + chatContext object for chatbot
└── public/
└── image.png ← Anish's profile photo

## What's Built

- Full layout shell (sidebar + main content)
- Assistant.tsx replaces Hero — AI-first landing with profile photo, inline chat, prompt chips
- All static sections: Experience, Skills, Education, Projects, Contact
- /api/chat route with streaming, supports Groq (default) and Gemini via `provider` field
- Sidebar driven by resume.nav with sparkle icon on Assistant nav item
- All content driven from resume.ts (no hardcoded personal data in components)
- Chip component reused across Skills, Education, Projects, Experience
- Smooth scroll between sections
- Segmented theme control (Auto / Dark / Light) in sidebar
- Profile photo in sidebar avatar and Assistant header
- Experience section uses card layout with period chip and client badge

## What's NOT Built Yet

- Active nav highlighting (current section highlighted in sidebar)
- Deployment to Vercel

## Next Steps (in order)

1. Active nav link highlighting using Intersection Observer
2. Deploy to Vercel

## Important Patterns

- All components are Server Components by default
- Only add "use client" when hooks or event handlers are needed
- resume.ts has two exports: `resume` (UI data) and `chatContext` (richer LLM context)
- chatContext has no `faqs` — removed as they become stale; the model answers from context fields directly
- Chip.tsx is the single source of truth for chip/pill styling
- Contact links have separate `url` and `display` fields for vanity URLs
- Experience entries have optional `client` field for contractor roles
- Theme hydration mismatch: use `suppressHydrationWarning` on theme-dependent elements
- next-themes known issue: script tag warning in React 19 console — cosmetic only, not a bug

## Developer

Anish Mehta — transitioning from Angular/NestJS (10+ years) to React/Next.js ecosystem.
Learning goal: understand every line of code written, not just vibe code.
