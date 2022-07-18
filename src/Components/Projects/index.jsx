import React, { useState, useEffect } from 'react';

import ProjectCard from '../ProjectCard';

import { projectsData } from '../../Data/projectsData';

const Projects = ({ innerRef }) => {
  const [projects, setProjects] = useState([]);

  const populateProjects = () => {
    if (projectsData.length >= 7) {
      projectsData.forEach((project, index) => {
        if (index <= 7) {
          setProjects((prevState) => [...prevState, project]);
        }
      });
    }
  };

  const seeMoreHandler = () => {
    projectsData.forEach((project, index) => {
      if (index > projects.length - 1 && index <= projects.length + 7) {
        setProjects((prevState) => [...prevState, project]);
      }
    });
  };

  const seeLessHandler = () => {
    setProjects([]);
    populateProjects();
  };

  useEffect(() => {
    populateProjects();
  }, []);

  return (
    <section
      ref={innerRef}
      id='projects'
      className={`px-2 xs:px-5 lg:px-20 py-8 md:py-16  bg-light text-dark flex flex-col space-y-3 justify-between xs:space-y-12`}
    >
      <h1 className='text-4xl xs:text-5xl md:text-8xl 2xl:text-9xl text-center lg:text-left uppercase font-heading font-bold'>
        What I've Made
      </h1>

      <div className='flex flex-wrap w-full justify-center gap-5 lg:gap-10'>
        {projects.map((project, index) => {
          return <ProjectCard key={index} data={project} />;
        })}
      </div>

      {projects.length === projectsData.length ? (
        <div className='flex justify-center'>
          <button onClick={seeLessHandler} className='primary-button-dark'>
            See Less
          </button>
        </div>
      ) : (
        <div className='flex justify-center'>
          <button onClick={seeMoreHandler} className='primary-button-dark'>
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
