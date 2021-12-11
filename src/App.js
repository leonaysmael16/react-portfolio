import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/AboutMe";
import Project from "./components/Projects";
import Contact from "./components/ContactMe";


function App() {
  return (
    <div class="pink accent-1">
      <Navbar />
      <About />
      <Project />
      <Contact />
    </div>
 );
}
export default App;
