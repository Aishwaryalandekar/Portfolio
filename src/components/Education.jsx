// src/components/Education.jsx
import React, { useState } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGraduationCap } from 'react-icons/fa';
import '../assets/Style/Education.css';

const education = [
  {
    degree: 'M.Eng. in Project Management',
    institution: 'University of Maryland, College Park (UMD)',
    date: 'August 2024 – Expected May 2026',
    gpa: '4.00/4.00',
    coursework: [
      'Project Management',
      'Project Procurement Management',
      'Communications for Project Managers'
    ],
    collapsible: true
  },
  {
    degree: 'B. Tech in Mechanical Engineering',
    institution: 'Savitribai Phule Pune University, Pune (SPPU)',
    date: 'July 2016 – May 2020',
    gpa: '3.20/4.00',
    coursework: [
      'Engineering Mechanics',
      'Strength of Materials',
      'Theory of Machines',
      'Operation Research'
    ],
    collapsible: true
  }
];

function EducationItem({ edu }) {
  const [open, setOpen] = useState(false);
  return (
    <VerticalTimelineElement
      date={edu.date}
      iconStyle={{ background: '#000', color: '#fff' }}
      icon={<FaGraduationCap />}
    >
      <h3 className="vertical-timeline-element-title">{edu.degree}</h3>
      <h4 className="vertical-timeline-element-subtitle">{edu.institution}</h4>
      {edu.gpa && <p className="edu-gpa">GPA: {edu.gpa}</p>}
      {edu.collapsible && (
        <>
          <button className="details-toggle" onClick={() => setOpen(o => !o)}>
            {open ? 'Hide Coursework' : 'Show Coursework'}
          </button>
          {open && (
            <div className="edu-coursework">
              <h5>Relevant Coursework:</h5>
              <ul>
                {edu.coursework.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </VerticalTimelineElement>
  );
}

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="education-heading">Education</h2>
      <VerticalTimeline>
        {education.map((edu, idx) => (
          <EducationItem edu={edu} key={idx} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
