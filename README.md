# ARIT Learning Portal — Day 1

Run:  `npm install` then `npm run dev`  (open the URL Vite prints)

## Structure
```
arit-dashboard/
├── index.html
├── package.json / vite.config.js
└── src/
    ├── main.jsx                  entry point
    ├── App.jsx                   composes the page
    ├── styles.css                blue & white theme
    └── components/
        ├── Header.jsx
        ├── CourseCard.jsx
        └── ProgressCounter.jsx
```

## Checkpoints (build in order; confirm each before moving on)
| # | Add | You should see | If it fails, check |
|---|-----|----------------|--------------------|
| 1 | `main.jsx` + minimal `App` returning `<h1>Hello</h1>` | "Hello" on the page | `npm install` ran; `id="root"` in index.html |
| 2 | `Header.jsx`, render in App | Title + Day 1 subtitle | Import path/extension; default export |
| 3 | `CourseCard.jsx` with 3 hard-coded cards | 3 cards with title, level, duration | Prop names match exactly |
| 4 | `ProgressCounter.jsx` with `useState(0)` | The number 0 | `import { useState } from "react"` |
| 5 | `handleIncrement` + button | Number goes up on each click | `onClick={fn}` not `onClick={fn()}` |
| 6 | `handleReset` + button | Number returns to 0 | Uses `setCount(0)` |
| 7 | `styles.css` | Blue/white theme; readable at ~320px wide | Imported in main.jsx; use DevTools device mode |
