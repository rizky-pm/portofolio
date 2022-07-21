import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ProjectCard from '../ProjectCard';

import { projectsData } from '../../Data/projectsData';

const Projects = ({ innerRef }) => {
  const [projects, setProjects] = useState([]);

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

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  });

  const [lineRef, lineInView] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  });

  const [projectRef, projectInView] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  });

  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    rootMargin: '-150px 0px',
  });

  useEffect(() => {
    populateProjects();
  }, []);

  return (
    <section
      ref={innerRef}
      className='flex flex-col bg-dark text-light px-5 md:px-20 xl:px-40 2xl:px-96 py-8 md:py-16 space-y-8'
    >
      <div className='flex items-center'>
        {/* Title */}
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: titleInView ? 1 : 0,
            scaleX: titleInView ? 1 : 0,
          }}
          transition={{ duration: 1 }}
          className='main-heading origin-left'
        >
          I made these
        </motion.h1>

        {/* Border */}
        <motion.hr
          ref={lineRef}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: titleInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
          className='h-1 md:h-2 w-full bg-light origin-left'
        />
      </div>

      {/* Project */}
      <div className='flex flex-col w-full justify-center items-center space-y-12 lg:space-y-8'>
        {projects.map((project, index) => {
          return <ProjectCard key={index} data={project} index={index} />;
        })}
      </div>

      {projects.length === projectsData.length ? (
        <div className='flex justify-center'>
          {/* Button */}
          <motion.button
            ref={buttonRef}
            initial={{ opacity: 0 }}
            animate={{
              opacity: buttonInView ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            onClick={seeLessHandler}
            className='primary-button-light'
          >
            See Less
          </motion.button>
        </div>
      ) : (
        <div className='flex justify-center'>
          {/* Button */}
          <motion.button
            ref={buttonRef}
            initial={{ opacity: 0 }}
            animate={{
              opacity: buttonInView ? 1 : 0,
            }}
            transition={{ duration: 1 }}
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
