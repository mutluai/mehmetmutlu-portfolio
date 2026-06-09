import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
return (
<main className="min-h-screen bg-brand-beige">
<Navbar />

{/* Bento Grid Master Layout */}
<div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
<div className="grid grid-cols-12 gap-6 auto-rows-auto">
<Hero />
<About />
<Projects />

{/* Footer Tile */}
<div className="col-span-12 mt-12">
<Footer />
</div>
</div>
</div>
</main>
);
}
