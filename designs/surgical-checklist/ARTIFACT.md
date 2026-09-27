# Source

- Design project: "Surgical checklist development" — https://claude.ai/design/p/4e6d80b6-a641-4404-8696-24837d088b5a
- File: `Surgical Checklist & Clearance.dc.html` (patient guide, clearance form, consent packet), built on the INOV8 Orthopedics system.
- Pulled: 2026-09-27, each file copied at its project path.
- Runtime files the design loads: `support.js`, `doc-page.js`, `image-slot.js`, `assets/inov8-logo.png`, and `_ds/…/` (the project's snapshot of the INOV8 Orthopedics system, which may lag [`systems/inov8-orthopedics/`](../../systems/inov8-orthopedics/)). `.image-slots.state.json` holds the Knee and Hip FAQ QR codes.
- Not copied: the project's `uploads/` source documents, its `.docx` review export, the app's `.thumbnail`, and the unused `_ds` files (README, manifest, lint config, preview CSS). The same project also holds the [Antibiotic Protocol](../antibiotic-protocol/).

## Viewing locally

The page fetches React and Babel from unpkg and fonts from Google Fonts, so it needs a network connection and an HTTP server (not `file://`):

```
cd designs/surgical-checklist && python3 -m http.server 8000
```

Then open `http://localhost:8000/Surgical%20Checklist%20%26%20Clearance.dc.html`.
