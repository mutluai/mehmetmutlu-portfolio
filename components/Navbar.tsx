import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 reveal">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/40 backdrop-blur-xl border border-brand-border rounded-3xl px-8 py-3">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
          T<span className="italic text-[#b5793c]">&</span>I
          <span className="ml-2 hidden sm:inline-block opacity-40 font-mono text-xs tracking-widest uppercase">Mehmet Mutlu</span>
        </div>
        <div className="hidden md:flex gap-10 items-center">
          {['Projects', 'Capabilities', 'Philosophy'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-brand-muted hover:text-brand-black transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2 bg-brand-black text-white text-sm rounded-full font-bold hover:scale-105 transition-all">
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
