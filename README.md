# Dual Portfolio — UX/UI Design + Front-End Development

A complete, customizable portfolio website made with React, Vite, React Router, Lucide icons, and regular CSS. **No database or backend required.**

## Quick start (VS Code)

1. Unzip the project.
2. Open the extracted `dual-portfolio-starter` folder in Visual Studio Code (File → Open Folder).
3. Open VS Code's terminal (Terminal → New Terminal).
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the `localhost` URL printed in the terminal (usually http://localhost:5173).

Node.js 18+ is needed for this Vite version. If you have a newer LTS Node.js release, that's fine.

## Pages

| URL | Page |
| --- | --- |
| `/` | Main homepage with two portfolio paths |
| `/design` | UX/UI portfolio and functional category filters |
| `/design/black-history-linked` | Black History Linked design case study |
| `/development` | Development portfolio and functional category filters |
| `/development/black-history-linked` | Black History Linked development breakdown |
| `/about` | Biography, skills, and education |
| `/contact` | Working email link, copy-email button, optional social links |

Other cards have corresponding detail pages too. All navigation uses React Router.

## Customize in this order

**1. Your personal details:** edit `src/data/profile.js`.
- `name`: replace `Your Name` with your name.
- `initials`: your monogram.
- `email`: replace `your.email@example.com` with your real address.
- `links.github`, `links.linkedin`: add full `https://...` profile URLs. Blank values are hidden.
- `links.resume`: to use a resume PDF, put `resume.pdf` in `public/` and set it to `'/resume.pdf'`.
- Update the about/bio text to fit your experience.

**2. Your real projects:** edit `src/data/projects.js`.
- `designProjects` populate the UX/UI gallery and individual design case studies.
- `developmentProjects` populate the development gallery and individual technical project pages.
- The Black History Linked entries reflect an ongoing project; the other entries are clearly marked starter/example placeholders.
- Update title, role, summary, stack, process, outcomes, screenshots, and links to match **work you've actually done**.
- Duplicate or remove the sample projects as needed. Keep each `slug` unique within its portfolio.
- Development project `github` and `live` links appear only when you provide URLs.

**3. Add screenshots:** put image files in `public/images/`, for example `public/images/black-history-linked.png`.
Set the corresponding project's `image` value to `'/images/black-history-linked.png'`.
- Empty `image` strings render the built-in CSS placeholder visuals.
- Use screenshots of your actual work when you have them.
- Export Figma designs as PNG/JPG, then place them in `public/images/`.

**4. Tweak styling:** all styling is in `src/styles/global.css`.
- Homepage: `.home-*`, `.path-*`, `.feature-*`
- UX/UI: `.design-*`
- Development: `.dev-*`
- Case study pages: `.case-*`
- Mobile layouts: media queries near the bottom.

**5. Update browser title/description:** edit `index.html`.

## Build and deploy

```bash
npm run build
npm run preview
```

The optimized site is placed in `dist/`. Deploy to Netlify, Vercel, or any static hosting service. **Important for React Router:** configure your host to rewrite unmatched routes to `index.html`, otherwise refreshing a nested URL like `/design/black-history-linked` may return 404.

For Netlify a `public/_redirects` rule is already included, so `npm run build` will copy it to `dist/`.
For Vercel the included `vercel.json` handles that rewrite.

## What works today
- Responsive routes and case study pages
- Mobile menu (including Escape to close)
- Separate, distinctive UX/UI vs development themes
- Functional project filters
- Email via `mailto:` (opens the visitor's mail app, not an automated send)
- Copy email button; optional external links
- Keyboard focus states, skip link, reduced-motion support

## What needs your input
- Actual project screenshots and written case studies
- Personal email and professional social URLs
- Published GitHub/live demo links
- Real user research or testing evidence when available

The built-in project graphics are **abstract placeholder illustrations**, not screenshots of the live Black History Linked interface or completed apps.

## Notes
- React Router `BrowserRouter` is used; refreshes need a host rewrite as above.
- Fonts load from Google Fonts; the site falls back to system fonts offline.
- This project is a standalone portfolio. It doesn't modify your Black History Linked repository or database.
