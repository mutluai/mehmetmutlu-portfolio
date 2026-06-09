'use client';

import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 1000);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-lab-charcoal text-lab-beige transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] ${percent === 100 ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="text-center space-y-4">
        <div className="text-sm font-bold tracking-[0.4em] uppercase opacity-50">Mehmet Mutlu / Intelligence</div>
        <div className="text-8xl md:text-9xl font-bold tabular-nums tracking-tighter">
          {percent.toString().padStart(3, '0')}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
