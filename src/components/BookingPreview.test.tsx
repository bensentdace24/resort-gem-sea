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
