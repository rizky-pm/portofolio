import React from 'react';
import { motion } from 'framer-motion';

import { useIsMd } from '../../Utils/useMediaQuery';

import ImageLandscape from '../../Images/self-landscape.png';
import ImagePortrait from '../../Images/self-portrait.png';

const Header = ({ innerRef }) => {
  const isMedium = useIsMd();

  const fadeUpAnimation = (delay) => {
    const delayedFadeUpAnimation = {
      initial: { opacity: 0, translateY: 100 },
      animate: { opacity: 1, translateY: 0 },
      transition: { duration: 1, delay: delay },
    };

    return delayedFadeUpAnimation;
  };

  const animationVariants = (animationOne, animationTwo, media) => {
    const variants = media ? animationOne : animationTwo;

    return variants;
  };

  const greetingMotion = animationVariants(
    fadeUpAnimation(4),
    fadeUpAnimation(0),
    isMedium
  );

  const fullNameMotion = animationVariants(
    fadeUpAnimation(4.5),
    fadeUpAnimation(1),
    isMedium
  );

  console.log({ fullNameMotion });

  const positionMotion = animationVariants(
    fadeUpAnimation(5),
    fadeUpAnimation(1.5),
    isMedium
  );

  const summaryMotion = animationVariants(
    fadeUpAnimation(5.5),
    fadeUpAnimation(2),
    isMedium
  );

  const heroImageMotion = animationVariants(
    fadeUpAnimation(5.5),
    fadeUpAnimation(2.5),
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
          <div>
            <motion.h1
              initial={fullNameMotion.initial}
              animate={fullNameMotion.animate}
              transition={fullNameMotion.transition}
              className='primary-heading'
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
            <span className='text-lightBlue font-bold'>React.js</span> based on
            Tangerang, Indonesia. I like to write clean code and reusable for
            future usage.
          </motion.p>
        </div>
      </div>
    </header>
  );
};

export default Header;
