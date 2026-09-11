# Allverze Company Profile

Company-profile website for **Allverze Corporation** (`allverze.com`): a React 19 + Vite 8 + TypeScript single-page app with an Express 5 email API.

## Layout

npm-workspaces monorepo with two packages:

```
├── client/             React 19 SPA (Vite 8 + TypeScript + Tailwind 4)
│   ├── public/         static assets (favicon, og-image, _redirects)
│   └── src/
│       ├── api/        contact form API client (submitContact)
│       ├── components/ Header, Footer, WhatsAppWidget, OrbitalRing
│       ├── data/       contact form copy (intents)
│       ├── hooks/      useContactForm
│       ├── imports/    logo.webp
│       ├── pages/      Home, About, Services, Contact
│       ├── theme/      ThemeContext, ThemeProvider, useThemeColors
│       ├── types/      shared TS types
│       ├── App.tsx     routes (/ /about /services /contact, * → home)
│       └── config.ts   env-driven client config
└── server/             Express 5 email API
    ├── server.mjs      entry (dotenv/config, config, app, listen)
    ├── assets/         email-logo.png (base64 inline)
    └── src/
        ├── app.js      middleware + routing + error handling
        ├── config.js   env config with fail-fast
        ├── validation.js
        ├── routes/     health, contact
        ├── services/   emailService (nodemailer + retry)
        ├── lib/        intents, leadRef, whatsapp, format
        └── templates/  email HTML/text (inbound, confirmation, logo)
```

## Run

- `npm run dev` — concurrently starts Vite (`:5173`) and the email API (`:3001`); Vite dev-proxies `/api → localhost:3001`.
- `npm run build` — `tsc -b && vite build` inside `client/` → `client/dist/` (must pass before deploy).
- `npm run lint` — ESLint for both `client` and `server` (must be 0 errors).
- `npm run server` / `npm start` — run the email API only.

## Configuration

- Copy `.env.example` → `.env` for local secrets (server reads `.env` from the repo root).
- `client/src/config.ts` consumes `VITE_*` vars; `server/src/config.js` consumes the server env contract (see `.env.example`).

## Deployment

- **Backend — Railway**: `railway.json` targets `server/` as the root directory; builds its `Dockerfile` (node:22-alpine); healthcheck `GET /api/health`.
- **Frontend — Cloudflare Pages**: Root directory `client`, build `npm run build`, output `dist/`. Requires `NODE_VERSION=22`. Custom domain `allverze.com` via Cloudflare DNS.

See `AGENTS.md` for the full runbook and session memory.