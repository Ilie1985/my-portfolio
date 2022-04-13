import React from "react";
import img1 from "../../media/img1.jpg";
import img2 from "../../media/img2.jpg";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      Projects
      <h5>My recent work</h5>
      <h2>Projects</h2>
      <div className="projects_container">
        <article className="projects_item">
          <div className="projects_item-img">
            <img src={img1} alt="project Space pic" className="projectImages" />
          </div>
          <h3>Project Title</h3>
          <div className="projects_item-link">
            <a href="https://github.com" className="button" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="button button-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
          
        </article>

        <article className="projects_item">
          <div className="projects_item-img">
            <img src={img2} alt="project RPS pic" className="projectImages" />
          </div>
          <h3>Project Title</h3>
          <div className="projects_item-link">
            <a href="https://github.com" className="button" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="button button-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
         
        </article>
      </div>
    </section>
  );
};

export default Projects;
