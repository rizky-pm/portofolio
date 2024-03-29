import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import reactIcon from '../../Images/icon-bnw/react-js-bnw.png';
import tailwindCssIcon from '../../Images/icon-bnw/tailwind-css-bnw.png';
import styledComponentsIcon from '../../Images/icon-bnw/styled-components-bnw.png';
import reduxIcon from '../../Images/icon-bnw/redux-bnw.png';
import routerIcon from '../../Images/icon-bnw/react-router-bnw.png';
import htmlIcon from '../../Images/icon-bnw/html-bnw.png';
import cssIcon from '../../Images/icon-bnw/css-bnw.png';
import jsIcon from '../../Images/icon-bnw/js-bnw.png';
import nodejsIcon from '../../Images/icon-bnw/node-js-bnw.png';
import expressIcon from '../../Images/icon-bnw/expressjs-bnw.png';
import gitIcon from '../../Images/icon-bnw/git-bnw.png';
import postmanIcon from '../../Images/icon-bnw/postman-bnw.png';
import Coding from '../../Images/coding.jpg';

import InfiniteLooper from '../InfiniteLooper/index';

const Skills = ({ innerRef }) => {
  const [isHover, setIsHover] = useState(false);

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '-20% 0px',
  });

  const [lineRef, lineInView] = useInView({
    triggerOnce: true,
    rootMargin: '-20% 0px',
  });

  const [borderRef, borderInView] = useInView({
    triggerOnce: true,
    rootMargin: '-30% 0px',
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    rootMargin: '-30% 0px',
  });

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    rootMargin: '-40% 0px',
  });

  const [firstInfiniteLooperRef, firstInfiniteLooperInView] = useInView({
    triggerOnce: true,
    rootMargin: '-20% 0px',
  });

  const [secondInfiniteLooperRef, secondInfiniteLooperInView] = useInView({
    triggerOnce: true,
    rootMargin: '-20% 0px',
  });

  return (
    <section
      ref={innerRef}
      id='skills'
      className='bg-dark text-light py-8 md:py-16 space-y-8 md:space-y-12 xl:space-y-16 justify-center items-center text-right'
    >
      <div className='flex flex-col px-5 md:px-20 xl:px-40 2xl:px-96 space-y-12'>
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
            className='secondary-heading origin-right'
          >
            Tech Stack
          </motion.h1>
        </div>

        <div className='xl:flex xl:gap-x-4'>
          <div className='order-2 relative w-3/5 h-3/5 2xl:w-3/4 xl:h-3/4 float-right xl:float-none mr-6 ml-4 mb-4 xl:ml-0 xl:mb-0'>
            {/* Border */}
            <motion.div
              ref={borderRef}
              initial={{ opacity: 0, x: '5%', y: 0 }}
              animate={{
                opacity: borderInView ? 1 : 0,
                x: borderInView ? 0 : '5%',
              }}
              transition={{ duration: 1, delay: 1 }}
              className={`absolute w-full h-full lg:border-8 border-4 basic-transition ${
                isHover
                  ? 'lg:top-6 md:top-6 top-4 lg:left-6 md:left-6 left-4 border-lightBlue'
                  : 'lg:top-4 md:top-4 top-3 lg:left-4 md:left-4 left-3 border-light'
              }`}
            ></motion.div>

            {/* Image */}
            <motion.img
              ref={imageRef}
              initial={{ opacity: 0, x: '5%', y: 0 }}
              animate={{
                opacity: imageInView ? 1 : 0,
                x: imageInView ? 0 : '5%',
              }}
              transition={{ duration: 1 }}
              src={Coding}
              alt='Me coding'
              className={`basic-transition ${
                isHover ? 'grayscale-0' : 'grayscale'
              }`}
              onMouseEnter={() => {
                setIsHover(true);
              }}
              onMouseLeave={() => {
                setIsHover(false);
              }}
            />
          </div>

          {/* Text */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 0, y: 50 }}
            animate={{
              opacity: textInView ? 1 : 0,
              x: textInView ? 0 : 0,
              y: textInView ? 0 : 50,
            }}
            transition={{ duration: 1 }}
            className='text-justify xl:text-right order-1 xl:w-2/3 text-lightGray text-sm xs:text-base md:text-xl font-body'
          >
            <p>
              Here is some technologies i currently use. I might not extremely
              good at those, but i have huge willing to learn so i can be good
              at those. Like technology that is constantly being updated or new
              releases, knowledge also must be updated or added new ones.
            </p>

            <br />

            <blockquote className='italic'>
              &ldquo;For the things we have to learn before we can do them, we
              learn by doing them.&rdquo;
            </blockquote>
            <span>Aristotle</span>
          </motion.div>
        </div>
      </div>

      <motion.div
        ref={firstInfiniteLooperRef}
        initial={{ opacity: 0 }}
        animate={{
          opacity: firstInfiniteLooperInView ? 1 : 0,
        }}
        transition={{ duration: 1 }}
      >
        <InfiniteLooper speed='20' direction='right'>
          <div className='flex space-x-10 md:space-x-20'>
            <img
              className='w-16 h-16 md:w-24 xl:w-32 md:h-24 xl:h-32 object-contain ml-10 md:ml-20'
              src={reactIcon}
              alt='ReactJS icon'
            />
            <img
              className='w-16 h-16 md:w-24 xl:w-32 md:h-24 xl:h-32 object-contain'
              src={reduxIcon}
              alt='Redux icon'
            />
            <img
              className='w-16 h-16 md:w-24 xl:w-32 md:h-24 xl:h-32 object-contain'
              src={routerIcon}
              alt='React router icon'
            />
            <img
              className='w-16 h-16 md:w-24 xl:w-32 md:h-24 xl:h-32 object-contain'
              src={tailwindCssIcon}
              alt='TailwindCSS icon'
            />
            <img
              className='w-16 h-16 md:w-24 xl:w-32 md:h-24 xl:h-32 object-contain'
              src={styledComponentsIcon}
              alt='Styled-Components icon'
            />
            <img
              className='w-16 h-16 md:w-24 xl:w-32 md:h-24 xl:h-32 object-contain'
              src={htmlIcon}
              alt='HTML5 icon'
            />
          </div>
          <div className='hidden'></div>
        </InfiniteLooper>
      </motion.div>

      <motion.div
        ref={secondInfiniteLooperRef}
        initial={{ opacity: 0 }}
        animate={{
          opacity: secondInfiniteLooperInView ? 1 : 0,
        }}
        transition={{ duration: 1 }}
      >
        <InfiniteLooper speed='20' direction='reverse'>
          <div className='flex space-x-10 md:space-x-20'>
            <img
              className='w-16 h-16 md:w-24 xl:w-32 md:h-24 xl:h-32 object-contain ml-10 md:ml-20'
              src={cssIcon}
              alt='CSS icon'
            />
            <img
              className='w-16 h-16 md:w-24 xl:w-32 md:h-24 xl:h-32 object-contain'
              src={jsIcon}
              alt='Javascript icon'
            />
            <img
              className='w-16 h-16 md:w-24 xl:w-32 md:h-24 xl:h-32 object-contain'
              src={nodejsIcon}
              alt='NodeJS icon'
            />
            <img
              className='w-16 h-16 md:w-24 xl:w-32 md:h-24 xl:h-32 object-contain'
              src={expressIcon}
              alt='Express icon'
            />
            <img
              className='w-16 h-16 md:w-24 xl:w-32 md:h-24 xl:h-32 object-contain'
              src={gitIcon}
              alt='Git icon'
            />
            <img
              className='w-16 h-16 md:w-24 xl:w-32 md:h-24 xl:h-32 object-contain'
              src={postmanIcon}
              alt='Postman icon'
            />
          </div>
          <div className='hidden'></div>
        </InfiniteLooper>
      </motion.div>
    </section>
  );
};

export default Skills;
