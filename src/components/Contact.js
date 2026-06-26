import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('sasidhar1029@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact section-wrapper" id="contact">
      <div className="contact__inner">
        <p className="section-label" style={{ textAlign: 'center' }}>Get in touch</p>
        <h2 className="contact__heading">
          Let's build something <span className="contact__accent">real.</span>
        </h2>
        <p className="contact__desc">
          I'm actively looking for Java Full-Stack Developer roles and internships.
          If you're building something meaningful and need someone who can work
          across the full stack — let's talk.
        </p>

        <a href="mailto:sasidhar1029@gmail.com" className="btn-primary contact__cta">
          Send me an email →
        </a>

        <div className="contact__links">
          <button className="contact__link-item" onClick={copyEmail}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            {copied ? '✓ Copied!' : 'sasidhar1029@gmail.com'}
          </button>

          <a
            href="https://www.linkedin.com/in/sasidhar19"
            target="_blank"
            rel="noreferrer"
            className="contact__link-item"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>

          <a href="tel:+919347272990" className="contact__link-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
            </svg>
            +91 93472 72990
          </a>
        </div>
      </div>
    </section>
  );
}
