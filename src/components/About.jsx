import React from 'react';
import '../assets/Style/About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>

        {/* Embedded local video; wraps text around it */}
        <div className="about-video-container">
          <video
            className="about-video"
            src={`${import.meta.env.BASE_URL}videos/about-me.mp4`}  // Place your video file in public/videos/
            controls
            muted
            loop
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <p>
          I’m a dynamic project manager with a Mechanical Engineering foundation and over four years of leading R&D initiatives from concept through delivery. Currently pursuing an M.S. in Project Management at the University of Maryland, I excel in Agile methodologies, risk mitigation, and cross-functional collaboration.
        </p>
        <p>
          Throughout my career, I’ve managed global teams and delivered projects generating over $100 million in business value. I’ve architected and implemented proprietary tools to streamline operations and enhance efficiency, consistently aligning technical precision with strategic goals.
        </p>
        <p>
          My e-portfolio highlights a journey of driving innovation, optimizing processes, and fostering collaborative environments. Guided by my brand statement—“Leading with precision, fueled by ambition, I turn big ideas into flawless execution.”—I ensure on-time delivery and transform complex challenges into growth opportunities.
        </p>
        <p>
          My motto is “Do not rest, till you do your best.” As a future portfolio and platform leader, I aim to leverage my project management expertise to champion high-impact initiatives from ideation to execution, driving significant returns and meaningful impact on people’s lives.
        </p>
      </div>
    </section>
  );
}
