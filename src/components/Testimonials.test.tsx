import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Testimonials from './Testimonials';

describe('Testimonials', () => {
  it('represents the 4.5 rating as four full stars and one half star', () => {
    render(<Testimonials />);
    const stars = screen.getByLabelText('Rated 4.5 out of 5 stars');
    expect(stars.querySelectorAll('[data-star="full"]')).toHaveLength(4);
    expect(stars.querySelectorAll('[data-star="half"]')).toHaveLength(1);
  });
});
