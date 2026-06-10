# Aqeel Arshad — Portfolio

Personal portfolio for Muhammad Aqeel Arshad, Full-Stack Engineer. Built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Deploy

This is a static site, so any static host works.

**Vercel (recommended)**
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com — it auto-detects Vite (build: `npm run build`, output: `dist`).
3. Deploy. You get a live URL and automatic HTTPS.

**Netlify**
1. Push to GitHub and import the repo, or run `npm run build` and drag the `dist` folder to app.netlify.com/drop.
2. If importing the repo: build command `npm run build`, publish directory `dist`.

## Editing content

All text — experience, skills, projects, contact — lives in **`src/data.js`**.
Change it there and everything updates. No need to touch the components.

## Structure

```
src/
  data.js              # all content (edit here)
  App.jsx              # composes the page
  index.css            # all styles + design tokens
  components/          # Nav, Hero, About, Stack, Experience, Work, Contact, Footer, SystemMap
  hooks/               # useScrollSpy, useScrollProgress, useReveal
```
