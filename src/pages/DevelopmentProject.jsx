import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { developmentProjects } from '../data/projects.js';
import { Eyebrow, ProjectTags, ActionLink } from '../components/UI.jsx';
import ProjectVisual from '../components/ProjectVisual.jsx';
import NotFound from './NotFound.jsx';

export default function DevelopmentProject() {
  const { slug } = useParams();
  const project = developmentProjects.find(item => item.slug === slug);
  if (!project) return <NotFound />;
  return (
    <div className="case-study development-case"><div className="shell case-head"><Link className="back-link" to="/development"><ArrowLeft size={16}/> ALL DEVELOPMENT WORK</Link><Eyebrow number={`PROJECT / ${project.number}`}>{project.type}</Eyebrow><h1>{project.title}<span>.</span></h1><p>{project.summary}</p><div className="case-meta"><div><span>MY ROLE</span><strong>{project.role}</strong></div><div><span>TECH STACK</span><strong>{project.stack.slice(0,3).join(' · ')}</strong></div><div><span>STATUS</span><strong>{project.status}</strong></div></div><div className="project-external-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer">VIEW SOURCE <Github size={17}/></a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer">LIVE DEMO <ExternalLink size={17}/></a>}{!project.github && !project.live && <span>Add your repository or live URL in src/data/projects.js when ready.</span>}</div></div>
      <div className="shell case-hero-image"><ProjectVisual kind={project.cover} image={project.image} alt={`${project.title} preview`} /></div><div className="shell case-content"><aside className="case-sidebar"><span>PROJECT BREAKDOWN</span><a href="#overview">01 — Overview</a><a href="#stack">02 — Technologies</a><a href="#engineering">03 — How it works</a><a href="#challenges">04 — Challenges</a><a href="#next">05 — Next steps</a></aside><div className="case-article"><section id="overview"><Eyebrow number="01">PROJECT OVERVIEW</Eyebrow><h2>What I built.</h2><p>{project.overview}</p></section><section id="stack"><Eyebrow number="02">TOOLS & TECHNOLOGIES</Eyebrow><h2>My toolkit.</h2><ProjectTags items={project.stack}/></section><section id="engineering"><Eyebrow number="03">TECHNICAL APPROACH</Eyebrow><h2>Under the hood.</h2><p>{project.engineering}</p></section><section id="challenges"><Eyebrow number="04">ENGINEERING CHALLENGES</Eyebrow><h2>Things to figure out.</h2><div className="decision-list">{project.challenges.map((challenge, i) => <div key={challenge}><span>{String(i+1).padStart(2,'0')}</span><p>{challenge}</p><ArrowUpRight size={18}/></div>)}</div></section><section id="next"><Eyebrow number="05">NEXT ITERATION</Eyebrow><h2>Always improving.</h2><p>{project.next}</p></section></div></div><div className="shell case-bottom"><span>END OF PROJECT — {project.title.toUpperCase()}</span><ActionLink to="/development">See all development work</ActionLink></div></div>
  );
}
