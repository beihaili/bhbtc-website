# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (port 3000)
pnpm build        # Build client (Vite) + server (esbuild)
pnpm check        # TypeScript type checking (tsc --noEmit)
pnpm format       # Prettier formatting
pnpm preview      # Preview production build
```

No test suite is configured.

## Architecture

Personal website (bhbtc.xyz) — a React SPA about Bitcoin development and philosophy, deployed to Vercel as static files.

**Stack**: React 19 + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui (new-york style) + wouter (routing) + framer-motion (animations)

**Key structure**:
- `client/src/pages/` — Route pages: Home, About, Blog, BlogPost, Projects, Contact
- `client/src/data/blogPosts.ts` — Blog content stored as inline markdown strings (not files), rendered in BlogPost page
- `client/src/components/ui/` — shadcn/ui components, add via `npx shadcn@latest add <component>`
- `client/src/contexts/ThemeContext.tsx` — Dark/light theme with localStorage persistence
- `client/src/components/GiscusComments.tsx` — Blog comments via Giscus (GitHub Discussions)
- `server/index.ts` — Minimal Express server for production static file serving only
- `shared/` — Constants shared between client and server

**Path aliases** (in both vite.config.ts and tsconfig.json):
- `@/` → `client/src/`
- `@shared/` → `shared/`

**Routing**: Uses `wouter` (not react-router). Routes defined in `client/src/App.tsx`.

**Deployment**: Vercel static SPA with catch-all rewrite to index.html.

## Content

Site content is in Chinese. Blog posts are authored as `BlogPost` objects in `client/src/data/blogPosts.ts` with markdown in the `content` field.
