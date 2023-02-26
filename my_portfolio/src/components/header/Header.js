import React from "react";
import CvUploader from "./CvUploader";
import imageOfMe from "../../media/imageOfMe.jpg";
// import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <h3>Hello, my name is Marian Ilie </h3>
        {/* <h1>Marian Ilie</h1> */}
        {/* <h5 className="text-light">Software Engineer </h5> */}
        <CvUploader />
        {/* <HeaderSocials /> */}

        <div className="imageOfMe">
          <img src={imageOfMe} alt="imageOfMe" className="imageOfMeSize" />
        </div>

        <a href="#contacts" className="scroll_down">
          Scroll Down To Contact
        </a>
      </div>
    </>
  );
};

export default Header;
