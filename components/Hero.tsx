import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-lab-muted/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-lab-charcoal/5 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-4xl text-center space-y-8">
        <span className="section-label">The Intersection of Taste & Intelligence</span>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] gradient-text">
          Creative AI <br /> Specialist.
        </h1>
        <h2 className="text-xl md:text-2xl text-lab-muted max-w-2xl mx-auto leading-relaxed">
          Mehmet Mutlu is an AI-coder and designer building the eval layer for creative technology. 
          Bridging human intuition with machine precision.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="#projects" className="btn-lab">View Lab Work</a>
          <a href="#contact" className="px-8 py-4 border border-lab-border rounded-3xl font-medium hover:bg-white transition-all">
            Research Partnership
          </a>
        </div>
      </div>
      
      <div className="mt-20 animate-bounce text-lab-muted">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
