import React from "react";
import "./index.css";
const Projects = () => {
  return (
    <div>
      <div className="box">
        <a href="#m2-o" className="link-1" id="m2-c">
          View All Projects
        </a>
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
    </div>
  );
};

export default Projects;
