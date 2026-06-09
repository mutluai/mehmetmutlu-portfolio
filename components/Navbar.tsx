import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/70 backdrop-blur-md border border-lab-border rounded-3xl px-8 py-3">
        <div className="text-lg font-bold tracking-tighter">MEHMET MUTLU / LAB</div>
        <div className="hidden md:flex gap-8 items-center">
          {['Research', 'Projects', 'Services', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-lab-muted hover:text-lab-charcoal transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-lab-charcoal text-white text-sm rounded-full font-medium hover:bg-lab-black transition-all">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
