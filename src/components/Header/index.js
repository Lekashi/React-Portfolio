import React from "react";
import "./index.css"

const Header = () => {
  return (
    <header>
    <h1>Nicholas Pisano</h1>
    <nav>
      <a
        href="https://www.linkedin.com/in/nicholas-pisano-042a1423a/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/Lekashi"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <a href="../../../public/Resume.docx" download>Resume</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
    </nav>
  </header>
  );
};

export default Header;
