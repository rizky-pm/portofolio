import React from 'react';

const Navbar = ({ isMenuActive, setIsMenuActive }) => {
  const toggleNav = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <nav className='fixed flex items-center overflow-hidden h-16 z-20 text-light bg-dark w-full px-2 md:px-20'>
      <button
        onClick={toggleNav}
        className={`block md:hidden ${
          isMenuActive ? 'hamburger-active' : ''
        } md:hidden`}
      >
        <span className='hamburger-line origin-top-left transition duration-300 ease-in-out'></span>
        <span className='hamburger-line transition duration-300 ease-in-out'></span>
        <span className='hamburger-line origin-bottom-left transition duration-300 ease-in-out'></span>
      </button>
      <div className='flex justify-between text-xl w-full'>
        <div className='left hidden md:block'>
          <a href='#main' className='link'>
            RPM
          </a>
        </div>

        <div className='right hidden md:block space-x-12'>
          <a href='#projects' className='link'>
            Projects
          </a>
          <a href='#experience' className='link'>
            Experience
          </a>
          <a href='#skills' className='link'>
            Skills
          </a>
          <a href='#contact' className='link'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
