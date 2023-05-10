import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ link, img, title, subtitle, tech }) => {
  return (
    <div className='project-card-wrapper'>
      <a href={link} style={{ textDecoration: 'none', color: 'black' }} target='_blank'>
        <div className='project-card-container'>
          <div style={{ marginRight: '1rem' }}>
            <img className='project-card-image' src={img} />
          </div>
          <div>
            <div className='project-card-title'>{title}</div>
            <div className='project-card-subtitle'>{subtitle}</div>
            <div className='project-card-subtitle'>{tech}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
