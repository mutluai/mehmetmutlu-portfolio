import React from 'react';

const projects = [
  {
    brand: "Hepsiburada",
    title: "Agentic Creative Suite",
    desc: "Autonomous agents generating high-fidelity creative assets for NASDAQ-listed e-commerce.",
    size: "large",
    placeholder: "🎨"
  },
  {
    brand: "Migros",
    title: "Celebrity Avatars",
    desc: "Nationwide AI-avatar campaign bridging celebrity presence and scale.",
    size: "small",
    placeholder: "👤"
  },
  {
    brand: "Consciouslab",
    title: "WhatsApp CRM",
    desc: "Intelligent agent architectures for seamless enterprise communication.",
    size: "small",
    placeholder: "💬"
  },
  {
    brand: "Sabancı",
    title: "Vision of Sakıp Sabancı",
    desc: "AI-enhanced narrative experiences preserving legacy through technology.",
    size: "medium",
    placeholder: "🏛️"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-40 px-6 bg-brand-charcoal text-brand-beige">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex justify-between items-end">
          <div className="reveal">
            <span className="section-label text-white/40">Case Studies</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Selected Work.</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[450px]">
          {projects.map((p, i) => (
            <div key={i} className={`group relative rounded-[32px] overflow-hidden bg-white/5 border border-white/10 p-12 flex flex-col justify-end transition-all duration-700 hover:bg-white/[0.08] reveal ${
              p.size === 'large' ? 'md:col-span-8' : 
              p.size === 'medium' ? 'md:col-span-7' : 'md:col-span-4'
            }`} style={{ animationDelay: `${0.2 * (i + 1)}s` }}>
              <div className="absolute top-12 left-12 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl">
                {p.placeholder}
              </div>
              <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
              <div className="z-10">
                <span className="text-sm font-bold opacity-40 mb-3 block">{p.brand}</span>
                <h3 className="text-4xl font-bold mb-5 tracking-tight">{p.title}</h3>
                <p className="text-brand-muted max-w-md text-lg leading-relaxed">{p.desc}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
