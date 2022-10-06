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
            <li>Mongo</li>
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>Socket.io</li>
          </ul>
        </div>
        <div>
          <h4>Frontend</h4>
          <ul>
            <li>React.js</li>
            <li>HTML5</li>
            <li>C# & C++</li>
            <li>Handlebars</li>
          </ul>
        </div>
        <div>
          <h4>Languages</h4>
          <ul>
            <li>Python</li>
            <li>C# & C++</li>
            <li>Javascipt</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
