import React from 'react';

const projects = [
  {
    brand: "Hepsiburada",
    title: "AI Video Transformation",
    desc: "Deploying production-grade AI video models to transform product marketing at scale for Turkey's largest marketplace.",
    size: "large"
  },
  {
    brand: "Migros",
    title: "Celebrity Avatar Engines",
    desc: "Custom-trained Stable Diffusion pipelines for high-fidelity brand ambassador generation.",
    size: "small"
  },
  {
    brand: "Turknet",
    title: "The Grok Integration",
    desc: "Pioneering the first real-world deployment of xAI's Grok for enterprise customer intelligence.",
    size: "small"
  },
  {
    brand: "Sabancı Foundation",
    title: "Vision of Sakıp Sabancı",
    desc: "Restoring and reimagining a legacy through generative AI, bridging history with modern synthesis.",
    size: "medium"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-lab-charcoal text-lab-beige">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex justify-between items-end animate-reveal">
          <div>
            <span className="section-label text-lab-muted/60">Selected Outputs</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Case Studies.</h2>
          </div>
          <div className="hidden md:block pb-2 text-lab-muted">/ 2024—2026</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
          {projects.map((p, i) => (
            <div 
              key={i} 
              style={{ animationDelay: `${i * 100}ms` }}
              className={`animate-reveal group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-10 flex flex-col justify-end transition-all duration-700 hover:bg-white/10 ${
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
                <span className="text-sm font-semibold opacity-50 mb-2 block">{p.brand}</span>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{p.title}</h3>
                <p className="text-lab-muted max-w-md leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
