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

The site auto-deploys to Hostinger when you push to `main`:

1. Make changes locally
2. Commit and push to GitHub
3. Hostinger automatically builds and deploys

**Build settings on Hostinger:**
- Install command: `npm install`
- Build command: `npm run build`
- Publish directory: `dist`

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
