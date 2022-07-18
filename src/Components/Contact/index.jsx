import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import LinkedIn from '../Icons/LinkedIn';
import Github from '../Icons/Github';
import Instagram from '../Icons/Instagram';
import Twitter from '../Icons/Twitter';

const Contact = ({ innerRef }) => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const [descriptionRef, descriptionInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const [buttonRef, buttonInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const [dividerRef, dividerInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const [iconsRef, iconsInView] = useInView({
    triggerOnce: false,
    rootMargin: '0px 0px',
  });

  return (
    <footer
      ref={innerRef}
      id='contact'
      className='flex flex-col space-y-8 lg:space-y-16 justify-center items-center bg-dark text-light px-5 lg:px-40 py-8 md:py-16'
    >
      <motion.h1
        ref={titleRef}
        initial={{ opacity: 0, translateY: 50 }}
        animate={{
          opacity: titleInView ? 1 : 0,
          translateY: titleInView ? 0 : 50,
        }}
        transition={{ duration: 1 }}
        className='text-4xl xs:text-5xl md:text-8xl 2xl:text-9xl text-center tracking-widest font-heading font-bold uppercase'
      >
        Get in touch
      </motion.h1>

      {/* <div className='flex justify-center items-center w-full h-1/2'>
        <div className='flex flex-col justify-evenly items-center w-full lg:w-1/2 h-full space-y-2 xs:space-y-8 '> */}
      <motion.p
        ref={descriptionRef}
        initial={{ opacity: 0, translateY: 50 }}
        animate={{
          opacity: descriptionInView ? 1 : 0,
          translateY: descriptionInView ? 0 : 50,
        }}
        transition={{ duration: 1 }}
        className='text-lightGray font-bold lg:font-bold font-body text-center text-sm xs:text-lg md:text-xl 2xl:text-2xl w-full lg:w-1/2'
      >
        I'm currently looking for new opportunities, lets talk about it. Or you
        just want to say hi dont hesitate to hit me up!{' '}
      </motion.p>
      <motion.a
        ref={buttonRef}
        initial={{ opacity: 0, translateY: 50 }}
        animate={{
          opacity: buttonInView ? 1 : 0,
          translateY: buttonInView ? 0 : 50,
        }}
        transition={{ duration: 1 }}
        href='mailto:rizkymahendra2346@gmail.com'
        _target='_blank'
        className='primary-button-light'
      >
        Hit me up
      </motion.a>

      <motion.div
        ref={dividerRef}
        initial={{ opacity: 0, translateY: 50 }}
        animate={{
          opacity: dividerInView ? 1 : 0,
          translateY: dividerInView ? 0 : 50,
        }}
        transition={{ duration: 1 }}
        className='flex w-full items-center gap-2'
      >
        <hr className='border border-light w-1/2 lg:w-full' />{' '}
        <span className='w-full md:w-1/2 2xl:w-1/3 text-center text-base xs:text-lg md:text-xl font-heading font-bold uppercase'>
          Visit my profile
        </span>
        <hr className='border border-light w-1/2 lg:w-full' />
      </motion.div>

      <motion.div
        ref={iconsRef}
        initial={{ opacity: 0, translateY: 50 }}
        animate={{
          opacity: iconsInView ? 1 : 0,
          translateY: iconsInView ? 0 : 50,
        }}
        transition={{ duration: 1 }}
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
      {/* </div>
      </div> */}
    </footer>
  );
};

export default Contact;
