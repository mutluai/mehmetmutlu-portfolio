'use client';

import React, { useState, useEffect } from 'react';

const projects = [
  {
    id: "hepsiburada",
    brand: "Hepsiburada",
    title: "AI Video Transformation",
    desc: "Deploying production-grade AI video models to transform product marketing at scale for Turkey's largest marketplace.",
    details: "Built a fully autonomous AI video production pipeline that generates high-fidelity marketing assets from product data. Leveraged custom diffusion models and automated post-production workflows to reduce cost-per-asset by 90%.",
    stack: ["Next.js", "Stable Video Diffusion", "Python", "Supabase", "Cloudflare Workers"],
    size: "large"
  },
  {
    id: "migros",
    brand: "Migros",
    title: "Celebrity Avatar Engines",
    desc: "Custom-trained Stable Diffusion pipelines for high-fidelity brand ambassador generation.",
    details: "Developed proprietary LoRA training protocols to digitize celebrities for Migros marketing campaigns. This system allows for consistent, multi-environment character generation while maintaining perfect likeness.",
    stack: ["Stable Diffusion", "Kohya_ss", "LoRA", "ComfyUI", "React"],
    size: "small"
  },
  {
    id: "turknet",
    brand: "Turknet",
    title: "The Grok Integration",
    desc: "Pioneering the first real-world deployment of xAI's Grok for enterprise customer intelligence.",
    details: "Integrated xAI's Grok API to process vast streams of customer sentiment and technical support logs. The system identifies high-signal issues in real-time, significantly improving technical response times.",
    stack: ["xAI Grok", "TypeScript", "Next.js", "Vercel AI SDK", "Prisma"],
    size: "small"
  },
  {
    id: "sabanci",
    brand: "Sabancı Foundation",
    title: "Vision of Sakıp Sabancı",
    desc: "Restoring and reimagining a legacy through generative AI, bridging history with modern synthesis.",
    details: "A cultural preservation project using generative AI to 'bring back' the voice and vision of Sakıp Sabancı. Used advanced voice cloning and deep-learning image restoration to create a high-fidelity digital legacy.",
    stack: ["ElevenLabs", "LivePortrait", "OpenAI GPT-4", "Custom RLHF"],
    size: "medium"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 px-6 bg-[#1c1c1c] text-[#f5f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-neutral-500 mb-6 block">Selected Outputs</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Case Studies.</h2>
          </div>
          <div className="hidden md:block pb-2 text-neutral-500">/ 2024—2026</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
          {projects.map((p, i) => (
            <div 
              key={p.id} 
              onClick={() => setSelectedProject(p)}
              className={`group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-10 flex flex-col justify-end transition-all duration-700 cursor-pointer hover:bg-white/10 ${
                p.size === 'large' ? 'md:col-span-8' : 
                p.size === 'medium' ? 'md:col-span-7' : 'md:col-span-4' || 'md:col-span-5'
              }`}
            >
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
              <div className="relative z-10">
                <span className="text-sm font-semibold opacity-50 mb-2 block uppercase tracking-wider">{p.brand}</span>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{p.title}</h3>
                <p className="text-neutral-400 max-w-md leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Project Drawer/Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Drawer Content */}
          <div className="relative w-full max-w-2xl h-full bg-[#f5f5f0] text-[#1c1c1c] p-8 md:p-16 overflow-y-auto animate-slide-left shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 p-3 rounded-full hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Close Case Study"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <div className="space-y-12">
              <div className="animate-reveal" style={{ animationDelay: '100ms' }}>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 block mb-4">{selectedProject.brand}</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">{selectedProject.title}</h2>
              </div>

              <div className="space-y-6 animate-reveal" style={{ animationDelay: '200ms' }}>
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">Technical Breakdown</h4>
                <p className="text-xl leading-relaxed text-neutral-700">
                  {selectedProject.details}
                </p>
              </div>

              <div className="space-y-6 animate-reveal" style={{ animationDelay: '300ms' }}>
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((item) => (
                    <span key={item} className="px-4 py-2 border border-black/10 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-12 animate-reveal" style={{ animationDelay: '400ms' }}>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-5 bg-black text-white rounded-3xl font-bold text-lg hover:scale-[0.99] transition-transform active:scale-95"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;