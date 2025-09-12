// src/components/Education/Education.jsx
import React from "react";
import { education } from "../../assets/constants"; // Import education data
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      {/* Section Title */}
      <div className="education-title">
        <h2>EDUCATION</h2>
        <div className="title-underline"></div>
        <p>
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="education-timeline">
        {/* Vertical line */}
        <div className="timeline-line"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`education-entry ${
              index % 2 === 0 ? "left-entry" : "right-entry"
            }`}
          >
            {/* Timeline Circle */}
            <div className="timeline-circle">
              <img src={edu.img} alt={edu.school} />
            </div>

            {/* Content Section */}
            <div className="education-card">
              <div className="education-card-content">
                {/* School Logo */}
                <div className="school-logo">
                  <img src={edu.img} alt={edu.school} />
                </div>

                {/* Degree, School, Date */}
                <div className="education-text">
                  <div>
                    <h3>{edu.degree}</h3>
                    <h4>{edu.school}</h4>
                  </div>
                  <p>{edu.date}</p>
                </div>
              </div>

              <p className="grade">Grade: {edu.grade}</p>
              <p className="description">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
