import React from "react";
import "../css/style.css";
import sr from "./Scrollreveal";
// ====> IMAGES
import salon from './img/salonpiekna.jpg';
import calc from './img/calc.jpg';
import port from './img/portfolio.jpg';
import noimages from './img/noimages.png';

class Projects extends React.Component {
  componentDidMount = () => {
    const configR = {
      origin: "right",
      duration: 1000,
      delay: 150,
      distance: "500px",
      scale: 1,
      easing: "ease"
    };
    const configL = {
      origin: "left",
      duration: 1000,
      delay: 250,
      distance: "500px",
      scale: 1,
      easing: "ease"
    };
    sr.reveal('.project:nth-child(even)', configR)
    sr.reveal('.project:nth-child(odd)', configL);

  };
  render() {
    return (
      <section className="projects" id="projects">
        <h2>Projekty</h2>
        <article className="project" ref="right">
        <img src={salon} alt="SPA Project" />

<div className="description">
  <h3>Strona SPA</h3>
  Strona poświęcona fikcyjnej firmie. W trakcie tworzenia używałam podstawowych języków (HTML, CSS, JS), aby doszliwować umiejętności i przypomnieć niektóre podstawy.
</div>
        </article>
        <article className="project" ref="left">
          <img src={port} alt="Portfolio Project" />

          <div className="description">
            <h3>Portfolio </h3>
            Projekt od podszewki jest moją twórczością. Przy tworzeniu używałam głównie Reacta oraz ScrollReveal. Oczywiście kod jest udostępniony na
            GitHubie.
          </div>
        </article>
        <article className="project" ref="right">
        <img src={calc} alt="Calculator Project" />

<div className="description">
  <h3>Kalkulator </h3>
  Strona z kilkoma kalkulatorami: zwykły, walutowy, binarny.
  Stylowanie w języku SCSS.
</div>
        </article>
        <article className="project"  ref="left">
          
          <img src={noimages} alt="Menu Project" />

          <div className="description">
            <h3>Jadłospis</h3>
            Do aplikacji można wpisać dania wraz ze składnikami. Nastęnie
            wybieramy jadłospis na kolejny dzień i generujemy listę zakupów.
          </div>
        </article>
        <article className="project" ref="right">
          
          <img src={noimages} alt="Savings Project" />

          <div className="description">
            <h3>Oszczędności</h3>
            Dzięki tej aplikacji łatwiej będzie nam oszczędzać. Po wpisaniu na
            co chcemy zaoszczędzić i kolejnych wpłat aplikacja oblicza nam ile
            jeszcze pozostało do spełnienia marzenia.
          </div>
        </article>
      </section>
    );
  }
}

export default Projects;
