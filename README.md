# Portfolio — projects & URLs

Self-contained static site listing the featured sites.

## Local preview (no Flask)

```bash
cd portfolio-architecte
python3 -m http.server 8080
```

Open: http://127.0.0.1:8080/

## Local preview with Flask

```bash
cd portfolio-architecte
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
export FLASK_APP=app.py
flask run
```

Open: http://127.0.0.1:5000/

## Deployment

Deploy this folder to Netlify, Vercel, or GitHub Pages (static site: `index.html` at the root).

**GitHub Pages:** enable Pages in the repo settings (branch `main`, folder `/ (root)`). Your site will be at `https://bumblebeezzz.github.io/Portefolio/` (after the first successful deploy).

## Theme

Use the **Dark**, **Light**, or **System** control in the header. Choice is saved in `localStorage` (`portfolio-theme`).

## Email placeholder

Replace `mailto:contact@example.com` in `index.html` with your professional address before publishing (or keep private and use LinkedIn only).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Portfolio (profile, experience, projects) |
| `guide.html` | Work & clients guide (realistic expectations) |
| `GUIDE_EMPLOYMENT.md` | Same content in Markdown |
| `app.py` | Optional Flask server |
| `static/style.css` | Styles (themes, layout) |
| `static/theme.js` | Theme toggle & persistence |
