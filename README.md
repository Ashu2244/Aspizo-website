# Aspizo IT Solutions — Marketing Website

Professional multi-product website for Aspizo IT Solutions.

## Products

- **Highway Incident Management** — AID & camera management (`/highway-incident-management`)
- **Aspizo Vision** — Road defect survey reports (`/vision`)
- **Aspizo Traffic Analyzer** — ATCC from DVR video (`/traffic-analyzer`)

## Pages

- `/` — Company home
- `/about` — Field + software story
- `/contact` — Contact form
- `/download` — Traffic Analyzer Windows download
- `/docs` · `/features` — Traffic Analyzer docs

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build (static export for Cloudflare Pages)

```bash
npm run build
```

Output folder: `out/`

### Cloudflare Pages settings

| Setting | Value |
|--------|--------|
| Framework preset | None / Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20 |

## Upload Desktop App ZIP

1. Place `Aspizo-Traffic-Analyzer-v1.0.zip` in `public/downloads/`
2. Update SHA256 / file size in `src/lib/data.ts`

## Tech Stack

- Next.js (App Router, static export)
- Tailwind CSS
- Lucide React icons
- Plus Jakarta Sans
