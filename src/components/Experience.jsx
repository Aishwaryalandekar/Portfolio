// src/components/Experience.jsx
import React, { useState } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaBriefcase } from 'react-icons/fa';
import '../assets/Style/Experience.css';

const experiences = [
  {
    title: 'President',
    company: 'NextGenPM UMD',
    location: 'University of Maryland(UMD), College Park',
    date: 'April 2025 – Present',
    summary: 
    'As President, oversees marketing coordination and event logistics, working closely with the executive team to ensure effective execution. Initiated targeted digital promotions to boost engagement and attendance, and began analyzing event data to identify trends and establish performance benchmarks.',
    details: [],
    collapsible: false
  },
  {
    title: 'R&D Design Engineer III',
    company: 'Becton Dickinson (BD)',
    location: 'Bengaluru',
    date: 'July 2020 – July 2024',
    summary:
      'Successfully managed a global cross-functional team of 12 members across three time zones using agile project management principles. Delivered a critical adapter development project, driving $100 million in business impact, by ensuring 90% on-time completion of deliverables and mitigating risks through effective sprint planning and resource allocation.  Awarded Best Project Lead 2024 due to demonstrated commitment and significant achievements.',
    details: [
      'Spearheaded innovation initiative demonstrating strong commitment towards novel medical device designs by filing 4 invention disclosures and 1 US patent.',
      'Led global end-to-end design and development initiatives for adapters as a Project Lead, driving $100 million in business impact through agile project management and sprint planning.',
      'Developed and implemented comprehensive project plans and schedules for cross-functional teams to execute critical label changes, design control activities, and design verification processes considering all related risks.',
      'Efficiently managed 12 resources globally, across 3 time zones using SCRUM and agile project management to ensure 90% on-time project delivery and consistently met deadlines through effective priority management.',
      'Collaborated with multidisciplinary teams to achieve business goals, ensuring high-quality standards throughout the product lifecycle by promoting strong cross-functional collaboration.',
      'Implemented Pugh Matrix to screen and prioritize different innovation ideas for the innovation funnel in alignment with strategic company objectives and innovation goals.',
      'Refined shortlisted innovation ideas by creating a working SolidWorks model for proof of concept and applying engineering analysis for technical feasibility.',
      'Designed an automation tool that reduced manual effort and time by 30% for making textual and pictorial label changes, boosting operational efficiency.',
      'Piloted an internship program at BD, recruiting 17 interns from top Indian engineering schools and implementing a strategy with training, project shadowing, and mentor mapping.',
      'Launched the first Return to Workplace Program at BD for women after career breaks, successfully hiring 12 candidates and employing a comprehensive plan for hiring, training, and mentorship.'
    ],
    collapsible: true
  },
  {
    title: 'Summer Intern',
    company: 'C Tech Engineers',
    location: 'Pune',
    date: 'March 2019 – May 2019',
    summary:
      'Worked with the design team to create 2D CAD drawings in SolidWorks and AutoCAD, gaining expertise in GD&T and firsthand experience with CMM and CNC machines by learning G and M codes.',
    details: [],
    collapsible: false
  },
  {
    title: 'Student Government President',
    company: 'Cummins College of Engineering',
    location: 'Pune',
    date: 'July 2019 – May 2020',
    summary:
      'Successfully managed the end-to-end planning and execution of 100+ college technical and cultural events, coordinating a cross-functional team of 60 members. Secured $70,000 in sponsorships by implementing strategic stakeholder engagement and budgeting, ensuring all events were delivered on time and within budget.',
    details: [
      'Headed a team of 60 members from different departments to run the student government which oversaw organizing various events and activities across the campus.',
      'Organized national level technical and cultural events which drew participation from over 45 colleges and secured $70,000 in sponsorships.',
      'Represented the college while interacting with government agencies to attain NAAC and NBA accreditations.'
    ],
    collapsible: true
  }
];

function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);
  return (
    <VerticalTimelineElement
      date={exp.date}
      iconStyle={{ background: '#000', color: '#fff' }}
      icon={<FaBriefcase />}
    >
      <h3 className="vertical-timeline-element-title">{exp.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{exp.company}, {exp.location}</h4>
      <p className="timeline-summary">{exp.summary}</p>

      {exp.collapsible ? (
        <>
          <button className="details-toggle" onClick={() => setOpen(o => !o)}>
            {open ? 'Hide details' : 'Show details'}
          </button>
          {open && (
            <ul className="timeline-details">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
        </>
      ) : (
        exp.details.length > 0 && (
          <ul className="timeline-details">
            {exp.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )
      )}
    </VerticalTimelineElement>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">Career History</h2>
      <VerticalTimeline>
        {experiences.map((exp, idx) => (
          <ExperienceCard exp={exp} key={idx} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
