---
name: inov8-orthopedics-design
description: Use this skill to generate well-branded interfaces and assets for INOV8 Orthopedics (Houston, TX), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **`README.md`** — full brand context, content fundamentals, visual foundations, iconography rules, and an index of every file.
- **`colors_and_type.css`** — single source of truth for color + type tokens. Always link this from your output (`<link rel="stylesheet" href="…/colors_and_type.css">`), and prefer the CSS variables it defines over raw hex values.
- **`assets/inov8-logo.png`** — brand wordmark, full-color, transparent background. Reverse to white with `filter: brightness(0) invert(1)` on dark surfaces; never recolor the gradient.
- **`preview/`** — per-token preview cards. Read these to understand how a token is used in practice; copy patterns out of them.
- **`ui_kits/website/`** — pixel-considered React/JSX recreation of inov8ortho.com. Lift components or studied patterns; the index.html is the canonical home-page composition.

## Hard rules

- Brand name is always **INOV8** — all caps, the digit 8, no space.
- Sentence case for headlines and CTAs. No exclamation marks. No emoji. No sales-y urgency.
- "We" for the practice, "you / your" for the patient — never "I".
- Specialties always in this order: **Hip, Knee, Shoulder, Elbow, Sports Medicine, Physical Therapy**.
- The brand gradient is for the wordmark, hero accents, and the 4 px section-divider rule — **never** as a CTA fill, never as a body-text background.
- Primary CTA color is `--cyan-500` (#00A9D2). Dark surfaces use `--navy-900` (#20265A).
- Display headings default to **Jost Light (300)** — airy, geometric. Never use bold or black weights for display.
- Iconography is **Lucide** via CDN, 1.5 px stroke, rounded caps. No emoji-as-icon, no decorative marketing iconography.
- Shadows are soft and navy-tinted (`rgba(32,38,90,…)`), never pure black.

## Open substitutions (flag if relevant)

- **Fonts** — Jost and DM Sans are Google Fonts substitutes. If the licensed brand fonts exist, swap them in via `@font-face` and update `--font-display` / `--font-body`.
- **Icons** — Lucide via CDN substitutes for an unspecified in-house icon set.
- **Photography** — image slots are gradient placeholders. Drop in real INOV8 photography.
