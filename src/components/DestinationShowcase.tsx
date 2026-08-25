import { ArrowUpRight } from 'lucide-react';
import { destinations } from '../data/content';

export default function DestinationShowcase() {
  return (
    <section className="destinations section" id="discover" aria-labelledby="discover-title">
      <div className="section-intro split-intro">
        <h2 id="discover-title">Come for the sea.<br /><em>Stay for the feeling.</em></h2>
        <p>The best island days don’t need an itinerary. Follow the light, find your favorite corner, and let Gem by the Sea do the rest.</p>
      </div>
      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <article className={`destination-card destination-${index + 1} tone-${destination.tone}`} key={destination.title}>
            <img src={destination.image} alt={destination.alt} width="900" height="1100" loading="lazy" />
            <div className="destination-overlay">
              <span>{destination.detail}</span>
              <h3>{destination.title}</h3>
              <p>{destination.description}</p>
            </div>
            <span className="round-arrow" aria-hidden="true"><ArrowUpRight /></span>
          </article>
        ))}
      </div>
    </section>
  );
}
