import React from 'react';

import LinkedIn from '../Icons/LinkedIn';
import Github from '../Icons/Github';
import Instagram from '../Icons/Instagram';
import Twitter from '../Icons/Twitter';

const Contact = ({ innerRef }) => {
  return (
    <footer
      ref={innerRef}
      id='contact'
      className='flex flex-col space-y-8 lg:space-y-16 justify-center items-center bg-dark text-light px-2 xs:px-5 lg:px-40 py-8 md:py-16'
    >
      <h1 className='text-4xl xs:text-5xl md:text-8xl 2xl:text-9xl text-center tracking-widest font-heading font-bold uppercase'>
        Get in touch
      </h1>

      {/* <div className='flex justify-center items-center w-full h-1/2'>
        <div className='flex flex-col justify-evenly items-center w-full lg:w-1/2 h-full space-y-2 xs:space-y-8 '> */}
      <p className='font-medium lg:font-bold font-body text-center text-sm xs:text-lg md:text-xl 2xl:text-2xl w-full lg:w-1/2'>
        I'm currently looking for new opportunities, lets talk about it. Or you
        just want to say hi dont hesitate to hit me up!{' '}
      </p>
      <a
        href='mailto:rizkymahendra2346@gmail.com'
        _target='_blank'
        className='primary-button-light'
      >
        Hit me up
      </a>

      <div className='flex w-full items-center gap-2'>
        <hr className='border border-light w-1/2 lg:w-full' />{' '}
        <span className='w-full md:w-1/2 2xl:w-1/3 text-center text-base xs:text-lg md:text-xl font-heading font-bold uppercase'>
          Visit my profile
        </span>
        <hr className='border border-light w-1/2 lg:w-full' />
      </div>

      <div className='flex w-full justify-around 2xl:justify-center 2xl:space-x-20'>
        <LinkedIn width='w-8 xs:w-10 md:w-16' height='h-8 xs:h-10 md:h-16' />
        <Instagram width='w-8 xs:w-10 md:w-16' height='h-8 xs:h-10 md:h-16' />
        <Github width='w-8 xs:w-10 md:w-16' height='h-8 xs:h-10 md:h-16' />
        <Twitter width='w-8 xs:w-10 md:w-16' height='h-8 xs:h-10 md:h-16' />
      </div>
      {/* </div>
      </div> */}
    </footer>
  );
};

export default Contact;
