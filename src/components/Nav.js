import React from "react";
import'../styles/css/style.css';
const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          Go to top <i className="fas fa-chevron-up" />
        </li>
        <li>o mnie </li>
        <li>umiejętności</li>
        <li>projekty</li>
        <li>kontakt</li>
      </ul>
    </nav>
  );
};

export default Nav;
