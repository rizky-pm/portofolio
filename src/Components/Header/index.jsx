import React from 'react';

import HeroImage from '../../Images/Hero portofolio.png';
import HeroImageMobile from '../../Images/hero-mobile.jpeg';

const Header = () => {
  return (
    <header id='main' className='relative h-screen'>
      <span>
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
      </span>
      <div className='absolute top-16 lg:top-1/2 lg:-translate-y-1/2 right-0 lg:right-20 text-light md:py-16'>
        <div className='flex flex-col px-2 lg:px-0 space-y-1 xs:space-y-4 text-right'>
          <span className='text-sm xs:text-lg md:text-xl 2xl:text-2xl text-lightGray uppercase font-heading'>
            Hello there, I'm
          </span>
          <div className='font-heading font-extrabold text-5xl xs:text-6xl md:text-8xl 2xl:text-9xl uppercase'>
            <h1>
              <span className='text-lightBlue'>Rizky</span> <br /> Putra <br />
              Mahendra
            </h1>
          </div>
          <p className='font-body font-bold text-base xs:text-md md:text-2xl 2xl:text-3xl uppercase'>
            {'<'} 1 Year Experience{' '}
            <span className='text-lightBlue'>Frontend Developer</span>
          </p>

          <p className='text-sm xs:text-lg md:text-xl 2xl:text-2xl text-lightGray w-full md:w-[400px] lg:w-[600px] self-end'>
            ReactJS developer with a bachelor's degree in computer science and
            graduated from Budi Luhur University in 2022.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
