import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InfiniteLooper = function InfiniteLooper({ speed, direction, children }) {
  const [looperRef, looperInView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute('data-animate', 'false');

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute('data-animate', 'true');
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;

    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  }, [looperInstances]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener('resize', setupInstances);

    return () => {
      window.removeEventListener('resize', setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div
      className='looper'
      ref={outerRef}
      // initial={{ opacity: 0 }}
      // animate={{
      //   opacity: looperInView ? 1 : 0,
      // }}
      // transition={{ duration: 1 }}
    >
      <div className='looper__innerList' ref={innerRef} data-animate='true'>
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className='looper__listInstance'
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === 'right' ? 'reverse' : 'normal',
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLooper;
