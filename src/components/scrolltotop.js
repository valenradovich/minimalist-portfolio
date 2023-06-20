import React, { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // Scroll automático al inicio de la página después de cargar una nueva URL
    window.onload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return null;
};

export default ScrollToTop;
