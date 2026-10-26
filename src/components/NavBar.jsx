import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../data/profile.js';

const items = [
  { to: '/design', label: 'UX/UI Design' },
  { to: '/development', label: 'Development' },
  { to: '/about', label: 'About' }
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event) { if (event.key === 'Escape') setOpen(false); }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link to="/" className="brand" aria-label="Go to homepage">{profile.initials}<span>.</span></Link>
        <nav className={`nav-links ${open ? 'nav-open' : ''}`} id="site-navigation" aria-label="Primary navigation">
          {items.map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{item.label}</NavLink>)}
          <NavLink to="/contact" className="mobile-contact">Let's connect <ArrowUpRight size={16} /></NavLink>
        </nav>
        <Link to="/contact" className="header-contact">Let's talk <ArrowUpRight size={15} /></Link>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
