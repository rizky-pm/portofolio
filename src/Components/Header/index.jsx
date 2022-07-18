import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import HeroImage from '../../Images/Hero portofolio.png';
import HeroImageMobile from '../../Images/hero-mobile.jpeg';

const Header = ({ innerRef }) => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <header ref={innerRef} id='main' className='relative h-screen bg-dark'>
      <motion.span
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 5 }}
      >
        <img
          src={HeroImage}
          alt='Hero'
          className='w-screen h-screen hidden lg:block'
        />
        <img
          src={HeroImageMobile}
          alt='Hero'
          className='w-screen h-screen object-cover lg:hidden'
        />
      </motion.span>
      <div className='absolute top-16 lg:top-1/2 lg:-translate-y-1/2 right-0 lg:right-20 text-light md:py-16'>
        <div className='flex flex-col px-5 lg:px-0 space-y-1 md:space-y-2 text-right'>
          <motion.span
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className='text-sm xs:text-base md:text-xl 2xl:text-2xl text-lightGray uppercase font-heading'
          >
            Hello there, I'm
          </motion.span>
          <div className='font-heading font-extrabold text-4xl xs:text-5xl md:text-8xl 2xl:text-9xl uppercase'>
            <motion.h1
              initial={{ opacity: 0, translateY: 100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
            >
              <span className='text-lightBlue'>Rizky</span> <br /> Putra <br />
              Mahendra
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 4 }}
            className='font-body font-bold text-sm xs:text-base md:text-2xl 2xl:text-3xl uppercase'
          >
            {'<'} 1 Year Experience{' '}
            <span className='text-lightBlue'>Frontend Developer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 4.5 }}
            className='font-body text-sm xs:text-base md:text-xl 2xl:text-2xl text-lightGray w-full md:w-[400px] lg:w-[600px] self-end'
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
