import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer_logo">
        Marian Ilie
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contacts">Home</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">
          <RiFacebookCircleLine />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://linkedin.com">
          <RiLinkedinBoxLine />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Marian`s Portfolio 2022 </small>
      </div>
    </footer>
  );
};

export default Footer;
