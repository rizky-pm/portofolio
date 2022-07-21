import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { fadeUpAnimation } from '../../Utils/Animation';

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
    rootMargin: '-100px 0px',
  });

  const cardMotion = fadeUpAnimation(cardInView);

  useEffect(() => {
    checkIsEven();
  }, []);

  return (
    <div
      ref={cardRef}
      initial={cardMotion.initial}
      animate={cardMotion.animate}
      transition={cardMotion.transition}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className='flex relative justify-center w-full h-[200px] xs:h-[250px] md:h-[350px] lg:w-[550px] lg:h-[325px] xl:w-[600px] xl:h-[350px] text-lightBlue basic-transition shadow-md lg:odd:self-start lg:even:self-end'
    >
      <div className='w-full h-full border-lightGray hover:border-lightBlue border-4 overflow-hidden basic-transition p-2'>
        <div className='w-full h-full overflow-hidden'>
          <img
            src={thumbnail}
            alt={`Thumbnail ${title}`}
            className={`w-full h-full object-fill hover:scale-105 basic-transition`}
          />
        </div>
      </div>

      <div
        className={`absolute z-10 lg:z-0 top-[102.5%] lg:top-1/2 lg:-translate-y-1/2 ${
          isEven ? 'lg:right-3/4 lg:items-end' : 'lg:left-3/4 lg:items-start'
        } bg-gray w-full lg:w-3/4 xl:w-full px-4 py-2 lg:px-6 lg:py-4 xl:px-8 xl:py-6 space-y-2 lg:space-y-4 shadow-xl flex flex-col`}
      >
        <span className='text-lightGray text-lg xl:text-xl font-heading font-bold uppercase'>
          {title}
        </span>

        <div className='flex space-x-4 font-body'>
          {tag.map((dataTag, index) => {
            return (
              <span
                className='bg-lightGray py-1 px-2 text-sm text-dark rounded-sm'
                key={index}
              >
                {dataTag}
              </span>
            );
          })}
        </div>

        <div className={`flex space-x-4 font-medium text-center`}>
          <a
            href={repository}
            target='_blank'
            rel='noopener noreferrer'
            className='text-light hover:text-lightBlue transition'
          >
            <div className='mr-2 flex space-x-2 items-center'>
              <span>Source code</span>
              <Code width='w-8' height='h-8' />
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
              <Link width='w-8' height='h-8' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
