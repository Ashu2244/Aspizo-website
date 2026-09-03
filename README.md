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

## Desktop app download (GitHub Releases)

The Setup EXE (~157 MB) is hosted on GitHub Releases — not in `public/downloads/`
(GitHub file size limit is 100 MB for repo files).

1. Create release tag `v3.2.0` on this repo
2. Upload `Aspizo-Traffic-Analyzer-Setup-3.2.0.exe` as a release asset
3. Keep `product.downloadUrl` in `src/lib/data.ts` pointing at:
   `https://github.com/Ashu2244/Aspizo-website/releases/download/v3.2.0/Aspizo-Traffic-Analyzer-Setup-3.2.0.exe`


## Tech Stack

- Next.js (App Router, static export)
- Tailwind CSS
- Lucide React icons
- Plus Jakarta Sans
