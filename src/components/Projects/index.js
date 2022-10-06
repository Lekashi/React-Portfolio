import React from "react";
import "./index.css";
import eftLogo from "../../images/eftLogo.png"
import housePlant from "../../images/house-plant.jpg"

const Projects = () => {
  return (
    <div>
      <h3 id="projects">Projects</h3>
      <div id="mainPrjt">
        <h4>Ready-eft-CRUD</h4>
        <div className="prjtLinkDiv" src={eftLogo} width="300px"height="100px">
          <a
            href="https://github.com/Lekashi/Ready-EFT-CRUD"
            target="_blank"
            rel="noreferrer"
            className="prjtLinks"
          >
            Github
          </a>
          <a
            href="https://github.com/Lekashi/Ready-EFT-CRUD"
            target="_blank"
            rel="noreferrer"
            className="prjtLinks"
          >
            Deployed Link
          </a>
        </div>
      </div>
      <div className="sidePrjts">
        <div className="PrjtDiv" id="notAmerican">
          <h5>Not-American Football</h5>
          <div className="prjtLinkDiv" src={housePlant}>
            <a
              href="https://github.com/kevinfassu/notamericanfootball"
              target="_blank"
              rel="noreferrer"
              className="prjtLinks"
            >
              Github
            </a>
            <a
              href="https://kevinfassu.github.io/notamericanfootball/"
              target="_blank"
              rel="noreferrer"
              className="prjtLinks"
            >
              Deployed Link
            </a>
          </div>
        </div>
        <div className="PrjtDiv" id="housePlant">
          <h5>House-Plant-Helper</h5>
          <div className="prjtLinkDiv">
            <a
              href="https://github.com/mayalorimer/House-Plant-Helper"
              target="_blank"
              rel="noreferrer"
              className="prjtLinks"
            >
              Github
            </a>
            <a
              href="https://desolate-anchorage-75648.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="prjtLinks"
            >
              Deployed Link
            </a>
          </div>
        </div>
        <div className="PrjtDiv" id="housePlant">
          <h5>Mix-Me</h5>
          <div className="prjtLinkDiv">
            <a
              href="https://github.com/ChrisDeng1999/Mix-Me"
              target="_blank"
              rel="noreferrer"
              className="prjtLinks"
            >
              Github
            </a>
            <a
              href="https://github.com/ChrisDeng1999/Mix-Me"
              target="_blank"
              rel="noreferrer"
              className="prjtLinks"
            >
              Deployed Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
