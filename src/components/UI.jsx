import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export function Eyebrow({ number, children, className = '' }) {
  return <div className={`eyebrow ${className}`}><span className="eyebrow-number">{number}</span><span>{children}</span></div>;
}

export function ActionLink({ to, children, variant = 'primary', icon = 'up', className = '' }) {
  const Icon = icon === 'right' ? ArrowRight : ArrowUpRight;
  return <Link className={`action-link action-${variant} ${className}`} to={to}>{children}<Icon size={18} strokeWidth={1.8} /></Link>;
}

export function ProjectTags({ items, className = '' }) {
  return <div className={`tag-list ${className}`}>{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>;
}
