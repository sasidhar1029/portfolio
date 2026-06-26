import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar__logo">
        <span className="navbar__logo-bracket">{'<'}</span>
        sasi
        <span className="navbar__logo-accent">.dev</span>
        <span className="navbar__logo-bracket">{'/>'}</span>
      </a>

      <ul className="navbar__links">
        {navLinks.map((l) => (
          <li key={l.label}>
            <button className="navbar__link" onClick={() => handleNav(l.href)}>
              {l.label}
            </button>
          </li>
        ))}
        <li>
          <a
            className="navbar__resume"
            href="mailto:sasidhar1029@gmail.com"
          >
            Hire Me
          </a>
        </li>
      </ul>

      <button
        className={`navbar__burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((p) => !p)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((l) => (
            <button key={l.label} className="navbar__mobile-link" onClick={() => handleNav(l.href)}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
