import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#home" onClick={closeMenu}>
          MyWebsite
        </a>
      </div>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <a href="#qSec" onClick={closeMenu}>
          About Us
        </a>
        <a href="#updateSec" onClick={closeMenu}>
          Events
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact Us
        </a>
        <div className="join join-mobile">
          <a href="#joinSec" onClick={closeMenu}>
            Join Us
          </a>
        </div>
      </nav>
      <div className="join join-desktop">
        <a href="#joinSec">Join Us</a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </div>
    </header>
  );
};

export default Header;
