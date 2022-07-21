import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ProjectCard from '../ProjectCard';

import { projectsData } from '../../Data/projectsData';
import { fadeUpAnimation } from '../../Utils/Animation';

const Projects = ({ innerRef }) => {
  const [projects, setProjects] = useState([]);

  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const [buttonRef, buttonInView] = useInView({
    triggerOnce: false,
    rootMargin: '-50px 0px',
  });

  const titleMotion = fadeUpAnimation(titleInView);
  const buttonMotion = fadeUpAnimation(buttonInView);

  const populateProjects = () => {
    if (projectsData.length >= 7) {
      projectsData.forEach((project, index) => {
        if (index <= 8) {
          setProjects((prevState) => [...prevState, project]);
        }
      });
    }
  };

  const seeMoreHandler = () => {
    projectsData.forEach((project, index) => {
      if (index > projects.length - 1 && index <= projects.length + 8) {
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
      className='flex flex-col bg-dark text-light px-5 md:px-20 lg:px-44 xl:px-96 py-8 md:py-16 space-y-8'
    >
      <div className='flex items-center'>
        <h1 className='main-heading'>What i've made</h1>
        <hr className='h-1 md:h-2 w-full bg-light' />
      </div>

      <div className='flex flex-col w-full justify-center space-y-44 lg:space-y-8 md:items-center'>
        {projects.map((project, index) => {
          return <ProjectCard key={index} data={project} index={index} />;
        })}
      </div>

      {projects.length === projectsData.length ? (
        <div className='flex justify-center'>
          <motion.button
            ref={buttonRef}
            initial={buttonMotion.initial}
            animate={buttonMotion.animate}
            transition={buttonMotion.transition}
            onClick={seeLessHandler}
            className='primary-button-light'
          >
            See Less
          </motion.button>
        </div>
      ) : (
        <div className='flex justify-center'>
          <motion.button
            ref={buttonRef}
            initial={buttonMotion.initial}
            animate={buttonMotion.animate}
            transition={buttonMotion.transition}
            onClick={seeMoreHandler}
            className='primary-button-light'
          >
            See More
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Projects;
