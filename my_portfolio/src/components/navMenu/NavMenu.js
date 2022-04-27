import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import "./navMenu.css";
import { useState } from "react";

const NavMenu = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />{" "}
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />{" "}
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <BiBookAlt />{" "}
      </a>
      <a
        href="#projects"
        className={activeNav === "#projects" ? "active" : ""}
        onClick={() => setActiveNav("#projects")}
      >
        <AiOutlineFolderOpen />{" "}
      </a>{" "}
      <a
        href="#contacts"
        className={activeNav === "#contacts" ? "active" : ""}
        onClick={() => setActiveNav("#contacts")}
      >
        <BiMessageRoundedDetail />{" "}
      </a>
    </nav>
  );
};

export default NavMenu;
