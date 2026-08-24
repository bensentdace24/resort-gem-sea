import { ArrowUpRight, MapPin, Phone, Shell } from 'lucide-react';
import { resort } from '../data/content';

export default function TripPlanner() {
  return (
    <section className="planner section" id="planner" aria-labelledby="planner-title">
      <div className="planner-orb" aria-hidden="true"><Shell /></div>
      <div className="planner-copy">
        <h2 id="planner-title">Let the sea<br /><em>set the date.</em></h2>
        <p>Tell the resort the kind of escape you have in mind. The team will confirm availability and help you take it from daydream to island day.</p>
      </div>
      <div className="planner-actions">
        <a className="planner-call" href={resort.phoneHref}><span><Phone aria-hidden="true" /><span>Call to plan your stay<small>{resort.phoneDisplay}</small></span></span><ArrowUpRight aria-hidden="true" /></a>
        <div className="planner-location"><MapPin aria-hidden="true" /><span>Find your way to us<small>{resort.address}</small></span></div>
        <p>Availability is confirmed directly by the resort. This page does not complete a reservation.</p>
      </div>
    </section>
  );
}
