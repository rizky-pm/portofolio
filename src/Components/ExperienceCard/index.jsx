import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceCard = ({ data }) => {
  const { position, company, location, duration, description } = data;

  const [cardRef, cardInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: cardInView ? 1 : 0, y: cardInView ? 0 : 0 }}
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
      <hr className='w-full h-[1px] bg-lightBlue/25 border-none outline-none' />
    </motion.div>
  );
};

export default ExperienceCard;
