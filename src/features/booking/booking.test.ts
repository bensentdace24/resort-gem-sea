import { describe, expect, it } from 'vitest';
import { formatStaySummary, validateStay } from './booking';

describe('validateStay', () => {
  it('rejects missing dates', () => {
    expect(validateStay('', '')).toBe('Choose both check-in and check-out dates.');
  });

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
