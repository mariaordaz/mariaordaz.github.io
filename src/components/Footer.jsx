import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-colophon">
        <p>© {new Date().getFullYear()} Maria Ordaz</p>
      </div>
      
      <div className="footer-social">
        <a href="https://github.com/mariaordaz" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://linkedin.com/in/mariaordaz" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://wa.me/584249187030" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="social-icon" />
        </a>
      </div>
      
      <div className="footer-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;