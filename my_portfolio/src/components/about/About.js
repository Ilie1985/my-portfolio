import React from "react";
import "./about.css";

// import imageOfMe from "../../media/imageOfMe.jpg";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <>
      {/* <div className=" about_container">
        <div className="about_me">
        <div className="about_me-img">
            <img src={imageOfMe} alt="aboutImage" />
            </div>
          </div> */}

      <div className="about_content">
        {/* <div className="about_cards">
            <article className="about_card">
            <FaAward className="about_icon" />
            <h5>School of Code</h5>
            <small> Graduated School of Code Bootcamp</small>
            </article>
            
            <article className="about_card">
            <FiUsers className="about_icon" />
            <h5>Experience</h5>
            <small>Full Stack Web Developer</small>
            </article>
            
            <article className="about_card">
            <AiOutlineFolderOpen className="about_icon" />
            <h5>Projects</h5>
            <small>4 + Completed projects</small>
            </article>
          </div> */}
          <h3>About Me</h3>
        <p>
          I am an ambitious, creative and self motivated person. Having recently
          completed The School of Code bootcamp, I have developed important
          skills like : Agile Methodologies, communication, active team player ,
          adaptability, pair programming, problem-solving, time-management, work
          under pressure, self-documentation. Seeking to further my growth in a
          professional environment as a Software Engineer.
        </p>
        {/* <a href="#contacts" className=" button button-primary">
          Let`s talk
        </a> */}
        {/* </div> */}
      </div>

      {/* About
      <h5>Get to Know</h5> */}
    </>
  );
};

export default About;
