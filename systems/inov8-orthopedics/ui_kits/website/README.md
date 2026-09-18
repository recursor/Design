# INOV8 Orthopedics — Website UI Kit

A pixel-considered recreation of the **inov8ortho.com** marketing site
home page, broken into small reusable JSX components.

## Run it

Open `index.html` in a browser. It loads React via CDN, Lucide for
icons, and each JSX file as a separate Babel script tag. State is local
to `App`.

## Files

| File                         | What it is                                                          |
| ---------------------------- | ------------------------------------------------------------------- |
| `index.html`                 | Composes the page; manages active nav + selected procedure state.   |
| `Header.jsx`                 | Sticky utility bar + logo + primary nav + Request appointment CTA.  |
| `Hero.jsx`                   | Eyebrow, display heading, gradient rule, lead, dual CTAs, proof bar.|
| `Physicians.jsx`             | "Meet our physicians" grid · `PhysicianCard` reusable.              |
| `Procedures.jsx`             | 6-tile anatomy grid · `ProcedureTile` reusable, hover animates rule.|
| `Mission.jsx`                | Mission copy + surgical-tech card + dark gradient CTA block.        |
| `Appointment.jsx`            | Request-appointment form with success state · `Field` helper.       |
| `LocationAndFooter.jsx`      | Location/contact section + dark navy footer.                        |

## Interactions wired

- Top-level **Request appointment** CTA scrolls to the form.
- Primary nav links highlight on click (no real routing).
- Procedure tile hover lifts the card and grows the gradient rule.
- Appointment form submits to a success state, then can reset.

## Notes / caveats

- Photography is shown as **gradient placeholders with an icon
  glyph** — drop in real INOV8 photography when available.
- Accreditation badges (ISTA, AAHKS, ABOS, AAOS Fellow) referenced on
  the live site are not redistributed.
- Icons are Lucide via CDN — flagged in the root `README.md`.
- Fonts (Jost + DM Sans) are Google Fonts substitutes — flagged.
- The Google Maps embed is shown as a placeholder block.

## Not yet covered

- Interior pages (procedure detail, physician bio, patient portal,
  privacy/terms).
- INOV8 Surgical sister site (`inov8surgical.com`) — same foundations
  apply; create `ui_kits/surgical/` if it becomes a priority.
