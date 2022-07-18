import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ isMenuActive, toggleNav }) => {
  return (
    <nav className='fixed flex items-center overflow-hidden px-5 h-16 z-20 text-light bg-dark w-full md:px-20'>
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
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            href='#main'
            className='link'
          >
            RPM
          </motion.a>
        </div>

        <div className='right hidden md:block space-x-12'>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            href='#projects'
            className='link'
          >
            Projects
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            href='#experience'
            className='link'
          >
            Experience
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            href='#skills'
            className='link'
          >
            Skills
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            href='#contact'
            className='link'
          >
            Contact
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
