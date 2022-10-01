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
        <h3 id="projects">Projects</h3>
        <div>
          <h4>Ready-eft-CRUD</h4>
          <div>
          <a href="https://github.com/Lekashi/Ready-EFT-CRUD">Github</a>
          <a href="https://github.com/Lekashi/Ready-EFT-CRUD">Deployed Link</a>
          </div>
        </div>
      <div>
        <div>
          <h5>Not-American Football</h5>
          <div>
          <a href="https://github.com/kevinfassu/notamericanfootball">Github</a>
          <a href="https://kevinfassu.github.io/notamericanfootball/">Deployed Link</a>
          </div>
        </div>
        <div>
          <h5>House-Plant-Helper</h5>
          <div>
          <a href="https://github.com/mayalorimer/House-Plant-Helper">Github</a>
          <a href="https://desolate-anchorage-75648.herokuapp.com/">Deployed Link</a>
          </div>
        </div>
        <div>
          <h5>Mix-Me</h5>
          <div>
          <a href="https://github.com/ChrisDeng1999/Mix-Me">Github</a>
          <a href="https://github.com/ChrisDeng1999/Mix-Me">Deployed Link</a>
          </div>
        </div>
      </div>
      <div>
        <h3 id="experience">Experience</h3>
          <h4>Technologies</h4>
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
}

export default App;
