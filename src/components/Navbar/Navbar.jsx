import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; 

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <span className="highlight">&lt;</span>
          <span className="white">Ritik</span>
          <span className="highlight">/</span>
          <span className="white">Pandey</span>
          <span className="highlight">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="menu desktop-menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`menu-item ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="social desktop-social">
          <a
            href="https://github.com/RitikPandey278"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ritik-pandey-44221a28a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://leetcode.com/profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Scroll Blur */}
      {isScrolled && !isOpen && <div className="navbar-blur"></div>}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-list">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`menu-item ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="social mobile-social">
            <a
              href="https://github.com/RitikPandey278"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ritik-pandey-44221a28a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/profile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
    
  );
};

export default Navbar;
