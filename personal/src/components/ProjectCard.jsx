import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ img, title, subtitle, tech }) => {
  return (
    <div className='project-card-wrapper'>
      <div className='project-card-container'>
        <div >
          <img className='project-card-image' src={img} />
        </div>
        <div className='project-card-title'>{title}</div>
        <div className='project-card-subtitle'>{subtitle}</div>
        <div className='project-card-subtitle'>{tech}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
