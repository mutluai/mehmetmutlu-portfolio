import React from 'react';

const projects = [
  {
    brand: "Hepsiburada",
    title: "Agentic Creative Suite",
    desc: "A scalable system for NASDAQ-listed e-commerce, generating human-grade creative assets via autonomous agents.",
    size: "large"
  },
  {
    brand: "Migros",
    title: "Celebrity Avatars",
    desc: "Hyper-realistic AI avatars for nationwide marketing.",
    size: "small"
  },
  {
    brand: "Turknet",
    title: "Grok Integration",
    desc: "Real-time AI voice and chat deployment.",
    size: "small"
  },
  {
    brand: "Bloomberg HT",
    title: "Brand Storytelling",
    desc: "AI-enhanced narrative broadcast systems.",
    size: "medium"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-lab-charcoal text-lab-beige">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <span className="section-label text-lab-muted/60">Selected Lab Outputs</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Public Case Studies.</h2>
          </div>
          <div className="hidden md:block pb-2 text-lab-muted">/ 2024—2026</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
          {projects.map((p, i) => (
            <div key={i} className={`group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-10 flex flex-col justify-end transition-all hover:bg-white/10 ${
              p.size === 'large' ? 'md:col-span-8' : 
              p.size === 'medium' ? 'md:col-span-7' : 'md:col-span-4' || 'md:col-span-5'
            }`}>
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
              <div>
                <span className="text-sm font-semibold opacity-50 mb-2 block">{p.brand}</span>
                <h3 className="text-3xl font-bold mb-4">{p.title}</h3>
                <p className="text-lab-muted max-w-md">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
