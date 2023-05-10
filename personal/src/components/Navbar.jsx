import React from 'react';
import '../styles/Nav.css'

const Navbar = () => {
  return (
    <div className='ui secondary menu'>
      <div className='right menu'>
        <a className='item'>experience</a>
        <a className='item'>projects</a>
        <a className='item'>contact</a>
        <a className='item'>resume</a>
      </div>
    </div>
  );
};

export default Navbar;
