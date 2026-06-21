import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Contact.css';

export default function Contact() {
  const scrollRef = useScrollAnimation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email send action
    console.log('Sending message:', formState);
    alert(`Thank you, ${formState.name}! Your message has been sent successfully.`);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section ref={scrollRef} className="contact-section fade-in-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title font-headline-lg text-headline-lg">
            Get in Touch
          </h2>
          <p className="contact-desc font-body-lg text-body-lg">
            I'm currently available for freelance projects and full-time creative opportunities. Let's build something exceptional together.
          </p>
          <div className="contact-list">
            <div className="contact-item">
              <div className="contact-item-icon-wrapper">
                <span className="material-symbols-outlined contact-item-icon">
                  mail
                </span>
              </div>
              <span className="contact-item-text font-headline-md text-headline-md">
                soniyashika1619@gmail.com
              </span>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon-wrapper">
                <span className="material-symbols-outlined contact-item-icon">
                  location_on
                </span>
              </div>
              <span className="contact-item-text font-body-md text-body-md">
                Delhi, India
              </span>
            </div>
          </div>
        </div>

        {/* <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label
                  className="contact-form-label font-label-caps text-label-caps"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="contact-form-input font-body-md text-body-md"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  type="text"
                  required
                />
              </div>
              <div className="contact-form-group">
                <label
                  className="contact-form-label font-label-caps text-label-caps"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="contact-form-input font-body-md text-body-md"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  type="email"
                  required
                />
              </div>
            </div>
            <div className="contact-form-group">
              <label
                className="contact-form-label font-label-caps text-label-caps"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="contact-form-textarea font-body-md text-body-md"
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="4"
                required
              />
            </div>
            <button
              className="contact-form-btn hover-lift font-label-caps text-label-caps"
              type="submit"
            >
              Send Message
            </button>
          </form>
          
        </div> */}
        {/* <div className="contact-form-container">
          <h3 className="contact-title">Connect me via</h3>

          <p className="contact-subtitle">
            Open to internships, freelance work, and exciting web development
            opportunities.
          </p>

          <div className="contact-links">
            <a
              href="mailto:soniyashika1619@gmail.com"
              className="contact-link"
            >
              📧 Email Me
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              💼 LinkedIn
            </a>

            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              🐙 GitHub
            </a>
          </div>
        </div> */}

<div className="contact-form-container connect-card">
  <div className="connect-header">
    <h3>Build With Me</h3>

    <p>
      Currently seeking internships, freelance projects,
      and full-stack development opportunities.
    </p>
  </div>

  <div className="connect-links">

    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=soniyashika1619@gmail.com&su=Portfolio%20Inquiry"
      target="_blank"
      rel="noreferrer"
      className="connect-link"
    >
      <span>✉</span>
      <div>
        <h4>Email</h4>
        <p>Drop me a message</p>
      </div>
      <span className="arrow">→</span>
    </a>

    <a
      href="https://www.linkedin.com/in/yashika-soni-8a9b682a5/"
      target="_blank"
      rel="noreferrer"
      className="connect-link"
    >
      <span>💼</span>
      <div>
        <h4>LinkedIn</h4>
        <p>Let's connect professionally</p>
      </div>
      <span className="arrow">→</span>
    </a>

    <a
      href="https://github.com/yahhshika"
      target="_blank"
      rel="noreferrer"
      className="connect-link"
    >
      <span>🐙</span>
      <div>
        <h4>GitHub</h4>
        <p>Explore my projects</p>
      </div>
      <span className="arrow">→</span>
    </a>


  </div>

  <div className="response-note">
     Usually responds within 24 hours
  </div>
</div>

      </div>
    </section>
  );
}
