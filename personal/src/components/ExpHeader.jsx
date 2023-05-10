import React from 'react';
import { Header } from 'semantic-ui-react';

const ExpHeader = () => {
  return (
    <div style={{paddingTop: '15vh', paddingLeft:'20vh', paddingRight: '20vh', paddingBottom:'10rem'}}>
      <Header as='h3' dividing>
        Where I've worked
      </Header>
    </div>
  );
};

export default ExpHeader;
