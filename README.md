# Omit Hasan Ador — Portfolio

Personal portfolio site built with Next.js (App Router) and Tailwind CSS.

## Stack

- Next.js 16
- Tailwind CSS v4
- Framer Motion
- react-icons / react-type-animation

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Hero video

The hero section plays a looping background video. Drop your own files into
`public/videos/`:

- `hero.mp4` (required)
- `hero.webm` (optional, smaller size)
- `hero-poster.jpg` (optional, shown while the video loads)

Until those files are added, the hero falls back to a dark gradient
background, so nothing looks broken.

## Deploying to Vercel

This is a standard Next.js app, so it deploys to Vercel with zero
configuration:

1. Push this repo to GitHub.
2. Import it at https://vercel.com/new.
3. Vercel detects Next.js automatically — no build settings to change.

## Content

All personal data (projects, skills, services, FAQs, contact info) lives in
`src/data/*.js`, so it can be updated without touching component code.
