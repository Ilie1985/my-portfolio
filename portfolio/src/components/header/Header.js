import React from "react";
import CvUploader from "./CvUploader";
import imageOfMe from "../../media/imageOfMe.jpg";
import HeaderSocials from "./HeaderSocials";
import "./header.css";






const Header = () => {
  return (
    <header>
      <div className="header_container">
        <h1>Hello, my name is </h1>
        <h1>Marian Ilie</h1>
        <h5 className="text-light">Full Stack Developer </h5>
        <CvUploader />
        <HeaderSocials />

        <div className="imageOfMe">
          <img src={imageOfMe} alt="imageOfMe"className="imageOfMeSize"/>
        </div>

        <a href="#contacts" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
