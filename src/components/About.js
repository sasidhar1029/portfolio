import React from 'react';
import './About.css';

const stats = [
  { num: '2', label: 'Projects Shipped', sub: 'CRUD Apps & APIs' },
  { num: '7.7', label: 'CGPA', sub: 'B.Tech ECE — RGUKT' },
  { num: '3+', label: 'HackerRank Certs', sub: 'Java, SQL Basic & Intermediate' },
  { num: '1', label: 'Internship', sub: 'InternPe — Web Dev' },
];

export default function About() {
  return (
    <section className="about section-wrapper" id="about">
      <p className="section-label">Who I am</p>
      <h2 className="section-title">About Me</h2>
      <div className="section-divider" />

      <div className="about__grid">
        <div className="about__text">
          <p>
            I'm a <strong>motivated entry-level Java Full-Stack Developer</strong> from Markapur, Andhra Pradesh,
            with a strong foundation in Core Java, OOP principles, JDBC, SQL, and Spring Boot.
          </p>
          <p>
            I've built real projects including a <strong>Student Management System</strong> using Servlets, JSP, JDBC, and MySQL,
            and a <strong>RESTful Employee Management API</strong> using Spring Boot — tested end-to-end with Postman.
          </p>
          <p>
            My frontend skills span <strong>HTML5, CSS3, JavaScript (ES6)</strong>, and <strong>React.js</strong> basics —
            enough to build responsive, functional UIs that connect cleanly to backend APIs.
          </p>
          <p>
            I completed a <strong>Web Development Internship at InternPe</strong> (May–Jun 2024), where I built dynamic UI components
            and collaborated on debugging and enhancing application features.
          </p>
          <p>
            Outside code, I'm a <strong>South Zone Kabaddi player</strong>, an NSS member, and a team lead.
            I bring that same discipline and collaboration to software teams.
          </p>

          <div className="about__contacts">
            <a href="mailto:sasidhar1029@gmail.com" className="about__contact-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              sasidhar1029@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/sasidhar19" target="_blank" rel="noreferrer" className="about__contact-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              linkedin.com/in/sasidhar19
            </a>
            <span className="about__contact-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Markapur, Andhra Pradesh
            </span>
            <span className="about__contact-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>
              +91 93472 72990
            </span>
          </div>
        </div>

        <div className="about__stats">
          {stats.map((s) => (
            <div key={s.label} className="about__stat-card">
              <div className="about__stat-num">{s.num}</div>
              <div className="about__stat-label">{s.label}</div>
              <div className="about__stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
