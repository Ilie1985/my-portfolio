import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      Experience
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      <div className="experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Beginer</small>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND EXPERIENCE */}

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginer</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Github</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;