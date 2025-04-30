import React from 'react';
import '../assets/Style/Projects.css';

const projects = [
  {
    title: 'Tugboat Project',
    period: 'Introduction to Project Management',
    description: 'As project owner, I ​oversaw the entire process and make final project decisions. Once the architects and workers coordinated and presented a proposal, I along with my team reviewed the design, material choices, and costs to ensure everything aligns with the project’s goals and budget. My team and I evaluated whether the tugboat meets our expectations. After careful deliberation, I finalized the proposal, ensuring the design, assembly, and functionality meet our standards. My job as the owner of the project was to ensure the project stays on track, within budget, and is delivered successfully.',
    details: [
      'Reviewed architect and contractor proposals for design, materials, and costs to align with project goals.',
      'Evaluated tugboat performance against expectations before final approval.',
      'Ensured project stayed on track and within budget through regular progress reviews.',
      'Finalized proposals and coordinated with stakeholders to deliver a successful project.'
    ]
  },
  {
    title: 'Central 70 Project',
    period: 'Procurement Management',
    description: 'Systematically collected and organized all relevant project documents and news, forming the foundation for a comprehensive project review paper. The paper covered key aspects such as project background, timeline, ownership, contractor details, and processes. Conducted in-depth analysis on topics including Benefit Cost Analysis, Financial Assessment, Financing Plan, Value for Money Analysis, Stakeholder Analysis, Performance Analysis, and Failure Mode Detection. Developed a comparative report aligning individual analyses with available resources and presented findings through a detailed 15-minute slide presentation, providing critical insights and fostering an understanding of the project management and execution.',
    details: [
      'Collected and organized project documents, forming the basis for the review paper.',
      'Analyzed Benefit Cost, Value for Money, Stakeholder, and Performance metrics.',
      'Developed financing plan and conducted Failure Mode Detection analysis.',
      'Presented findings in a 15-minute slide deck, offering critical insights into project management and execution.'
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Academic Projects</h2>
      <div className="projects-container">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-period">{proj.period}</p>
            <p className="project-desc">{proj.description}</p>
            <button
              className="details-toggle"
              onClick={e => {
                const details = e.currentTarget.nextElementSibling;
                details.classList.toggle('open');
              }}
            >
              Show Details
            </button>
            <ul className="project-details">
              {proj.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
