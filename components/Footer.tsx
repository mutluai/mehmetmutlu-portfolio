import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="py-32 px-6 bg-brand-charcoal text-brand-beige">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
          <div className="space-y-6 reveal">
            <div className="text-4xl font-bold tracking-tighter">MEHMET MUTLU</div>
            <p className="text-brand-muted max-w-sm text-lg">
              Creative AI Specialist at Consciouslab. Engineering the future of design and machine intelligence.
            </p>
          </div>
          
          <div className="flex flex-col gap-8 reveal" style={{ animationDelay: '0.2s' }}>
            <span className="section-label text-white/40 mb-0">Collaboration</span>
            <a href="mailto:ai.mehmetmutlu@gmail.com" className="text-3xl md:text-5xl font-bold hover:text-brand-muted transition-all duration-500 underline underline-offset-[12px] decoration-1 decoration-white/20">
              ai.mehmetmutlu@gmail.com
            </a>
          </div>
        </div>
        
        <div className="mt-40 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">
          <div className="flex gap-12">
            <a href="https://linkedin.com/in/mehmetmutlu01" target="_blank" className="hover:text-brand-beige transition-colors">LinkedIn</a>
            <a href="https://instagram.com/mehmetmutlumu" target="_blank" className="hover:text-brand-beige transition-colors">Instagram</a>
          </div>
          <div>© 2026 MEHMET MUTLU — ALL RIGHTS RESERVED</div>
          <div className="flex gap-8">
            <span>Istanbul / Global</span>
            <span>Est. 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
