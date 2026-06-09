import React from 'react';

const Navbar = () => {
return (
<nav className="fixed top-6 left-0 right-0 z-50 px-6 reveal">
<div className="max-w-7xl mx-auto flex justify-between items-center bg-[#fbfaf6]/70 backdrop-blur-xl border border-black/5 rounded-3xl px-8 py-4 shadow-sm">
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
T<span className="italic text-[#b5793c]">&</span>I
<span className="ml-2 hidden sm:inline-block opacity-40 font-mono text-xs tracking-widest uppercase">Mehmet Mutlu</span>
</div>
<div className="hidden md:flex gap-10 items-center">
{['Projects', 'Capabilities', 'Philosophy'].map((item) => (
<a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-black/50 hover:text-black transition-colors">
{item}
</a>
))}
<a href="#contact" className="px-6 py-2 bg-[#2b2b29] text-[#fbfaf6] text-sm rounded-3xl font-bold hover:scale-105 transition-all">
Connect
</a>
</div>
</div>
</nav>
);
};

export default Navbar;
