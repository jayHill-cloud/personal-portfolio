import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProjectVisual from './ProjectVisual.jsx';

export default function ProjectCard({ project, area = 'design', index = 0 }) {
  const path = `/${area}/${project.slug}`;
  return (
    <article className={`project-card project-card-${area}`}>
      <Link to={path} className="project-cover" aria-label={`View ${project.title}`}>
        <ProjectVisual kind={project.cover} image={project.image} alt={`${project.title} preview`} variant={area}/>
        <span className="project-cover-arrow"><ArrowUpRight size={21}/></span>
      </Link>
      <div className="project-card-meta"><span>{project.number || String(index + 1).padStart(2, '0')} / {project.type}</span><span>{project.year}</span></div>
      <div className="project-card-title"><Link to={path}><h3>{project.title}</h3></Link><Link to={path} aria-label={`Read ${project.title} details`}><ArrowUpRight size={23}/></Link></div>
      <p className="project-card-summary">{project.summary}</p>
    </article>
  );
}
