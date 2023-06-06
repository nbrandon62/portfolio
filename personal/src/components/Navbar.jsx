import React from 'react';
import '../styles/Nav.css';

const Navbar = () => {
  return (
    <nav>
    <div class="logo"></div>
    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="/resume" target='_blank'>Resume</a></li>
    </ul>
  </nav>
  );
};

export default Navbar;
