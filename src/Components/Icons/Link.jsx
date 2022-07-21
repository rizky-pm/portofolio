import React from 'react';

const Link = ({ width, height }) => {
  return (
    <div>
      <svg
        className={`${width} ${height} hover:cursor-pointer`}
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
        <path d='M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5' />{' '}
        <path d='M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5' />
      </svg>
    </div>
  );
};

export default Link;
