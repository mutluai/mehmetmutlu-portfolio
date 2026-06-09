'use client';

import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            // Unlock scroll
            document.body.style.overflow = '';
          }, 800); 
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 2;
      });
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fbfaf6] text-[#2b2b29] transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${percent === 100 ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="relative text-center">
        {/* SVG Logo from Bundle */}
        <div className="mb-8 opacity-10">
          <svg width="200" height="130" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <text x="120" y="430" fontFamily="Georgia, serif" fontSize="300" fontWeight="500" letterSpacing="-12" fill="#2b2b29">
              T<tspan fontStyle="italic" fill="#b5793c">&amp;</tspan>I
            </text>
          </svg>
        </div>
        
        <div className="text-[10px] font-bold tracking-[0.6em] uppercase opacity-40 mb-2">Unpacking Intelligence</div>
        <div className="text-9xl md:text-[14rem] font-bold tabular-nums tracking-tighter leading-none mb-4">
          {percent.toString().padStart(2, '0')}
        </div>
        <div className="w-64 h-[1px] bg-[#2b2b29]/10 mx-auto overflow-hidden relative">
          <div 
            className="absolute inset-0 bg-[#2b2b29] transition-transform duration-300 ease-out" 
            style={{ transform: `translateX(${-100 + percent}%)` }}
          />
        </div>
      </div>
      
      {/* Footer text for preloader */}
      <div className="absolute bottom-10 font-mono text-[10px] tracking-widest uppercase opacity-20">
        Taste & Intelligence © 2026
      </div>
    </div>
  );
};

export default Preloader;
