
import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      
      if (totalHeight) {
        setProgress((scrollPosition / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-navy/10 z-50">
      <div 
        className="h-full bg-gold transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
