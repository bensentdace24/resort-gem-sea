# Gem by the Sea Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive, conversion-focused Aurora Premium landing page for Gem by the Sea with destination storytelling, a booking preview, authentic testimonials, and a trip-planning CTA.

**Architecture:** A Vite-powered React single page composed from focused sections and shared typed content. Custom CSS tokens and component styles provide the visual system; small pure TypeScript helpers own booking validation and summary generation so behavior is independently testable.

**Tech Stack:** React 19, TypeScript 5, Vite 7, Lucide React, Vitest, React Testing Library, authored CSS

**Spec:** `docs/superpowers/specs/2026-08-24-gem-by-the-sea-landing-page-design.md`

## Global Constraints

- Deliver a frontend-only landing page and simulated booking preview.
- Do not claim live availability, prices, operating hours, or reservation confirmation.
- Use the supplied 4.5 rating, 27-review count, address, phone number, and review themes accurately.
- Meet WCAG AA contrast, preserve keyboard focus, and keep interactive targets at least 44 pixels tall.
- Respect `prefers-reduced-motion` and avoid horizontal overflow at phone, tablet, laptop, and wide desktop widths.
- Use responsive images with dimensions and lazy-load below-the-fold media.
- Git commits are intentionally omitted because the user asked to leave Git out for now.

---

