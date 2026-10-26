import {
  ArrowUpRight,
  PenTool,
  Code2,
  Lightbulb,
  GraduationCap,
} from "lucide-react";
import { profile } from "../data/profile.js";
import { Eyebrow, ActionLink, ProjectTags } from "../components/UI.jsx";

const designSkills = [
  "Figma",
  "Wireframing",
  "Prototyping",
  "UI Design",
  "Information Architecture",
  "Accessibility",
];
const devSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Responsive Layouts",
  "Express / PostgreSQL (learning)",
];

export default function About() {
  return (
    <div className="about-page">
      <section className="shell about-hero">
        <Eyebrow number="ABOUT / 003">THE PERSON BEHIND THE PIXELS</Eyebrow>
        <h1>
          Equal parts curiosity
          <br />
          and <em>creativity.</em>
        </h1>
        <div className="about-hero-lower">
          <div
            className="about-monogram"
            aria-label={`${profile.initials} initials`}
          >
            <span>{profile.initials}</span>
            <small>
              DESIGNER
              <br />/ DEVELOPER
            </small>
          </div>
          <div>
            <span className="micro-label">A LITTLE INTRODUCTION</span>
            <h2>
              Hi, I'm {profile.name}
              <span>.</span>
            </h2>
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="shell about-values">
        <Eyebrow number="01">HOW I THINK</Eyebrow>
        <h2>
          Different skills.
          <br />
          <em>One way of thinking.</em>
        </h2>
        <div className="value-grid">
          <article>
            <Lightbulb size={25} />
            <span>01 / CURIOSITY</span>
            <h3>Ask why first.</h3>
            <p>
              Understanding the problem matters more than rushing toward a
              solution.
            </p>
          </article>
          <article>
            <PenTool size={25} />
            <span>02 / DESIGN</span>
            <h3>Make it intuitive.</h3>
            <p>
              Good visual design helps people find what they need without extra
              effort.
            </p>
          </article>
          <article>
            <Code2 size={25} />
            <span>03 / DEVELOPMENT</span>
            <h3>Bring it to life.</h3>
            <p>
              Building interfaces helps me understand what great ideas need to
              become real.
            </p>
          </article>
        </div>
      </section>
      <section className="shell about-skills">
        <div>
          <Eyebrow number="02">TOOLS & INTERESTS</Eyebrow>
          <h2>
            What I bring
            <br />
            to the table<span>.</span>
          </h2>
          <p>
            These reflect skills I work with and areas I'm actively
            developing—not a claim of expert-level experience in every tool.
          </p>
        </div>
        <div className="skill-columns">
          <div>
            <h3>
              <PenTool size={20} /> DESIGN
            </h3>
            <ProjectTags items={designSkills} />
          </div>
          <div>
            <h3>
              <Code2 size={20} /> DEVELOPMENT
            </h3>
            <ProjectTags items={devSkills} />
          </div>
        </div>
      </section>
      <section className="shell about-education">
        <GraduationCap size={32} />
        <div>
          <span className="micro-label">EDUCATION</span>
          <h3>Information Technology</h3>
          <p>Web Development concentration · University of South Alabama</p>
        </div>
      </section>
      <section className="section-cta shell">
        <p>WANT TO WORK TOGETHER?</p>
        <h2>
          There's always more
          <br />
          <em>to create.</em>
        </h2>
        <ActionLink to="/contact">Get in touch</ActionLink>
        {profile.links.resume && (
          <a
            className="resume-link"
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
          >
            VIEW RÉSUMÉ <ArrowUpRight size={16} />
          </a>
        )}
      </section>
    </div>
  );
}
