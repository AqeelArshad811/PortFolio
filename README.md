# Aqeel Arshad — Portfolio (React + Vite)

Personal portfolio for Muhammad Aqeel Arshad, Full-Stack Developer.
Dark/light theme, animated system-map diagram, responsive nav, social share cards.

## Run locally
```bash
npm install
npm run dev          # http://localhost:5173
```

## Build
```bash
npm run build        # outputs to /dist
npm run preview      # preview the production build
```

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Import it at vercel.com — it auto-detects Vite (build: `npm run build`, output: `dist`).
3. Deploy. Automatic HTTPS + redeploy on every push.

(Netlify works too: build command `npm run build`, publish directory `dist`.)

## Editing
- All text/content: `src/data.js`
- All styling + theme tokens: `src/index.css`
- Static files (résumé, share image, icons): `public/`

## Structure
```
public/        resume.pdf, og-image.png, apple-touch-icon.png, favicon.svg
src/
  data.js          all content (edit here)
  App.jsx          composes the page
  index.css        styles + light/dark tokens
  components/      Nav, Hero, SystemMap, About, Stack, Experience, Work, Contact, Footer, SectionHead
  hooks/           useScrollSpy, useScrollProgress, useReveal, useTheme
```
