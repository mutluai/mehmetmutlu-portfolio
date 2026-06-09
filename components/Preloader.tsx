'use client';

import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll while preloading
    document.body.style.overflow = 'hidden';
    
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            // Unlock scroll after transition completes
            document.body.style.overflow = '';
          }, 1000); 
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 1;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#1c1c1c] text-[#f5f5f0] transition-transform duration-[1000ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${percent === 100 ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="text-center space-y-6">
        <div className="text-xs font-bold tracking-[0.5em] uppercase opacity-40">Intelligence System Active</div>
        <div className="text-8xl md:text-[12rem] font-bold tabular-nums tracking-tighter leading-none">
          {percent.toString().padStart(3, '0')}
        </div>
      </div>
    </div>
  );
};

export default Preloader;