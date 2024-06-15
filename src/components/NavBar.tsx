// src/components/NavBar.tsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "mobile-menu-open" : ""}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isOpen ? "active" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={`nav-list ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="work-experience"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Work Experience
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Education
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
