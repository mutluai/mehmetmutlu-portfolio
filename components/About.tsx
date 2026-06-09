import React from 'react';

const About = () => {
  return (
    <section id="philosophy" className="py-40 px-6 max-w-7xl mx-auto border-t border-brand-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10 reveal">
          <span className="section-label">Philosophy</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            The New Canvas is <br /> Intelligence.
          </h2>
          <p className="text-xl text-brand-muted leading-relaxed font-medium">
            At Consciouslab, I treat artificial intelligence not as a tool, but as a medium. 
            By combining AI-coding expertise with high-signal creative taste, I bridge 
            the gap between technical execution and artistic intent.
          </p>
          <div className="grid grid-cols-2 gap-12 pt-10">
            <div>
              <div className="text-5xl font-bold mb-2 tracking-tighter">14+</div>
              <div className="text-xs font-black text-brand-muted uppercase tracking-[0.4em]">Creative Awards</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 tracking-tighter">AI</div>
              <div className="text-xs font-black text-brand-muted uppercase tracking-[0.4em]">First Design</div>
            </div>
          </div>
        </div>
        <div className="aspect-[4/5] bg-brand-charcoal rounded-[48px] relative overflow-hidden group reveal" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-transparent to-white/10" />
          <div className="absolute inset-0 flex items-center justify-center text-[15rem] opacity-20 grayscale transition-transform duration-1000 group-hover:scale-110">
            🎨
          </div>
          <div className="absolute bottom-12 left-12 right-12">
             <p className="text-brand-beige/60 text-sm font-mono tracking-widest uppercase">Visual Reference // Consciouslab Studio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
