import React from "react";
import "./index.css";
const Projects = () => {
  return (
    <div>
      <div className="box">
        <h1 className="box__title">Modals</h1>
        <p className="box__p">Click / Enter the buttons to open modals.</p>
      </div>
      <div className="box">
        <a href="#m2-o" class="link-1" id="m2-c">
          Modal 2
        </a>
        <p className="box__info">With Background (Opacity .4)</p>
        <div className="modal-container" id="m2-o">
          <div className="modal">
            <h1 className="modal__title">Modal 2 Title</h1>
            <p className="modal__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              ex dicta maiores libero minus obcaecati iste optio, eius labore
              repellendus.
            </p>
            <button className="modal__btn">Button &rarr;</button>
            <button className="modal__btn">Button &rarr;</button>
            <a href="#m2-c" className="link-2"></a>
          </div>
        </div>
      </div>

      <a
        href="https://abubakersaeed.netlify.app/designs/d8-modals"
        className="abs-site-link"
        rel="nofollow noreferrer"
        target="_blank"
      >
        abs/designs/d8-modals
      </a>
    </div>
  );
};

export default Projects;
