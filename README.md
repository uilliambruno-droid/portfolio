# Uilliam Santos Portfolio

Modern single-page portfolio showcasing backend development skills, projects, and experience. Built with vanilla JavaScript, Bootstrap 5, and optimized animations.

## Features

- **Responsive Design**: Fully mobile-optimized with smooth breakpoints
- **Smooth Animations**: Scroll-reveal effects (fade, slide) + layered parallax background
- **Dynamic Projects**: GitHub integration fetches live projects via API
- **Contact Form**: Async email submission via FormSubmit.co (no backend required)
- **Dark Theme**: Carefully crafted color palette with gray base and light accent sections
- **Accessibility**: ARIA labels, semantic HTML, prefers-reduced-motion support

## Sections

- **Hero**: Introduction with CTA buttons (WhatsApp, CV)
- **About**: Professional summary
- **Skills**: Technical stack with badges
- **Experience**: Professional history with companies
- **Education**: Academic background with timeline
- **Projects**: Live GitHub repositories
- **Contact**: Email form with real-time feedback
- **Footer**: Links and social connections

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, animations, media queries
- **JavaScript (ES6+)** - IntersectionObserver API, FormSubmit.co integration
- **Bootstrap 5** - Grid and components
- **Bootstrap Icons** - Icon library
- **Google Fonts** - Open Sans, Poppins

## Local Development

```bash
npm install
npm run start
```

Server runs at `http://127.0.0.1:8082`

## Deployment

Optimized for GitHub Pages. No build step required—static files only.

## Author

Uilliam Santos — Backend Developer
- 📧 [Email](mailto:uilliambruno@gmail.com)
- 💬 [WhatsApp](https://wa.me/971585645920)
- 🏪 [Fiverr](https://www.fiverr.com/s/5rj9mo7)
- Education
- Projects (loaded dynamically from GitHub)
- Languages

## Run locally

```bash
npm install
npm run start
```

Open the URL shown in the terminal (usually `http://127.0.0.1:8080` or next available port).

## Dynamic projects

Projects are fetched from:

- `https://api.github.com/users/uilliambruno-droid/repos?per_page=100`

Rendering logic is in `assets/js/portfolio.js`.
