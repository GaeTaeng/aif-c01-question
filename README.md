# exam-practice
# https://gaetaeng.github.io/exam-practice/
# 편하게 들어가서 쓰세요 (입장 비밀번호는 따로 문의주세요)

Mobile-first static quiz app for certification-style practice sets.

The current bundled dataset and UI flow are configured for AWS AI Practitioner, but the project
name and structure are broad enough to expand into other exams later.

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
