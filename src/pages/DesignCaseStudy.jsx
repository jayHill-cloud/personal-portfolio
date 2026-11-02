import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { designProjects } from "../data/projects.js";
import { Eyebrow, ProjectTags, ActionLink } from "../components/UI.jsx";
import ProjectVisual from "../components/ProjectVisual.jsx";
import NotFound from "./NotFound.jsx";

export default function DesignCaseStudy() {
  const { slug } = useParams();
  const project = designProjects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  return (
    <div className="case-study design-case">
      <div className="shell case-head">
        <Link className="back-link" to="/design">
          <ArrowLeft size={16} /> ALL DESIGN WORK
        </Link>
        <Eyebrow number={`CASE STUDY / ${project.number}`}>
          {project.type}
        </Eyebrow>
        <h1>{project.heroStatement}</h1>
        <p>{project.summary}</p>
        <div className="case-meta">
          <div>
            <span>PROJECT</span>
            <strong>{project.title}</strong>
          </div>
          <div>
            <span>ROLE</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>STATUS</span>
            <strong>{project.status}</strong>
          </div>
        </div>
      </div>

      <div className="shell case-hero-image">
        <ProjectVisual
          kind={project.cover}
          image={project.image}
          alt={`${project.title} preview`}
        />
      </div>
      <div className="shell case-content">
        <aside className="case-sidebar">
          <span>IN THIS CASE STUDY</span>
          <a href="#overview">01 — Overview</a>
          <a href="#problem">02 — The problem</a>
          {project.sources?.length > 0 && (
            <a href="#sources">03 — Research & sources</a>
          )}
          <a href="#approach">04 — Approach</a>
          {project.designIterations?.length > 0 && (
            <a href="#design-evolution">05 — Design evolution</a>
          )}
          <a href="#decisions">06 — Design decisions</a>
          <a href="#outcome">07 — Reflection</a>
        </aside>
        <div className="case-article">
          <section id="overview">
            <Eyebrow number="01">THE OVERVIEW</Eyebrow>
            <h2>What is this project?</h2>
            <p>{project.overview}</p>
            <ProjectTags items={project.tools} />
          </section>
          <section id="problem">
            <Eyebrow number="02">THE PROBLEM</Eyebrow>
            <h2>Start with the why.</h2>
            <p>{project.problem}</p>
          </section>

          {/* RESEARCH & SUPPORTING SOURCES */}
          {project.sources?.length > 0 && (
            <section id="sources" className="sources-section">
              <Eyebrow number="03">RESEARCH & SUPPORTING EVIDENCE</Eyebrow>

              <h2>The research behind the problem.</h2>

              <p>
                These sources helped me understand the educational problem and
                informed the design decisions behind Black History Linked.
              </p>

              <div className="sources-list">
                {project.sources.map((source, index) => (
                  <article className="source-card" key={source.url}>
                    <span className="source-number">
                      SOURCE {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{source.title}</h3>

                    <p className="source-organization">
                      {source.organization} · {source.year}
                    </p>

                    <h4>What the research shows</h4>
                    <p>{source.finding}</p>

                    <h4>How it informed my design</h4>
                    <p>{source.relevance}</p>

                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="source-link"
                    >
                      View original source ↗
                    </a>
                  </article>
                ))}
              </div>
            </section>
          )}
          <section id="approach">
            <Eyebrow number="04">THE APPROACH</Eyebrow>
            <h2>Finding a way forward.</h2>
            <p>{project.approach}</p>
            <div className="case-note">
              {project.processImages?.map((image) => (
                <figure className="process-image" key={image.src}>
                  <img src={image.src} alt={image.alt} />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* DESIGN EVOLUTION */}
          {project.designIterations?.length > 0 && (
            <section id="design-evolution" className="design-evolution">
              <Eyebrow number="05">DESIGN EVOLUTION</Eyebrow>

              <h2>Designing through iteration.</h2>

              <p>
                Throughout the development of Black History Linked, I explored
                different approaches to organizing content, presenting
                historical relationships, and helping visitors navigate the
                website.
              </p>

              <div className="page-evolutions">
                {project.designIterations.map((page, pageIndex) => (
                  <div className="page-evolution" key={page.id}>
                    {/* PAGE HEADING */}
                    <div className="page-evolution-heading">
                      <span className="page-evolution-number">
                        PAGE {String(pageIndex + 1).padStart(2, "0")}
                      </span>

                      <h3>{page.title}</h3>

                      <p>{page.introduction}</p>
                    </div>

                    {/* THREE DESIGN EVOLUTIONS */}
                    <div className="evolution-versions">
                      {page.evolutions.map((evolution) => (
                        <article
                          className="evolution-version"
                          key={`${page.id}-${evolution.version}`}
                        >
                          <div className="evolution-version-heading">
                            <span>EVOLUTION {evolution.version}</span>

                            <h4>{evolution.title}</h4>
                          </div>

                          {/* SCREENSHOT */}
                          {evolution.image && (
                            <div
                              className="evolution-image"
                              tabIndex={0}
                              role="region"
                              aria-label={`Scrollable preview of ${evolution.title}`}
                            >
                              <img
                                src={evolution.image}
                                alt={`${evolution.title} screenshot`}
                                loading="lazy"
                              />
                            </div>
                          )}

                          {/* DESIGN EXPLANATION */}
                          <div className="evolution-details">
                            <div>
                              <h5>Design Overview</h5>
                              <p>{evolution.description}</p>
                            </div>

                            <div>
                              <h5>What Changed</h5>
                              <p>{evolution.changes}</p>
                            </div>

                            <div>
                              <h5>Reasoning Behind the Changes</h5>
                              <p>{evolution.reason}</p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section id="decisions">
            <Eyebrow number="06">KEY DESIGN DECISIONS</Eyebrow>
            <h2>Thoughtful choices.</h2>
            <div className="decision-list">
              {project.decisions.map((decision, i) => (
                <div key={decision}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <p>{decision}</p>
                  <CheckCircle2 size={19} />
                </div>
              ))}
            </div>
          </section>
          <section id="outcome">
            <Eyebrow number="07">REFLECTION & NEXT STEPS</Eyebrow>
            <h2>Keep learning. Keep refining.</h2>
            <p>{project.outcome}</p>
          </section>
        </div>
      </div>
      <div className="shell case-bottom">
        <span>END OF CASE STUDY — {project.title.toUpperCase()}</span>
        <ActionLink to="/design">See all design work</ActionLink>
      </div>
    </div>
  );
}
