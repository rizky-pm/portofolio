import React from 'react';

const Drive = ({ width, height }) => {
  return (
    <div className='link'>
      <svg
        className={`${width} ${height} text-light hover:text-lightBlue hover:cursor-pointer transition`}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {' '}
        <path stroke='none' d='M0 0h24v24H0z' />{' '}
        <path d='M12 10L6 20l-3-5L9 5z' /> <path d='M9 15h12l-3 5h-12' />{' '}
        <path d='M15 15L9 5h6l6 10z' />
      </svg>
    </div>
  );
};

export default Drive;
