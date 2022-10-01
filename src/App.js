import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Aboutme />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
