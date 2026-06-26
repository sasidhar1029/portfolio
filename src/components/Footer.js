import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <span className="footer__logo">
          <span className="footer__logo-dim">{'<'}</span>
          sasi<span className="footer__logo-accent">.dev</span>
          <span className="footer__logo-dim">{'/>'}</span>
        </span>
      </div>
      <div className="footer__center">
        Designed & built by <span className="footer__name">Sasidhar Reddy</span>
        <span className="footer__heart"> ♥ </span>
        with React.js
      </div>
      <div className="footer__right">
        Markapur, AP · Open to remote
      </div>
    </footer>
  );
}
