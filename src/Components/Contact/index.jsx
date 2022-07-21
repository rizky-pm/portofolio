import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  fadeVerticalVariants,
  scaleHorizontalVariants,
} from '../../Utils/Animation';

import LinkedIn from '../Icons/LinkedIn';
import Github from '../Icons/Github';
import Instagram from '../Icons/Instagram';
import Twitter from '../Icons/Twitter';

const Contact = ({ innerRef }) => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    rootMargin: '-5% 0px',
  });

  const [descriptionRef, descriptionInView] = useInView({
    triggerOnce: false,
    rootMargin: '-5% 0px',
  });

  const [buttonRef, buttonInView] = useInView({
    triggerOnce: false,
    rootMargin: '-5% 0px',
  });

  const [dividerRef, dividerInView] = useInView({
    triggerOnce: false,
    rootMargin: '-5% 0px',
  });

  const [iconsRef, iconsInView] = useInView({
    triggerOnce: false,
    rootMargin: '-5% 0px',
  });

  const titleMotion = fadeVerticalVariants(25, titleInView);
  const descriptionMotion = fadeVerticalVariants(25, descriptionInView);
  const buttonMotion = fadeVerticalVariants(25, buttonInView);
  const lineDividerMotion = scaleHorizontalVariants(0, dividerInView, 1);
  const dividerMotion = fadeVerticalVariants(25, dividerInView);
  const iconsMotion = fadeVerticalVariants(25, iconsInView);

  return (
    <footer
      ref={innerRef}
      id='contact'
      className='flex flex-col bg-dark text-light px-5 lg:px-44 xl:px-96 py-8 md:py-16 space-y-8 h-screen justify-center items-center'
      // className='flex flex-col space-y-8 lg:space-y-16 justify-center items-center px-5 lg:px-40 py-8 md:py-16 bg-dark text-light'
    >
      <motion.h1
        ref={titleRef}
        variants={titleMotion}
        initial='initial'
        animate='animate'
        className='main-heading'
        // className='font-heading font-extrabold text-4xl xs:text-5xl md:text-8xl 2xl:text-9xl uppercase text-center'
      >
        Get in touch
      </motion.h1>

      <motion.p
        ref={descriptionRef}
        variants={descriptionMotion}
        initial='initial'
        animate='animate'
        className='paragraph text-center'
      >
        I'm currently looking for new opportunities, lets talk about it. Or you
        just want to say hi dont hesitate to hit me up!{' '}
      </motion.p>

      <motion.a
        ref={buttonRef}
        variants={buttonMotion}
        initial='initial'
        animate='animate'
        href='mailto:rizkymahendra2346@gmail.com'
        _target='_blank'
        className='primary-button-light'
      >
        Hit me up
      </motion.a>

      <motion.div className='flex w-full items-center gap-2'>
        <motion.hr
          ref={dividerRef}
          variants={lineDividerMotion}
          initial='initial'
          animate='animate'
          className='border border-light w-1/2 lg:w-full origin-right'
        />{' '}
        <motion.span
          ref={dividerRef}
          variants={dividerMotion}
          initial='initial'
          animate='animate'
          className='w-full md:w-1/2 2xl:w-1/3 text-center text-base xs:text-lg md:text-xl font-heading font-bold uppercase origin-center'
        >
          Visit my profile
        </motion.span>
        <motion.hr
          ref={dividerRef}
          variants={lineDividerMotion}
          initial='initial'
          animate='animate'
          className='border border-light w-1/2 lg:w-full origin-left'
        />
      </motion.div>

      <motion.div
        ref={iconsRef}
        variants={iconsMotion}
        initial='initial'
        animate='animate'
        className='flex w-full justify-around 2xl:justify-center 2xl:space-x-20'
      >
        <a
          href='https://www.linkedin.com/in/rizky-p-mahendra'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedIn width='w-8 xs:w-10 md:w-16' height='h-8 xs:h-10 md:h-16' />
        </a>

        <a
          href='https://www.instagram.com/_rizkypm/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Instagram width='w-8 xs:w-10 md:w-16' height='h-8 xs:h-10 md:h-16' />
        </a>

        <a
          href='https://github.com/rizky-pm'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Github width='w-8 xs:w-10 md:w-16' height='h-8 xs:h-10 md:h-16' />
        </a>

        <a
          href='https://twitter.com/_rizkypm'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Twitter width='w-8 xs:w-10 md:w-16' height='h-8 xs:h-10 md:h-16' />
        </a>
      </motion.div>
    </footer>
  );
};

export default Contact;
