// src/components/Footer/Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/" },
    { icon: <FaTwitter />, link: "" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ritik-pandey-44221a28a/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/" },
    { icon: <FaYoutube />, link: "" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Ritik Pandey</h2>

        <nav className="footer-nav">
          {sections.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="footer-nav-link"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="footer-social">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="footer-copy">
          © 2025 Ritik Pandey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
