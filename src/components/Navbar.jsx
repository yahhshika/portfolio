import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle header shadow
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current visible section to highlight navbar links
      const sections = ['hero', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset including navbar height and padding

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo font-headline-md text-headline-md">
         YASHIKA SONI
        </div>
        <nav className="navbar-menu">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className={`navbar-link font-label-caps text-label-caps ${activeSection === 'hero' ? 'active' : ''}`}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, 'projects')}
            className={`navbar-link font-label-caps text-label-caps ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`navbar-link font-label-caps text-label-caps ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </a>
        </nav>
        <a className="navbar-btn font-label-caps text-label-caps" href='https://drive.google.com/file/d/1Y103QhWhSgn_WU7oETobO8M25PyfeCWc/view?usp=sharing' target='_blank'>
          Resume
        </a>
      </div>
    </header>
  );
}
