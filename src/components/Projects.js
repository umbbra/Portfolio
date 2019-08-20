import React from "react";
import "../css/style.css";
import sr from "./Scrollreveal";
// ====> IMAGES
import salon from './img/salonpiekna.jpg';
import calc from './img/calc.jpg';
import port from './img/portfolio.jpg';
import noimages from './img/noimages.png';
import save from './img/savings.jpg';
import todo from './img/todo.jpg';
import simplePage from './img/simplePage.jpg';

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
        <div className="image">     
          <a href="https://umbbra.github.io/SalonPieknosci/">
          <img src={salon} alt="Beauty Project" />
        </a>
        </div>
       
        <div className="description">
        <a href="https://umbbra.github.io/SalonPieknosci/"><h3>Salon Piękności</h3></a>
          Salon piękności Wenus to fikcyjna firma. Strona resposywna stworzona w JavaScript, Css i Flexboxie.
        </div>
        </article>
        <article className="project" ref="left">
        <div className="image">
             <a href="https://umbbra.github.io/Portfolio/">
               <img src={port} alt="Portfolio Project" />
               </a>
          </div>
          <div className="description">
          <a href="https://umbbra.github.io/Portfolio/"><h3>Portfolio</h3></a>
             Technologie, które wykorzystano przy tworzeniu portfolio to React wraz z biblioteką ScrollReveal i jQuery. Kod został udostępniony na GitHubie, tak jak i reszta projektów.
          </div>
        </article>
        
        <article className="project" ref="right">
        <div className="image">
          <a href="https://umbbra.github.io/savings/">
            <img src={save} alt="Savings Project" />
          </a>
            </div>
          <div className="description">
          <a href="https://umbbra.github.io/savings/"><h3>Oszczędności</h3></a>
            Aplikacja stworzona z myślą o oszczędzaniu. Projekt zrealizowany przy pomocy Reactu, Sassa i Flexboxa.
          </div>
        </article>
        <article className="project" ref="left">
        <div className="image">
        <a href="https://umbbra.github.io/todoapp/">
          <img src={todo} alt="TODO Project" />
          </a>
        </div>
          <div className="description">
          <a href="https://umbbra.github.io/todoapp/"><h3>Aplikacja To-Do</h3></a>
            W tym miejscu możemy zaplanować nasz dzień. Strona zrobiona wraz z kursem na stronie Udemy. Jednak, aby mogła działać na moich zasadach kod został gruntownie zmieniony. Wykorzystano React i Css.
          </div>
        </article>

        <article className="project" ref="right">

          <div className="image">
            <a href="https://umbbra.github.io/Flexbox-simplyPage/">
             <img src={simplePage} alt="Simple Project" />
            </a>
          </div>

          <div className="description">
            <a href="https://umbbra.github.io/Flexbox-simplyPage/"><h3>Prosty design</h3></a>
            Podstawą działania struktury strony jest Flexbox. Prosta strona opierająca swój wygląd na HTML i Sass.
          </div>
        </article>

        <article className="project"  ref="left">

          <div className="image">
            <a href="/">
              <img src={noimages} alt="Menu Project" />
            </a>
          </div>

          <div className="description">
            <h3>Jadłospis</h3>
            Uwaga! Aplikacja w budowie!
            Do aplikacji będzie można wpisać dania wraz ze składnikami. Następnie
            wybrać jadłospis na kolejny dzień i wygenerować listę zakupów.
          </div>

        </article>
        
      </section>
    );
  }
}

export default Projects;
