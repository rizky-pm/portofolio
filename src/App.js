import React, { useState, useEffect, useRef } from 'react';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [projectY, setProjectY] = useState();
  const [experienceY, setExperienceY] = useState();
  const [skillsY, setSkillsY] = useState();
  const [contactY, setContactY] = useState();

  const projectRef = useRef();
  const experienceRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  const disableScroll = () => {
    document.body.style.overflow = isMenuActive ? 'hidden' : '';
  };

  const toggleNav = (reference) => {
    setIsMenuActive((prevState) => !prevState);
    getPosition();

    console.log(reference);

    switch (reference) {
      case 'projects':
        window.scrollTo(0, projectY - 65);
        break;

      case 'experience':
        window.scrollTo(0, experienceY - 64);
        break;

      case 'skills':
        window.scrollTo(0, skillsY - 65);
        break;

      case 'contact':
        window.scrollTo(0, contactY - 65);
        break;

      default:
        break;
    }
  };

  const getPosition = () => {
    const proY = projectRef.current.offsetTop;
    const expY = experienceRef.current.offsetTop;
    const sklY = skillsRef.current.offsetTop;
    const conY = contactRef.current.offsetTop;

    setProjectY(proY);
    setExperienceY(expY);
    setSkillsY(sklY);
    setContactY(conY);
  };

  console.log({ projectY });
  console.log({ experienceY });
  console.log({ skillsY });
  console.log({ contactY });

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    disableScroll();
  }, [isMenuActive]);

  return (
    <div className={`relative`}>
      <div
        className={`fixed bg-transparent w-full h-full basic-transition z-20 ${
          isMenuActive ? '' : '-translate-x-full'
        }`}
      >
        <div
          className={`w-full h-full bg-dark/90 basic-transition ${
            isMenuActive ? '' : '-translate-x-full'
          }`}
        >
          <nav className='text-light py-16 p-2'>
            <ul className='flex flex-col space-y-8'>
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
          </nav>
        </div>
      </div>
      <Navbar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <Header />
      <Projects innerRef={projectRef} />
      <Experience innerRef={experienceRef} />
      <Skills innerRef={skillsRef} />
      <Contact innerRef={contactRef} />
    </div>
  );
}

export default App;
