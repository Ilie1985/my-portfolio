import React from "react";
import "./about.css";
import imageOfMe from "../../media/imageOfMe.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      About
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className=" about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={imageOfMe} alt="aboutImage" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about_card">
              <AiOutlineFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>4 + Completed projects</small>
            </article>
          </div>
          <p>
            I am an ambitious, creative and self motivated person. Having
            recently completed The School of Code bootcamp, I have developed
            important skills like : Agile Methodologies, communication, active
            team player , adaptability, pair programming, problem-solving,
            time-management, work under pressure, self-documentation. Seeking to
            further my growth in a professional environment as a Front-End Web
            Developer.
          </p>
          <a href="#contacts" className=" button button-primary">
            Let`s talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
