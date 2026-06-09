import React from 'react';

const Footer = () => {
return (
<footer className="bg-brand-beige border-t border-brand-border py-12 flex flex-col md:flex-row justify-between items-center gap-8 reveal" style={{ animationDelay: '1s' }}>
<div className="text-sm font-medium opacity-40">
© 2026 Taste & Intelligence. Built by Mehmet Mutlu.
</div>
<div className="flex gap-8">
{['Twitter', 'LinkedIn', 'Instagram'].map(link => (
<a key={link} href="#" className="text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">
{link}
</a>
))}
</div>
</footer>
);
};

export default Footer;
