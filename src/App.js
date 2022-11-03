import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import AllProjects from "./components/AllProjects"

function App() {
  return (
    <div className="App">
      <Header />
      <Aboutme />
      <Projects />
      <AllProjects />
      <Experience />
    </div>
  );
}

export default App;
