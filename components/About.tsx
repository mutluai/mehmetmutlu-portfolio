import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <span className="section-label">Founding Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Execution is free. <br /> Judgment is everything.
          </h2>
          <p className="text-lg text-lab-muted leading-relaxed">
            I build at the frontier of creative evaluation. In a world where AI can execute 
            infinitely, the value shifts to the human taste that directs it. My work 
            focuses on capturing that taste and baking it into autonomous systems.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold mb-1">14+</div>
              <div className="text-xs font-bold text-lab-muted uppercase tracking-widest">Awards</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-xs font-bold text-lab-muted uppercase tracking-widest">Evals</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">∞</div>
              <div className="text-xs font-bold text-lab-muted uppercase tracking-widest">Taste</div>
            </div>
          </div>
        </div>
        <div className="aspect-square bg-lab-charcoal rounded-[40px] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-lab-charcoal via-transparent to-lab-muted/20" />
          <div className="absolute inset-0 flex items-center justify-center text-8xl transition-transform duration-700 group-hover:scale-110">
            👁️‍🗨️
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
