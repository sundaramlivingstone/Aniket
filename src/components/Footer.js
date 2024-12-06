import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>© 2024 MyWebsite.</p>
      </div>
      <div>
        <div className="Flogo">
          <a href="#home">MyWebsite</a>
        </div>
        <nav className="Fnavbar">
          <a href="#qSec">About Us</a>
          <a href="#updateSec">Events</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
