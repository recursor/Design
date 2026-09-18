Brand and component foundations for **INOV8 Orthopedics**, an orthopedic
surgery, sports medicine, and physical therapy practice in Houston, TX.
Tagline: *Innovative Orthopedic Care for Exceptional Patient Outcomes.*

Build for the patient-facing marketing surface
([inov8ortho.com](https://inov8ortho.com)) and its sibling property,
**INOV8 Surgical**, the outpatient ambulatory surgery center at
[inov8surgical.com](https://inov8surgical.com). Both share the wordmark,
the gradient and the clinical visual language; INOV8 Orthopedics is the
patient-care brand and the primary surface this system targets.

## Brand context

INOV8 Orthopedics was founded by Dr. Stefan Kreuzer, formerly of the
Memorial Bone and Joint Clinic. Two pillars carry every piece of copy:

- **Innovation** — outpatient total joint replacement enabled by surgical
  robotics and computer-assisted navigation (THINK Surgical TSolution
  One®, OrthoSensor VERASENSE™, Bodycad, Intellijoint HIP®, Corin OPS).
- **Individualized, efficient patient experience** — physician-led and
  end-to-end (consult → surgery → physical therapy → recovery), with
  KLARA secure messaging for daily patient communication.

> "For us, the word 'innovate' is not just part of our namesake,
> it is a way of life."

INOV8 Surgical is AAAHC-accredited and the only ASC in Texas with AAAHC
Advanced Orthopedic Certification for Total Joint Replacement. Use the
same gradient and wordmark family for it.

## Content fundamentals

### Voice

Write **warm-clinical**: confident about clinical expertise, gentle about
the patient experience. Never salesy, never folksy. Doctor-led but
patient-centered.

### Person

Use **"we" for the practice and "you / your" for the patient**. Never
"I". The "we" is the team — surgeons, PAs, physical therapists —
collectively caring for a single patient.

> "We want to improve your quality of life and get you back to the
> activities you love."
> "Whether you need nonsurgical treatment or a customized post-surgery
> rehabilitation plan, our experienced physical therapists are up to
> the task."

### Casing

- **Sentence case** for headlines, buttons, navigation, form labels.
- **Title Case** for proper nouns, physician names, brand product names
  (*Intellijoint HIP®*, *Patient Portal*).
- **ALL CAPS** only inside the wordmark **INOV8**, and as small
  generously-tracked eyebrow labels set in `eyebrow`.

### The brand name

Always write **INOV8** — all caps, the digit 8, no space, no hyphen. The
numeral 8 replaces the "-ate" in "innovate"; say so only when explaining
the name's origin, otherwise just use it.

### Specialties

The practice organizes itself by anatomy. Keep this order everywhere:
**Hip, Knee, Shoulder, Elbow, Sports Medicine, Physical Therapy.**
Capitalize each as a proper noun when naming the procedure category.

### Calls to action

Short, direct, action-led, sentence case:

- "Request appointment"
- "Book online"
- "Get directions"
- "Call (346) 571-7500"
- "Read our Privacy Policy"
- "Learn more about our team"

Never exclaim. Never write "Click here" or "Submit". Always give a phone
number its leading parenthesized area code.

### Tone do's and don'ts

- ✓ "Our highly skilled surgeons specialize in outpatient total joint
  replacement."
- ✓ "Every part of your experience with INOV8 Orthopedics will be
  efficient and patient-focused."
- ✗ "We're the BEST orthopedic surgeons in Houston!!" (sales-y, caps)
- ✗ "Get fixed up and back on the field!" (folksy, presumptuous)
- ✗ "Schedule your consultation today and don't miss out." (urgency
  marketing — wrong register for healthcare)

### Emoji and unicode

**Never use emoji** — this is a healthcare register. Unicode symbols
appear only as functional glyphs: ® and ™ on trademarked product names,
§ in legal copy, ° in clinical ranges. Spell phone numbers with parens
and dashes; do not use ☎.

## Visual foundations

### Color

The signature is the **brand gradient** running left → right across the
wordmark, teal → cyan → mid blue → deep navy. It is the brand's only
decorative color treatment. Its five stops were sampled from the wordmark
and are held as `inov8-grad-teal`, `inov8-grad-cyan`, `inov8-grad-mid`,
`inov8-grad-blue` and `inov8-grad-navy`; the composed gradient is
`inov8-gradient`.

Use `inov8-gradient` for the wordmark, hero accents, the 4px
`.gradient-rule` section divider, and rarely a hero background wash at
about 12% opacity. Never tile it, never run it behind body text, and
never use it as a CTA fill — it loses clarity at small sizes.

- Reach for `brand` (cyan) for primary CTAs, active states, links and the
  focus ring; `brand-strong` for hover and for brand type that must read
  as text; `brand-deep` for the deepest brand step.
- Reach for `accent` (teal) in wellness and physical-therapy contexts and
  for "active recovery" framing.
- Set dark surfaces with `bg-dark`, or `bg-dark-soft` for the softer
  panel beside it; put `fg-on-dark` on both.
- Set page grounds with `bg`, alternate sections with `bg-soft`, and
  inset panels with `bg-muted`.
- Set headings and body copy in `fg`, emphasis in `fg-strong`, secondary
  copy in `fg-muted`, and the quietest tier in `fg-subtle` — the last one
  only on `bg` or `bg-soft`, never on a lighter ground.
- Neutrals are warm grays nudged toward the navy hue so they sit cleanly
  beside the brand palette.

Status colors are `success-500`, `warning-500`, `danger-500` and
`info-500`, each on its matching `-50` ground. Always pair a status color
with a word or an icon; color alone never carries the state.

**Contrast, as the brand actually stands.** These are the source's own
pairs, kept exact rather than re-tinted — respect them when you compose:

- `fg` on `bg` 17.2:1, `fg-strong` 14.1:1, `fg-muted` 7.7:1 — all safe.
- `fg-subtle` on `bg` 4.8:1 and on `bg-soft` 4.5:1 — at the floor, so do
  not place it on any lighter ground.
- `fg-on-brand` (white) on `brand` is **2.8:1** — under the 4.5:1 floor.
  Set such labels at 19px+ semibold, or fill with `cyan-700` (6.0:1).
- `link` on `bg` is **3.8:1** — under the floor. Keep body links
  underlined and step to `cyan-700` at small sizes.
- `accent` and `teal-500` carry white at only 2.7:1 — treat teal as a
  fill, and set teal type in `teal-700` (5.6:1).
- `warning-500` on `bg` is **2.9:1** — give it a `fg` label beside it.
- On `bg-dark`, step cyan and teal up to `cyan-300` (6.1:1) and
  `teal-300` (6.6:1).

### Type

- **Display and headings: Jost** — a geometric near-Futura sans that
  matches the airy circular feel of the wordmark's "Orthopedics" lockup.
  Headings default to **Light** (`fw-light`); this is what makes the
  brand read thinner and calmer than typical healthcare. Bump to
  `fw-regular` or `fw-medium` for small headings.
- **Body and UI: DM Sans** — clean healthcare proportions, excellent at
  14–18px.
- **Mono:** the system mono stack, for code and key references only.

Both faces load from Google Fonts through `components/bundle.css`; the
stacks are `type.families` `display`, `body` and `mono`. No font binaries
ship with this system.

Never set display type heavier than `fw-semibold`. Bold and black weights
break the brand's clean clinical register.

The scale runs 12 → 14 → 16 → 18 → 20 → 24 → 30 → 38 → 48 → 60 → 76
(`fs-xs` … `fs-6xl`). Ready-made styles: `h1`–`h6`, `body`, `p`, `lead`,
`small`, `caption`, `eyebrow`, `label`, `display`, `code`, `pre`, `kbd`.
Set headings on `lh-tight` and `ls-display`; set running text on
`lh-normal` and `ls-body`.

Set eyebrow labels in `eyebrow` — all caps, `fs-xs`, `fw-semibold`,
tracked `ls-eyebrow`, in cyan or teal. Put them over section titles,
never over body copy.

### Backgrounds and surfaces

Keep backgrounds flat: **no tiled patterns, no textures, no hand-drawn
illustrations.** Photography carries the visual interest. The gradient
appears only as the horizontal 4px rule above headings or as a thin top
border on hero cards.

### Imagery

- **Photography over illustration.** Real clinical environments, real
  physicians, real patients in PT settings.
- Treat color as **cool, slightly desaturated, bright daylight**. Whites
  read clean, skin tones stay natural. No warm orange filters, no heavy
  grain.
- Crop tight on hands, joints, equipment and physician interactions.
- Give anatomy illustrations (hip, knee, shoulder, elbow) a soft
  blue-gray palette consistent with clinical reference material. Do not
  tint them with the brand gradient.

### Motion and interaction

Keep motion calm. Use `dur-fast` through `dur-slow` (120–400ms) with
`ease-out` for entrances and `ease-in-out` for state changes. Never
bounce, never spring.

- **Links and nav on hover:** shift to `link-hover`. No underline appears
  on hover unless it was already there — links inside body copy keep
  their underline.
- **Buttons on hover:** darken one step (`cyan-600` → `cyan-700`) and
  lift with `shadow-md`.
- **Cards on hover:** lift to `shadow-md`, translate 2px up, and let the
  gradient rule animate from 32 → 64px wide.
- **Press:** scale `0.98` and drop to `shadow-xs`.
- **Focus:** `shadow-focus`, a 3px cyan glow at 32%. Never remove the
  focus ring, and never rely on color alone.

### Borders, shadows, corners

- **Corners:** `radius-md` for cards and buttons, `radius-pill` for chips,
  badges and the primary CTA, `radius-xs` for small inputs and
  checkboxes.
- **Borders:** 1px `border`. Use one only where a hard separation is
  needed; otherwise group with shadow and spacing. Step to
  `border-strong` where `border` reads too faint.
- **Shadows:** `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg` — all
  soft and low-spread, tinted with the navy hue rather than pure black.
  Clinical, not theatrical.
- **Dividers:** 1px `divider`, or the gradient rule for brand-forward
  separators.

### Layout

- Cap content at **1200px**. Pad generously: `space-16`–`space-24` on
  desktop, `space-6` on mobile.
- Keep a vertical rhythm of `space-20`–`space-24` between marketing
  sections.
- Follow the section pattern: **eyebrow → display heading → gradient rule
  → lead paragraph → content grid.**
- Make the header sticky and the footer dark.

### Transparency and blur

Use them sparingly. After scroll, give the sticky header an
`rgba(255,255,255,0.86)` background with `backdrop-filter: blur(12px)`.
No glass cards mid-page — healthcare values legibility over flash.

### Card anatomy

Three flavors:

1. **Procedure tile** — image on top (4:3, top radius only), title in
   `h3` at `fw-light`, short body, no explicit CTA because the whole card
   is the link. On hover the image scales 1.03 and an 8px gradient rule
   appears under the title.
2. **Physician card** — square portrait, name with the last name
   emphasised (`.name-emphasis strong`), credential line in `small`,
   blurb, and a phone-or-book CTA. Quiet 1px `border`, `radius-md`.
3. **Information card** — flat `bg`, 1px `border`, `radius-md`,
   `space-6` padding. Use it for office hours, accreditations and mission
   bullets.

## Iconography

Icons are **functional, line-based, about 1.5px stroke, rounded caps**.
Use them sparingly and only where they aid scanning, never as decoration
— the live site is icon-light and leans on photography and structure.

- **Use them for:** navigation chevrons, phone / pin / clock in contact
  info, small status or availability dots, and specialty icons in
  procedure tiles when no photo is available.
- **Do not use:** filled "marketing" iconography (sparkles, lightning
  bolts, glossy gradients), emoji, or abstract 3D illustrations.
- **No icon font ships with this system.**

This system substitutes **[Lucide](https://lucide.dev)** from CDN:
matched stroke weight, rounded caps, and a healthcare-appropriate
inventory (`heart-pulse`, `bone`, `activity`, `calendar`, `phone`,
`map-pin`, `chevron-right`). Swap to an in-house set when one exists.

```html
<script src="https://cdn.jsdelivr.net/npm/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="calendar"></i>
```

Hip, Knee, Shoulder, Elbow, Sports Medicine and Physical Therapy each get
a tile on the home page, and the live site uses small anatomy
**photographs** there, not icons. Prefer that pattern. Where an icon is
genuinely needed (a nav row, a sidebar), use Lucide `activity`, `bone` or
`heart-pulse` as a placeholder.

## Assets

The wordmark is the only logo asset: `assets/Logos/inov8-logo.png`,
full-color on a transparent background, with the same artwork on white at
`assets/Uploads/INOV8_gradient_cmyk.jpg`. Reverse it to white on dark
surfaces with `filter: brightness(0) invert(1)`; never recolor the
gradient, and never redraw or reconstruct the mark.

The accreditation marks the live site's footer carries (ISTA, AAHKS,
ABOS, AAOS Fellow) are **not** redistributed here. Re-acquire them from
the issuing organizations before using them.

## What this system ships

Tokens are the contract: read `tokens.json` (or the generated
`tokens.css`) and build with the custom properties. The `components/`
entries are **showcase pages carried over from the standalone version,
not React exports** — `components/bundle.js` defines no components on the
bundle namespace, and `components/index.d.ts` records that. Copy the
markup and classes out of a showcase page's `preview.html`; do not expect
to import a component from the bundle.

`components/bundle.css` carries the shared classes the pages use:
`.eyebrow`, `.lead`, `.caption`, `.label`, `.small`, `.display`,
`.gradient-rule`, `.gradient-text`, `.name-emphasis`, `.card` (with
`.flush`, `.dark`, `.soft`), `.row`, `.col`, `.grid` and `.swatch`.

`ui_kits/website/` holds the marketing-site recreation: JSX sources for
the header, hero, physicians, procedures, mission, appointment form and
footer, plus a standalone HTML composition. Consumers supply their own
routing, data and photography — nothing here is wired to a backend.

## Open caveats

- **Fonts** — Jost and DM Sans are Google Fonts substitutes chosen to
  match the wordmark's geometry and the live site's body feel; neither
  typeface was specified by the brand. Share the licensed brand fonts and
  they can be swapped in.
- **Color provenance** — every color value was sampled directly from the
  wordmark artwork. No codebase, Figma file or design-system definition
  was ever supplied; type and component patterns were inferred from the
  live marketing site and standard healthcare conventions.
- **Iconography** — Lucide substitutes for an unprovided in-house set.
- **Accreditation marks** — not redistributed.
- **Photography** — image slots are placeholders; no licensed photography
  ships with this system.
- **INOV8 Surgical** — not recreated as a separate UI kit. It shares the
  foundations here; build a sibling kit if it becomes a priority.

## Migrated from a legacy design system

This system was carried over from the standalone version on 2026-09-17. The part of this README the author wrote predates the move, so any file names in it are the old ones. Where things are now:

- `colors_and_type.css`, `preview/_card.css` (the global stylesheets) → `project/components/bundle.css`, with the token declarations moved to `project/tokens.json` (`project/tokens.css` is generated from them)
- `_ds_bundle.js` → `project/components/bundle.js`
- showcase pages, each kept whole as one component’s preview (a page of examples, not an export of the bundle): `preview/components-badges.html` → `project/components/ComponentsBadges/preview.html`; `preview/components-buttons.html` → `project/components/ComponentsButtons/preview.html`; `preview/components-cta-block.html` → `project/components/ComponentsCtaBlock/preview.html`; `preview/components-forms.html` → `project/components/ComponentsForms/preview.html`; `preview/components-icons.html` → `project/components/ComponentsIcons/preview.html`; `preview/components-info-card.html` → `project/components/ComponentsInfoCard/preview.html`; `preview/components-nav.html` → `project/components/ComponentsNav/preview.html`; `preview/components-physician-card.html` → `project/components/ComponentsPhysicianCard/preview.html`; … and 2 more
- the migration report, which lists what did not come across: `project/assets/notes/MIGRATION-REPORT.md`
