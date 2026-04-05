# Portfolio Project — Claude Code Context

## Project

Personal portfolio website with AI chatbot, built as a learning project to transition from Angular/NestJS to the React ecosystem.

## Tech Stack

- Next.js 15 (App Router)
- React 18
- Tailwind CSS v4
- TypeScript
- next-themes (light/dark/system toggle)
- Claude API (chatbot — not yet implemented)

## Key Conventions

- `src/components/` — all reusable UI components
- `src/app/` — Next.js routes and layout only (no UI components here)
- `src/data/resume.ts` — single source of truth for all personal data and chatbot context
- Dark mode via `@variant dark (&:is(.dark *))` in globals.css (Tailwind v4 syntax)
- CSS variables for background/foreground use `.dark { ... }` class selector (not `prefers-color-scheme`) so next-themes controls them
- Every section gets `min-h-screen` so it fills viewport when scrolled to

## Current File Structure

src/
├── app/
│ ├── layout.tsx ← root layout, wraps everything in Providers
│ ├── page.tsx ← imports and renders all sections
│ └── globals.css ← global styles + Tailwind + smooth scroll
├── components/
│ ├── Providers.tsx ← next-themes ThemeProvider (use client)
│ ├── Sidebar.tsx ← left nav, mobile hamburger, theme toggle, chat button (use client)
│ ├── Hero.tsx ← name, title, summary, CTA buttons
│ ├── Experience.tsx ← work history timeline
│ ├── Skills.tsx ← skills grouped by category
│ ├── Education.tsx ← education with course chips
│ ├── Projects.tsx ← project cards with tech chips and links
│ ├── Contact.tsx ← email, github, linkedin links
│ └── presentation/
│ └── ├── Chip.tsx ← reusable pill/chip component used in Skills, Education,
└── data/
└── resume.ts ← all personal data + chatContext object for chatbot

## What's Built

- Full layout shell (sidebar + main content)
- All static sections: Hero, Experience, Skills, Education, Projects, Contact
- Sidebar driven by resume.nav
- All content driven from resume.ts (no hardcoded personal data in components)
- Chip component reused across Skills, Education, Projects
- Smooth scroll between sections
- Dark/light/auto theme toggle in sidebar (cycles light → dark → auto)

## What's NOT Built Yet

- Chat sidebar (opens when "Chat with me" is clicked)
- Chat API route (/api/chat) using Claude API
- Active nav highlighting (current section highlighted in sidebar)
- Deployment to Vercel

## Next Steps (in order)

1. Chat sidebar component
3. /api/chat route using Claude API + resume.ts context
4. Active nav link highlighting using Intersection Observer
5. Deploy to Vercel

## Important Patterns

- All components are Server Components by default
- Only add "use client" when hooks or event handlers are needed
- resume.ts has two exports: `resume` (UI data) and `chatContext` (richer LLM context)
- Chip.tsx is the single source of truth for chip/pill styling
- Contact links have separate `url` and `display` fields for vanity URLs

## Developer

Anish Mehta — transitioning from Angular/NestJS (10+ years) to React/Next.js ecosystem.
Learning goal: understand every line of code written, not just vibe code.
