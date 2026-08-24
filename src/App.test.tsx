import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the resort identity and primary trip action', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /gem by the sea home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /plan your escape/i })).toBeInTheDocument();
  });

  it('uses the real Gem by the Sea photo set instead of stock URLs', () => {
    render(<App />);
    const sources = screen.getAllByRole('img').map((image) => image.getAttribute('src'));
    expect(sources).toEqual(expect.arrayContaining([
      '/images/gem-hero.jpg',
      '/images/gem-pool.jpg',
      '/images/gem-beach.jpg',
      '/images/gem-family.jpg',
      '/images/gem-island.jpg',
    ]));
    expect(sources.some((source) => source?.includes('images.unsplash.com'))).toBe(false);
  });
});
