import React from 'react';
import ProjectCard from './ProjectCard';
import compox from '../assets/compox.png';
import cheflife from '../assets/cheflife.png';
import justchilld from '../assets/justchilld.png';

const projects = [
  {
    link: 'https://www.compo.ai/account/create-account',
    img: compox,
    title: 'Compo Search',
    subtitle:
      ' A no-code/low-code solution to web building using the GPT-3.5 API. Users can sign up and prompt the API to return a fleshed out web component. It renders HTML/CSS to the user and will store to the database.',
    tech: 'Next.js | Directus | GraphQL | TailwindCSS   ',
  },
  {
    link:'https://react-recipes-9cdc1.web.app/',
    img: cheflife,
    title: 'cheflife at home',
    subtitle:
      "Don't know what to cook this week? Sign-up to create, read and store your own recipes. Future implementations include a social network feature where you can follow and like recipes to add to your feed.",
    tech: 'React | Firebase | CSS  | Semantic-UI',
  },
  {
    link:'https://justchilld.com/',
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
        link={project.link}
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
