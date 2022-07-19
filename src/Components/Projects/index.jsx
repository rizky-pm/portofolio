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
      className={`px-5 lg:px-20 py-8 md:py-16  bg-light text-dark flex flex-col space-y-3 justify-between xs:space-y-12`}
    >
      <motion.h1
        ref={titleRef}
        initial={titleMotion.initial}
        animate={titleMotion.animate}
        transition={titleMotion.transition}
        className='text-4xl xs:text-5xl md:text-8xl 2xl:text-9xl text-center lg:text-left uppercase font-heading font-bold'
      >
        What I've Made
      </motion.h1>

      <div className='flex flex-wrap w-full justify-center gap-5 lg:gap-10'>
        {projects.map((project, index) => {
          return <ProjectCard key={index} data={project} />;
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
            className='primary-button-dark'
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
            className='primary-button-dark'
          >
            See More
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Projects;
