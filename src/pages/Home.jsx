import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  PenTool,
  Sparkles,
  MoveUpRight,
  CircleDot,
} from "lucide-react";
import { profile } from "../data/profile.js";
import { Eyebrow, ActionLink } from "../components/UI.jsx";
import ProjectVisual from "../components/ProjectVisual.jsx";

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero shell">
        <div className="availability">
          <span className="availability-dot" /> {profile.availability}
        </div>
        <p className="micro-label hero-overline">
          HELLO, I'M {profile.name.toUpperCase()}{" "}
          <span className="sparkle">✳</span>
        </p>
        <h1>
          Good design.
          <br />
          <span>Real purpose.</span>
          <span className="hero-asterisk">*</span>
        </h1>
        <div className="home-hero-bottom">
          <p>
            I turn ideas into thoughtful digital experiences — from the first
            wireframe to the final line of code.
          </p>
          <a href="#choose-path" className="scroll-prompt">
            EXPLORE WHAT I DO <ArrowDownRight size={19} />
          </a>
        </div>
        <div className="hero-decoration" aria-hidden="true">
          <div className="hero-ring ring-a" />
          <div className="hero-ring ring-b" />
          <div className="hero-ring ring-c" />
        </div>
      </section>

      <section className="choose-path shell" id="choose-path">
        <div className="path-section-top">
          <Eyebrow number="01">TWO SIDES OF MY WORK</Eyebrow>
          <p>
            Different disciplines. One shared goal: creating experiences that
            work better for people.
          </p>
        </div>
        <div className="path-grid">
          <Link to="/design" className="path-card path-design">
            <div className="path-card-top">
              <span>01 / CREATIVE PRACTICE</span>
              <ArrowUpRight size={22} />
            </div>
            <div className="path-art path-art-design" aria-hidden="true">
              <div className="path-art-disc">
                <div className="path-art-inner">Aa</div>
              </div>
              <span className="path-art-cross">✳</span>
              <span className="path-art-small">
                FORM
                <br />
                FOLLOWS
                <br />
                FEELING.
              </span>
            </div>
            <div className="path-card-bottom">
              <div className="path-icon">
                <PenTool size={21} />
              </div>
              <h2>
                UX/UI
                <br />
                Design<span>.</span>
              </h2>
              <p>
                Research, visual storytelling, prototypes, and interfaces made
                with people in mind.
              </p>
              <span className="path-action">
                EXPLORE DESIGN WORK <MoveUpRight size={16} />
              </span>
            </div>
          </Link>
          <Link to="/development" className="path-card path-development">
            <div className="path-card-top">
              <span>02 / TECHNICAL PRACTICE</span>
              <ArrowUpRight size={22} />
            </div>
            <div className="path-art path-art-dev" aria-hidden="true">
              <div className="terminal-mini">
                <div className="terminal-mini-head">
                  <span>● ● ●</span>
                  <span>hello-world.jsx</span>
                </div>
                <div className="terminal-mini-body">
                  <span className="terminal-violet">const</span> idea ={" "}
                  <span className="terminal-green">'possible'</span>;<br />
                  <span className="terminal-violet">function</span>{" "}
                  <span className="terminal-yellow">build</span>() {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="terminal-violet">
                    return
                  </span>{" "}
                  &lt;<span className="terminal-yellow">Experience</span> /&gt;;
                  <br />
                  {"}"}
                </div>
              </div>
              <span className="terminal-halo" />
            </div>
            <div className="path-card-bottom">
              <div className="path-icon">
                <Code2 size={21} />
              </div>
              <h2>
                Front-End
                <br />
                Development<span>.</span>
              </h2>
              <p>
                Responsive websites, interactive interfaces, and real
                applications built with code.
              </p>
              <span className="path-action">
                EXPLORE CODE PROJECTS <MoveUpRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="home-feature shell">
        <div className="feature-heading">
          <div>
            <Eyebrow number="02">FEATURED PROJECT</Eyebrow>
            <h2>
              One project.
              <br />
              <em>Two perspectives.</em>
            </h2>
          </div>
          <span className="feature-stamp">
            <CircleDot size={27} />
            <span>
              DESIGN
              <br />× CODE
            </span>
          </span>
        </div>
        <div className="feature-content">
          <div className="feature-visual">
            <ProjectVisual kind="history" />
          </div>
          <div className="feature-copy">
            <span className="micro-label">SENIOR PROJECT / IN PROGRESS</span>
            <h3>
              Black History
              <br />
              Linked<span>.</span>
            </h3>
            <p>
              An interactive educational platform exploring the connections
              between Black historical events and societal issues today.
            </p>
            <div className="feature-links">
              <ActionLink to="/design/black-history-linked" variant="outline">
                See the design process
              </ActionLink>
              <ActionLink
                to="/development/black-history-linked"
                variant="outline"
              >
                Explore the development
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="home-statement">
        <div className="shell home-statement-inner">
          <Sparkles size={34} />
          <p>
            I believe the best digital experiences happen when{" "}
            <strong>design thinking</strong> meets{" "}
            <strong>usability goals</strong>
          </p>
          <span>THAT'S WHERE I LIKE TO WORK. ↗</span>
        </div>
      </section>

      <section className="home-next shell">
        <div>
          <Eyebrow number="03">MORE ABOUT ME</Eyebrow>
          <h2>
            Curious by nature.
            <br />
            <span>Always building.</span>
          </h2>
        </div>
        <div>
          <p>{profile.bio}</p>
          <ActionLink to="/about">Get to know me</ActionLink>
        </div>
      </section>
      <section className="home-cta shell">
        <div>
          <span className="micro-label">HAVE SOMETHING IN MIND?</span>
          <h2>
            Let's make
            <br />
            <em>it matter.</em>
          </h2>
        </div>
        <Link to="/contact" className="round-arrow" aria-label="Contact me">
          <ArrowUpRight size={42} strokeWidth={1.4} />
        </Link>
      </section>
    </div>
  );
}
