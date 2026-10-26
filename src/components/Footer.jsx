import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <Link to="/" className="footer-brand">{profile.initials}<span>.</span></Link>
          <p>Good design. Thoughtful code. Real purpose.</p>
        </div>
        <div className="footer-links">
          <Link to="/design">Design <ArrowUpRight size={14} /></Link>
          <Link to="/development">Development <ArrowUpRight size={14} /></Link>
          <Link to="/about">About <ArrowUpRight size={14} /></Link>
          <Link to="/contact">Contact <ArrowUpRight size={14} /></Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React.</span>
        <span>Designed to keep growing ↗</span>
      </div>
    </footer>
  );
}
