import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
     
      <h3>The Skills I have</h3>
     
      <div className="experience_container">
        {/* FRONTEND DEVELOPMENT */}
        <div>
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
                <h4>CSS3/TAILWINDCSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Python</h4>
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
                <h4>NextJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>


            <article className="experience_details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Styled-components</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND EXPERIENCE */}

        <div>
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
                <h4>Firebase</h4>
                <small className="text-light">Experienced</small>
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

        {/* WEB DESIGN */}

        <div>
          <h3>Web Design </h3>
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
                <h4>CSS3/TAILWINDCSS</h4>
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
                <h4>Figma</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Adobe Premiere Pro CC</h4>
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
