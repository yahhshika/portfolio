import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Hero.css';

export default function Hero() {
  const scrollRef = useScrollAnimation();

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={scrollRef} className="hero-section fade-in-section" id="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-title font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero">
            Hello, I'm <span className="hero-title-accent">Yashika Soni</span>
          </h1>
          <p className="hero-description font-headline-lg text-headline-lg">
            Full Stack Developer specializing in MERN applications,
            scalable backend systems, and problem-solving through
            clean architecture and efficient code.
          </p>
          <div className="hero-buttons">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="hero-btn-primary hover-lift font-label-caps text-label-caps"
            >
              View My Work
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="hero-btn-ghost font-label-caps text-label-caps"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      {/* Background visual element */}
      <div className="hero-background-glow">
        <div className="hero-glow-circle"></div>
      </div>
    </section>
  );
}
