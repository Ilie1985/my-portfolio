import React from "react";
import img1 from "../../media/img1.jpg";
import img2 from "../../media/img2.jpg";
import img3 from "../../media/img3.jpg"
import img4 from "../../media/img4.jpg"
import img5 from "../../media/img5.jpg"
import img6 from "../../media/img6.jpg"
import "./projects.css";

const data = [
  {
    id: 1,
    image: img1,
    title: "Space Project",
    github:
      "https://github.com/SchoolOfCode/final-project-front-end-zoomage-daydream",
    demo: "https://spaces-application.netlify.app",
  },
  {
    id: 2,
    image: img2,
    title: "RPS Project",
    github: "https://github.com/Ilie1985/new_rps/blob/main/new_rps/src/App.js",
    demo: "https://rps-application.netlify.app",
  },
  {
    id: 3,
    image: img3,
    title: "Github-User Search",
    github: "hhttps://github.com/Ilie1985/search_github_users_reactjs",
    demo: "https://githubuser-search-md.netlify.app/",
  },
  {
    id: 4,
    image: img4,
    title: "Jobrecord",
    github: "https://github.com/Ilie1985/job_finder_reactjs",
    demo: "https://jobrecord.netlify.app/",
  },
  {
    id: 5,
    image: img5,
    title: "Comfysloth",
    github: "https://github.com/Ilie1985/comfy_sloth_project",
    demo: "https://comfyslooth.netlify.app/",
  },
  {
    id: 6,
    image: img6,
    title: "Cocktails",
    github: "https://github.com/Ilie1985/cocktails_reactjs",
    demo: "https://cocktailscd.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h3>My recent work</h3>
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
                <a
                  href={github}
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="button button-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  See the app
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
