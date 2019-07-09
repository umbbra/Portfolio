import React from "react";
import  "../css/style.css";
import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
