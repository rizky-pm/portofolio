import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ExperienceCard from '../ExperienceCard';

import { useIsLg } from '../../Utils/useMediaQuery';
import {
  fadeHorizontalAnimation,
  fadeVerticalAnimation,
  animationVariants,
  fadeHorizontalVariants,
  fadeVerticalVariants,
} from '../../Utils/Animation';
import experiencesData from '../../Data/experiencesData';

const Experience = ({ innerRef }) => {
  const [experiencesHeight, setExperiencesHeight] = useState();
  const experiencesRef = useRef(null);

  const [containerRef, containerInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const [verticalDividerRef, verticalDividerInView] = useInView({
    triggerOnce: false,
    rootMargin: '-50% 0px',
  });

  const [horizontalDividerRef, horizontalDividerInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const isLarge = useIsLg();

  const [cardRef, cardInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const containerMotion = {
    initial: { opacity: 0 },
    animate: {
      opacity: containerInView ? 1 : 0,
      transition: {
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 1,
      },
    },
  };

  const verticalDividerMotion = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: containerInView ? 1 : 0,
      transition: {
        duration: 1,
      },
    },
  };

  const titleMotion = animationVariants(
    fadeHorizontalVariants(50, titleInView, 1),
    fadeVerticalVariants(40, titleInView),
    isLarge
  );

  const experienceCardMotion = animationVariants(
    fadeHorizontalVariants(-20, cardInView, 1),
    fadeVerticalVariants(40, cardInView),
    isLarge
  );

  useEffect(() => {
    // setExperiencesHeight(experiencesRef.current.clientHeight);
  }, []);

  return (
    <section
      ref={innerRef}
      className='flex flex-col bg-dark text-light px-5 md:px-20 lg:px-44 xl:px-96 py-8 md:py-16 space-y-8 h-auto xl:h-screen justify-center text-right'
    >
      <div className='flex items-center'>
        <hr className='h-1 md:h-2 w-full bg-light' />
        <h1 className='main-heading'>experience</h1>
      </div>

      <div
        ref={experiencesRef}
        className='flex flex-col justify-center lg:pl-8 space-y-6 lg:space-y-12'
      >
        {experiencesData.map((experience, index) => {
          return <ExperienceCard key={index} data={experience} num={index} />;
        })}
      </div>
    </section>

    // <section
    //   ref={innerRef}
    //   id='experience'
    //   className='flex flex-col bg-dark text-light px-5 lg:px-96 py-8 md:py-16 space-y-8'
    // >
    //   <motion.h1
    //     ref={titleRef}
    //     initial={{ opacity: 0, y: 50 }}
    //     animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 0 }}
    //     transition={{ duration: 1 }}
    //     className='2xl:text-7xl md:text-6xl xs:text-5xl text-4xl font-bold text-center lg:text-left uppercase'
    //   >
    //     7 months experience
    //   </motion.h1>

    //   <div
    //     ref={experiencesRef}
    //     className='flex flex-col justify-center space-y-3 lg:space-y-6'
    //   >
    //     {experiencesData.map((experience, index) => {
    //       return <ExperienceCard key={index} data={experience} />;
    //     })}
    //   </div>

    //   {/* <motion.div
    //     variants={containerMotion}
    //     initial='initial'
    //     animate='animate'
    //     className='px-5 lg:px-20 py-8 md:py-16 flex flex-col lg:flex-row justify-center items-center space-y-3 xs:space-y-12 lg:space-y-0 '
    //     ref={containerRef}
    //   >
    //     <motion.div
    //       ref={titleRef}
    //       variants={titleMotion}
    //       className='w-full lg:w-1/2 flex flex-col justify-between uppercase text-right lg:pr-8'
    //     >
    //       <motion.p
    //         // initial={titleMotion.initial}
    //         // animate={titleMotion.animate}
    //         // transition={titleMotion.transition}
    //         className='2xl:text-9xl md:text-8xl xs:text-5xl text-4xl font-bold text-center lg:text-right'
    //       >
    //         Seven months experience
    //       </motion.p>
    //     </motion.div>

    //     <motion.div
    //       ref={verticalDividerRef}
    //       variants={verticalDividerMotion}
    //       // initial={{ scaleY: 0 }}
    //       // animate={{
    //       //   scaleY: verticalDividerInView ? 1 : 0,
    //       // }}
    //       // transition={{ duration: 1 }}
    //       className={`hidden lg:block w-4 bg-light`}
    //       style={{ height: `${experiencesHeight}px` }}
    //     ></motion.div>

    //     <motion.div
    //       ref={horizontalDividerRef}
    //       initial={{ scaleX: 0 }}
    //       animate={{
    //         scaleX: horizontalDividerInView ? 1 : 0,
    //       }}
    //       transition={{ duration: 1 }}
    //       className={`h-2 lg:h-6 block lg:hidden w-full bg-light`}
    //     ></motion.div>

    //     <motion.div
    //       ref={cardRef}
    //       variants={experienceCardMotion}
    //       // initial={experienceCardMotion.initial}
    //       // animate={experienceCardMotion.animate}
    //       // transition={experienceCardMotion.transition}
    //       className='w-full lg:w-1/2 '
    //     >
    //       <div
    //         ref={experiencesRef}
    //         className='flex flex-col justify-center lg:pl-8 space-y-6 lg:space-y-12'
    //       >
    //         {experiencesData.map((experience, index) => {
    //           return (
    //             <ExperienceCard key={index} data={experience} num={index} />
    //           );
    //         })}
    //       </div>
    //     </motion.div>
    //   </motion.div> */}
    // </section>
  );
};

export default Experience;
