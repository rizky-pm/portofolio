import React from 'react';
import { motion } from 'framer-motion';

import { useIsMd } from '../../Utils/useMediaQuery';
import {
  largerFadeUpAnimation,
  animationVariants,
} from '../../Utils/Animation';

import ImageLandscape from '../../Images/self-landscape.png';
import ImagePortrait from '../../Images/self-portrait.png';

const Header = ({ innerRef }) => {
  const isMedium = useIsMd();

  const greetingMotion = animationVariants(
    largerFadeUpAnimation(3),
    largerFadeUpAnimation(0),
    isMedium
  );

  const fullNameMotion = animationVariants(
    largerFadeUpAnimation(3.5),
    largerFadeUpAnimation(1),
    isMedium
  );

  console.log({ fullNameMotion });

  const positionMotion = animationVariants(
    largerFadeUpAnimation(4),
    largerFadeUpAnimation(1.5),
    isMedium
  );

  const summaryMotion = animationVariants(
    largerFadeUpAnimation(4.5),
    largerFadeUpAnimation(2),
    isMedium
  );

  const heroImageMotion = animationVariants(
    largerFadeUpAnimation(5),
    largerFadeUpAnimation(2.5),
    isMedium
  );

  return (
    <header ref={innerRef} id='main' className='relative h-screen bg-dark'>
      <motion.span
        initial={heroImageMotion.initial}
        animate={heroImageMotion.animate}
        transition={heroImageMotion.transition}
      >
        <img
          src={ImageLandscape}
          alt='Hero'
          className='w-screen h-screen object-contain xl:object-fill hidden lg:block'
        />
        <img
          src={ImagePortrait}
          alt='Hero'
          className='w-screen h-screen object-cover lg:hidden'
        />
      </motion.span>
      <div className='absolute top-16 lg:top-1/2 lg:-translate-y-1/2 right-5 md:right-20 xl:right-40 text-light md:py-16'>
        <div className='flex flex-col space-y-1 md:space-y-2 text-right'>
          <motion.span
            initial={greetingMotion.initial}
            animate={greetingMotion.animate}
            transition={greetingMotion.transition}
            className='paragraph uppercase font-heading'
          >
            Hello there, I'm
          </motion.span>
          <div className='font-heading font-extrabold text-4xl xs:text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl uppercase'>
            <motion.h1
              initial={fullNameMotion.initial}
              animate={fullNameMotion.animate}
              transition={fullNameMotion.transition}
            >
              <span className='text-lightBlue'>Rizky</span> <br /> Putra <br />
              Mahendra
            </motion.h1>
          </div>
          <motion.p
            initial={positionMotion.initial}
            animate={positionMotion.animate}
            transition={positionMotion.transition}
            className='font-body font-bold text-sm xs:text-base md:text-xl 2xl:text-3xl uppercase'
          >
            {'<'} 1 Year Experience{' '}
            <span className='text-lightBlue'>Frontend Developer</span>
          </motion.p>

          <motion.p
            initial={summaryMotion.initial}
            animate={summaryMotion.animate}
            transition={summaryMotion.transition}
            className='paragraph w-full xs:w-4/5 md:w-[500px] lg:w-[600px] self-end'
          >
            i'm a <span className='text-lightBlue font-bold'>frontend</span>{' '}
            developer with speciality{' '}
            <span className='text-lightBlue font-bold'>React.js</span>. I like
            to write clean code (because its beautiful to read) and reusable for
            future usage.
          </motion.p>
        </div>
      </div>
    </header>
  );
};

export default Header;
