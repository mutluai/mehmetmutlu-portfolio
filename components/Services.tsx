import React from 'react';

const services = [
  {
    title: "AI Agent Architecture",
    description: "Designing multi-agent workflows that automate complex creative processes with human-level taste.",
    icon: "⚙️",
    span: "md:col-span-2"
  },
  {
    title: "Preference Modeling",
    description: "Systematizing creative judgment to align AI outputs with brand-specific aesthetic standards.",
    icon: "👁️",
    span: "md:col-span-1"
  },
  {
    title: "Full-Stack AI-Coding",
    description: "Engineering production-ready infrastructures that seamlessly integrate frontier models.",
    icon: "💻",
    span: "md:col-span-1"
  },
  {
    title: "Visual Synthesis",
    description: "Crafting hyper-realistic AI video and image assets for the next generation of marketing.",
    icon: "✨",
    span: "md:col-span-2"
  }
];

const Services = () => {
  return (
    <section id="capabilities" className="py-40 px-6 max-w-7xl mx-auto">
      <div className="mb-24 reveal">
        <span className="section-label">Capabilities</span>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Intelligence Applied.</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className={`bento-card flex flex-col justify-between min-h-[350px] reveal ${s.span}`} style={{ animationDelay: `${0.1 * i}s` }}>
            <div className="w-14 h-14 rounded-2xl bg-brand-beige flex items-center justify-center text-3xl shadow-inner">
              {s.icon}
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">{s.title}</h3>
              <p className="text-brand-muted text-lg leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
