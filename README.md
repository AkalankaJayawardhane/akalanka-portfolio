# Akalanka Jayawardhane — Portfolio

A responsive React + Vite portfolio with a dark charcoal theme, lime accents, a transparent portrait, grouped skill cards, filterable project cards and project-detail dialogs.

## Run locally

Make sure Node.js LTS is installed, then open this folder in VS Code and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`. The project can be deployed to Vercel by importing its GitHub repository; Vercel detects Vite automatically.

## Update your information

- `src/config.js` — name, email, GitHub, LinkedIn, skills and project details.
- `public/akalanka-profile.webp` — transparent profile portrait.
- `public/Akalanka-Jayawardhane-CV.pdf` — add your CV here, then set `cvPath: '/Akalanka-Jayawardhane-CV.pdf'` in `src/config.js` to show the CV button.
- `public/projects/` — project preview illustrations used by the cards.

The project list includes both implemented/academic work and ideas or prototypes. Concept-stage items are explicitly labelled as concepts.
