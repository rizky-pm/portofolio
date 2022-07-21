import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ReactjsIcon from '../../Images/icon-bnw/react-js-bnw.png';
import TailwindcssIcon from '../../Images/icon-bnw/tailwind-css-bnw.png';
import FramerMotionIcon from '../../Images/icon-bnw/framer-motion-bnw.png';

const Menu = ({ isMenuActive, toggleNav }) => {
  const navVariants = {
    hidden: {
      x: '-100%',
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      x: '-100%',
      transition: {
        duration: 0.5,
      },
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0,
        when: 'beforeChildren',
      },
    },
  };

  const footerVariants = {
    hidden: {
      opacity: 0,
      y: '10%',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: '-10%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {isMenuActive && (
        <motion.nav
          key={'menu'}
          variants={navVariants}
          initial={'hidden'}
          animate={'visible'}
          exit={'exit'}
          className={`fixed w-full h-full z-20 bg-dark/90 ${
            isMenuActive ? 'block' : 'hidden'
          }`}
        >
          <motion.div
            variants={containerVariants}
            initial={'hidden'}
            animate={'visible'}
            className='relative flex flex-col justify-between h-full text-light py-20 px-5 md:px-20 xl:px-40'
          >
            <motion.ul
              variants={menuVariants}
              className='flex flex-col space-y-4'
            >
              <motion.li variants={itemVariants}>
                <button
                  className='uppercase font-heading font-semibold text-2xl'
                  onClick={() => {
                    toggleNav('top');
                  }}
                >
                  RPM
                </button>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  className='uppercase font-heading font-semibold text-2xl'
                  onClick={() => {
                    toggleNav('about');
                  }}
                >
                  About me
                </button>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  className='uppercase font-heading font-semibold text-2xl'
                  onClick={() => {
                    toggleNav('skills');
                  }}
                >
                  Skills
                </button>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  className='uppercase font-heading font-semibold text-2xl'
                  onClick={() => {
                    toggleNav('projects');
                  }}
                >
                  Projects
                </button>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  className='uppercase font-heading font-semibold text-2xl'
                  onClick={() => {
                    toggleNav('experience');
                  }}
                >
                  Experience
                </button>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  className='uppercase font-heading font-semibold text-2xl'
                  onClick={() => {
                    toggleNav('contact');
                  }}
                >
                  Get in touch
                </button>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a
                  className='uppercase font-heading font-semibold text-2xl'
                  href='
                  https://drive.google.com/drive/folders/165X36l7AT792HZk_NhK00GBz72rwo2b9?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => {
                    toggleNav('contact');
                  }}
                >
                  Useful Documents
                </a>
              </motion.li>

              <li className='absolute bottom-8 left-1/2 -translate-x-1/2'>
                <motion.div
                  variants={footerVariants}
                  className='flex flex-col space-y-4 items-center self-center grow'
                >
                  <span className='uppercase font-heading text-lg'>
                    Built with
                  </span>

                  <div className='flex space-x-4'>
                    <img
                      className='w-8 h-8 xs:w-12 xs:h-12 md:w-16 md:h-16 object-contain'
                      src={ReactjsIcon}
                      alt='React.js icon'
                    />

                    <img
                      className='w-8 h-8 xs:w-12 xs:h-12 md:w-16 md:h-16 object-contain'
                      src={TailwindcssIcon}
                      alt='Tailwind CSS icon'
                    />

                    <img
                      className='w-8 h-8 xs:w-12 xs:h-12 md:w-16 md:h-16 object-contain'
                      src={FramerMotionIcon}
                      alt='Framer motion icon'
                    />
                  </div>
                </motion.div>
              </li>
            </motion.ul>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Menu;
