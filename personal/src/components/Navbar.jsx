import React from 'react';
import '../styles/Nav.css'

const Navbar = () => {
  return (
    <div class='ui secondary menu'>
      <div class='right menu'>
        <a class='item'>experience</a>
        <a class='item'>projects</a>
        <a class='item'>contact</a>
        <a class='item'>resume</a>
      </div>
    </div>
  );
};

export default Navbar;
