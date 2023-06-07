import React from 'react';
import '../styles/Header.css';
import { Grid, Image } from 'semantic-ui-react';
import profilepic from '../assets/profilepic.jpg';

const Header = () => {
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <Grid className='text-container' columns={2} stackable>
            <Grid.Column width={6}>
              <div className='title'>
                <div className='hi'>Hi, my name is</div>
                <div className='name'>Brandon Nguyen</div>
                <div className='hi'>
                  I'm a front-end engineer passionate about creating intuitive
                  apps to solve everyday problems
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className='blob-cont'>
                <div className='yellow blob'></div>
                <div className='red blob'></div>
                <div className='green blob'></div>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </div>
        <svg>
          <filter id='noiseFilter'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.45'
              stitchTiles='stitch'
            />
            <feColorMatrix
              in='colorNoise'
              type='matrix'
              values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'
            />
            <feComposite operator='in' in2='SourceGraphic' result='monoNoise' />
            <feBlend in='SourceGraphic' in2='monoNoise' mode='screen' />
          </filter>
        </svg>
    </>
  );
};

export default Header;
