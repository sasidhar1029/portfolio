import React, { useState } from 'react';
import './Skills.css';

const skillGroups = [
  {
    icon: '☕',
    title: 'Core Java',
    tags: ['OOP Principles', 'Strings', 'Exception Handling', 'Interfaces', 'Abstract Classes', 'Collections', 'Multithreading', 'Constructors'],
  },
  {
    icon: '🍃',
    title: 'Spring Boot',
    tags: ['Spring Boot Basics', 'REST Controller', 'Dependency Injection', 'Annotations', 'CRUD REST APIs', 'Spring MVC'],
  },
  {
    icon: '🗄️',
    title: 'Database & JDBC',
    tags: ['MySQL', 'SQL', 'JDBC', 'CRUD Operations', 'Joins', 'Subqueries', 'Group By & Having', 'Views'],
  },
  {
    icon: '⚛️',
    title: 'Frontend',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'DOM Manipulation', 'React.js', 'Components', 'Props', 'State'],
  },
  {
    icon: '🔌',
    title: 'REST APIs',
    tags: ['REST Architecture', 'GET / POST / PUT / DELETE', 'Client-Server', 'API Testing', 'Postman'],
  },
  {
    icon: '🛠️',
    title: 'Tools',
    tags: ['Git & GitHub', 'Eclipse', 'VS Code', 'MySQL Workbench', 'Maven', 'Postman'],
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="skills section-wrapper" id="skills">
      <p className="section-label">What I work with</p>
      <h2 className="section-title">Tech Stack</h2>
      <div className="section-divider" />

      <div className="skills__grid">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className={`skills__card ${hovered === g.title ? 'skills__card--active' : ''}`}
            onMouseEnter={() => setHovered(g.title)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="skills__card-icon">{g.icon}</div>
            <h3 className="skills__card-title">{g.title}</h3>
            <div className="skills__tags">
              {g.tags.map((t) => (
                <span key={t} className="skills__tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
