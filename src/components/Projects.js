import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'Student Management System',
    desc: 'Real-time CRUD-based web application for managing student records. Built with MVC architecture, MySQL via JDBC, session handling, input validation, and exception handling.',
    highlights: [
      'MVC architecture for clean layer separation',
      'MySQL database integration using JDBC',
      'Session management & input validations',
      'Full CRUD: Add, View, Update, Delete students',
    ],
    tech: ['Java', 'Servlets', 'JSP', 'JavaScript', 'MySQL', 'JDBC'],
    type: 'Full-Stack Web App',
    color: '#00D4FF',
  },
  {
    id: '02',
    title: 'RESTful Employee Management API',
    desc: 'Backend REST API service for managing employee records with full HTTP method coverage. Follows REST standards and was tested end-to-end using Postman.',
    highlights: [
      'GET, POST, PUT, PATCH, DELETE endpoints',
      'REST architecture & best practices',
      'MySQL database persistence',
      'Tested thoroughly with Postman',
    ],
    tech: ['Spring Boot', 'Java', 'MySQL', 'REST API', 'Postman'],
    type: 'REST API',
    color: '#FF6B6B',
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section className="projects section-wrapper" id="projects">
      <p className="section-label">What I've built</p>
      <h2 className="section-title">Projects</h2>
      <div className="section-divider" />

      <div className="projects__grid">
        {projects.map((p) => (
          <div
            key={p.id}
            className={`project-card ${active === p.id ? 'project-card--active' : ''}`}
            style={{ '--project-color': p.color }}
            onMouseEnter={() => setActive(p.id)}
            onMouseLeave={() => setActive(null)}
          >
            <div className="project-card__top-bar" />
            <div className="project-card__header">
              <span className="project-card__num">PROJECT / {p.id}</span>
              <span className="project-card__type">{p.type}</span>
            </div>
            <h3 className="project-card__title">{p.title}</h3>
            <p className="project-card__desc">{p.desc}</p>
            <ul className="project-card__highlights">
              {p.highlights.map((h) => (
                <li key={h}>
                  <span className="project-card__bullet">▸</span>{h}
                </li>
              ))}
            </ul>
            <div className="project-card__tech">
              {p.tech.map((t) => (
                <span key={t} className="project-card__tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="projects__note">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        Source code available on request · GitHub profile linked in contact section
      </div>
    </section>
  );
}
