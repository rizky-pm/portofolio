import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ isMenuActive, toggleNav }) => {
  return (
    <nav className='fixed flex items-center overflow-hidden h-16 z-20 text-light bg-dark/70 w-full px-5 md:px-20 xl:px-40 backdrop-blur-sm navbar'>
      <button
        onClick={() => {
          toggleNav();
        }}
        className={`block lg:hidden ${isMenuActive ? 'hamburger-active' : ''}`}
      >
        <span className='hamburger-line origin-top-left transition duration-300 ease-in-out'></span>
        <span className='hamburger-line transition duration-300 ease-in-out'></span>
        <span className='hamburger-line origin-bottom-left transition duration-300 ease-in-out'></span>
      </button>

      <div className='flex justify-between text-xl w-full'>
        <div className='left hidden lg:block'>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            href='#main'
            className='link font-bold font-heading'
          >
            RPM
          </motion.a>
        </div>

        <div className='right hidden lg:block space-x-12'>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            href='#about'
            className='link'
          >
            About Me
          </motion.a>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            href='#skills'
            className='link'
          >
            Skills
          </motion.a>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            href='#projects'
            className='link'
          >
            Projects
          </motion.a>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            href='#experience'
            className='link'
          >
            Experience
          </motion.a>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            href='#contact'
            className='link'
          >
            Get in touch
          </motion.a>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            href='
            https://drive.google.com/drive/folders/165X36l7AT792HZk_NhK00GBz72rwo2b9?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            Useful Documents
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
