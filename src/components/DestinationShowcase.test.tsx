import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import DestinationShowcase from './DestinationShowcase';

describe('DestinationShowcase', () => {
  it('anchors each directional arrow to its destination card', () => {
    const { container } = render(<DestinationShowcase />);
    const cards = [...container.querySelectorAll('.destination-card')];

    expect(cards).not.toHaveLength(0);
    cards.forEach((card) => {
      expect(card.querySelector(':scope > .round-arrow')).toBeInTheDocument();
    });
  });
});
