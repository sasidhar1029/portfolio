import React from 'react';
import './Experience.css';

const timeline = [
  {
    period: 'May 2024 – Jun 2024',
    role: 'Web Development Intern',
    org: 'InternPe',
    type: 'Internship',
    points: [
      'Developed dynamic UI components using HTML, CSS, and JavaScript',
      'Supported backend functionality integration with the frontend',
      'Collaborated with team members to debug and enhance application features',
    ],
  },
  {
    period: '2021 – 2025',
    role: 'B.Tech — Electronics & Communication Engineering',
    org: 'RGUKT, Ongole (IIIT Ongole)',
    type: 'Education · CGPA 7.7',
    points: [
      'Graduating 2025 with CGPA of 7.7',
      'Team Lead for Mini Project — coordinated development across team members',
      'NSS Member — community service and leadership activities',
      'South Zone Kabaddi Player — discipline and team collaboration',
    ],
  },
  {
    period: '2024',
    role: 'Technology Consulting Job Simulation',
    org: 'Accenture Australia',
    type: 'Certification',
    points: [
      "Completed Accenture's Technology Consulting simulation",
      'Gained exposure to enterprise consulting workflows and tech strategy',
      'Applied structured problem-solving in a business context',
    ],
  },
];

const certs = [
  { name: 'SQL (Basic)', issuer: 'HackerRank', color: '#00D4FF' },
  { name: 'SQL (Intermediate)', issuer: 'HackerRank', color: '#00D4FF' },
  { name: 'Java (Basic)', issuer: 'HackerRank', color: '#64FFDA' },
  { name: 'Tech Consulting Simulation', issuer: 'Accenture Australia', color: '#FF6B6B' },
];

export default function Experience() {
  return (
    <section className="experience section-wrapper" id="experience">
      <p className="section-label">Background</p>
      <h2 className="section-title">Experience & Education</h2>
      <div className="section-divider" />

      <div className="experience__layout">
        <div className="experience__timeline">
          {timeline.map((item, i) => (
            <div key={i} className="experience__item">
              <div className="experience__dot" />
              <div className="experience__content">
                <div className="experience__meta">
                  <span className="experience__period">{item.period}</span>
                  <span className="experience__type-badge">{item.type}</span>
                </div>
                <h3 className="experience__role">{item.role}</h3>
                <p className="experience__org">{item.org}</p>
                <ul className="experience__points">
                  {item.points.map((pt, j) => (
                    <li key={j}>
                      <span className="experience__bullet">▸</span>{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="experience__side">
          <h3 className="experience__side-title">Certifications</h3>
          <div className="experience__certs">
            {certs.map((c) => (
              <div key={c.name} className="experience__cert-card" style={{ '--cert-color': c.color }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
                <div>
                  <div className="experience__cert-name">{c.name}</div>
                  <div className="experience__cert-issuer">{c.issuer}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="experience__side-title" style={{ marginTop: '2rem' }}>Extracurriculars</h3>
          <div className="experience__extras">
            {['🏐 South Zone Kabaddi Player', '👥 Team Lead — Mini Project', '🌱 NSS Member'].map((e) => (
              <div key={e} className="experience__extra-item">{e}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
