import React from 'react';

const About = () => {
return (
<div id="philosophy" className="col-span-12 md:col-span-4 lg:col-span-3 bg-brand-beige border border-brand-border rounded-3xl p-10 flex flex-col justify-between reveal" style={{ animationDelay: '0.2s' }}>
<div className="space-y-6">
<span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Philosophy</span>
<h2 className="text-4xl font-bold tracking-tighter leading-none">
The New Canvas <br /> is Intelligence.
</h2>
<p className="text-sm text-brand-muted leading-relaxed font-medium">
Treating artificial intelligence not as a tool, but as a medium. Combining high-signal taste with technical expertise.
</p>
</div>

<div className="grid grid-cols-1 gap-6 pt-10">
<div className="p-6 bg-brand-charcoal/5 rounded-2xl border border-brand-border">
<div className="text-3xl font-bold mb-1 tracking-tighter">14+</div>
<div className="text-[9px] font-black text-brand-muted uppercase tracking-[0.2em]">Creative Awards</div>
</div>
<div className="p-6 bg-brand-charcoal/5 rounded-2xl border border-brand-border">
<div className="text-3xl font-bold mb-1 tracking-tighter">AI</div>
<div className="text-[9px] font-black text-brand-muted uppercase tracking-[0.2em]">First Design</div>
</div>
</div>
</div>
);
};

export default About;
