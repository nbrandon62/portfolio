import React from 'react';
import { Header } from 'semantic-ui-react';

const ProjectsHeader = () => {
  return (
    <div id='projects' style={{paddingTop: '15vh', paddingLeft:'20vh', paddingRight: '20vh', paddingBottom:'10rem'}}>
      <Header style={{display:'flex', justifyContent:'flex-end'}} as='h3' dividing>
        Projects
      </Header>
    </div>
  );
};

export default ProjectsHeader;
