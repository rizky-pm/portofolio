import React, { useState, useEffect, useRef } from 'react';

import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [topY, setTopY] = useState(0);
  const [aboutY, setAboutY] = useState(0);
  const [projectY, setProjectY] = useState(0);
  const [experienceY, setExperienceY] = useState(0);
  const [skillsY, setSkillsY] = useState(0);
  const [contactY, setContactY] = useState(0);

  const topRef = useRef();
  const aboutRef = useRef();
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

    switch (reference) {
      case 'top':
        window.scrollTo(0, topY);
        break;

      case 'about':
        window.scrollTo(0, aboutY - 65);
        break;

      case 'projects':
        window.scrollTo(0, projectY - 65);
        break;

      case 'experience':
        window.scrollTo(0, experienceY - 65);
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
    const topYCoordinate = topRef.current.offsetTop;
    const aboutYCoordinate = aboutRef.current.offsetTop;
    const proYCoordinate = projectRef.current.offsetTop;
    const expYCoordinate = experienceRef.current.offsetTop;
    const sklYCoordinate = skillsRef.current.offsetTop;
    const conYCoordinate = contactRef.current.offsetTop;

    setTopY(topYCoordinate);
    setAboutY(aboutYCoordinate);
    setProjectY(proYCoordinate);
    setExperienceY(expYCoordinate);
    setSkillsY(sklYCoordinate);
    setContactY(conYCoordinate);
  };

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    disableScroll();
  }, [isMenuActive]);

  return (
    <div className={`relative`}>
      <Menu isMenuActive={isMenuActive} toggleNav={toggleNav} />
      <Navbar isMenuActive={isMenuActive} toggleNav={toggleNav} />
      <Header innerRef={topRef} />
      <About innerRef={aboutRef} />
      <Skills innerRef={skillsRef} />
      <Projects innerRef={projectRef} />
      <Experience innerRef={experienceRef} />
      <Contact innerRef={contactRef} />
    </div>
  );
}

export default App;
