export const fadeUpAnimation = (view) => {
  const fadeUpAnimation = {
    initial: { opacity: 0, translateY: 25 },
    animate: {
      opacity: view ? 1 : 0,
      translateY: view ? 0 : 25,
    },
    transition: { duration: 1 },
  };

  return fadeUpAnimation;
};

export const fadeHorizontalAnimation = (startPosition, view, delay = 0) => {
  const fadeHorizontalAnimation = {
    initial: { opacity: 0, translateX: startPosition, translateY: 0 },
    animate: {
      opacity: view ? 1 : 0,
      translateX: view ? 0 : startPosition,
      translateY: view ? 0 : 0,
    },
    transition: { duration: 1, delay: delay },
  };

  return fadeHorizontalAnimation;
};

export const fadeVerticalAnimation = (startPosition, view, delay = 0) => {
  const fadeVerticalAnimation = {
    initial: { opacity: 0, translateY: startPosition, translateX: 0 },
    animate: {
      opacity: view ? 1 : 0,
      translateY: view ? 0 : startPosition,
      translateX: view ? 0 : 0,
    },
    transition: { duration: 1, delay: delay },
  };

  return fadeVerticalAnimation;
};

export const fadeVerticalVariants = (start, view, delay = 0) => {
  const motion = {
    initial: { opacity: 0, translateY: start, translateX: 0 },
    animate: {
      opacity: view ? 1 : 0,
      translateY: view ? 0 : start,
      translateX: view ? 0 : 0,
      transition: { duration: 1, delay: delay },
    },
  };

  return motion;
};

export const fadeHorizontalVariants = (start, view, delay = 0) => {
  const motion = {
    initial: { opacity: 0, translateX: start, translateY: 0 },
    animate: {
      opacity: view ? 1 : 0,
      translateX: view ? 0 : start,
      translateY: view ? 0 : 0,
      transition: { duration: 1, delay: delay },
    },
  };

  return motion;
};

export const scaleVerticalVariants = (start, view, delay = 0) => {
  const motion = {
    initial: {
      scaleY: start,
    },
    animate: {
      scaleY: view ? 1 : start,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };

  return motion;
};

export const scaleHorizontalVariants = (start, view, delay = 0) => {
  const motion = {
    initial: {
      scaleX: start,
    },
    animate: {
      scaleX: view ? 1 : start,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };

  return motion;
};

export const largerFadeUpAnimation = (delay) => {
  const delayedFadeUpAnimation = {
    initial: { opacity: 0, translateY: 100 },
    animate: { opacity: 1, translateY: 0 },
    transition: { duration: 1, delay: delay },
  };

  return delayedFadeUpAnimation;
};

export const animationVariants = (animationOne, animationTwo, media) => {
  const variants = media ? animationOne : animationTwo;

  return variants;
};
