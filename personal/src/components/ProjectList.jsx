import React from 'react';
import ProjectCard from './ProjectCard';
import compox from '../assets/compox.png';
import cheflife from '../assets/cheflife.png';
import justchilld from '../assets/justchilld.png';

const projects = [
  {
    img: compox,
    title: 'Compo-X',
    subtitle:
      ' A no-code/low-code solution to web building using the GPT-03 API. Users can sign up and prompt the API to return a fleshed out web component. It renders HTML/CSS to the user and will store to the database.',
    tech: 'Next.js | Directus | GraphQL | TailwindCSS   ',
  },
  {
    img: cheflife,
    title: 'cheflife at home',
    subtitle:
      "Don't know what to cook this week? Sign-up to create, read and store your own recipes. Future implementations include a social network feature where you can follow and like recipes to add to your feed.",
    tech: 'React | Firebase | CSS  | Semantic-UI',
  },
  {
    img: justchilld,
    title: "just chill'd",
    subtitle:
      'Client facing project for a small private bartending business. Browse through booking options and find the right bartending package for your event.',
    tech: 'React | Firebase | CSS | Semantic-UI',
  },
];

const ProjectList = () => {
  const renderedProjects = projects.map((project, index) => {
    return (
      <ProjectCard
        key={index}
        title={project.title}
        subtitle={project.subtitle}
        img={project.img}
        tech={project.tech}
      />
    );
  });
  return <div className='project-list-wrapper'>{renderedProjects}</div>;
};

export default ProjectList;
