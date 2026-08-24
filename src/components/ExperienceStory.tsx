import { Sparkles, Users, Waves } from 'lucide-react';
import { amenities } from '../data/content';

const icons = { waves: Waves, pool: Waves, users: Users, sparkles: Sparkles };

export default function ExperienceStory() {
  return (
    <section className="experience section" aria-labelledby="experience-title">
      <div className="experience-copy">
        <p className="story-pull">“It feels like the island<br />saved a place for you.”</p>
        <h2 id="experience-title">Space to breathe.<br />Time to reconnect.</h2>
        <p>Gem by the Sea is made for the rare days when everyone is finally in one place. Swim, talk, celebrate, or simply disappear into the view.</p>
        <a className="button button-dark" href="#stories">Hear from travelers</a>
      </div>
      <div className="amenity-list">
        {amenities.map((amenity) => {
          const Icon = icons[amenity.icon];
          return <div className="amenity-row" key={amenity.title}><span><Icon aria-hidden="true" /></span><div><h3>{amenity.title}</h3><p>{amenity.description}</p></div></div>;
        })}
      </div>
    </section>
  );
}
