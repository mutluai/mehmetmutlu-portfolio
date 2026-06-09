import React from 'react';

const services = [
  {
    title: "AI Agent Architecture",
    description: "Custom multi-agent workflows for creative automation, tailored for high-scale brand environments.",
    icon: "⚙️",
    span: "md:col-span-2"
  },
  {
    title: "Preference Modeling",
    description: "Aligning model outputs with human creative standards through expert evaluation and RLHF.",
    icon: "👁️",
    span: "md:col-span-1"
  },
  {
    title: "Visual Synthesis",
    description: "High-fidelity AI video and image production for global campaigns.",
    icon: "✨",
    span: "md:col-span-1"
  },
  {
    title: "Development",
    description: "Full-stack integration of AI models into production-ready web and mobile infrastructures.",
    icon: "💻",
    span: "md:col-span-2"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="section-label">Capabilities</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Frontier Solutions.</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className={`bento-card flex flex-col justify-between min-h-[300px] ${s.span}`}>
            <div className="text-4xl mb-6">{s.icon}</div>
            <div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-lab-muted leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
