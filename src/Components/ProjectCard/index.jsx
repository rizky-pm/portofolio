import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Code from '../Icons/Code';
import Link from '../Icons/Link';

const ProjectCard = ({ data, index }) => {
  const { title, repository, liveSite, thumbnail, tag } = data;

  const [isHover, setIsHover] = useState(false);
  const [isEven, setIsEven] = useState(true);

  const checkIsEven = () => {
    setIsEven(index % 2);
  };

  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    rootMargin: '-10% 0px',
  });

  const [borderRef, borderInView] = useInView({
    triggerOnce: true,
    rootMargin: '-20% 0px',
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    rootMargin: '-10% 0px',
  });

  const [metaRef, metaInView] = useInView({
    triggerOnce: true,
    rootMargin: '-10% 0px',
  });

  useEffect(() => {
    checkIsEven();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      // initial={{ opacity: 0, x: 0, y: 25 }}
      // animate={{
      //   opacity: textInView ? 1 : 0,
      //   x: textInView ? 0 : 0,
      //   y: textInView ? 0 : 25,
      // }}
      // transition={{ duration: 1 }}

      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className='flex flex-col space-y-2 lg:space-y-0 lg:flex-row relative justify-center w-full h-full lg:w-3/5 xl:w-3/5 text-lightBlue basic-transition shadow-md lg:odd:self-start lg:even:self-end'
    >
      {/* Border */}
      <motion.div
        ref={borderRef}
        initial={{ opacity: 0, x: 0, y: '5%' }}
        animate={{
          opacity: borderInView ? 1 : 0,
          x: borderInView ? 0 : 0,
          y: borderInView ? 0 : '5%',
        }}
        transition={{ duration: 1 }}
        className='w-full h-full border-lightGray hover:border-lightBlue border-4 overflow-hidden basic-transition p-2'
      >
        <div className='w-full h-full overflow-hidden'>
          {/* Image */}
          <motion.img
            ref={imageRef}
            initial={{ opacity: 0, x: 0, y: '5%' }}
            animate={{
              opacity: borderInView ? 1 : 0,
              x: borderInView ? 0 : 0,
              y: borderInView ? 0 : '5%',
              transition: { duration: 1, delay: 1 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5, delay: 0 },
            }}
            src={thumbnail}
            alt={`Thumbnail ${title}`}
            className={`w-full h-full object-fill hover:scale-105 basic-transition`}
          />
        </div>
      </motion.div>

      {/* Metadata Container */}
      <motion.div
        ref={metaRef}
        initial={{ opacity: 0 }}
        animate={{
          opacity: borderInView ? 1 : 0,
        }}
        transition={{ duration: 1, delay: 2 }}
        className={`block lg:absolute z-10 lg:z-0 top-[105%] md:top-[102.5%] lg:top-1/2 lg:-translate-y-1/2 ${
          isEven ? 'lg:right-3/4 lg:items-end' : 'lg:left-3/4 lg:items-start'
        } bg-gray w-full lg:w-4/5 px-4 py-2 lg:px-6 lg:py-4 2xl:px-8 2xl:py-6 space-y-2 lg:space-y-4 shadow-xl flex flex-col`}
      >
        {/* Title */}
        <span className='text-lightGray text-base md:text-xl font-heading font-bold uppercase'>
          {title}
        </span>

        <div className='flex space-x-4 font-body'>
          {tag.map((dataTag, index) => {
            return (
              // Tag
              <span
                className='bg-lightBlue text-dark py-1 px-2 text-xs md:text-sm rounded-sm'
                key={index}
              >
                {dataTag}
              </span>
            );
          })}
        </div>

        {/* Link Container */}
        <div
          className={`flex space-x-4 font-medium text-center text-sm md:text-lg`}
        >
          <a
            href={repository}
            target='_blank'
            rel='noopener noreferrer'
            className='text-light hover:text-lightBlue transition'
          >
            <div className='mr-2 flex space-x-2 items-center'>
              <span>Source code</span>
              <Code width='w-6 md:w-8' height='h-6 md:h-8' />
            </div>
          </a>
          <a
            href={liveSite}
            target='_blank'
            rel='noopener noreferrer'
            className='text-light hover:text-lightBlue transition'
          >
            <div className='mr-2 flex space-x-2 items-center'>
              <span>Live site</span>
              <Link width='w-6 md:w-8' height='h-6 md:h-8' />
            </div>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
