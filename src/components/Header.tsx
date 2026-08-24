import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { resort } from '../data/content';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Gem by the Sea home">
        <span className="brand-mark" aria-hidden="true"><span /></span>
        <span>Gem by the Sea</span>
      </a>
      <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav id="main-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
        <a href="#discover" onClick={() => setOpen(false)}>Discover</a>
        <a href="#stays" onClick={() => setOpen(false)}>Stay preview</a>
        <a href="#stories" onClick={() => setOpen(false)}>Traveler stories</a>
        <a className="nav-contact" href={resort.phoneHref}><Phone size={17} aria-hidden="true" /> Call the resort</a>
      </nav>
    </header>
  );
}
