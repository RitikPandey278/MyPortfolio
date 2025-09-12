import React from "react";
import { experiences } from "../../assets/constants"; // Your data
import "./Experience.css";

const Experience = () => {
  return (
    <section
      id="experience"
      className="experience-section"
    >
      {/* Section Title */}
      <div className="experience-title">
        <h2>EXPERIENCE</h2>
        <div className="underline"></div>
        <p>
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="experience-timeline">
        {/* Vertical line */}
        <div className="vertical-line"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`experience-entry ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            {/* Timeline Circle */}
            <div className="timeline-circle">
              <img
                src={experience.img}
                alt={experience.company}
                className="timeline-img"
              />
            </div>

            {/* Content Box */}
            <div className="experience-content">
              <div className="experience-header">
                <div className="company-logo">
                  <img
                    src={experience.img}
                    alt={experience.company}
                  />
                </div>
                <div className="role-company">
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                  <p className="date">{experience.date}</p>
                </div>
              </div>
              <p className="desc">{experience.desc}</p>

              <div className="skills">
                <h5>Skills:</h5>
                <ul>
                  {experience.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
