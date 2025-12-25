# CLAUDE.md

Project-specific instructions for Claude Code when working on the Lion Rock Institute website.

## Project Overview

- **Site:** https://lionrockinstitute.com
- **Repo:** https://github.com/hakangit/lion-rock-institute-site
- **Stack:** React 19 + Vite 7 + Vanilla CSS
- **Hosting:** Hostinger (auto-deploys from `main` branch)

## Key Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | All page sections (single component) |
| `src/App.css` | All styling with CSS variables |
| `index.html` | Meta tags, Open Graph, favicon |
| `public/images/` | Logo (SVG), hero fallback image |

## Architecture

- **Single-page app** with smooth scroll navigation
- **No router** - anchor-based navigation (#home, #about, #team, #contact)
- **YouTube video background** in hero section
- **CSS variables** for theming in `:root`

## Common Tasks

### Update team member
Edit `src/App.jsx` → find `team-grid` → add/edit `team-card` div

### Change contact info
Edit `src/App.jsx` → find `contact-grid` section

### Change hero video
Edit `src/App.jsx` → find `hero-video-bg` iframe → update YouTube video ID and `start=` parameter

### Update colors
Edit `src/App.css` → modify `:root` CSS variables at top of file

### Update meta tags / SEO
Edit `index.html` → modify `<head>` section

## Deployment

Push to `main` → Hostinger auto-builds and deploys

```bash
git add .
git commit -m "Description"
git push
```

## Current Team (Dec 2025)

- Andrew Work - Co-Founder
- Bill Stacey - Director
- Nicolas Koehl - Director
- Anson Leung - Director
- Bon Chow - Director

## Contact Info

- **Address:** 11/F, Asiarich Court, 5 Staunton Street, Central, Hong Kong
- **Phone:** +852 3582 8673 / 8674
- **Email:** Communications@lionrockinstitute.org

## Design Notes

- **Primary color:** #1a365d (dark blue)
- **Accent color:** #3182ce (blue)
- **Style:** Minimalist, clean, professional
- **Hero video:** Hong Kong timelapse, starts at 0:16

## DO NOT

- Remove the video credit in the footer
- Change the email obfuscation pattern (spam prevention)
- Push directly to production without testing locally first
