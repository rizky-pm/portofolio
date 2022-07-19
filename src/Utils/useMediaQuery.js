import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

export const useIsXs = () => useMediaQuery('(min-width: 414px)');
export const useIsSm = () => useMediaQuery('(min-width: 640px)');
export const useIsMd = () => useMediaQuery('(min-width: 768px)');
export const useIsLg = () => useMediaQuery('(min-width: 1024px)');
export const useIsXl = () => useMediaQuery('(min-width: 1280px)');
export const useIs2Xl = () => useMediaQuery('(min-width: 1536px)');
