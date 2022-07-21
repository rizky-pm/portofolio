import React, { useState } from 'react';

import Selfie from '../../Images/selfie.jpg';

const About = ({ innerRef }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <section
      ref={innerRef}
      className='flex flex-col bg-dark text-light px-5 md:px-20 lg:px-44 xl:px-96 py-8 md:py-16 space-y-8 justify-center'
    >
      <div className='flex items-center'>
        <h1 className='main-heading'>About me</h1>
        <hr className='h-1 md:h-2 w-full bg-light' />
      </div>

      <div className='xl:flex xl:gap-4'>
        <div className='relative xl:w-1/2 lg:w-1/3 w-1/2 h-1/2 float-left xl:float-none ml-6 mr-4 mb-4 xl:mr-0 xl:mb-0'>
          <div
            className={`absolute w-full h-full lg:border-8 border-4 basic-transition ${
              isHover
                ? 'lg:top-6 md:top-6 top-4 lg:right-6 md:right-6 right-4 border-lightBlue'
                : 'lg:top-4 md:top-4 top-3 lg:right-4 md:right-4 right-3 border-light'
            }`}
          ></div>

          <img
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

        <p className='text-justify xl:text-left xl:w-2/3 text-lightGray text-sm xs:text-base md:text-xl font-body'>
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
        </p>
      </div>
    </section>
  );
};

export default About;
