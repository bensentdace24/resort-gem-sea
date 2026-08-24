import { ArrowDownRight, MapPin, Star } from "lucide-react";
import { resort } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
      <div className="hero-copy">
        <div
          className="rating-line"
          aria-label={`${resort.rating} out of 5 stars from ${resort.reviewCount} reviews`}
        >
          <Star size={17} fill="currentColor" aria-hidden="true" />
          <strong>{resort.rating}</strong>
          <span>{resort.reviewCount} traveler stories</span>
        </div>
        <h1 id="hero-title">
          Your private
          <br />
          island <em>rhythm.</em>
        </h1>
        <p className="hero-lede">
          A hidden seaside escape in Samal for barefoot mornings, blue-on-blue
          afternoons, and the people you never get enough time with.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#planner">
            Plan your escape <ArrowDownRight size={20} aria-hidden="true" />
          </a>
          <a className="text-link" href="#discover">
            Feel the place <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="A glimpse of the island escape">
        <div className="hero-image-main">
          <img
            src={`${import.meta.env.BASE_URL}images/gem-hero.jpg`}
            alt="Elevated view from Gem by the Sea toward its private shoreline"
            width="1180"
            height="806"
            fetchPriority="high"
          />
        </div>
        <div className="hero-image-small">
          <img
            src={`${import.meta.env.BASE_URL}images/gem-pool.jpg`}
            alt="Gem by the Sea infinity pool illuminated at night"
            width="2200"
            height="1327"
            fetchPriority="high"
          />
        </div>
        <div className="location-chip">
          <MapPin size={18} aria-hidden="true" />
          <span>
            Aundanao, Samal
            <br />
            <strong>Davao del Norte</strong>
          </span>
        </div>
        <div className="sun-orbit" aria-hidden="true">
          <span>island time · private shore ·</span>
        </div>
      </div>
    </section>
  );
}
