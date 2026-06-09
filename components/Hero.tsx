import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 relative">
      <div className="max-w-5xl text-center space-y-10">
        <span className="section-label reveal" style={{ animationDelay: '0.2s' }}>
          Creative AI Specialist at Consciouslab
        </span>
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] reveal" style={{ animationDelay: '0.4s' }}>
          Taste and <br /> Intelligence.
        </h1>
        <p className="text-2xl md:text-3xl text-brand-muted max-w-2xl mx-auto leading-relaxed font-medium reveal" style={{ animationDelay: '0.6s' }}>
          Mehmet Mutlu is an AI-coder bridging human design with machine systems to create the previously impossible.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 reveal" style={{ animationDelay: '0.8s' }}>
          <a href="#projects" className="btn-primary">Explore Work</a>
          <a href="#contact" className="px-8 py-4 border-2 border-brand-border rounded-3xl font-bold hover:bg-white transition-all duration-300">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
