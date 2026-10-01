# Natural Pigment Lab — Colour Language Edition v3

A GitHub-ready Vite web app for studying pigment as **material, history, chemistry, making process and colour language**.

## What changed in v3

- **Top category navigation** replaces the mobile slide-out sidebar. On phones the full menu stays at the top as horizontally scrollable buttons.
- **Pigment Library is bilingual at the same time**: English chemical/material terminology remains visible alongside Myanmar explanations, regardless of the language toggle.
- Every pigment now has a **material profile + colour properties + history + making/preparation profile**.
- **Recipe Lab is linked to the Library**. Every Library pigment has a Lab preparation record. Source-supported studio recipes remain step-by-step; industrial/specialist pigments are documented as preparation routes rather than casual home-synthesis recipes.
- Added properties such as opacity/transparency, staining, lightfastness, granulation/texture, tinting strength, oil absorption and oil-drying tendency where meaningful. Drying is explicitly treated as **binder-dependent**, not as one fixed number for every pigment.
- Expanded **pigment history** with chronological pigment developments and material milestones.
- Expanded **Chemistry** with binder/medium science, particle morphology, light absorption/scattering, laking, dispersion and Lab links.
- Expanded **Color Theory** with Color Terms & Properties, Color/Light/Shadow, Color Relativity, Color Psychology, Color & Mood, Color & Composition, Infusing Color, Tint/Tone/Shade and a clear RGB/CMYK vs physical pigment distinction.
- Moved source explanations into the dedicated **Sources** category so study cards remain clean.

## Sources

1. Lucy Mayes — *The Natural Pigment Handbook* (attached source)
2. *Color: A Practical Guide to Color and Its Uses in Art* (attached source)
3. Colour Pigment Manufacturers’ Association / Colour Index — open reference: https://www.pigments.org/
4. Natural Pigments / Rublev Colours — open historical and material reference: https://www.naturalpigments.com/pigments/

The app summarizes and structures source-supported information for study. It is not intended as a page-by-page reproduction of any book.

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

## Notes

- Language toggle: English / Myanmar.
- Pigment Library keeps English chemical names and terms visible even when Myanmar is selected, because chemical terminology is clearer when both forms are shown.
- Browser journal data is stored locally with `localStorage`.
- The source material distinguishes pigment properties from paint-medium behaviour. In particular, drying time is treated as dependent on binder, medium, formulation and environmental conditions.
- Hazardous or industrial pigment manufacture is presented as a **preparation profile**, not as a casual home chemistry recipe.
