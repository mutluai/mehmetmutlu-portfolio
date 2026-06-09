import React from 'react';

const Hero = () => {
return (
<div className="col-span-12 md:col-span-8 lg:col-span-9 bg-brand-charcoal text-brand-beige rounded-3xl p-10 md:p-16 flex flex-col justify-between relative overflow-hidden group min-h-[500px] reveal" style={{ animationDelay: '0.1s' }}>
<div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none select-none">
<span className="text-[20vw] font-serif font-medium leading-none tracking-[-0.05em]">
T<span className="italic text-[#b5793c]">&</span>I
</span>
</div>

<div className="relative z-10 space-y-8">
<div className="flex flex-col space-y-4">
<span className="w-fit px-4 py-1.5 bg-brand-beige/10 text-brand-beige text-[10px] font-bold tracking-[0.3em] uppercase rounded-3xl border border-brand-beige/20">
Creative AI Specialist
</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.85]">
Taste & <br /> 
<span className="text-brand-accent">Intelligence</span>
</h1>
</div>

<p className="text-lg md:text-xl text-brand-beige/60 max-w-xl leading-relaxed font-medium">
Mehmet Mutlu builds at the intersection of human taste and machine intelligence. 
Architecting AI systems for the future of creative production.
</p>
</div>

<div className="relative z-10 flex flex-wrap gap-4 pt-8">
<a href="#projects" className="px-8 py-4 bg-brand-beige text-brand-black rounded-3xl font-bold hover:scale-105 transition-all duration-300">View Experiments</a>
<a href="#philosophy" className="px-8 py-4 border border-brand-beige/20 rounded-3xl font-bold hover:bg-brand-beige hover:text-brand-black transition-all duration-300">
Philosophy
</a>
</div>
</div>
);
};

export default Hero;
