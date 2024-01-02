import React from 'react';
import '../styles/Exp.css';

const ExpBody = ({ title, link, href, date, body }) => {
    const renderedPoints = body.map((item, index) => {
        return <li className='exp-body-li' style={{marginBottom:'2rem'}} key={index}>{item.point}</li>
    });

  return (
    <div className='exp-body-container'>
      <div className='exp-body-header'>
        <div className='exp-body-title'>
          {title} @ 
          <a className={[
            'exp-link',
            href ? 'exp-link--has-link'
            : ''
            ].filter(Boolean).join(' ')} target="_blank" rel="noopener noreferrer" href={href}>
            {link}
          </a>
        </div>
        <div className='exp-body-title'>{date}</div>
      </div>
      <ul className='exp-body-points'>
      {renderedPoints}
      </ul>
    </div>
  );
};

export default ExpBody;
