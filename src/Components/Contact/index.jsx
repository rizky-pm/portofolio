import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import LinkedIn from '../Icons/LinkedIn';
import Github from '../Icons/Github';
import Instagram from '../Icons/Instagram';
import Twitter from '../Icons/Twitter';
import ReactjsIcon from '../../Images/icon-bnw/react-js-bnw.png';
import TailwindcssIcon from '../../Images/icon-bnw/tailwind-css-bnw.png';
import FramerMotionIcon from '../../Images/icon-bnw/framer-motion-bnw.png';

const Contact = ({ innerRef }) => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '-5% 0px',
  });

  const [descriptionRef, descriptionInView] = useInView({
    triggerOnce: true,
    rootMargin: '-5% 0px',
  });

  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    rootMargin: '-5% 0px',
  });

  const [dividerRef, dividerInView] = useInView({
    triggerOnce: true,
    rootMargin: '-5% 0px',
  });

  const [iconsRef, iconsInView] = useInView({
    triggerOnce: true,
    rootMargin: '-5% 0px',
  });

  const [builtWithRef, builtWithInView] = useInView({
    triggerOnce: true,
    rootMargin: '-5% 0px',
  });

  return (
    <footer
      ref={innerRef}
      id='contact'
      className='relative flex flex-col bg-dark text-light px-5 md:px-20 xl:px-40 2xl:px-96 py-8 md:py-16 space-y-8 h-screen justify-center items-center'
    >
      <motion.h1
        ref={titleRef}
        initial={{ opacity: 0, y: 25, x: 0 }}
        animate={{
          opacity: titleInView ? 1 : 0,
          y: titleInView ? 0 : 25,
          x: titleInView ? 0 : 0,
        }}
        transition={{ duration: 1 }}
        className='font-heading font-extrabold text-4xl xs:text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl uppercase'
      >
        Get in touch
      </motion.h1>

      <motion.p
        ref={descriptionRef}
        initial={{ opacity: 0, y: 25, x: 0 }}
        animate={{
          opacity: descriptionInView ? 1 : 0,
          y: descriptionInView ? 0 : 25,
          x: descriptionInView ? 0 : 0,
        }}
        transition={{ duration: 1 }}
        className='paragraph text-center'
      >
        I'm currently looking for new opportunities, lets talk about it. Or you
        just want to say hi dont hesitate to hit me up!{' '}
      </motion.p>

      <motion.a
        ref={buttonRef}
        initial={{ opacity: 0, y: 25, x: 0 }}
        animate={{
          opacity: buttonInView ? 1 : 0,
          y: buttonInView ? 0 : 25,
          x: buttonInView ? 0 : 0,
        }}
        transition={{ duration: 1 }}
        href='mailto:rizkymahendra2346@gmail.com'
        _target='_blank'
        className='primary-button-light'
      >
        Hit me up
      </motion.a>

      <motion.div className='flex w-full items-center gap-2'>
        <motion.hr
          ref={dividerRef}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: dividerInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
          className='border border-light w-1/2 lg:w-full origin-right'
        />{' '}
        <motion.span
          ref={dividerRef}
          initial={{ opacity: 0, y: 25, x: 0 }}
          animate={{
            opacity: buttonInView ? 1 : 0,
            y: buttonInView ? 0 : 25,
            x: buttonInView ? 0 : 0,
          }}
          transition={{ duration: 1 }}
          className='w-full md:w-1/2 2xl:w-1/3 text-center text-base xs:text-lg md:text-xl font-heading font-bold uppercase origin-center'
        >
          Visit my profile
        </motion.span>
        <motion.hr
          ref={dividerRef}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: dividerInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
          className='border border-light w-1/2 lg:w-full origin-left'
        />
      </motion.div>

      <motion.div
        ref={iconsRef}
        initial={{ opacity: 0, y: 25, x: 0 }}
        animate={{
          opacity: iconsInView ? 1 : 0,
          y: iconsInView ? 0 : 25,
          x: iconsInView ? 0 : 0,
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

      <div className='absolute bottom-8 left-1/2 -translate-x-1/2'>
        <motion.div
          ref={builtWithRef}
          initial={{ opacity: 0, y: 25, x: 0 }}
          animate={{
            opacity: builtWithInView ? 1 : 0,
            y: builtWithInView ? 0 : 25,
            x: builtWithInView ? 0 : 0,
          }}
          transition={{ duration: 1 }}
          className='flex flex-col space-y-4 items-center self-center'
        >
          <span className='uppercase font-heading text-lg'>Built with</span>

          <div className='flex space-x-4'>
            <img
              className='w-8 h-8 xs:w-12 xs:h-12 md:w-16 md:h-16 object-contain'
              src={ReactjsIcon}
              alt='React.js icon'
            />

            <img
              className='w-8 h-8 xs:w-12 xs:h-12 md:w-16 md:h-16 object-contain'
              src={TailwindcssIcon}
              alt='Tailwind CSS icon'
            />

            <img
              className='w-8 h-8 xs:w-12 xs:h-12 md:w-16 md:h-16 object-contain'
              src={FramerMotionIcon}
              alt='Framer motion icon'
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
