# Lion Rock Institute Website

Official website for The Lion Rock Institute - Hong Kong's independent free-market think tank.

**Live site:** https://lionrockinstitute.com

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool & dev server
- **Vanilla CSS** - Custom styling with CSS variables
- **Hostinger** - Hosting with auto-deploy from GitHub

## Project Structure

```
lion-rock-institute-site/
├── src/
│   ├── App.jsx          # Main component (all sections)
│   ├── App.css          # All styling
│   ├── index.css        # Base styles
│   └── main.jsx         # Entry point
├── public/
│   └── images/
│       ├── logo.svg     # Site logo
│       └── hero.jpg     # Fallback hero image
├── index.html           # HTML template + meta tags
├── package.json
└── vite.config.js
```

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site auto-deploys to Hostinger when you push to `main`.

### How It Works

1. **GitHub repo:** https://github.com/hakangit/lion-rock-institute-site
2. **Hostinger** is connected to this repo via GitHub integration
3. When you push to `main`, Hostinger:
   - Pulls the latest code
   - Runs `npm install` to install dependencies
   - Runs `npm run build` to create production files in `/dist`
   - Deploys the `/dist` folder to the live site

### Hostinger Setup (already configured)

**Location:** Hostinger hPanel → Websites → lionrockinstitute.com → Advanced → Git

**Current settings:**
- **Repository:** `hakangit/lion-rock-institute-site`
- **Branch:** `main`
- **Auto-deploy:** Enabled (deploys on every push)
- **Install command:** `npm install`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Manual Deploy (if needed)

If auto-deploy fails, you can trigger manually:
1. Log into Hostinger hPanel
2. Go to Websites → lionrockinstitute.com → Advanced → Git
3. Click "Deploy" or "Pull and Deploy"

### Changing GitHub Permissions

If Hostinger can't access the repo:
1. Go to GitHub.com → Settings → Applications
2. Find Hostinger → Configure
3. Add the repository under "Repository access"

## Site Sections

| Section | Description |
|---------|-------------|
| **Hero** | YouTube video background, title, tagline |
| **About** | Mission, history, approach + policy areas |
| **Team** | Board member profiles |
| **Contact** | Address, phone, email |
| **Footer** | Company info, charity status, video credit |

## Updating Content

### Team Members
Edit `src/App.jsx`, find the `team-grid` section. Each member has:
```jsx
<div className="team-card">
  <div className="team-avatar">XX</div>  {/* Initials */}
  <h3>Name</h3>
  <p className="team-role">Role</p>
  <p className="team-bio">Bio text...</p>
</div>
```

### Contact Info
Edit `src/App.jsx`, find the `contact-grid` section.

### Hero Video
Edit `src/App.jsx`, find the YouTube iframe. Change the video ID in the URL:
```
https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&start=16
```

### Colors
Edit `src/App.css`, modify the CSS variables at the top:
```css
:root {
  --primary-color: #1a365d;
  --accent-color: #3182ce;
  /* etc */
}
```

## Current Team (Dec 2025)

- Andrew Work - Co-Founder
- Bill Stacey - Director
- Nicolas Koehl - Director
- Anson Leung - Director
- Bon Chow - Director

## Contact

- **Address:** 11/F, Asiarich Court, 5 Staunton Street, Central, Hong Kong
- **Phone:** +852 3582 8673 / 8674
- **Email:** Communications@lionrockinstitute.org
