import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceCard = ({ data }) => {
  const { position, company, location, duration, description } = data;

  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: '5%' }}
      animate={{
        opacity: cardInView ? 1 : 0,
        x: cardInView ? 0 : '5%',
      }}
      transition={{ duration: 1 }}
      className='space-y-4'
    >
      <div className='flex flex-col text-right'>
        <span className='font-heading font-bold text-md xs:text-lg md:text-3xl text-lightBlue'>
          {position}
        </span>
        <div className='font-heading text-md xs:text-lg md:text-2xl'>
          <span className=''>{company}</span>, <span>{location}</span>
        </div>

        <span className='text-base md:text-2xl'>{duration}</span>
        <span className='paragraph'>{description}</span>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
