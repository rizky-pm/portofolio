import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceCard = ({ data }) => {
  // const [cardRef, cardInView] = useInView({
  //   triggerOnce: false,
  //   rootMargin: '-100px 0px',
  // });

  const { position, company, location, duration, description } = data;

  return (
    <motion.div
      // ref={cardRef}
      // initial={{ opacity: 0, translateX: 10 }}
      // animate={{
      //   opacity: cardInView ? 1 : 0,
      //   translateX: cardInView ? 0 : 10,
      // }}
      // transition={{ duration: 1 }}
      className='flex flex-col text-center lg:text-left'
    >
      <span className='font-heading font-bold text-md xs:text-lg md:text-3xl text-lightBlue'>
        {position}
      </span>
      <div className='font-heading text-md xs:text-lg md:text-2xl'>
        <span className=''>{company}</span>, <span>{location}</span>
      </div>

      <span className='text-base md:text-lg font-medium lg:font-bold'>
        {duration}
      </span>
      <span className='text-lightGray text-sm xs:text-base md:text-xl font-body'>
        {description}
      </span>
    </motion.div>
  );
};

export default ExperienceCard;
