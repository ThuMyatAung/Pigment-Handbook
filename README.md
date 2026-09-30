# Natural Pigment Lab — Colour Language Edition

A static Vite web app for studying pigments as **material + history + chemistry + colour language + practical painting use**.

## What's new in this edition

- Keeps the original Natural Pigment Lab pigment profiles and Recipe Lab.
- Adds an expanded **Artist Pigment Quality Chart** from the attached *Color: A Practical Guide to Color and Its Uses in Art* source.
- Adds **Pigment History** layers connecting prehistoric earth colour, Egyptian Blue, mineral colour trade, Prussian Blue and modern synthetic pigment development.
- Adds a dedicated **Chemistry** reference covering pigment vs dye, crystal/particle structure, light scattering, laking, organic/inorganic classes, binders, lightfastness and dispersion.
- Adds **Where to Use** for Watercolor, Acrylic, Oil, Landscape/Atmosphere, Composition and Mixing decisions.
- Adds **Color Theory** for hue, value, chroma, temperature and major colour schemes.
- Adds an **English / မြန်မာ** language switch for the interface and key study explanations.
- Fixes mobile navigation with a persistent menu toggle and Home shortcut.
- Replaces the single-book branding with a **Source Library** approach.
- Keeps the local browser Pigment Journal.

## Source network

1. Lucy Mayes — *The Natural Pigment Handbook* (attached source): pigment making, material processes, recipes, historical practice and pigment behaviour.
2. *Color: A Practical Guide to Color and Its Uses in Art* (attached source): colour theory, pigment chart, mixing, psychology, composition and medium-specific practice.
3. Colour Pigment Manufacturers' Association (CPMA) — https://www.pigments.org/ : open reference for pigment definitions, organic/inorganic classification, pigment history, lakes, crystal structure, dispersion and pigment chemistry.

The app structures and summarizes source material for study; it is not intended as a page-by-page reproduction of the books.

## Run locally

```bash
npm install
npm run dev
```

Or build for deployment:

```bash
npm run build
```

The project is suitable for GitHub Pages / other static hosting after the normal Vite build process.

## GitHub upload

Upload the project files/folders to the repository root. Do not upload `node_modules`.

## Notes

- The Pigment Journal uses browser `localStorage`; entries stay in the current browser.
- Pigment quality-chart entries intentionally retain the source wording for fields such as transparency, staining ability and ASTM lightfastness.
- Safety information should be treated as educational guidance; chemical or heated processes require appropriate professional safety practice.
