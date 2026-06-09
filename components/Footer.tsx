import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-lab-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="space-y-4">
          <div className="text-2xl font-bold tracking-tighter">MEHMET MUTLU</div>
          <p className="text-lab-muted max-w-xs">Building the future of creative intelligence. Based in the lab.</p>
        </div>
        
        <div className="flex flex-col gap-4">
          <span className="section-label mb-0">Collaboration</span>
          <a href="mailto:ai.mehmetmutlu@gmail.com" className="text-2xl font-medium hover:text-lab-muted transition-colors underline underline-offset-8">
            ai.mehmetmutlu@gmail.com
          </a>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="font-medium hover:text-lab-muted">LinkedIn</a>
          <a href="#" className="font-medium hover:text-lab-muted">X / Twitter</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-lab-border/50 text-xs text-lab-muted flex justify-between">
        <div>© 2026 MEHMET MUTLU LAB</div>
        <div className="flex gap-4">
          <span>PRIVATE BETA V0.1</span>
          <span>HUMAN DATA EVALUATION LAB</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
