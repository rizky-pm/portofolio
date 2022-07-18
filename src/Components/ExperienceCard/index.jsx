import React from 'react';

const ExperienceCard = ({ data }) => {
  const { position, company, location, duration, description } = data;

  return (
    <div className='flex flex-col text-center lg:text-left'>
      <span className='font-heading font-bold text-md xs:text-lg md:text-3xl text-lightBlue'>
        {position}
      </span>
      <div className='font-heading text-md xs:text-lg md:text-2xl'>
        <span className=''>{company}</span>, <span>{location}</span>
      </div>

      <span className='text-base md:text-lg font-medium lg:font-bold'>
        {duration}
      </span>
      <span className='text-lightGray text-sm xs:text-base md:text-xl font-body'>
        {description}
      </span>
    </div>
  );
};

export default ExperienceCard;
