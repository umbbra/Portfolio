import React from "react";
import "../css/style.css";
import $ from 'jquery';

$(document).ready(function() { 

	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

});
class Nav extends React.Component {
  state = {
    active: false,
  };
  showMenu = () => {
    this.setState({
      active: !this.state.active,
    });
  
    console.log("Nastąpiła zmiana");
  };
  
  render() {
    return (
      <>
        <nav className="desktop">
          <ul>
            <li>
              <a href="#header">
              Na górę <i className="fas fa-chevron-up" />
              </a>
            </li>
            <li> <a href="#about"> o mnie </a></li>
            <li> <a href="#skills">umiejętności</a></li>
            <li><a href="#projects">projekty</a></li>
            <li><a href="#contact">kontakt</a></li>
          </ul>
        </nav>

        <div onClick={this.showMenu}>
          <i className={this.state.active ? "fas fa-times hamburger" :"fas fa-bars hamburger" } />
          
        </div>
        <nav>
          <div className={this.state.active ? "on active" : "on"}>
            <ul>
            <li onClick={this.showMenu}><a href="#about"> O mnie</a></li>
            <li onClick={this.showMenu}><a href="#skills">umiejętności</a></li>
            <li onClick={this.showMenu}><a href="#projects">projekty</a></li>
            <li onClick={this.showMenu}><a href="#contact">kontakt</a></li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
