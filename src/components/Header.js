import React from "react";
import "../assets/styles/Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      {/* Brand Name on the left */}
      <div className="brand-name">Minal</div>

      {/* Navigation menu on the right */}
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="home" smooth={true} duration={700}>
              About
            </Link>
          </li>
          <li>
            <Link to="Education" smooth={true} duration={700}>
              Education
            </Link>
          </li>
          <li>
            <Link to="Experience" smooth={true} duration={700}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="Projects" smooth={true} duration={700}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
