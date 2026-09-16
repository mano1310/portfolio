# MANOJ M. — Vice City Inspired Portfolio

A production-ready, dependency-free static portfolio inspired by the supplied reference screenshot. The page is built as one long interactive experience containing eight clearly separated sections: Home, About, Skills, Projects, Experience, Achievements, Education and Contact.

## Run locally

### Option 1 — Python
```bash
python -m http.server 5500
```
Open http://localhost:5500

### Option 2 — VS Code
Install Live Server and right-click `index.html` → **Open with Live Server**.

### Option 3 — Direct
Double-click `index.html`. Most functionality works directly from the file, but a local server is recommended.

## Editable architecture
- `index.html` — all visible copy, cards, project data markup, contact links and section structure.
- `styles.css` — visual system, responsive layout, neon HUD, animations, glass cards, typography and section positioning.
- `app.js` — scroll reveal, active navigation, progress HUD, project switcher, modals, clipboard buttons, clock and interactions.
- `assets/backgrounds/*.svg` — 3840×2160 vector backgrounds for each section. They are editable SVGs and stay sharp at 4K desktop resolution.
- `assets/characters/*.png` — visual character accents extracted from the supplied reference image. Replace these files with higher-resolution portraits if desired.

## Contact links included
- Email: manojpersonal1310@gmail.com
- GitHub: https://github.com/manoj1315/
- GitHub: https://github.com/mano1310/
- LinkedIn: https://www.linkedin.com/in/manoj-m-data-scientist/
- Location: Bengaluru, India

## Customizing
Search for any text in `index.html` and edit it directly. Project cards are selectable and their content is controlled by `projectData` in `app.js`. No framework or build step is required.

## Notes
The visual direction intentionally recreates the reference's neon tropical-city / retro-game HUD language while keeping text, cards, buttons, project information and HUD controls as real HTML/CSS elements rather than baking UI text into a single screenshot.
