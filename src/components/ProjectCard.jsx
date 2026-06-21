import React from 'react';

export default function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  tags = [],
  tech = [],
  link = '#',
}) {
  return (
    <div className="project-card">
      <div className="project-card-image-wrapper">
        <img
          className="project-card-image"
          src={image}
          alt={imageAlt}
          title={imageAlt} /* using both title/alt to cover visual description requirements */
        />
      </div>
      <div className="project-card-info">
        <div className="project-card-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="project-card-tag font-label-caps">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="project-card-title font-headline-md text-headline-md">
          {title}
        </h3>
        <p className="project-card-description font-body-md text-body-md">
          {description}
        </p>
        <div className="project-card-footer">
          <div className="project-card-tech">
            {tech.map((t, idx) => (
              <span key={idx} className="project-card-tech-item font-label-caps">
                {t}
              </span>
            ))}
          </div>
          <a
            className="project-card-link font-label-caps text-label-caps"
            href={link}
            target='_blank'
          >
            View Project
            <span className="material-symbols-outlined project-card-link-icon">
              arrow_outward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
