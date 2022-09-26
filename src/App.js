import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Nicholas Pisano</h1>
        <nav>
          <a href="https://www.linkedin.com/in/nicholas-pisano-042a1423a/">
            LinkedIn
          </a>
          <a>Resume</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>
      <div>
        <h2>About Me</h2>
        <p>
          Hi, my name is Nicholas. I am currently 23 years old living in Los
          Angeles County, California. I have many hobbies i love to surround
          myself with like video games, rock climbing and FPV Drone flying. I
          think one of my greatest ability is also one of my greatest
          weaknesses, I strive always to carry my weight in anything I do in
          life. I have the same passion towards my coding. I'm 23 years old and
          I crave to learn new and different technologies everyday.
        </p>
      </div>
      <div>
        <h3 id="projects">Projects</h3>
        <div>
          <h4>Ready-eft-CRUD</h4>
        </div>
        <div>
          <h5>Not-American Football</h5>
        </div>
        <div>
          <h5>House-Plant-Helper</h5>
        </div>
        <div>
          <h5>Mix-Me</h5>
        </div>
      </div>
      <div>
        <h3 id="experience">Experience</h3>
        <div>
          <h4>Technologies</h4>
          <ul>
            Backend
          <li>Mongo</li>
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>Socket.io</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
