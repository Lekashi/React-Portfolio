import React from "react";
import "./index.css";
import $ from 'jquery';

import AllProjects from "../AllProjects/index.js"
import eftLogo from "../../images/eftLogo.png";
import housePlant from "../../images/house-plant.jpg";
import soccerPic from "../../images/notAmerican.jpg";
import mixxerPic from "../../images/mixMe.jpg"

const Projects = () => {
  function viewAllPrograms () {
    $("#allProjectsDiv").toggle();
  }

  return (
    <div className="AllProject">
      <h3 id="projects">Projects</h3>
      <div id="mainPrjt">
        <h4 className="rEftTitle">Ready-eft-CRUD</h4>
        <img className="mainPrjtImg" src={eftLogo} alt="Logo of the video game Escape from Tarkov"/>
        <div className="mainPrjtLinkDiv" width="300px"height="100px">
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
          <img className="sidePrjtImg" src={soccerPic} alt="Professional Soccer game"/>
          <div className="prjtLinkDiv">
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
          <img className="sidePrjtImg" src={housePlant} alt="House Plant"/>
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
        <div className="PrjtDiv" id="mixMe">
          <h5>Mix-Me</h5>
          <img className="sidePrjtImg" src={mixxerPic} alt="Mixed drinks at the beach"/>
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
              href="https://dashboard.heroku.com/apps/guarded-reef-56811"
              target="_blank"
              rel="noreferrer"
              className="prjtLinks"
            >
              Deployed Link
            </a>
          </div>
        </div>
      </div>
      <button onClick={viewAllPrograms}>View More Projects</button>
      <div id="allProjectsDiv">
        <AllProjects />
      </div>
    </div>
  );
};

export default Projects;
