import React from "react";
import portfolio from "./img/portfolio.svg";
import '../styles/css/style.css';
const Projects = () => {
  return (
    <section className="projects">
      <article className="project">
        <div className="imgs" />
        <div>
          <h3>Oszczędności</h3>
          Dzięki tej aplikacji łatwiej będzie nam oszczędzać. Po wpisaniu na co
          chcemy zaoszczędzić i kolejnych wpłat aplikacja oblicza nam ile
          jeszcze pozostało do spełnienia marzenia.
        </div>
      </article>
      <article className="project">
        <div className="imgs">
          <img src={portfolio} alt="dont work" />
        </div>
        <div>
          <h3>Portfolio </h3>
          Projekt od podszewki jest moją twórczością. Przy tworzeniu używałam
          React, Sass i JavaScript. Oczywiście kod jest udostępniony na
          GitHubie.
        </div>
      </article>
      <article className="project">
        <div className="imgs" />
        <div>
          <h3>Jadłospis</h3>
          Do aplikacji można wpisać dania wraz ze składnikami. Nastęnie
          wybieramy jadłospis na kolejny dzień i generujemy listę zakupów.
        </div>
      </article>
      <article className="project">
        <div className="imgs" />
        <div>
          <h3>Kalkulator </h3>
          Strona z kilkoma kalkulatorami: zwykły, walutowy, binarny. Stylowanie
          w języku LESS.
        </div>
      </article>
      <article className="project">
        <div className="imgs" />
        <div>
          <h3>Strona SPA</h3>
          Strona poświęcona fikcyjnej firmie. W trakcie tworzenia używałam
          React, Sass i odświeżyłam wiedzę o jQuery.
        </div>
      </article>
    </section>
  );
};

export default Projects;
