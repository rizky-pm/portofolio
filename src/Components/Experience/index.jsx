import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ExperienceCard from '../ExperienceCard';

import experiencesData from '../../Data/experiencesData';

const Experience = ({ innerRef }) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });
  return (
    <section
      ref={innerRef}
      id='experience'
      className='px-5 lg:px-20 py-8 md:py-16 flex flex-col lg:flex-row justify-center items-center space-y-3 xs:space-y-12 lg:space-y-0 bg-dark text-light'
    >
      {/* <div className='flex flex-col lg:flex-row justify-center items-center space-y-3 xs:space-y-12 lg:space-y-0'> */}
      <div className='w-full lg:w-1/2 flex flex-col justify-between uppercase text-right lg:pr-8'>
        <motion.p
          ref={titleRef}
          initial={{ opacity: 0, translateY: 20 }}
          animate={{
            opacity: titleInView ? 1 : 0,
            translateY: titleInView ? 0 : 20,
          }}
          transition={{ duration: 1 }}
          className='2xl:text-9xl md:text-8xl xs:text-5xl text-4xl font-bold text-center lg:text-right'
        >
          Seven months experience
        </motion.p>
      </div>

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, translateY: 20 }}
        animate={{
          opacity: cardInView ? 1 : 0,
          translateY: cardInView ? 0 : 20,
        }}
        transition={{ duration: 1 }}
        className='flex flex-col justify-center w-full lg:w-1/2 space-y-6 lg:space-y-12 lg:pl-8 lg:border-l-8 lg:border-light'
      >
        {experiencesData.map((experience, index) => {
          return <ExperienceCard key={index} data={experience} num={index} />;
        })}
      </motion.div>
      {/* </div> */}
    </section>
  );
};

export default Experience;
