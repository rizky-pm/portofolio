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

export const fadeRightAnimation = (startPosition, delay = 0) => {
  const fadeRightAnimation = {
    initial: { opacity: 0, translateX: startPosition },
    animate: { opacity: 1, translateX: 0 },
    transition: { duration: 1, delay: delay },
  };

  return fadeRightAnimation;
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
