import { useState } from "react";
import {
  ArrowDownRight,
  Braces,
  TerminalSquare,
  ArrowUpRight,
} from "lucide-react";
import { Eyebrow, ActionLink } from "../components/UI.jsx";
/*import ProjectCard from "../components/ProjectCard.jsx";*/
/*import { developmentProjects } from "../data/projects.js";*/

/*const filters = ["All", "Full Stack", "Front End"];

export default function DevelopmentPortfolio() {
  const [active, setActive] = useState("All");
  const visible =
    active === "All"
      ? developmentProjects
      : developmentProjects.filter((project) => project.category === active);
  return (*/
export default function DevelopmentPortfolio() {
  return (
    <div className="development-page">
      <section className="dev-hero shell">
        <div className="dev-hero-top">
          <Eyebrow number="DEVELOPMENT / 002">THE TECHNICAL SIDE</Eyebrow>
          <span className="micro-label">
            REACT · JAVASCRIPT · RESPONSIVE WEB
          </span>
        </div>
        <div className="dev-hero-grid">
          <div>
            <span className="dev-code-label">&lt;hello_world /&gt;</span>
            <h1>
              Built with
              <br />
              <span>purpose.</span>
            </h1>
            <p>
              From accessible components to interactive applications, I enjoy
              making thoughtful ideas work in the browser.
            </p>
            <a href="#dev-projects" className="dev-scroll">
              EXPLORE PROJECTS <ArrowDownRight size={19} />
            </a>
          </div>
          <div className="dev-hero-visual" aria-hidden="true">
            <div className="dev-window-top">
              <span>● ● ●</span>
              <span>portfolio.jsx</span>
              <Braces size={17} />
            </div>
            <div className="dev-window-body">
              <span className="line-no">01</span>
              <span className="syntax-purple">import</span> {"{"} creativity{" "}
              {"}"} <span className="syntax-purple">from</span>{" "}
              <span className="syntax-green">'ideas'</span>;<br />
              <span className="line-no">02</span>
              <br />
              <span className="line-no">03</span>
              <span className="syntax-purple">const</span> mission = {"{"}
              <br />
              <span className="line-no">04</span>&nbsp;&nbsp;design:{" "}
              <span className="syntax-green">'thoughtful'</span>,<br />
              <span className="line-no">05</span>&nbsp;&nbsp;code:{" "}
              <span className="syntax-green">'functional'</span>,<br />
              <span className="line-no">06</span>&nbsp;&nbsp;impact:{" "}
              <span className="syntax-yellow">true</span>
              <br />
              <span className="line-no">07</span>
              {"}"};<br />
              <span className="line-no">08</span>
              <br />
              <span className="line-no">09</span>
              <span className="syntax-muted">// keep building ↗</span>
            </div>
            <div className="dev-window-bottom">
              <span>
                <span className="dev-status-dot" /> READY TO BUILD
              </span>
              <span>UTF-8 · REACT</span>
            </div>
          </div>
        </div>
        <div className="dev-hero-bottom">
          <span>[ BUILD / LEARN / REPEAT ]</span>
          <span>SCROLL TO EXPLORE ↘</span>
        </div>
      </section>
      <div className="dev-technology-bar">
        <div className="shell">
          <span>THE TOOLKIT</span>
          <span>REACT</span>
          <span>JAVASCRIPT</span>
          <span>HTML / CSS</span>
          <span>EXPRESS</span>
          <span>POSTGRESQL</span>
        </div>
      </div>

      {/* FEATURED DEVELOPMENT PROJECTS */}
      <section className="gallery-section shell" id="dev-projects">
        <div className="gallery-heading">
          <div>
            <Eyebrow number="01">SELECTED DEVELOPMENT WORK</Eyebrow>

            <h2>
              Ideas become
              <br />
              <span>interactive.</span>
            </h2>
          </div>

          <p>
            Applications, interfaces, and experiments that demonstrate how I
            think through problems with code.
          </p>
        </div>

        {/* COMING SOON MESSAGE */}
        <div className="dev-coming-soon">
          <div className="coming-soon-top">
            <span>PROJECT DIRECTORY</span>
            <span>STATUS: IN DEVELOPMENT</span>
          </div>

          <div className="coming-soon-content">
            <div className="coming-soon-icon">
              <Braces size={38} />
            </div>

            <span className="coming-soon-label">// WORK IN PROGRESS</span>

            <h3>
              Something is
              <br />
              <span>in the works.</span>
            </h3>

            <p>
              I'm currently building and refining projects that showcase my
              front-end development skills. Check back soon to explore the
              applications, interfaces, and experiences I've created.
            </p>

            <div className="coming-soon-status">
              <span className="coming-soon-dot"></span>
              PROJECTS COMING SOON
            </div>
          </div>

          <div className="coming-soon-bottom">
            <span>BUILDING · LEARNING · IMPROVING</span>
            <span>001 / DEVELOPMENT</span>
          </div>
        </div>
      </section>

      <section className="dev-principles shell">
        <div>
          <Eyebrow number="02">HOW I BUILD</Eyebrow>
          <h2>
            Code that serves
            <br />
            <span>the experience.</span>
          </h2>
        </div>
        <div className="principles-list">
          <div>
            <span>01</span>
            <div>
              <h3>Responsive by default.</h3>
              <p>
                Interfaces should make sense across phones, tablets, and
                desktops.
              </p>
            </div>
            <ArrowUpRight size={18} />
          </div>
          <div>
            <span>02</span>
            <div>
              <h3>Clear component structure.</h3>
              <p>
                Readable, reusable code makes projects easier to grow and
                maintain.
              </p>
            </div>
            <ArrowUpRight size={18} />
          </div>
          <div>
            <span>03</span>
            <div>
              <h3>Learning through building.</h3>
              <p>
                I document decisions and keep improving the work, one iteration
                at a time.
              </p>
            </div>
            <ArrowUpRight size={18} />
          </div>
        </div>
      </section>
      <section className="section-cta shell">
        <p>CURIOUS ABOUT THE DESIGN PROCESS?</p>
        <h2>
          There's a reason
          <br />
          <span>behind every pixel.</span>
        </h2>
        <ActionLink to="/design">Explore UX/UI work</ActionLink>
      </section>
    </div>
  );
}
