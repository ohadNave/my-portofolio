import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <About />
    <Timeline/>
    <Projects />
    <Skills />
    <Contact/>
    <Navbar />

  </main>
  );
}

export default App;
