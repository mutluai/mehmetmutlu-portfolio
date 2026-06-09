import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 relative overflow-hidden">
      {/* Background Graphic - T&I */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-[40vw] font-serif font-medium leading-none tracking-[-0.05em]">
          T<span className="italic text-[#b5793c]">&amp;</span>I
        </span>
      </div>

      <div className="max-w-5xl text-center space-y-12 relative z-10">
        <div className="flex flex-col items-center space-y-4">
          <span className="px-4 py-1.5 bg-[#2b2b29] text-[#fbfaf6] text-[10px] font-bold tracking-[0.3em] uppercase rounded-full reveal" style={{ animationDelay: '0.2s' }}>
            Creative AI Specialist
          </span>
          <span className="text-sm font-semibold text-[#b5793c] tracking-wide reveal" style={{ animationDelay: '0.3s' }}>
            Taste & Intelligence at Consciouslab
          </span>
        </div>
        
        <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter leading-[0.8] reveal" style={{ animationDelay: '0.4s' }}>
          Taste and <br /> 
          <span className="relative">
            Intelligence
            <span className="absolute -bottom-4 left-0 w-full h-1 bg-[#b5793c] opacity-20 hidden md:block"></span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-black/60 max-w-2xl mx-auto leading-relaxed font-medium reveal" style={{ animationDelay: '0.6s' }}>
          Mehmet Mutlu is an AI systems architect bridging human taste with algorithmic intelligence to build the future of creative production.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 reveal" style={{ animationDelay: '0.8s' }}>
          <a href="#projects" className="px-8 py-4 bg-[#2b2b29] text-white rounded-3xl font-bold hover:scale-105 transition-all duration-300">View Experiments</a>
          <a href="#philosophy" className="px-8 py-4 border-2 border-[#2b2b29] rounded-3xl font-bold hover:bg-[#2b2b29] hover:text-white transition-all duration-300">
            Read Philosophy
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20 reveal" style={{ animationDelay: '1.2s' }}>
        <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-[#2b2b29]"></div>
      </div>
    </section>
  );
};

export default Hero;
