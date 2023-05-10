import React from 'react';
import '../styles/Nav.css';

const Navbar = () => {
  return (
    <div className='ui secondary menu'>
      <div className='right menu'>
        <a className='item' href='#experience'>
          experience
        </a>
        <a className='item' href='#projects'>
          projects
        </a>
        <a className='item' href='#contact'>
          contact
        </a>
          <a className='item' href='/resume' target='_blank'>
            resume
          </a>
      </div>
    </div>
  );
};

export default Navbar;
