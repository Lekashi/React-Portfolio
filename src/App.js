import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Nicholas Pisano</h1>
        <nav>
          <a to="https://www.linkedin.com/in/nicholas-pisano-042a1423a/" >LinkedIn</a>
          <a to="">Resume</a>
          <a>Experience</a>
          <a>Projects</a>
        </nav>
      </header>
      <div>
        <h2>About Me</h2>
        <p>
          Hi, my name is Nicholas and I am a fluent english speaker. I am
          currently 23 years old living in Los Angeles County, California. I
          have many hobbies i love to surround myself with like video games,
          rock climbing and FPV Drone flying. I think one of my greatest ability
          is also one of my greatest weaknesses, I strive always to carry my
          weight in anything I do in life. I have the same passion towards my
          coding. I'm 23 years old and I crave to learn new and different
          technologies everyday.
        </p>
      </div>
      <div>
        <h3>Projects</h3>
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
    </div>
  );
}

export default App;
