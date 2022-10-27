import React from "react";
import imgMe from "../../images/me1.jpg";
import "./index.css";

const Aboutme = () => {
  return (
    <div className="aboutMe">
      <img
        src={imgMe}
        className="imgMe"
        alt="Nicholas's Portrait shot"
        width="500"
        height="400"
      ></img>
      <div className="aboutMeText">
        <h2>About Me</h2>
        <p className="whoIAm">
          Hi, my name is Nicholas Pisano. I am currently 23 years old living in
          Los Angeles County, California. I have many hobbies i love to surround
          myself with like video games, rock climbing and FPV Drone flying. I
          think one of my greatest abilities is also one of my greatest
          weaknesses, I strive always to carry my weight in anything I do in
          life. I have the same passion towards my coding.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
