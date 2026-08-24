import { Quote, Star, StarHalf } from 'lucide-react';
import { resort, testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section className="testimonials section" id="stories" aria-labelledby="stories-title">
      <div className="testimonial-head">
        <h2 id="stories-title">The stories<br /><em>travel home.</em></h2>
        <div className="review-score"><strong>{resort.rating}</strong><span><span className="stars" aria-label={`Rated ${resort.rating} out of 5 stars`}>{[1,2,3,4].map((i) => <Star key={i} data-star="full" size={17} fill="currentColor" aria-hidden="true" />)}<StarHalf data-star="half" size={17} fill="currentColor" aria-hidden="true" /></span>{resort.reviewCount} Google reviews</span></div>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <figure className={index === 0 ? 'testimonial-card featured' : 'testimonial-card'} key={testimonial.name}>
            <Quote aria-hidden="true" />
            <blockquote>“{testimonial.quote}”</blockquote>
            <figcaption><span className="avatar">{testimonial.initials}</span><span><strong>{testimonial.name}</strong><small>{testimonial.meta}</small></span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
