import React from 'react';

import ExperienceCard from '../ExperienceCard';

import experiencesData from '../../Data/experiencesData';

const Experience = ({ innerRef }) => {
  return (
    <section
      ref={innerRef}
      id='experience'
      className='px-2 xs:px-5 lg:px-20 py-8 md:py-16 flex flex-col lg:flex-row justify-center items-center space-y-3 xs:space-y-12 lg:space-y-0 bg-dark text-light'
    >
      {/* <div className='flex flex-col lg:flex-row justify-center items-center space-y-3 xs:space-y-12 lg:space-y-0'> */}
      <div className='w-full lg:w-1/2 flex flex-col justify-between uppercase text-right lg:pr-8'>
        <p className='2xl:text-9xl md:text-8xl xs:text-5xl text-4xl font-bold text-center lg:text-right'>
          Seven months experience
        </p>
      </div>

      <div className='flex flex-col justify-center w-full lg:w-1/2 space-y-6 lg:space-y-12 lg:pl-8 lg:border-l-8 lg:border-light'>
        {experiencesData.map((experience, index) => {
          return <ExperienceCard key={index} data={experience} />;
        })}
      </div>
      {/* </div> */}
    </section>
  );
};

export default Experience;
