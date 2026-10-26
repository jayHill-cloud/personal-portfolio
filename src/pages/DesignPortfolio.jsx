import { useState } from 'react';
import { ArrowDownRight, Asterisk, MousePointer2 } from 'lucide-react';
import { Eyebrow, ActionLink } from '../components/UI.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { designProjects } from '../data/projects.js';

const filters = ['All', 'UX/UI', 'Web', 'Mobile'];

export default function DesignPortfolio() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? designProjects : designProjects.filter((project) => project.category === active);
  return (
    <div className="design-page">
      <section className="design-hero shell"><div className="design-hero-top"><Eyebrow number="DESIGN / 001">THE CREATIVE SIDE</Eyebrow><span className="micro-label">UX RESEARCH · UI DESIGN · PROTOTYPING</span></div><div className="design-headline"><h1>Design with<br/><em>intention.</em></h1><div className="design-hero-mark"><Asterisk size={116} strokeWidth={0.75}/></div></div><div className="design-intro"><p>Good design starts by understanding people. I explore the space between what users need and how a digital experience makes them feel.</p><a href="#design-projects">VIEW SELECTED WORK <ArrowDownRight size={18}/></a></div></section>
      <section className="design-ticker" aria-hidden="true"><div>RESEARCH <span>✳</span> EXPLORE <span>✳</span> ITERATE <span>✳</span> CREATE <span>✳</span> RESEARCH <span>✳</span> EXPLORE <span>✳</span> ITERATE <span>✳</span> CREATE <span>✳</span></div></section>
      <section className="gallery-section shell" id="design-projects"><div className="gallery-heading"><div><Eyebrow number="01">SELECTED DESIGN WORK</Eyebrow><h2>Thoughtful work.<br/><em>From idea to interface.</em></h2></div><p>Projects and explorations in user experience, visual design, and digital problem-solving.</p></div><div className="gallery-filter"><div className="filter-buttons" role="group" aria-label="Filter design projects">{filters.map((filter) => <button key={filter} className={`filter-pill ${active === filter ? 'selected' : ''}`} type="button" aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}</div><span>{String(visible.length).padStart(2, '0')} PROJECTS</span></div><div className="gallery-grid">{visible.map((project, index) => <ProjectCard project={project} area="design" index={index} key={project.slug}/>)}</div></section>
      <section className="design-method shell"><div className="method-icon"><MousePointer2 size={27}/></div><Eyebrow number="02">MY APPROACH</Eyebrow><div><h2>Ask better questions.<br/><em>Make better experiences.</em></h2><p>I begin by defining the problem, exploring possible solutions, and refining the details that make an interface easier to understand and use. The result should be useful as well as beautiful.</p></div></section>
      <section className="section-cta shell"><p>INTERESTED IN THE TECHNICAL SIDE?</p><h2>I design it.<br/><em>I build it, too.</em></h2><ActionLink to="/development">Explore front-end projects</ActionLink></section>
    </div>
  );
}
