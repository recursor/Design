# INOV8 Orthopedics — Design System

Brand and component foundations for **INOV8 Orthopedics**, an orthopedic
surgery, sports medicine, and physical therapy practice in Houston, TX.
Tagline: *Innovative Orthopedic Care for Exceptional Patient Outcomes.*

This system covers the patient-facing marketing surface
([inov8ortho.com](https://inov8ortho.com)) and its sibling property,
**INOV8 Surgical** (the outpatient ambulatory surgery center at
[inov8surgical.com](https://inov8surgical.com)). Both share the same
wordmark, gradient, and clinical visual language; INOV8 Orthopedics is
the patient-care brand and the primary surface this kit targets.

---

## 1 · Brand context

INOV8 Orthopedics was founded by Dr. Stefan Kreuzer (formerly of the
Memorial Bone and Joint Clinic). The practice positions itself around
two pillars:

- **Innovation** — outpatient total joint replacement enabled by
  surgical robotics and computer-assisted navigation (THINK Surgical
  TSolution One®, OrthoSensor VERASENSE™, Bodycad, Intellijoint HIP®,
  Corin OPS).
- **Individualized, efficient patient experience** — physician-led,
  end-to-end (consult → surgery → physical therapy → recovery), with
  KLARA secure messaging for daily patient communication.

> "For us, the word 'innovate' is not just part of our namesake,
> it is a way of life."

Sister practice: **INOV8 Surgical** — AAAHC-accredited outpatient
total-joint ASC; the only ASC in Texas with AAAHC Advanced Orthopedic
Certification for Total Joint Replacement. Same gradient, same
wordmark family.

### Sources referenced

- **Brand assets provided** — `uploads/INOV8_gradient_cmyk.png`,
  `uploads/INOV8_gradient_cmyk.jpg` (full-color wordmark on transparent
  background; copied into `assets/inov8-logo.png` / `.jpg`)
- **Live site** — https://inov8ortho.com (Sept 2024 snapshot; WordPress)
- **Sister site** — https://inov8surgical.com
- **Search results** referenced for copy and tone: physician bio pages
  on inov8ortho.com, drvansadia.com, texashipsurgery.com,
  stefankreuzermd.com

> No codebase, Figma file, or design-system definition was attached.
> All color values were sampled directly from the wordmark PNG. Type
> and component patterns were inferred from the live marketing site
> and standard healthcare conventions.

---

## 2 · Content fundamentals

### Voice
**Warm-clinical.** Confident about clinical expertise; gentle about
the patient experience. Never salesy, never folksy. Doctor-led but
patient-centered.

### Person
**"We" for the practice. "You / your" for the patient.** Never "I".
The "we" is the team — surgeons, PAs, physical therapists — collectively
caring for a single patient.

> "We want to improve your quality of life and get you back to the
> activities you love."
> "Whether you need nonsurgical treatment or a customized post-surgery
> rehabilitation plan, our experienced physical therapists are up to
> the task."

### Casing
- **Sentence case** for headlines, buttons, navigation, form labels.
- **Title Case** for proper nouns, physician names, brand product
  names (e.g. *Intellijoint HIP®*, *Patient Portal*).
- **ALL CAPS** only inside the wordmark **INOV8**, and as small
  generously-tracked eyebrow labels.

### Brand name
Always written **INOV8** — all caps, the digit 8, no space, no
hyphen. The numeral 8 replaces the "-ate" in "innovate" — call this
out only when explaining the name origin; otherwise just use it.

### Specialties
The practice organizes itself by anatomy: **Hip, Knee, Shoulder,
Elbow, Sports Medicine, Physical Therapy.** Always in this order on
the marketing site. Capitalize each as a proper noun when referencing
the procedure category.

### Calls to action
Short, direct, action-led, sentence case:

- "Request appointment"
- "Book online"
- "Get directions"
- "Call (346) 571-7500"
- "Read our Privacy Policy"
- "Learn more about our team"

Never exclaim. Never use "Click here" or "Submit". Phone numbers
should always include the leading parenthesized area code.

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

**Emoji are never used.** Healthcare register. Unicode symbols
appear only as functional glyphs: ® and ™ on trademarked product
names, the section sign § in legal copy, the degree sign ° in clinical
ranges. Phone numbers spell out parens / dashes; do not use ☎.

---

## 3 · Visual foundations

### Colors
The signature is the **brand gradient** that runs left → right across
the wordmark, **teal → cyan → mid blue → deep navy**. It is the brand's
only "decorative" color treatment.

Sampled directly from the wordmark PNG:

| Token              | Hex       | Where in the logo  |
| ------------------ | --------- | ------------------ |
| `--inov8-grad-teal`| `#01B0AB` | First "I"          |
| `--inov8-grad-cyan`| `#00A9D2` | "N" transition     |
| `--inov8-grad-mid` | `#01668E` | "O"                |
| `--inov8-grad-blue`| `#163A6D` | "V"                |
| `--inov8-grad-navy`| `#20265A` | "8"                |

**Usage rules**

- **Gradient** — reserved for the wordmark, hero accents, a 4px
  section divider rule, and (rarely) a hero background wash at
  ~12% opacity. Never tile, never use behind body text, never
  apply to a CTA fill (loses clarity at small sizes).
- **Cyan (`#00A9D2`)** is the **default brand accent** — primary CTAs,
  active states, links, focus rings.
- **Navy (`#20265A`)** is the **dark surface** — footer, dark hero,
  body emphasis. Headings sit at `--navy-950` (`#14183B`) on light.
- **Teal (`#01B0AB`)** is a **secondary accent** — wellness / physical
  therapy contexts, "active recovery" framing, success-adjacent UI.
- Neutrals are warm grays nudged toward the navy hue so they sit
  cleanly next to the brand palette.

### Type

- **Display / headings:** *Jost* — geometric near-Futura sans, matches
  the airy circular feel of the wordmark's "Orthopedics" lockup.
  Headings default to **Light (300)** — important; the brand feels
  thinner and calmer than typical healthcare. Bump to 400/500 for
  small headings.
- **Body / UI:** *DM Sans* — clean, healthcare-friendly proportions,
  excellent at 14–18 px.
- **Mono:** system mono stack — for code/key references only.

⚠ **Font substitution** — neither typeface was specified. Jost and
DM Sans are Google Fonts substitutes chosen to match the wordmark's
geometry and the live site's body feel. **Please share the actual
licensed fonts if available** and we'll swap them in.

Display weight is **never heavier than semibold (600).** Avoid bold/
black weights — they break the brand's clean clinical register.

Type scale: 12 → 14 → 16 → 18 → 20 → 24 → 30 → 38 → 48 → 60 → 76.

Eyebrow labels are **ALL CAPS, 12px, semibold, tracked +0.14em**, in
cyan or teal — used over section titles, never over body copy.

### Backgrounds and surfaces

- **Primary surface:** white (`#FFFFFF`).
- **Alt section:** `--bg-soft` (`#F7F8FA`) — a quiet near-white wash
  for alternating page sections.
- **Dark surface:** navy (`#20265A`) — footer, dark hero block.
- Backgrounds are flat. **No tiled patterns, no textures, no
  hand-drawn illustrations.** Photography carries the visual interest.
- The gradient only appears as a horizontal **4px rule** above
  headings or as a thin top border on hero cards.

### Imagery

- **Photography over illustration.** Real clinical environments,
  real physicians, real patients in PT settings.
- Color treatment: **cool, slightly desaturated, bright daylight.**
  Whites read clean; skin tones stay natural. No warm orange
  filters, no heavy grain.
- Crop tight on hands, joints, equipment, and physician interactions.
- Anatomy illustrations (hip/knee/shoulder/elbow) use a soft blue-gray
  palette consistent with clinical reference material. Don't tint
  them with the brand gradient.

### Animation and interaction

- **Motion is calm.** 120–400ms eases (`--ease-out` for entrances,
  `--ease-in-out` for state changes). Never bounce, never spring.
- **Hover (links, nav):** color shift to `--blue-500`. No underline
  appears on hover unless it was already there (links inside body
  copy keep their underline).
- **Hover (buttons):** background darkens one step
  (`--cyan-600` → `--cyan-700`); 1px lift via `--shadow-md`.
- **Hover (cards):** lift to `--shadow-md`, 2px translate-Y
  upward, gradient rule may animate from 32 → 64px wide.
- **Press:** scale `0.98`, shadow drops to `--shadow-xs`.
- **Focus:** `var(--shadow-focus)` cyan glow at 32% — `0 0 0 3px`.
  Never remove the focus ring; never rely on color alone.

### Borders, shadows, corners

- **Corners:** `--radius-md` (10px) for cards and buttons,
  `--radius-pill` (999px) for chips/badges and the primary CTA,
  `--radius-xs` (4px) for small inputs/checkboxes.
- **Borders:** 1px, `--border` (`#DDE2EA`). Used only where a hard
  separation is needed; favor shadow + spacing for grouping.
- **Shadows:** four steps (`xs / sm / md / lg`) — all soft, low spread,
  tinted with the navy hue (`rgba(32,38,90,…)`) rather than pure
  black. Clinical, not theatrical.
- **Dividers:** 1px `--divider` (`#EEF0F4`), or the gradient rule for
  brand-forward separators.

### Layout

- Max content width **1200px**. Generous outer padding (64–96px
  desktop, 24px mobile).
- Vertical rhythm of **80–96px** between marketing sections.
- Section pattern: **eyebrow → display heading → gradient rule →
  lead paragraph → content grid.**
- Header is sticky; footer is dark.

### Transparency and blur

- Sparingly. Sticky header gets a `rgba(255,255,255,0.86)` background
  with `backdrop-filter: blur(12px)` after scroll.
- No glass cards mid-page. Healthcare values legibility over flash.

### Card anatomy

Three flavors:

1. **Procedure tile** — image top (4:3, top-radius only), title
   (h3 light), short body, no explicit CTA (whole card is the link).
   Hover: image scale 1.03, gradient rule appears 8px wide under
   title.
2. **Physician card** — square portrait, name with last-name bold
   (`.name-emphasis`), credential line in small caps, blurb,
   phone-or-book CTA. Quiet 1px border, `--radius-md`.
3. **Information card** — flat white, 1px border, `--radius-md`,
   24px padding. Used for office hours, accreditations, mission
   bullets.

---

## 4 · Iconography

### Approach
**Functional, line-based, ≈ 1.5 px stroke, rounded caps.** Icons are
used sparingly and only where they aid scanning — never as decoration.
The live site is icon-light; it leans on photography and structure.

### Specific guidance
- **Use:** navigation chevrons, phone / pin / clock for contact info,
  small status / availability dots, hip-knee-shoulder-elbow specialty
  icons in procedure tiles when a photo isn't available.
- **Don't use:** filled "marketing" iconography (sparkles, lightning
  bolts, glossy gradients), emoji, abstract 3D illustrations.
- **No icon font shipped.** The provided assets do not include an
  icon system.

### Substitution (flagged)
This kit links **[Lucide](https://lucide.dev)** from CDN as the icon
set: matched stroke weight, rounded caps, healthcare-appropriate
inventory (`heart-pulse`, `bone`, `activity`, `calendar`, `phone`,
`map-pin`, `chevron-right`). Swap to an in-house set when one exists.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="calendar"></i>
```

### Specialty / anatomy icons
Hip, Knee, Shoulder, Elbow, Sports Medicine, and Physical Therapy
each get a tile on the home page; the live site uses small anatomy
**photographs**, not icons. Prefer that pattern — photography over
schematic. If an icon is needed (e.g. nav row, sidebar), use Lucide
`activity` / `bone` / `heart-pulse` as a placeholder.

### Logos and accreditation marks
The provided wordmark (`assets/inov8-logo.png`) is the only logo
asset. The live site footer carries third-party accreditation marks
(ISTA, AAHKS, ABOS, AAOS Fellow) — not redistributed here.
Re-acquire these from the original organizations if used.

---

## 5 · File index

```
README.md                  ← this document
SKILL.md                   ← Agent Skill entry point
colors_and_type.css        ← all color + type tokens, single source of truth

assets/
  inov8-logo.png           ← brand wordmark, full color, transparent BG
  inov8-logo.jpg           ← same on white

preview/                   ← Design System tab cards (registered)
  color-*.html             ← gradient, primary, neutrals, semantic
  type-*.html              ← display, body, scale, eyebrow
  spacing-*.html           ← radii, shadows, spacing tokens
  components-*.html        ← buttons, forms, cards, badges, nav
  brand-*.html             ← logo, gradient, voice

ui_kits/
  website/                 ← INOV8 Orthopedics marketing site recreation
    README.md
    index.html             ← interactive click-thru
    Header.jsx
    Hero.jsx
    PhysicianCard.jsx
    ProcedureGrid.jsx
    MissionBlock.jsx
    AppointmentForm.jsx
    Footer.jsx
```

---

## 6 · Open caveats

- **Fonts** — Jost / DM Sans are Google Fonts substitutes. Replace
  with licensed brand fonts when available.
- **Iconography** — Lucide substituted for an unprovided in-house set.
- **Accreditation marks** — not redistributed.
- **INOV8 Surgical** — not recreated as a separate UI kit; shares the
  foundations here. If targeted, build a sibling `ui_kits/surgical/`.
- **Photography** — image placeholders only; no licensed photography
  shipped with the system.

## Migrated from a legacy design system

This system was carried over from the standalone version on 2026-09-17. The part of this README the author wrote predates the move, so any file names in it are the old ones. Where things are now:

- `colors_and_type.css`, `preview/_card.css` (the global stylesheets) → `project/components/bundle.css`, with the token declarations moved to `project/tokens.json` (`project/tokens.css` is generated from them)
- `_ds_bundle.js` → `project/components/bundle.js`
- showcase pages, each kept whole as one component’s preview (a page of examples, not an export of the bundle): `preview/components-badges.html` → `project/components/ComponentsBadges/preview.html`; `preview/components-buttons.html` → `project/components/ComponentsButtons/preview.html`; `preview/components-cta-block.html` → `project/components/ComponentsCtaBlock/preview.html`; `preview/components-forms.html` → `project/components/ComponentsForms/preview.html`; `preview/components-icons.html` → `project/components/ComponentsIcons/preview.html`; `preview/components-info-card.html` → `project/components/ComponentsInfoCard/preview.html`; `preview/components-nav.html` → `project/components/ComponentsNav/preview.html`; `preview/components-physician-card.html` → `project/components/ComponentsPhysicianCard/preview.html`; … and 2 more
- the migration report, which lists what did not come across: `project/assets/notes/MIGRATION-REPORT.md`
