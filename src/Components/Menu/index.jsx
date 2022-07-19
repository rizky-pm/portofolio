import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = ({ isMenuActive, toggleNav }) => {
  return (
    <AnimatePresence>
      {isMenuActive && (
        <motion.nav
          key={'menu'}
          initial={{ translateX: '-100%' }}
          animate={{ translateX: 0 }}
          exit={{ translateX: '-100%' }}
          transition={{ duration: 0.5 }}
          className={`fixed w-full h-full z-20 bg-dark/90 ${
            isMenuActive ? 'block' : 'hidden'
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Menu;
