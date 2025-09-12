import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Background grid specific to About */}
      <div className="about-background-grid"></div>

      <div className="about-container">
        {/* Left Side */}
        <div className="about-left">
          <h1 className="about-greeting">Hi, I am</h1>
          <h2 className="about-name">Ritik Pandey</h2>

          {/* Skills Typing Effect */}
          <h3 className="about-skills">
            <span className="about-skill-text">I am a </span>
            <Typewriter
              words={['Fullstack Developer.', 'App Developer.', 'Coder.']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          <p className="about-description">
            I am a passionate aspiring full-stack developer with hands-on experience in building web applications. 
            Skilled in the MERN stack and Android development, I enjoy creating seamless user experiences and learning new technologies to deliver efficient solutions.
          </p>

          <a
            href="https://drive.google.com/file/d/11WRQ5IyBJt8e3BJF5Mo-6RdAFmSlV38A/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="about-right">
          <Tilt
            className="profile-tilt"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Ritik Pandey"
              className="profile-image"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
