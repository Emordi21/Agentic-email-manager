# InboxPilot

A personal web app that helps shrink a Gmail inbox from ~15,000 emails to under 100.
It groups emails with rules, lets you approve actions on whole groups, then archives or
trashes them in bulk. Nothing is ever permanently deleted, and nothing happens without your approval.

**Status:** Phase 1, Milestone 0 (project setup). See `CLAUDE.md` for the stack and rules.

## Run it

You need Node.js 20.19 or newer (or 22.12+).

```bash
npm install
cp .env.example .env.local   # then edit if needed
npm run dev                  # opens the app at http://localhost:5173
```

Other commands: `npm test` (run tests), `npm run build` (type-check and build), `npm run lint`.

## Folder map

```
src/                  React app: screens/, components/ (components/ui = shadcn), lib/
supabase/functions/   Edge Functions (Deno): gmail, scan, rules, agent, approvals, executor
supabase/migrations/  Database schema
docs/                 Setup guides (see docs/google-setup.md)
```

## Secrets

Google and Anthropic secrets are set with `supabase secrets set` and only used in Edge Functions. Never put them in `.env.local` or Git.
