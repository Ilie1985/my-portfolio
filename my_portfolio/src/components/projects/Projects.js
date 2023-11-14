import React from "react";
// import img1 from "../../media/img1.jpg";
import img2 from "../../media/img2.jpg";
// import img3 from "../../media/img3.jpg";
import img4 from "../../media/img4.jpg";
// import img5 from "../../media/img5.jpg";
import img6 from "../../media/img6.jpg";
import img7 from "../../media/img7.jpg";
import img8 from "../../media/img8.jpg";
import img9 from "../../media/img9.jpg";
// import img10 from "../../media/img10.jpg";
// import img11 from "../../media/img11.jpg";
// import img12 from "../../media/img12.jpg";
import "./projects.css";

const data = [
  {
    id: 4,
    image: img4,
    title: "Jobrecord",
    github: "https://github.com/Ilie1985/job_finder_reactjs",
    demo: "https://jobrecord.netlify.app/",
    description: "React js project ,used React Router 6,useState,react-redux ",
  },

  // {
  //   id: 12,
  //   image: img12,
  //   title: "chatGPTclone",
  //   github: "https://github.com/Ilie1985/chatGPTclone_nextjs13",
  //   demo: "https://chat-gp-tclone-nextjs13.vercel.app",
  //   description: "Next.js v13 app, used OpenAI's GPT API, Next JS edge functions to stream chat responses, MongoDB for data storage, Auth0 for user authentication and user accounts, Tailwind CSS ,deployed app on Vercel. ",
  // },
  // {
  //   id: 5,
  //   image: img10,
  //   title: "Instagram Clone",
  //   github: "https://github.com/Ilie1985/insta_nextjs12",
  //   demo: "https://insta-nextjs12.vercel.app/",
  //   description:
  //     "Nextjs12 project, tailwindcss,minifaker,firebase auth ,google data ,deployed to vercel",
  // },
  // {
  //   id: 11,
  //   image: img11,
  //   title: "Twitter Clone",
  //   github: "https://github.com/Ilie1985/twitter_nextjs12",
  //   demo: "https://twitter-nextjs12.vercel.app/",
  //   description:
  //     "Nextjs12 project, tailwindcss,minifaker,firebase auth ,google data ,deployed to vercel",
  // },
  // {
  //   id: 5,
  //   image: img5,
  //   title: "Comfysloth",
  //   github: "https://github.com/Ilie1985/comfy_sloth_project",
  //   demo: "https://comfyslooth.netlify.app/",
  //   description:
  //     "React js project ,used React Router 6,useState,useEffect, UseContext,useReducer hooks, auth0 for authentication ",
  // },
  {
    id: 6,
    image: img6,
    title: "Cocktails",
    github: "https://github.com/Ilie1985/cocktails_reactjs",
    demo: "https://cocktailscd.netlify.app/",
    description:
      "React js project ,used React Router 6,useState,useEffect and UseContext hooks",
  },
  {
    id: 7,
    image: img7,
    title: "Realtor",
    github: "https://github.com/Ilie1985/realtor_reactjs_.git",
    demo: "https://realtor-reactjs-rho.vercel.app/",
    description:
      "React js project ,used Firebase auth for complete authentication,Firebase Firestore to store and fetch the data,tailwind css 3,CRUD operations using Firebase Firestore,added a map to the page using leaflet and react leaflet packages,used Google geolocation API to convert address to latitude and longitude,deployed to Vercel",
  },
  {
    id: 8,
    image: img8,
    title: "IMDb Clone",
    github: "https://github.com/Ilie1985/imdb_clone_nextjs13_.git",
    demo: "https://imdb-react-nextjs.vercel.app/",
    description:
      "IMDb clone project using Next.js 13 and Tailwind CSS, fetched data from TMDB API and deployed to Vercel",
  },
  {
    id: 9,
    image: img9,
    title: "Google Clone",
    github: "https://github.com/Ilie1985/google_clone_nextjs13_.git",
    demo: "https://google-clone-nextjs13.vercel.app/",
    description:
      "Google clone project using Next.js 13 and Tailwind CSS, fetched data from Google search API and deployed to Vercel, Sign in feature not implemented yet,gmail,google search, feeling lucky ,google images features implemented",
  },
  {
    id: 2,
    image: img2,
    title: "RPS Project",
    github: "https://github.com/Ilie1985/new_rps/blob/main/new_rps/src/App.js",
    demo: "https://rps-application.netlify.app",
    description: "React js project  with useState,useEffect",
  },
  // {
  //   id: 1,
  //   image: img1,
  //   title: "Space Project",
  //   github:
  //     "https://github.com/SchoolOfCode/final-project-front-end-zoomage-daydream",
  //   demo: "https://spaces-application.netlify.app",
  //   description:
  //     " This project is created by team of six people following the Agile methodology as a final project of School of Code Bootcamp .Though there is no commercial business behind this app, the platform itself is a functional app bringing the aim to improve the environment in our community by working with area businesses, community leaders and our neighbors to create a clean and safe place to work. Used React.js, Node.js, Heroku, Postman, PostgreSQL ,Cypruss for testing, TDD,Auth0, Netlify, Cloudinary.com",
  // },
  // {
  //   id: 3,
  //   image: img3,
  //   title: "Github-User Search",
  //   github: "hhttps://github.com/Ilie1985/search_github_users_reactjs",
  //   demo: "https://githubuser-search-md.netlify.app/",
  //   description:
  //     "React js project ,used React Router 6,useState,useEffect,useContext, auth0",
  // },
];

const Projects = () => {
  return (
    <section id="projects">
      <h3>My recent work</h3>
      <div className="projects_container">
        {data.map(({ id, image, title, github, demo, description }) => {
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
              <p>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
