import { ArrowRight, CalendarDays, Users } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';
import { formatStaySummary, validateStay } from '../features/booking/booking';

export default function BookingPreview() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  function submit(event: FormEvent) {
    event.preventDefault();
    const validation = validateStay(checkIn, checkOut);
    if (validation) {
      setError(true);
      setMessage(validation);
      return;
    }
    setError(false);
    setMessage(formatStaySummary(checkIn, checkOut, guests));
  }

  return (
    <section className="booking-wrap" id="stays" aria-labelledby="booking-title">
      <div className="booking-heading">
        <span className="booking-icon" aria-hidden="true"><CalendarDays /></span>
        <div><h2 id="booking-title">Imagine your stay</h2><p>Preview your island dates. We’ll keep it pressure-free.</p></div>
      </div>
      <form className="booking-form" onSubmit={submit} noValidate>
        <label><span>Check in</span><input type="date" min={today} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} /></label>
        <label><span>Check out</span><input type="date" min={checkIn || today} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} /></label>
        <label><span>Travelers</span><span className="guest-input"><Users size={18} aria-hidden="true" /><select value={guests} onChange={(e) => setGuests(Number(e.target.value))}>{[1,2,3,4,5,6,8,10,12].map((count) => <option value={count} key={count}>{count} {count === 1 ? 'guest' : 'guests'}</option>)}</select></span></label>
        <button className="booking-submit" type="submit">Preview my stay <ArrowRight aria-hidden="true" /></button>
      </form>
      {message && <p className={error ? 'booking-message error' : 'booking-message success'} role={error ? 'alert' : 'status'}>{message}</p>}
    </section>
  );
}
