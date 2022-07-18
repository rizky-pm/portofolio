import React from 'react';

const Menu = ({ isMenuActive, toggleNav }) => {
  return (
    <nav
      className={`fixed bg-transparent w-full h-full transition-all ease-in-out duration-[0.5s] z-20 ${
        isMenuActive ? '' : '-translate-x-full'
      }`}
    >
      <div
        className={`w-full h-full bg-dark/90 transition-all ease-in-out duration-[0.5s] ${
          isMenuActive ? '' : '-translate-x-full'
        }`}
      >
        <div className='text-light py-16 p-4'>
          <ul className='flex flex-col space-y-8'>
            <li>
              <button
                className='uppercase font-heading font-semibold underline text-4xl'
                onClick={() => {
                  toggleNav('top');
                }}
              >
                RPM
              </button>
            </li>
            <li>
              <button
                className='uppercase font-heading font-semibold underline text-4xl'
                onClick={() => {
                  toggleNav('projects');
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className='uppercase font-heading font-semibold underline text-4xl'
                onClick={() => {
                  toggleNav('experience');
                }}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                className='uppercase font-heading font-semibold underline text-4xl'
                onClick={() => {
                  toggleNav('skills');
                }}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                className='uppercase font-heading font-semibold underline text-4xl'
                onClick={() => {
                  toggleNav('contact');
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
