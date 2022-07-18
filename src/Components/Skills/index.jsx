import React from 'react';

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

import InfiniteLooper from '../InfiniteLooper/index';

const Skills = ({ innerRef }) => {
  return (
    <section
      ref={innerRef}
      id='skills'
      className='bg-light flex flex-col justify-center lg:justify-start space-y-8 xs:space-y-16 py-8 md:py-16'
    >
      {/* <div className='space-y-4'>
        <hr className='border-8 border-dark w-1/2' />
        <hr className='border-8 border-dark w-1/3' />
      </div> */}

      <div className='flex flex-col px-2 xs:px-5 lg:px-20 space-y-8 xs:space-y-16 text-center lg:text-right'>
        <h1 className='font-bold text-4xl xs:text-5xl md:text-8xl 2xl:text-9xl uppercase text-dark'>
          Skills
        </h1>

        <p className='text-sm xs:text-lg md:text-xl 2xl:text-2xl text-gray w-full lg:w-1/2 lg:self-end font-body'>
          Here is some skills i have understand how it works. I might not
          extremely good at those, but i have huge willing to learn so i can be
          good at it.
        </p>
      </div>

      <div>
        <InfiniteLooper speed='20' direction='right'>
          <div className='flex space-x-10 md:space-x-20'>
            <img
              className='w-24 h-24 md:w-32 md:h-32 object-contain ml-10 md:ml-20'
              src={reactIcon}
              alt='ReactJS icon'
            />
            <img
              className='w-24 h-24 md:w-32 md:h-32 object-contain'
              src={reduxIcon}
              alt='Redux icon'
            />
            <img
              className='w-24 h-24 md:w-32 md:h-32 object-contain'
              src={routerIcon}
              alt='React router icon'
            />
            <img
              className='w-24 h-24 md:w-32 md:h-32 object-contain'
              src={tailwindCssIcon}
              alt='TailwindCSS icon'
            />
            <img
              className='w-24 h-24 md:w-32 md:h-32 object-contain'
              src={styledComponentsIcon}
              alt='Styled-Components icon'
            />
            <img
              className='w-24 h-24 md:w-32 md:h-32 object-contain'
              src={htmlIcon}
              alt='HTML5 icon'
            />
          </div>
          <div className='hidden'></div>
        </InfiniteLooper>
      </div>

      <div>
        <InfiniteLooper speed='20' direction='left'>
          <div className='flex space-x-10 md:space-x-20'>
            <img
              className='w-24 h-24 md:w-32 md:h-32 object-contain ml-10 md:ml-20'
              src={cssIcon}
              alt='CSS icon'
            />
            <img
              className='w-24 h-24 md:w-32 md:h-32 object-contain'
              src={jsIcon}
              alt='Javascript icon'
            />
            <img
              className='w-24 h-24 md:w-32 md:h-32 object-contain'
              src={nodejsIcon}
              alt='NodeJS icon'
            />
            <img
              className='w-24 h-24 md:w-32 md:h-32 object-contain'
              src={expressIcon}
              alt='Express icon'
            />
            <img
              className='w-24 h-24 md:w-32 md:h-32 object-contain'
              src={gitIcon}
              alt='Git icon'
            />
            <img
              className='w-24 h-24 md:w-32 md:h-32 object-contain'
              src={postmanIcon}
              alt='Postman icon'
            />
          </div>
          <div className='hidden'></div>
        </InfiniteLooper>
      </div>

      {/* <div className='space-y-4 flex flex-col'>
        <hr className='border-8 border-dark w-1/3 self-end' />
        <hr className='border-8 border-dark w-1/2 self-end' />
      </div> */}
    </section>
  );
};

export default Skills;
