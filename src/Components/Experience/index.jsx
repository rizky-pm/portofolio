import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ExperienceCard from '../ExperienceCard';
import experiencesData from '../../Data/experiencesData';

const Experience = ({ innerRef }) => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '-20% 0px',
  });

  const [lineRef, lineInView] = useInView({
    triggerOnce: true,
    rootMargin: '-20% 0px',
  });

  return (
    <section
      ref={innerRef}
      className='flex flex-col bg-dark text-light px-5 md:px-20 xl:px-40 2xl:px-96 py-8 md:py-16 space-y-8 h-auto xl:h-screen justify-center text-right'
    >
      <div className='flex items-center'>
        {/* Line */}
        <motion.hr
          ref={lineRef}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: titleInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
          className='h-1 md:h-2 w-full bg-light origin-right'
        />

        {/* Title */}
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: titleInView ? 1 : 0,
            scaleX: titleInView ? 1 : 0,
          }}
          transition={{ duration: 1 }}
          className='main-heading origin-right'
        >
          experience
        </motion.h1>
      </div>

      {/* Experience Card Container */}
      <motion.div className='flex flex-col justify-center lg:pl-8 space-y-6 lg:space-y-12'>
        {experiencesData.map((experience, index) => {
          return <ExperienceCard key={index} data={experience} num={index} />;
        })}
      </motion.div>
    </section>
  );
};

export default Experience;