### Task 1: Create the Tested Application Foundation

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/test/setup.ts`
- Create: `src/App.test.tsx`

**Interfaces:**
- Produces: Vite application entry point, Vitest DOM environment, and an `App(): JSX.Element` root component.

- [ ] **Step 1: Add package and compiler configuration**

Define scripts `dev`, `build`, `test`, and `preview`. Add runtime dependencies `react`, `react-dom`, and `lucide-react`; add development dependencies for Vite, TypeScript, Vitest, jsdom, and React Testing Library.

- [ ] **Step 2: Write the failing shell test**

```tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the resort identity and primary trip action', () => {
    render(<App />);
    expect(screen.getByText('Gem by the Sea')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /plan your escape/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 3: Run the test to verify failure**

Run: `npm install` followed by `npm test -- --run`

Expected: the test fails because the finished application shell does not yet exist.

- [ ] **Step 4: Implement the minimal root shell**

Create `main.tsx` with `createRoot`, and return a landmark-based shell from `App.tsx` containing a header, `<main>`, the `Gem by the Sea` identity, and a `Plan your escape` link targeting `#planner`.

- [ ] **Step 5: Run foundation checks**

Run: `npm test -- --run`

Expected: one passing test with no console errors.

### Task 2: Add Typed Content and Booking Logic

**Files:**
- Create: `src/data/content.ts`
- Create: `src/features/booking/booking.ts`
- Create: `src/features/booking/booking.test.ts`
- Create: `src/types.ts`

**Interfaces:**
- Produces: `Destination`, `Testimonial`, and `Amenity` interfaces.
- Produces: `destinations: Destination[]`, `testimonials: Testimonial[]`, `amenities: Amenity[]`.
- Produces: `validateStay(checkIn: string, checkOut: string): string | null`.
- Produces: `formatStaySummary(checkIn: string, checkOut: string, guests: number): string`.

- [ ] **Step 1: Define typed content models and factual content**

Use the supplied address, phone, rating, review count, and reviewer themes. Keep review copy as concise paraphrased excerpts and use destination entries for private beach, infinity pool, gatherings, and island exploration.

- [ ] **Step 2: Write failing booking tests**

```ts
import { describe, expect, it } from 'vitest';
import { formatStaySummary, validateStay } from './booking';

describe('validateStay', () => {
  it('rejects an end date before the start date', () => {
    expect(validateStay('2026-09-20', '2026-09-19')).toBe('Check-out must be after check-in.');
  });

  it('accepts a chronological date range', () => {
    expect(validateStay('2026-09-19', '2026-09-21')).toBeNull();
  });
});

describe('formatStaySummary', () => {
  it('creates a readable non-confirming preview', () => {
    expect(formatStaySummary('2026-09-19', '2026-09-21', 4)).toContain('2 nights · 4 guests');
  });
});
```

- [ ] **Step 3: Run the tests to verify failure**

Run: `npm test -- --run src/features/booking/booking.test.ts`

Expected: failure because `booking.ts` has not been implemented.

- [ ] **Step 4: Implement booking helpers**

Parse dates at local midnight, require check-out to be later than check-in, calculate whole nights, pluralize `night` and `guest`, and append `Preview only — contact the resort to confirm.`

- [ ] **Step 5: Run booking tests**

Run: `npm test -- --run src/features/booking/booking.test.ts`

Expected: all booking tests pass.

### Task 3: Build the Responsive Page Sections

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/Hero.tsx`
- Create: `src/components/BookingPreview.tsx`
- Create: `src/components/DestinationShowcase.tsx`
- Create: `src/components/ExperienceStory.tsx`
- Create: `src/components/Testimonials.tsx`
- Create: `src/components/TripPlanner.tsx`
- Create: `src/components/Footer.tsx`
- Modify: `src/App.tsx`
- Create: `src/components/BookingPreview.test.tsx`

**Interfaces:**
- Consumes: content arrays and booking helpers from Task 2.
- Produces: section IDs `discover`, `stays`, `stories`, and `planner` for navigation.
- Produces: `BookingPreview(): JSX.Element` with labeled date and guest inputs and inline status feedback.

- [ ] **Step 1: Write failing booking-component tests**

```tsx
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BookingPreview from './BookingPreview';

describe('BookingPreview', () => {
  it('shows inline feedback for an invalid date range', () => {
    render(<BookingPreview />);
    fireEvent.change(screen.getByLabelText(/check in/i), { target: { value: '2026-09-20' } });
    fireEvent.change(screen.getByLabelText(/check out/i), { target: { value: '2026-09-19' } });
    fireEvent.click(screen.getByRole('button', { name: /preview my stay/i }));
    expect(screen.getByRole('alert')).toHaveTextContent('Check-out must be after check-in.');
  });

  it('shows a stay summary for valid values', () => {
    render(<BookingPreview />);
    fireEvent.change(screen.getByLabelText(/check in/i), { target: { value: '2026-09-19' } });
    fireEvent.change(screen.getByLabelText(/check out/i), { target: { value: '2026-09-21' } });
    fireEvent.click(screen.getByRole('button', { name: /preview my stay/i }));
    expect(screen.getByRole('status')).toHaveTextContent('2 nights');
  });
});
```

- [ ] **Step 2: Run component tests to verify failure**

Run: `npm test -- --run src/components/BookingPreview.test.tsx`

Expected: failure because `BookingPreview` does not exist.

- [ ] **Step 3: Implement semantic sections and navigation**

Build the header with a labeled mobile-menu button and escape-key dismissal. Build the hero with rating, concise positioning, primary CTA, secondary contact CTA, and a decorative image collage. Render destination and testimonial cards from typed data, use Lucide SVG icons, and keep contact links actionable through `tel:09228821234`.

- [ ] **Step 4: Implement booking and planner interactions**

Use controlled inputs in `BookingPreview`, set `min` date relationships, call the Task 2 helpers on submit, render errors with `role="alert"`, and valid summaries with `role="status"`. The trip planner must state that availability is confirmed by direct contact and must never present a completed reservation state.

- [ ] **Step 5: Compose the complete application**

Render all sections in order inside `App.tsx`, keeping one `<h1>`, sequential heading levels, a skip link, semantic `<header>`, `<main>`, and `<footer>` landmarks.

- [ ] **Step 6: Run interaction tests**

Run: `npm test -- --run`

Expected: all App and booking tests pass.

### Task 4: Apply the Aurora Premium Visual System

**Files:**
- Create: `src/styles/global.css`
- Create: `src/styles/components.css`
- Modify: `src/main.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/DestinationShowcase.tsx`

**Interfaces:**
- Consumes: semantic class names from Task 3.
- Produces: design tokens for color, typography, spacing, radii, shadows, transition timing, and container widths.

- [ ] **Step 1: Define global tokens and resilient defaults**

Create CSS variables for midnight navy, sea ink, aqua, turquoise, coral, magenta, sunset orange, warm white, muted text, focus color, surface glass, borders, spacing, radii, and shadows. Apply `box-sizing`, base typography, visible focus rings, a skip-link state, fluid media defaults, and overflow protection.

- [ ] **Step 2: Implement layout and typography**

Use a fluid display scale with `clamp()`, a readable 16-pixel minimum body base, a centered max-width container, asymmetrical hero and destination layouts, and responsive breakpoints based on content rather than device names.

- [ ] **Step 3: Implement aurora and glass effects**

Layer radial gradients behind the hero and planner, use restrained translucent panels with solid-color fallbacks, add image overlays for guaranteed text contrast, and avoid gradient-filled body text.

- [ ] **Step 4: Add purposeful motion**

Animate only transform and opacity for reveal and hover states, keep interaction transitions between 160 and 300 milliseconds, give the ambient aurora a slow drift, and disable animation and smooth scrolling inside `@media (prefers-reduced-motion: reduce)`.

- [ ] **Step 5: Verify static production output**

Run: `npm run build`

Expected: TypeScript and Vite finish successfully and create `dist/` without warnings that affect runtime behavior.

### Task 5: Final Accessibility, Responsive, and Quality Verification

**Files:**
- Modify as needed: `src/components/*.tsx`
- Modify as needed: `src/styles/*.css`
- Modify as needed: `src/**/*.test.tsx`

**Interfaces:**
- Consumes: the complete application.
- Produces: a verified production build with no known interaction or responsive defects.

- [ ] **Step 1: Run the complete automated suite**

Run: `npm test -- --run`

Expected: all tests pass with no unhandled exceptions.

- [ ] **Step 2: Run the production build**

Run: `npm run build`

Expected: exit code 0.

- [ ] **Step 3: Inspect the page at representative widths**

Check 360, 768, 1024, and 1440 pixels. Confirm there is no horizontal page overflow, all content remains readable, the booking form stacks cleanly, images reserve space, and touch targets remain at least 44 pixels.

- [ ] **Step 4: Verify keyboard and reduced-motion behavior**

Tab through the skip link, navigation, booking inputs, cards with actions, phone links, and planner CTA. Confirm focus is always visible, the menu closes with Escape, inline feedback is announced, and reduced-motion mode removes nonessential animation.

- [ ] **Step 5: Inspect runtime quality**

Open the production page, exercise the mobile menu and both booking outcomes, and confirm there are no console errors, broken assets, false reservation claims, or unsupported business facts.

## Self-Review Result

- Spec coverage: every architecture, content, interaction, accessibility, performance, error-state, and verification requirement maps to Tasks 1–5.
- Placeholder scan: no deferred implementation markers or ambiguous “handle later” steps remain.
- Type consistency: content interfaces, booking helper signatures, component outputs, and section IDs are consistent across tasks.
