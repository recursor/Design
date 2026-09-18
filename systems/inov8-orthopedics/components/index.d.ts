/**
 * INOV8 Orthopedics Design System — types as documentation.
 *
 * READ THIS BEFORE BUILDING AGAINST THE BUNDLE.
 *
 * `components/bundle.js` loads as one classic script and assigns
 * `window.INOV8OrthopedicsDesignSystem_137bbb`, but it exports **no
 * components** on it. Its `@ds-bundle` header lists `"components": []`,
 * and the only property it sets is `__errors`. The seven `.jsx` sources
 * it compiled (Header, Hero, Physicians, Procedures, Mission,
 * Appointment, LocationAndFooter) each run inside their own closure, so
 * their React function components are not reachable from outside.
 *
 * Consume this system through its **tokens** and its **markup**:
 *
 *  1. Tokens are the contract — `tokens.json`, compiled to `tokens.css`
 *     as CSS custom properties (`--brand`, `--fg`, `--space-6`,
 *     `--radius-md`, `--shadow-md`, `--inov8-gradient`, …).
 *  2. `components/bundle.css` carries the shared classes listed under
 *     `DesignSystemClass` below.
 *  3. Every entry under `components/` is a **showcase page** carried
 *     over from the standalone version, not a bundle export. Open its
 *     `preview.html` and copy the markup and classes.
 */

/** The bundle's global, as `components/bundle.js` assigns it. */
export interface INOV8OrthopedicsBundle {
  /**
   * Errors thrown while the bundle's compiled sources ran, one entry per
   * source file. Empty when every source evaluated cleanly.
   *
   * This is the ONLY property the bundle defines. There are no component
   * exports to destructure off this object.
   */
  __errors: Array<{ path: string; error: string }>;
}

declare global {
  interface Window {
    INOV8OrthopedicsDesignSystem_137bbb: INOV8OrthopedicsBundle;
  }
}

/**
 * The showcase pages under `components/`. Each is a page of worked
 * examples kept whole from the standalone version — its `preview.html`
 * is the page itself and its `README.md` is the caption. None of them is
 * a React export; copy their markup.
 */
export type ShowcasePage =
  /** Pill chips, status dots, filters. */
  | 'ComponentsBadges'
  /** Pill CTAs — primary, secondary, ghost. */
  | 'ComponentsButtons'
  /** Navy + gradient wash call-to-action block. */
  | 'ComponentsCtaBlock'
  /** Inputs, select, focus, checkbox. */
  | 'ComponentsForms'
  /** Lucide at 1.5px stroke. */
  | 'ComponentsIcons'
  /** Contact / hours block. */
  | 'ComponentsInfoCard'
  /** Logo + utility row + primary nav. */
  | 'ComponentsNav'
  /** Portrait, name, CTAs. */
  | 'ComponentsPhysicianCard'
  /** Procedure tile — the whole card is the link. */
  | 'ComponentsProcedureCard'
  /** inov8ortho.com recreation, header through procedure grid. */
  | 'Index';

/** The classes `components/bundle.css` defines. */
export type DesignSystemClass =
  /** All caps, `fs-xs`, `fw-semibold`, tracked `ls-eyebrow`, in `brand`. */
  | 'eyebrow'
  /** `fs-5xl` at `fw-light` — the hero display line. */
  | 'display'
  /** `fs-md` lead paragraph under a display heading. */
  | 'lead'
  /** `fs-sm` secondary copy. */
  | 'small'
  /** `fs-xs` caption. */
  | 'caption'
  /** 11px all-caps tracked label. */
  | 'label'
  /** The 4px × 64px section divider filled with `inov8-gradient`. */
  | 'gradient-rule'
  /** `inov8-gradient` clipped to the text. */
  | 'gradient-text'
  /** Display face at `fw-light`; `.name-emphasis strong` is `fw-semibold`. */
  | 'name-emphasis'
  /** `bg` panel with `space-6` padding; `.flush`, `.dark`, `.soft` vary it. */
  | 'card'
  | 'flush'
  | 'dark'
  | 'soft'
  /** Flex row, flex column and grid helpers, each with a 12px gap. */
  | 'row'
  | 'col'
  | 'grid'
  /** A color swatch tile, used by the color foundation pages. */
  | 'swatch';

/**
 * The type styles `tokens.json` compiles into classes in `tokens.css`.
 * `display`, `eyebrow`, `lead`, `caption` and `label` share a name with a
 * `bundle.css` class; `bundle.css` loads after `tokens.css`, so its rule
 * wins where the two differ.
 */
export type TypeStyle =
  | 'body' | 'p' | 'lead' | 'small' | 'caption' | 'eyebrow' | 'label'
  | 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'code' | 'pre' | 'kbd';
