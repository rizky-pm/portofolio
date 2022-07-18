import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Code from '../Icons/Code';
import Link from '../Icons/Link';

const ProjectCard = ({ data }) => {
  const { title, repository, liveSite, thumbnail, tag } = data;

  const [isHover, setIsHover] = useState(false);

  const [cardRef, cardInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, translateY: 100 }}
      animate={{
        opacity: cardInView ? 1 : 0,
        translateY: cardInView ? 0 : 100,
      }}
      transition={{ duration: 1 }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className='flex relative justify-center w-[325px] h-[175px] xs:w-[350px] xs:h-[200px] lg:w-[400px] lg:h-[200px] text-lightBlue overflow-hidden border-4 border-dark shadow-md'
    >
      <img
        src={thumbnail}
        alt={`Thumbnail ${title}`}
        className={`w-full h-full object-fill basic-transition ${
          isHover ? 'scale-105' : ''
        }`}
      />

      <div
        className={`absolute ${
          isHover ? 'bg-light' : 'bg-dark'
        } top-[4px] left-[4px] w-auto z-10 py-1 px-4 basic-transition`}
      >
        <span
          className={`font-semibold font-heading text-sm ${
            isHover ? 'text-dark' : ''
          } basic-transition`}
        >
          {title}
        </span>
      </div>

      <div
        className={`absolute ${
          isHover ? 'bg-light' : 'bg-dark'
        } bottom-[4px] right-[4px] w-auto z-10 py-1 px-4 basic-transition`}
      >
        <div className='flex items-center space-x-8'>
          <div
            className={`flex space-x-4 font-body ${
              isHover ? 'text-dark' : 'text-lightBlue'
            } text-sm basic-transition`}
          >
            {tag.map((dataTag, index) => {
              return <span key={index}>{dataTag}</span>;
            })}
          </div>
        </div>
      </div>

      <div
        className={`overlay absolute w-full h-full transition ${
          isHover ? 'bg-dark/80' : 'bg-transparent'
        }`}
      >
        <div
          className={`flex space-x-8 justify-center items-center h-full font-medium text-center ${
            isHover === false ? 'hidden' : ''
          }`}
        >
          <a
            href={repository}
            target='_blank'
            rel='noopener noreferrer'
            className=''
          >
            <Code width='w-12' height='h-12' />
          </a>
          <a
            href={liveSite}
            target='_blank'
            rel='noopener noreferrer'
            className=''
          >
            <Link width='w-12' height='h-12' />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
