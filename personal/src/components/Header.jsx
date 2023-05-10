import React from 'react';
import '../styles/Header.css';
import { Grid, Image } from 'semantic-ui-react';
import profilepic from '../assets/profilepic.jpg';

const Header = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Grid columns={2} stackable>
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
            <div className='pic'>
              <Image src={profilepic} size='medium' circular />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
