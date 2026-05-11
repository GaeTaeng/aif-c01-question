# AWS AI Practitioner Quiz

Mobile-first static quiz app generated from the provided AWS AI Practitioner HTML notes.

## Local files

- `index.html`: app entry point
- `app.js`: quiz UI logic
- `styles.css`: mobile-first styling
- `questions.js`: generated question data for the browser
- `scripts/extract-questions.js`: regenerates `questions.js` from the source HTML

## Regenerate questions

```bash
node scripts/extract-questions.js
```

## GitHub Pages

Pushing the `dev` branch triggers `.github/workflows/deploy-pages.yml` and deploys the static files to GitHub Pages.
