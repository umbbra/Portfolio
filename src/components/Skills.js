import React from "react";
import '../styles/css/style.css';
const Skills = () => {
  return (
    <section className="skills">
      <div className="school">
        <h3>Moja droga:</h3>
        <ul>
          <li> 4-letnie Technikum Informatyczne: </li>
          <li> Zdane Egzaminy - E.12, E.13, E.14</li>
          <li> Tytuł Technika Informatyka</li>
          <li>Kurs C++, potwierdzony certyfikatem</li>
          <li>oraz kursy: Front-End, JavaScript (ES6), React</li>
        </ul>
      </div>
      <div className="knowledge">
        <h3>Zdobyta wiedza:</h3>
        <ul>
          <li>HTML5, CSS3, SCSS, SASS </li>
          <li>JavaScript5, ES6, React, React-Router</li>
          <li>Bootstrap, FlexBox, Grid</li>
          <li>Metodologia BEM, Git</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
