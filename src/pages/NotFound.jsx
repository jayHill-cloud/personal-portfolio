import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return <div className="not-found shell"><span className="micro-label">ERROR / 404</span><h1>Lost in the<br/><em>creative process?</em></h1><p>That page doesn't exist. Let's get you back on track.</p><Link to="/"> <ArrowLeft size={18}/> Back to homepage</Link></div>;
}
