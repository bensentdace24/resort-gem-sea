import { ArrowUp, MapPin } from 'lucide-react';
import { resort } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand"><span className="brand-mark" aria-hidden="true"><span /></span><strong>Gem by the Sea</strong><p>A private island rhythm in Samal.</p></div>
      <div className="footer-links"><a href="#discover">Discover</a><a href="#stays">Stay preview</a><a href="#stories">Stories</a><a href={resort.phoneHref}>Contact</a></div>
      <div className="footer-address"><MapPin size={18} aria-hidden="true" /><span>{resort.address}</span></div>
      <a className="social-link" href="#top" aria-label="Back to top"><ArrowUp aria-hidden="true" /></a>
      <p className="copyright">© 2026 Gem by the Sea. Built for slow island days.</p>
    </footer>
  );
}
