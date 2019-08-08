import React from 'react';
import  "../css/style.css";
import sr from './Scrollreveal';

class About extends React.Component {
  componentDidMount = () => {
    const config = {
      duration: 2000,
      delay: 150,
      easing: "ease"
    };
    sr.reveal('.about', config )
  }
  render(){
  return ( 
    <section id="about" className="about">
    <h2 className="aboutTitle">
      Krótko o tym, kim jestem i czym aktualnie się zajmuję:
    </h2>
    <p>
      W chwili obecnej sumiennie przygotowuję się do pierwszej pracy jako Front-End Developer. Po przejściu wielu kursów oraz zrobieniu kilku samodzielnych projektów nareszcie mogę godnie przedstawić się na rynku pracy. Aktualnie przerabiam kurs z Node.js oraz Redux. Ponadto jestem osobą uporządkowaną i potrafię utrzymać samodyscyplinę. Rozwój jest nieodłączną cześcią mojego życia i dlatego pragnę rozwijać się w programowaniu. Praca w tym zawodzie jest moim marzeniem, pasją i przyjemnością :)
    </p>
  </section>
   );
  }
}
 
export default About;