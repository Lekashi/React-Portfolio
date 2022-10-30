import React from "react";
import "./index.css";

const Experience = () => {
  return (
    <div id="experience">
      <h3>Experience & Technologies</h3>
      <div className="tech">
        <div>
          <h4>Backend</h4>
          <ul>
            <li>PHP</li>
            <li>Mongo</li>
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>Socket.io</li>
          </ul>
        </div>
        <div>
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
        <div>
          <h4>Languages</h4>
          <ul>
            <li>Rust</li>
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
