import React from "react";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import "../assets/Style/Hero.css";

export default function Hero() {
  const scrollTo = (id) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="hero-nav">
        <ul>
          <li onClick={scrollTo('about')}>About</li>
          <li onClick={scrollTo('education')}>Education</li>
          <li onClick={scrollTo('experience')}>Experience</li>
          <li onClick={scrollTo('projects')}>Projects</li>
          <li onClick={scrollTo('contact')}>Contact</li>
        </ul>
      </nav>
      <section id="hero" className="hero-parallax">
        <div className="hero-inner">
        <img src={`${import.meta.env.BASE_URL}profile1.jpg`} alt="Profile" className="profile-img" />
          <div className="hero-text">
            <h1>Aishwarya Landekar</h1>
            <p>
              <strong>Program Manager</strong> | <strong>Project Manager</strong> |{' '}
              <strong>Team Lead</strong>
            </p>
            <p>
              <strong>MS in Engineering Management @ UMD</strong> |{' '}
              <strong>Former Mechanical Design Engineer III @ BD</strong>
            </p>
            <div className="statement">
              Leading with precision, fueled by ambition, I turn big ideas into flawless execution.
            </div>
            <div className="hero-links">
              <a href="mailto:your.email@example.com" className="hero-link" title="Email">
                <FiMail className="icon icon-mail" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link"
                title="LinkedIn"
              >
                <FaLinkedin className="icon icon-linkedin" size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
