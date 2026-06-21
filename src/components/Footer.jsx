import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-logo font-headline-md text-headline-md font-bold">
          Yashika Soni
        </div>
        <p className="footer-copy font-body-md text-body-md">
          © 2026 Portfolio. All rights reserved.
        </p>
        <div className="footer-socials">
          {/* <a
            className="footer-social-link font-body-md text-body-md"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a> */}
          <a
            className="footer-social-link font-body-md text-body-md"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {/* <a
            className="footer-social-link font-body-md text-body-md"
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a> */}
        </div>
      </div>
    </footer>
  );
}
