import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ isMenuActive, toggleNav }) => {
  return (
    <nav className='fixed flex items-center overflow-hidden h-16 z-20 text-light bg-dark/70 w-full px-5 md:px-20 xl:px-40 backdrop-blur-sm'>
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

      <div className='flex justify-between items-center w-full uppercase'>
        <div className='left hidden lg:flex text-2xl'>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            href='#main'
            className='font-bold font-heading hover:text-lightBlue basic-transition'
          >
            RPM
          </motion.a>
        </div>

        <div className='right hidden lg:block space-x-12 text-sm font-heading font-medium'>
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
            transition={{ duration: 1, delay: 1.5 }}
            href='#skills'
            className='link'
          >
            Skills
          </motion.a>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            href='#projects'
            className='link'
          >
            Projects
          </motion.a>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
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
            transition={{ duration: 1, delay: 3.5 }}
            href='
            https://drive.google.com/drive/folders/165X36l7AT792HZk_NhK00GBz72rwo2b9?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            Documents
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
