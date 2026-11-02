import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
} from "lucide-react";
import { profile } from "../data/profile.js";
import { Eyebrow } from "../components/UI.jsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }
  return (
    <div className="contact-page">
      <div className="shell contact-main">
        <Eyebrow number="CONTACT / 004">LET'S START A CONVERSATION</Eyebrow>
        <div className="contact-layout">
          <div>
            <p className="micro-label">HAVE SOMETHING IN MIND?</p>
            <h1>
              Let's create
              <br />
              <em>something</em>
              <br />
              meaningful<span>.</span>
            </h1>
            <p className="contact-intro">
              Whether it's an internship, a job opportunity, or just a
              conversation about design and technology, I'd love to connect.
            </p>
            <div className="contact-availability">
              <span className="availability-dot" />
              {profile.availability}
            </div>
          </div>
          <div className="contact-panel">
            <span className="micro-label">THE EASIEST WAY TO REACH ME</span>
            <Mail size={31} strokeWidth={1.4} />
            <h2>Send me a Message.</h2>
            <p>
              My inbox is a good place to start. Tell me about your opportunity
              or what you have in mind.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email} <ArrowUpRight size={20} />
            </a>
            <button className="copy-button" type="button" onClick={copyEmail}>
              {copied ? <Check size={16} /> : <Copy size={16} />}{" "}
              {copied ? "Email copied" : "Copy email address"}
            </button>
            <div className="social-block">
              <span className="micro-label">ELSEWHERE ONLINE</span>
              {profile.links.linkedin && (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18} /> LinkedIn <ArrowUpRight size={16} />
                </a>
              )}
              {profile.links.github && (
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub <ArrowUpRight size={16} />
                </a>
              )}
              {!profile.links.linkedin && !profile.links.github && (
                <p>
                  Add your GitHub and LinkedIn URLs in{" "}
                  <code>src/data/profile.js</code> to show social links here.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
