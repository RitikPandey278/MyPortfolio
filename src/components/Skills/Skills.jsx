import React from "react";
import { SkillsInfo } from "../../assets/constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => (
  <section id="skills" className="skills-section">
    {/* Section Title */}
    <div className="skills-header">
      <h2>SKILLS</h2>
      <div className="divider"></div>
      <p>
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="skills-grid">
      {SkillsInfo.map((category, index) => (
        <motion.div
          key={category.title}
          className="skill-box"
          initial={{ y: -100, opacity: 0 }}   
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, delay: index * 0.3, type: "spring" }}
          viewport={{ once: true }} 
        >
          <h3>{category.title}</h3>

          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="skills-items">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="skill-logo"
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
