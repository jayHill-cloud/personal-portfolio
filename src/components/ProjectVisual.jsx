import { ArrowUpRight, CircleDot, Layers3, BarChart3, Search, BookOpen, Code2 } from 'lucide-react';

// CSS-drawn abstract previews are intentional placeholders, not screenshots of completed work.
// To use your real screenshot, set an image path in src/data/projects.js.
export default function ProjectVisual({ kind = 'history', image = '', alt = '', variant = 'design' }) {
  if (image) return <div className={`project-visual visual-${kind}`}><img className="project-screenshot" src={image} alt={alt} loading="lazy" /></div>;

  if (kind === 'history') return (
    <div className="project-visual visual-history" aria-label="Abstract preview representing Black History Linked">
      <div className="mock-browser history-browser">
        <div className="mock-bar"><span>● ● ●</span><span>BLACK HISTORY LINKED</span><Search size={11} /></div>
        <div className="history-content">
          <small>EXPLORE THE CONNECTIONS</small>
          <strong>History doesn't<br /><em>happen in isolation.</em></strong>
          <span className="history-chip">EXPLORE PATHWAYS <ArrowUpRight size={10} /></span>
          <div className="history-paths"><span>Citizenship</span><span>Education</span><span>Resistance</span></div>
        </div>
        <div className="history-orbit orbit-one" /><div className="history-orbit orbit-two" />
      </div>
    </div>
  );
  if (kind === 'mobile') return (
    <div className="project-visual visual-mobile" aria-label="Abstract mobile app design placeholder">
      <div className="mock-phone phone-back"><div className="phone-notch" /><span className="phone-muted">your next idea</span><div className="phone-block pale"/><div className="phone-block"/><div className="phone-block half"/></div>
      <div className="mock-phone phone-front"><div className="phone-notch"/><span className="phone-kicker">WELCOME BACK</span><h4>Find your<br/>flow.</h4><div className="phone-circle"><CircleDot size={47} strokeWidth={1}/></div><div className="phone-pill"/><div className="phone-line"/><div className="phone-line short"/></div>
      <span className="visual-caption">MOBILE EXPLORATIONS / 02</span>
    </div>
  );
  if (kind === 'editorial') return (
    <div className="project-visual visual-editorial" aria-label="Abstract website redesign placeholder">
      <div className="editorial-window"><div className="ed-nav"><b>FORM / FUNCTION</b><span>Studio &nbsp; Work &nbsp; Journal</span></div><div className="ed-layout"><div><small>CREATIVE STUDIO — 2026</small><h4>Better<br/>by design<span>.</span></h4><span className="ed-button">Discover more ↗</span></div><div className="ed-art"><div className="ed-sun"/><div className="ed-curve"/></div></div></div>
    </div>
  );
  if (kind === 'portfolio') return (
    <div className="project-visual visual-portfolio" aria-label="Abstract front-end portfolio preview">
      <div className="mock-code"><div className="code-tab"><span>● ● ●</span> App.jsx</div><div className="code-lines"><div><i>const</i> portfolio = {'{'}</div><div>&nbsp; design: <em>"intentional"</em>,</div><div>&nbsp; development: <em>"functional"</em>,</div><div>&nbsp; builtWith: [<em>"React"</em>, <em>"CSS"</em>]</div><div>{'};'}</div><div className="code-comment">// design meets development</div></div><div className="code-bottom"><Code2 size={14}/> BUILD SUCCESSFUL <span>↗</span></div></div>
    </div>
  );
  return (
    <div className="project-visual visual-components" aria-label="Abstract front-end component preview">
      <div className="component-board"><div className="component-top"><span><Layers3 size={15}/> UI SYSTEM</span><span>v1.0</span></div><div className="component-body"><div className="component-large"><div className="component-chart"><BarChart3 size={54} strokeWidth={1.3}/></div><strong>Build something good.</strong><small>Components / states / systems</small></div><div className="component-side"><div className="component-tile"><BookOpen size={22}/></div><div className="component-tile"><CircleDot size={22}/></div><div className="component-tile accent"><ArrowUpRight size={23}/></div></div></div></div>
    </div>
  );
}
