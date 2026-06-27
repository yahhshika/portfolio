import React from 'react';
import ProjectCard from '../components/ProjectCard';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Projects.css';

// const PROJECTS_DATA = [
//   {
//     title: 'EduPredict',
//     tags: ['FINTECH', 'MOBILE APP'],
//     description: 'Re-architecting the wealth management experience for millennial investors through radical simplicity and real-time data clarity.',
//     tech: ['Figma', 'React'],
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl7DD7xa82QdQo9ivZj3sxhTkwEc7N4LTmjZA56kcnZjftUd70I6LwJELlqWrJy_aNaUcq3gcrJ3xgFFNVtKzq5nmSrPGmHFNDmQDP6BdH8vwxTAzb3I7Wn_coFukYZot1S3GXrFXWGRHbFP7rih_BJb3ytKnS9HlO6itQFPXt0jZYVDVS_0V7iHmSsr7tbkcda_0CmSR1ZPSIgLAh2UM_k-5uVzKzwwLaFVe_L8g_tneNc-Df9sf5Kr2BQ-rGSYUtFwfEVKE53w',
//     imageAlt: 'A clean, high-resolution screenshot of a minimalist fintech dashboard. The interface uses a crisp white background with deep slate typography and subtle emerald green accents for data visualization. Soft, natural morning light hits the desk where a tablet is displaying the app, creating an atmosphere of professional clarity and trust.',
//     link: 'https://8th-sem-project-six.vercel.app/',
//   },
//   {
//     title: 'Roamify',
//     tags: ['WEB DESIGN', 'PORTFOLIO'],
//     description: "Creating an immersive digital gallery that mirrors the structural integrity and minimalism of the firm's physical builds.",
//     tech: ['Webflow', 'GSAP'],
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX-RzJ4q_0gHcvcXRgfg-F3NUR3Nk9U4HUskClvjNekFFGOJHWwUVYRc5FGzGmJjs1p6VWidoLHPxq_vItALimHIavfo9q_jx0rVjlKcaEsYFmMuMpBsLKp0nz6paixH7zW-k33CPm46CJGx8t7GA90S-nhiKWwBZAWlY1OgqIiRiYOu45pAFYlHDe95uc0utiu39xA-ZLlwTbu2hy_5pUPucdpKxqMDtZRysN8Nv1gF_T1QeIGRUavTqauf657hra8b8SAsfqDQ',
//     imageAlt: "A sophisticated web layout for an architectural firm's portfolio. The design features expansive whitespace, large-scale black and white photography of modern concrete structures, and elegant, thin-weight sans-serif typography. The mood is artistic, quiet, and premium, reflecting a high-end architectural studio's brand identity.",
//     link: 'https://roamify-mfxe.onrender.com/listing',
//   },
//   {
//     title: 'AttendWise',
//     tags: ['E-COMMERCE', 'UX RESEARCH'],
//     description: 'Optimizing conversion rates through a streamlined checkout flow and high-fidelity sensory-focused visual storytelling.',
//     tech: ['Shopify', 'UI Kit'],
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMf4A4Il0LuMxuubSYDoBaBx7928FiqBHtb5lQILrzTCU_JFkUEoL7vUlJwcCiMRDc852Pri1kH82WVp4q9dgKF3yZNqX2AHUmNbeRzdPDBTVpix-ELTOpjmpZkewkTbqUUzEDGbWVFz1ACZiztL0XjvLnlkl_pvQN4Rk2oGt6U8GTlmyIppbdWT-OSckOJN488iIgt2D7BGCX-YKpn_vXVkb4AYZlZi1P9i99vSYe2FTeA7b1LIbZEruV0zAXRC4f8oFYoqbkbQ',
//     imageAlt: 'A clean, functional e-commerce product page for a high-end audio brand. The interface highlights a pair of matte black headphones with detailed texture shots. The UI is structured using a strict 12-column grid, featuring bold price typography and a clear, primary-action call to action button. The color palette is monochromatic with emerald highlights.',
//     link: 'https://attend-wise-peach.vercel.app/',
//   },
//   {
//     title: 'iNotes',
//     tags: ['E-COMMERCE', 'UX RESEARCH'],
//     description: 'Optimizing conversion rates through a streamlined checkout flow and high-fidelity sensory-focused visual storytelling.',
//     tech: ['Shopify', 'UI Kit'],
//     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMf4A4Il0LuMxuubSYDoBaBx7928FiqBHtb5lQILrzTCU_JFkUEoL7vUlJwcCiMRDc852Pri1kH82WVp4q9dgKF3yZNqX2AHUmNbeRzdPDBTVpix-ELTOpjmpZkewkTbqUUzEDGbWVFz1ACZiztL0XjvLnlkl_pvQN4Rk2oGt6U8GTlmyIppbdWT-OSckOJN488iIgt2D7BGCX-YKpn_vXVkb4AYZlZi1P9i99vSYe2FTeA7b1LIbZEruV0zAXRC4f8oFYoqbkbQ',
//     imageAlt: 'A clean, functional e-commerce product page for a high-end audio brand. The interface highlights a pair of matte black headphones with detailed texture shots. The UI is structured using a strict 12-column grid, featuring bold price typography and a clear, primary-action call to action button. The color palette is monochromatic with emerald highlights.',
//     link: 'https://i-notes-gamma.vercel.app/',
//   },
// ];
const PROJECTS_DATA = [
  {
    title: "GolfGiving",
    tags: ["MERN STACK", "CHARITY PLATFORM"],
    description:
      "A full-stack charity subscription and donation platform with JWT authentication, role-based dashboards, subscription management, charity administration, and randomized donation draw workflows powered by scalable REST APIs.",
    tech: ["React", "MongoDB", "Express", "Node"],
    image: "/golfGiving.jpeg",
    imageAlt:
      "GolfGiving dashboard showcasing charity subscriptions, donation management, and admin draw features.",
    link: "https://golf-gving.vercel.app/",
  },
  {
    title: "EduPredict",
    tags: ["MERN STACK", "DATA ANALYTICS"],
    description:
      "A student performance analysis platform featuring role-based authentication, analytics dashboards, reporting tools, and secure REST APIs to help institutions track and evaluate academic performance.",
    tech: ["Node.js", "React","MongoDB","Express"],
    image:
      "/eduPredict.jpeg",
    imageAlt:
      "Student performance analytics dashboard with charts, reports, academic insights, and role-based access management.",
    link: "https://8th-sem-project-six.vercel.app/",
  },

  {
    title: "Roamify",
    tags: ["FULL STACK", "TRAVEL PLATFORM"],
    description:
      "A travel booking and listing platform built with the MERN stack, featuring secure authentication, image uploads, property management, reviews, and scalable RESTful APIs.",
    tech: ["Express.js", "MongoDB","Node"],
    image:
      "/roamify.jpeg",
    imageAlt:
      "Travel accommodation platform displaying property listings, booking details, reviews, and destination information.",
    link: "https://roamify-mfxe.onrender.com/listing",
  },

  {
    title: "AttendWise",
    tags: ["WEB APPLICATION", "ATTENDANCE SYSTEM"],
    description:
      "An attendance management platform that streamlines attendance tracking, record management, and reporting through an intuitive interface designed for students and educators.",
    tech: ["React", "Vite", "TailwindCSS"],
    image:
      "/attendWise.jpeg",
    imageAlt:
      "Attendance dashboard displaying student records, attendance statistics, reports, and academic tracking tools.",
    link: "https://attend-wise-peach.vercel.app/",
  },

  {
    title: "iNotes",
    tags: ["MERN STACK", "PRODUCTIVITY APP"],
    description:
      "A secure notes management application featuring JWT authentication, CRUD operations, user-specific data handling, and seamless note organization across devices.",
    tech: ["React", "MongoDB","Express","Node"],
    image:
      "/iNotes.jpeg",
    imageAlt:
      "Notes application interface showing categorized notes, secure user workspace, and note management features.",
    link: "https://i-notes-gamma.vercel.app/",
  },
];

export default function Projects() {
  const scrollRef = useScrollAnimation();

  return (
    <section ref={scrollRef} className="projects-section fade-in-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Selected Projects
          </h2>
          <p className="projects-header-subtitle font-body-lg text-body-lg">
            A collection of works emphasizing clarity and user-centric architecture.
          </p>
        </div>
        <div className="projects-grid">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              tags={project.tags}
              description={project.description}
              tech={project.tech}
              image={project.image}
              imageAlt={project.imageAlt}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
