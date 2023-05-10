import React from 'react';
import '../styles/SideBar.css';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const SideBar = () => {
  return (
    <div className='sidebar-wrapper'>
      <ul className='sidebar'>
        <li className='sidebar-list'>
          <a href='https://www.linkedin.com/in/brandon-nguyen-506646244/' target="_blank" rel="noopener noreferrer" >
            <svg
              width='43px'
              height='43px'
              strokeWidth='1.3'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              color='#000000'
            >
              <path
                d='M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7'
                stroke='#000000'
                strokeWidth='1.3'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                d='M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011'
                stroke='#000000'
                strokeWidth='1.3'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
          </a>
        </li>
        <li className='sidebar-list'>
          <a href='https://github.com/nbrandon62' target="_blank" rel="noopener noreferrer">
            <svg
              width='43px'
              height='43px'
              strokeWidth='1.3'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              color='#000000'
            >
              <path
                d='M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3'
                stroke='#000000'
                strokeWidth='1.3'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
          </a>
        </li>

      </ul>
    </div>
  );
};

export default SideBar;
