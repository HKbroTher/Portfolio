# Portfolio

Trilingual (中文 / English / 日本語) portfolio site, plain HTML + CSS + JS with no build step.

- `index.html` – all content; each piece of copy appears three times, as `lang="zh-CN"`, `lang="en"` and `lang="ja"` spans
- `style.css` – layout and theme; the languages not selected are hidden via `html[data-lang]`
- `main.js` – language toggle (remembered in localStorage) and scroll-in animation
- `assets/img/` – web-optimised screenshots used by the page
- `assets/screenshots/` – original full-resolution screenshots

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish with GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → pick the branch and `/ (root)` → Save.
