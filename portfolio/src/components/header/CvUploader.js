import React from "react";
import cv from "../../media/cv.pdf";
const CvUploader = () => {
  return (
    <div className="cv-upload">
      <a href={cv} download className="button">
        Download CV
      </a>

      <a href="#contacts" className="button button-primary">
        {" "}
         Message me
      </a>
    </div>
  );
};

export default CvUploader;
