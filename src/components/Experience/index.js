import React from "react";
import "./index.css";

const Experience = () => {
  return (
    <div id="experience">
      <h3>Experience & Technologies</h3>
      <div className="tech">
        <div id="backendTech" className="technology">
          <h4>Backend</h4>
          <ul>
            <li>PHP</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Socket.io</li>
          </ul>
        </div>
        <div id="frontendTech" className="technology">
          <h4>Frontend</h4>
          <ul>
            <li>React Native</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>HTML5</li>
            <li>C# & C++</li>
            <li>Handlebars</li>
          </ul>
        </div>
        <div id="languagesFrameworks" className="technology">
          <h4>Languages</h4>
          <ul>
            <li>Python</li>
            <li>C# & C++</li>
            <li>Javascipt</li>
            <li>CSS</li>
            <li>HTML 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
