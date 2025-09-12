import React, { useState, useEffect, useRef } from "react";
import { projects } from "../../assets/constants";
import "./Work.css";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const cardRefs = useRef([]);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
  }, []);

  return (
    <section id="work" className="work-section">
      {/* Section Title */}
      <div className="work-title">
        <h2>PROJECTS</h2>
        <div className="title-underline"></div>
        <p>
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => handleOpenModal(project)}
            className="project-card slide-down"
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-close">
              <button onClick={handleCloseModal}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-details">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="modal-links">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">View Code</a>
                  <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer">View Live</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
