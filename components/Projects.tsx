'use client';

import React, { useState, useEffect } from 'react';

const projectList = [
{
id: "hepsiburada",
brand: "Hepsiburada",
title: "AI Video Transformation",
desc: "Deploying production-grade AI video models to transform product marketing.",
details: "Built a fully autonomous AI video production pipeline that generates high-fidelity marketing assets from product data. Leveraged custom diffusion models and automated post-production workflows to reduce cost-per-asset by 90%.",
stack: ["Next.js", "Stable Video", "Python", "Supabase"],
span: "md:col-span-8 lg:col-span-6"
},
{
id: "migros",
brand: "Migros",
title: "Celebrity Avatar Engines",
desc: "Custom-trained Stable Diffusion pipelines for high-fidelity ambassador generation.",
details: "Developed proprietary LoRA training protocols to digitize celebrities for Migros marketing campaigns.",
stack: ["Stable Diffusion", "Kohya_ss", "LoRA", "ComfyUI"],
span: "md:col-span-4 lg:col-span-3"
},
{
id: "turknet",
brand: "Turknet",
title: "The Grok Integration",
desc: "First enterprise deployment of xAI's Grok for customer intelligence.",
details: "Integrated xAI's Grok API to process vast streams of customer sentiment and technical support logs.",
stack: ["xAI Grok", "TypeScript", "Next.js", "Vercel AI"],
span: "md:col-span-4 lg:col-span-3"
},
{
id: "sabanci",
brand: "Sabancı Foundation",
title: "Vision of Sakıp Sabancı",
desc: "Restoring and reimagining a legacy through generative AI synthesis.",
details: "A cultural preservation project using generative AI to 'bring back' the voice and vision of Sakıp Sabancı.",
stack: ["ElevenLabs", "LivePortrait", "GPT-4", "RLHF"],
span: "md:col-span-8 lg:col-span-4"
},
{
id: "consciouslab",
brand: "Consciouslab",
title: "Lab Aesthetic",
desc: "Designing the intersection of human taste and machine intelligence.",
details: "The lab is an R&D unit focused on pioneering new methods of AI-driven creative production.",
stack: ["R&D", "Design", "Architecture", "Taste"],
span: "md:col-span-12 lg:col-span-8"
}
];

const Projects = () => {
const [selectedProject, setSelectedProject] = useState(null);

useEffect(() => {
const handleEsc = (e) => { if (e.key === 'Escape') setSelectedProject(null); };
window.addEventListener('keydown', handleEsc);
return () => window.removeEventListener('keydown', handleEsc);
}, []);

useEffect(() => {
document.body.style.overflow = selectedProject ? 'hidden' : '';
}, [selectedProject]);

return (
<>
{projectList.map((p, i) => (
<div 
key={p.id} 
onClick={() => setSelectedProject(p)}
className={`group relative rounded-3xl overflow-hidden bg-brand-charcoal text-brand-beige p-10 flex flex-col justify-end transition-all duration-700 cursor-pointer hover:bg-[#333331] reveal ${p.span}`}
style={{ animationDelay: `${0.3 + i * 0.1}s` }}
>
<div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
<path d="M7 17L17 7M17 7H7M17 7V17"/>
</svg>
</div>
<div className="relative z-10">
<span className="text-[10px] font-bold opacity-50 mb-2 block uppercase tracking-widest">{p.brand}</span>
<h3 className="text-2xl font-bold mb-3 tracking-tight">{p.title}</h3>
<p className="text-brand-beige/40 text-xs max-w-xs leading-relaxed">{p.desc}</p>
</div>
</div>
))}

{selectedProject && (
<div className="fixed inset-0 z-[10000] flex items-center justify-end">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500" onClick={() => setSelectedProject(null)} />
<div className="relative w-full max-w-2xl h-full bg-[#fbfaf6] text-[#2b2b29] p-8 md:p-16 overflow-y-auto animate-slide-left shadow-2xl">
<button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 p-3 rounded-full hover:bg-black/5 transition-colors">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
</button>
<div className="space-y-12">
<div>
<span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 block mb-4">{selectedProject.brand}</span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">{selectedProject.title}</h2>
</div>
<div className="space-y-6">
<h4 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">Technical Breakdown</h4>
<p className="text-xl leading-relaxed text-neutral-700">{selectedProject.details}</p>
</div>
<div className="space-y-6">
<h4 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">Tech Stack</h4>
<div className="flex flex-wrap gap-2">
{selectedProject.stack.map((item) => (
<span key={item} className="px-4 py-2 border border-black/10 rounded-full text-xs font-medium">{item}</span>
))}
</div>
</div>
<div className="pt-12">
<button onClick={() => setSelectedProject(null)} className="w-full py-5 bg-[#2b2b29] text-[#fbfaf6] rounded-3xl font-bold text-lg hover:scale-[0.99] transition-transform">Close Case Study</button>
</div>
</div>
</div>
</div>
)}
</>
);
};

export default Projects;
