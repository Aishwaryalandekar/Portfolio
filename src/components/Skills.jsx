import React from 'react';
import '../assets/Style/Skills.css';

const categorizedSkills = {
  'Project Management Skills': [
    'Agile Project Management',
    'Agile & Waterfall Methodologies',
    'SCRUM',
    'Project Planning',
    'Project Scheduling',
    'Priority Management',
    'Cross Functional Team Collaboration',
    'Vendor Management',
    'Cost Management',
    'Risk Management',
    'Critical Thinking',
    'Time Management',
    'Innovative Thinking',
    'Effective Communication',
    'Public Speaking',
    'Collaborator',
  ],
  'Technical Skills': [
    'NPD',
    'PCC',
    'SAP',
    'Design Controls',
    'Engineering Analysis',
    'Mechanical Design',
    'FMEA',
    'DFSS',
    'FEA',
    'CAD',
    'CAE',
    'GD&T',
    'Injection Molding',
    'Structural Analysis',
    'Design Verification',
    'Design Validation',
    'Concept Screening',
    'Pugh Matrix',
    '3D Printing',
    'Medical Device Design',
    'Statistical Analysis',
    'ISO 14971',
    'ISO 13485',
    'FDA21CFR',
    'DHF',
  ],
};

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-box">
        <h3>Skills</h3>
        <div className="box">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h4 className="category-title">{category}</h4>
              <div className="skill-list">
                {skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
