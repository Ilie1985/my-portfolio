import React from "react";
import img1 from "../../media/img1.jpg";
import img2 from "../../media/img2.jpg";
import "./projects.css";

const data = [
  {
    id: 1,
    image: img1,
    title: "Space Project",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 2,
    image: img2,
    title: "RPS Project",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      Projects
      <h5>My recent work</h5>
      <h2>Projects</h2>
      <div className="projects_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="projects_item">
              <div className="projects_item-img">
                <img
                  src={image}
                  alt="project Space pic"
                  className="projectImages"
                />
              </div>
              <h3>{title}</h3>
              <div className="projects_item-link">
                <a href={github} className="button" target="_blank" rel="noreferrer" >
                  Github
                </a>
                <a
                  href={demo}
                  className="button button-primary"
                  target="_blank"
                  rel="noreferrer" >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
