import React, { useState, useEffect } from 'react';
import './Hero.css';

const ROLES = [
  'Java Full-Stack Developer',
  'Spring Boot Engineer',
  'React.js Developer',
  'REST API Architect',
  'MySQL & JDBC Specialist',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setText(current.slice(0, charIdx - 1));
        if (charIdx - 1 < 0) {
          setDeleting(false);
          setRoleIdx((r) => (r + 1) % ROLES.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section className="hero" id="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-line" />
          Available for opportunities · Hyderabad, AP
        </p>

        <h1 className="hero__name">
          Sasidhar<br />
          <span className="hero__name-accent">Reddy.</span>
        </h1>

        <p className="hero__role">
          <span className="hero__role-text">{text}</span>
          <span className="hero__cursor" aria-hidden="true" />
        </p>

        <p className="hero__desc">
          Entry-level Java Full-Stack Developer with hands-on experience in building
          CRUD-based web apps, RESTful APIs, and MySQL-backed systems. I write clean,
          structured code that's built to scale.
        </p>

        <div className="hero__ctas">
          <a href="#projects" className="btn-primary">View Projects →</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>

        <div className="hero__badges">
          {['Spring Boot', 'React.js', 'Java', 'MySQL', 'REST APIs', 'Git'].map((b) => (
            <span key={b} className="hero__badge">{b}</span>
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
