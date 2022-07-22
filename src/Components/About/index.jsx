import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Selfie from '../../Images/selfie.jpg';

const About = ({ innerRef }) => {
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
    rootMargin: '-40% 0px',
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    rootMargin: '-40% 0px',
  });

  const [paragraphRef, paragraphInView] = useInView({
    triggerOnce: true,
    rootMargin: '-40% 0px',
  });

  return (
    <section
      id='about'
      ref={innerRef}
      className='section-container justify-center'
    >
      <div className='flex items-center'>
        {/* Title */}
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: titleInView ? 1 : 0,
            scaleX: titleInView ? 1 : 0,
          }}
          transition={{ duration: 1 }}
          className='secondary-heading origin-left'
        >
          About me
        </motion.h1>

        {/* Line */}
        <motion.hr
          ref={lineRef}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: titleInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
          className='h-1 md:h-2 w-full bg-light origin-left'
        />
      </div>

      <div className='xl:flex xl:gap-4'>
        <div className='relative 2xl:w-1/2 lg:w-1/3 w-1/2 h-1/2 float-left xl:float-none ml-6 mr-4 mb-4 xl:mr-0 xl:mb-0'>
          {/* Border */}
          <motion.div
            ref={borderRef}
            initial={{ opacity: 0, x: '-5%', y: 0 }}
            animate={{
              opacity: borderInView ? 1 : 0,
              x: borderInView ? 0 : '-5%',
            }}
            transition={{ duration: 1, delay: 1 }}
            className={`absolute w-full h-full lg:border-8 border-4 basic-transition ${
              isHover
                ? 'lg:top-6 md:top-6 top-4 lg:right-6 md:right-6 right-4 border-lightBlue'
                : 'lg:top-4 md:top-4 top-3 lg:right-4 md:right-4 right-3 border-light'
            }`}
          ></motion.div>

          {/* Image */}
          <motion.img
            ref={imageRef}
            initial={{ opacity: 0, x: '-5%', y: 0 }}
            animate={{
              opacity: imageInView ? 1 : 0,
              x: imageInView ? 0 : '-5%',
            }}
            transition={{ duration: 1 }}
            src={Selfie}
            alt='Me selfie'
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

        {/* Paragraph */}
        <motion.p
          ref={paragraphRef}
          initial={{ opacity: 0, x: 0, y: 50 }}
          animate={{
            opacity: paragraphInView ? 1 : 0,
            x: paragraphInView ? 0 : 0,
            y: paragraphInView ? 0 : 50,
          }}
          transition={{ duration: 1 }}
          className='text-justify xl:text-left xl:w-2/3 text-lightGray text-sm xs:text-base md:text-xl font-body'
        >
          Hi, my name is Rizky Putra Mahendra you can call me Rizky or PM. I
          have a bachelor's degree in computer science. I love to make things
          that run on the internet and also like something clean, e.g clean
          design and clean code because it's so satisfying to look at:{`)`}.{' '}
          <br />
          <br />
          It all started back in 2015 where I learned HTML and CSS at
          highschool, I saw some website designs that caught my eye, since then
          I started learning how to make a website by buying online courses or
          reading documentation. That's why I'm very interested in website
          development, especially on the frontend, using the main technologies
          of React.js and TailwindCSS or Styled Component. But don't close
          myself to learning how website data is processed behind the scenes or
          backend I have little experience with backend, especially Express.js
          and MySQL.
          <br />
          <br />
          However, my minimal work experience makes me very excited to see and
          seek opportunities or opportunities that are given to me.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
