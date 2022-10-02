import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header>
      <h1>Nicholas Pisano</h1>
      <nav>
        <a
          className="navBtn"
          href="https://www.linkedin.com/in/nicholas-pisano-042a1423a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="navBtn"
          href="https://github.com/Lekashi"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a className="navBtn" href="../../../public/Resume.docx" download>
          Resume
        </a>
        <a className="navBtn" href="#experience">Experience</a>
        <a className="navBtn" href="#projects">Projects</a>
      </nav>
    </header>
  );
};

export default Header;
