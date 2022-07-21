import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const Navbar = ({ isMenuActive, toggleNav }) => {
  const controlsHamburgerFirstLine = useAnimationControls();
  const controlsHamburgerSecondLine = useAnimationControls();
  const controlsHamburgerThirdLine = useAnimationControls();

  return (
    <nav className='fixed flex items-center overflow-hidden h-16 z-20 text-light bg-dark w-full px-5 md:px-20 xl:px-40'>
      <button
        onClick={() => {
          toggleNav();
          controlsHamburgerFirstLine({
            transformOrigin: 'top left',
            transform: 'rotate(45deg)',
          });

          controlsHamburgerFirstLine({
            scale: 0,
          });

          controlsHamburgerFirstLine({
            transformOrigin: 'bottom left',
            transform: 'rotate(-45deg)',
          });
        }}
        className={`block md:hidden ${
          isMenuActive ? 'hamburger-active' : ''
        } md:hidden`}
      >
        <motion.span
          animate={controlsHamburgerFirstLine}
          className='hamburger-line origin-top-left transition duration-300 ease-in-out'
        ></motion.span>
        <motion.span
          animate={controlsHamburgerSecondLine}
          className='hamburger-line transition duration-300 ease-in-out'
        ></motion.span>
        <motion.span
          animate={controlsHamburgerThirdLine}
          className='hamburger-line origin-bottom-left transition duration-300 ease-in-out'
        ></motion.span>
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
