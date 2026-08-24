---
name: Gem by the Sea
description: Aurora-lit editorial travel design for a private island escape.
colors:
  deep-sea-ink: "#071b27"
  reef-ink: "#0c2936"
  sea-foam-paper: "#f6fbf8"
  warm-shell-paper: "#f6efe5"
  aurora-aqua: "#54efd4"
  horizon-blue: "#2e9cff"
  coral-heat: "#ff745e"
  orchid-glow: "#db5cff"
  island-sun: "#ffcd62"
  misted-copy: "#a9c5ca"
  tide-line: "rgba(220, 252, 251, 0.17)"
  lagoon-glass: "rgba(10, 41, 54, 0.72)"
typography:
  display:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(4rem, 7.2vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.91
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(2.9rem, 5.2vw, 5.3rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  editorial:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.35rem, 2vw, 2.05rem)"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: "0.11em"
rounded:
  field: "9px"
  control: "10px"
  glass: "12px"
  card: "14px"
  panel: "16px"
  feature: "18px"
  pill: "999px"
  circle: "50%"
spacing:
  compact: "12px"
  control-x: "22px"
  card: "34px"
  section-mobile: "90px"
  section: "140px"
components:
  button-primary:
    backgroundColor: "{colors.aurora-aqua}"
    textColor: "{colors.deep-sea-ink}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
    typography: "{typography.body}"
  button-dark:
    backgroundColor: "{colors.sea-foam-paper}"
    textColor: "{colors.deep-sea-ink}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
    typography: "{typography.body}"
  input-booking:
    backgroundColor: "#ffffff"
    textColor: "{colors.deep-sea-ink}"
    rounded: "{rounded.field}"
    padding: "0 13px"
    height: "48px"
  card-destination:
    rounded: "{rounded.card}"
  card-testimonial:
    backgroundColor: "{colors.warm-shell-paper}"
    textColor: "{colors.reef-ink}"
    rounded: "{rounded.card}"
    padding: "34px"
---

# Design System: Gem by the Sea

## Overview

**Creative North Star: "The Aurora Editorial Escape"**

Gem by the Sea feels like a premium travel story unfolding after dusk: deep ocean ink creates intimacy, expansive coastal photography supplies the horizon, and concentrated aurora color makes the experience feel vivid rather than corporate. The system pairs direct, oversized sans-serif promises with selective Cormorant Garamond emphasis, giving emotional phrases a lyrical current without turning the entire interface decorative.

The layout is immersive and deliberately asymmetric. Photography overlaps, cards change scale, and key proof or planning controls float at the edge of larger fields. Liquid glass is reserved for useful overlays and the stay preview; most surfaces remain materially clear so translucency keeps its sense of occasion.

**Key Characteristics:**

- Deep sea ink as the continuous editorial canvas.
- Aqua as the primary interactive and typographic spark; coral, violet, blue, and sun appear as concentrated aurora heat.
- Oversized, tightly tracked sans-serif headlines with serif italics for emotional turns.
- Edge-to-edge coastal photography shaped into arches, crops, and asymmetric editorial grids.
- Selective blur, ambient glow, and soft lift around floating planning or location surfaces.
- Generous vertical breathing room with compact, touch-friendly controls.

## Colors

The palette moves from nocturnal sea tones into luminous tropical accents, with pale papers used as intentional contrast breaks rather than the page default.

### Primary

- **Aurora Aqua:** The dominant accent for calls to action, emphasized headline phrases, amenity icons, active navigation, and featured social proof.

### Secondary

- **Coral Heat:** The warm conversion field and expressive story accent; use in large, rare blocks or short editorial moments.
- **Horizon Blue:** A supporting aurora-light ingredient, primarily blended into atmospheric gradients.

### Tertiary

- **Orchid Glow:** A spectral gradient accent that keeps aurora effects unexpected; it should not become a routine control color.
- **Island Sun:** Rating stars, focus outlines, and small solar motifs where immediate visibility matters.

### Neutral

- **Deep Sea Ink:** The main page canvas and dark-action foundation.
- **Reef Ink:** A lifted dark tone for gradients, hover states, and near-black surface variation.
- **Sea-Foam Paper:** A cool pale surface for light buttons and the stay-preview family.
- **Warm Shell Paper:** The quiet testimonial-card ground that contrasts the featured aqua card.
- **Misted Copy:** Secondary text on dark surfaces.
- **Tide Line:** Low-contrast dividers and borders that structure the dark canvas without boxing it in.
- **Lagoon Glass:** The translucent dark material for compact overlays where context must remain visible.

**The Concentrated Aurora Rule.** Bright hues arrive in focused accents, gradients, or one dominant feature surface; they never compete evenly across the whole page.

**The Aqua Means Energy Rule.** Aurora Aqua identifies action, emphasis, or a featured moment. Do not spend it on passive decoration when a neutral will do.

## Typography

**Display Font:** DM Sans (with sans-serif fallback)  
**Body Font:** DM Sans (with sans-serif fallback)  
**Editorial Font:** Cormorant Garamond (with Georgia and serif fallbacks)

**Character:** DM Sans carries the clear, contemporary hospitality voice while Cormorant Garamond supplies a romantic, destination-led inflection. Their contrast is strongest when the serif is brief and embedded inside an otherwise sans-serif composition.

### Hierarchy

- **Display:** Semibold, fluid and oversized, with compressed line-height and tracking. Reserve for the first-viewport promise.
- **Headline:** Semibold, fluid, tightly tracked, and nearly solid-set. Use for major section invitations.
- **Editorial:** Semibold serif, often italic. Use for emphasized headline phrases, quotations, card titles, and short emotional pull lines.
- **Body:** Regular sans-serif with relaxed line-height. Keep key marketing paragraphs around 500–570px wide.
- **Label:** Bold, compact, uppercase, and widely tracked. Use for destination metadata and form labels, not prose.

**The Serif Current Rule.** Cormorant Garamond is a current running through the layout, not the ocean: use it for a phrase or moment, never as the default interface voice.

**The Short-Line Promise Rule.** Large headings break into deliberate, balanced lines and retain tight leading; avoid long single-line marketing headlines.

## Layout

The core content container is capped at 1240px with 24px desktop gutters and 14px mobile gutters. Primary sections use large vertical intervals around 130–150px on desktop, tightening to roughly 80–110px on mobile. The hero is wider than the standard content rhythm and uses a roughly 46/54 text-to-image split, while editorial grids deliberately favor one column over another rather than defaulting to symmetry.

At 1020px, the hero becomes a single-column composition, booking fields become two columns, and secondary grids simplify. At 720px, navigation becomes a glass menu, all core content becomes single-column, booking controls stack, and the photography mosaic becomes a vertical sequence. Touch targets stay at least 44px, and critical form controls grow to 52px on mobile.

**The Overlap With Purpose Rule.** Negative margins and floating elements are reserved for linking major narrative zones—the hero to planning, a location to its image, or a motif to a conversion field.

**The Editorial Imbalance Rule.** Prefer a strong primary column paired with a supporting column; equal grids are used only when content truly has equal weight.

## Elevation & Depth

Depth is a hybrid of tonal layering, image overlays, ambient aurora light, and a small number of substantial soft shadows. Most content stays flat on Deep Sea Ink; lift appears around photography, the floating location chip, booking preview, and interactive controls. Glass surfaces always sit over visually meaningful context and retain strong text contrast.

### Shadow Vocabulary

- **Image Float** (`0 24px 80px rgba(0, 13, 22, 0.34)`): Large photography and hero crops.
- **Planning Lift** (`0 25px 80px rgba(0, 0, 0, 0.28)`): The booking preview crossing the hero boundary.
- **Location Lift** (`0 14px 40px rgba(0, 0, 0, 0.22)`): Compact pale glass overlays.
- **Aqua Action** (`0 13px 28px rgba(84, 239, 212, 0.18)`): Resting primary CTA, intensifying on hover.

**The Selective Glass Rule.** Use backdrop blur only for floating navigation, location, or planning surfaces; ordinary cards remain opaque.

## Shapes

The base component language is softly geometric: 9–18px corners on controls, cards, and panels; full pills for contact actions; circles for icons, ratings, and orbital brand motifs. Photography is the exception and carries the signature silhouette—large arched upper corners, straighter lower corners, and overlapping crops that evoke portals toward the water.

Borders are quiet and translucent on dark surfaces, crisp and pale-gray on light fields, and heavier only where an image overlap needs separation. Avoid applying the hero’s arched silhouette to routine cards.

## Components

### Buttons

- **Shape:** Compact rounded rectangle with a minimum 52px height and strong horizontal padding.
- **Primary:** Aurora Aqua on Deep Sea Ink text, bold and softly lifted.
- **Hover / Focus:** Rise 3px with stronger ambient shadow; keyboard focus uses the high-visibility Island Sun outline.
- **Dark / Light:** Sea-Foam Paper on dark sections; hover shifts to Aurora Aqua.
- **Text Link:** White, underlined, and paired with a small directional cue; no containing surface.

### Cards / Containers

- **Destination Cards:** Edge-to-edge photographs with a dark bottom gradient, 14px corners, editorial titles, and a circular directional affordance. Hover zoom is slow and restrained.
- **Testimonial Cards:** Warm Shell Paper or featured Aurora Aqua, 14px corners, 34px padding, and no shadow. The content itself supplies the hierarchy.
- **Booking Preview:** Pale translucent panel with 16px corners, substantial ambient lift, and 20px backdrop blur. It overlaps the hero and must remain visually connected to it.

### Inputs / Fields

- **Style:** White fill, Deep Sea Ink text, pale-gray 1px border, 9px corners, and 48px minimum height.
- **Focus:** Inherits the global 3px Island Sun focus outline with 4px offset.
- **Feedback:** Error and success messages use quiet tinted backgrounds with dark semantic text; they do not rely on color alone because message copy and live-region roles provide meaning.

### Navigation

Navigation is transparent over the hero with a faint bottom divider. Links are compact semibold sans-serif and shift to Aurora Aqua with a 1px lift on hover. The phone action is a full pill. On mobile, links enter a dark translucent 12px-radius panel with 18px blur and stack into full-width targets.

### Floating Location Chip

A compact pale glass label with 12px corners, 12px blur, and soft elevation. It attaches factual location proof to the image field and should not be reused as a generic badge.

### Planner Call Surface

A tall dark call-to-action nested inside the Coral Heat conversion field. It combines icon, action label, phone detail, and direction in one 80px minimum-height surface, rising slightly and deepening on hover.

## Do's and Don'ts

### Do:

- **Do** keep Deep Sea Ink as the dominant canvas and reserve pale surfaces for purposeful contrast.
- **Do** use Aurora Aqua for primary action, highlighted language, and the most important proof surface.
- **Do** pair oversized DM Sans headlines with brief Cormorant Garamond phrases.
- **Do** let photography crop boldly and asymmetrically while maintaining readable overlays.
- **Do** preserve 44px minimum targets, visible Island Sun focus, and reduced-motion behavior.
- **Do** simplify mosaics and grids into a clear vertical reading order on mobile.

### Don't:

- **Don't** spread every aurora hue across every component; the palette depends on concentration and hierarchy.
- **Don't** turn glass blur into a universal card treatment.
- **Don't** place copy directly on photography without a tested darkening gradient or an opaque surface.
- **Don't** use the editorial serif for navigation, form controls, or long body copy.
- **Don't** normalize the image composition into a uniform grid of identical cards.
- **Don't** imply live availability or a completed reservation through visual states; the stay control is a preview that leads to direct contact.
