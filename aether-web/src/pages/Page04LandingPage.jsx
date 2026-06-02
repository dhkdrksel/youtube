export default function Page04LandingPage() {
    return (
        <>
            <main className="flex-grow flex flex-col">
{/*  Hero Section  */}
<section className="w-full max-w-1440 mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative">
{/*  Subtle Background Glow  */}
<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary-container/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-[100px]"></div>
</div>
{/*  Left Content  */}
<div className="md:col-span-6 flex flex-col gap-lg z-10">
<h1 className="font-display-hero-mobile text-display-hero-mobile md:font-display-hero md:text-display-hero text-pure-white uppercase">
                    REDEFINING <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pure-white to-silver-mist">HUMAN POTENTIAL</span> <br/> THROUGH AI
                </h1>
<p className="font-body-lg text-body-lg text-silver-mist max-w-lg">
                    Elevate your intelligence. Master the tools of tomorrow by learning directly from global leaders and advanced artificial architectures. The stage is set for your evolution.
                </p>
<div className="flex flex-col sm:flex-row gap-sm pt-sm">
<button className="bg-primary-container text-on-primary-container px-lg py-md rounded-xl font-headline-md text-headline-md hover:bg-inverse-primary transition-colors duration-300 ai-glow">Start Your Journey</button>
<button className="bg-transparent border border-pure-white text-pure-white px-lg py-md rounded-xl font-headline-md text-headline-md hover:bg-surface-container-highest transition-colors duration-300">View Curriculum</button>
</div>
</div>
{/*  Right Visual  */}
<div className="md:col-span-6 relative z-10 w-full h-[500px] md:h-[700px] rounded-xl overflow-hidden group">
<img alt="Cinematic High-Contrast AI Human Collaboration" className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" data-alt="A cinematic, high-contrast digital artwork depicting an advanced AI hologram collaborating with a human professional in a sleek, dimly lit futuristic workspace. The scene is illuminated by dramatic, deep-shadow lighting that emphasizes the glowing, translucent holographic interface projecting complex data visualizations. The color palette relies on deep slate and pitch black, punctuated by piercing holographic blue and subtle raspberry accents. The overall aesthetic is highly technical, premium, and visionary, evoking a sense of exclusive access to world-class intelligence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8CbRkvgi7zuI0f-etwLq0qM5DC0o0_AgfqvyLDfsHerSi8Ux6gnVG9aPxCzXNMXXHyMe5x7_hG69sUqvrGxXzCbvwc4oQloO1bBmJ-epdFYBRIkm5_fxrd9VHUEXWIhMhNgJ-1n2bvZBeJhSZz3j2hqw3nGfFzJ-wWg04QSS8JPrCcL4JKTiywzHm_0-z-nfqGGDE_y5xOOJWm1_fz2cO4OnkB44NHWf14FWTF3LJIdETrHOFZoo_jwelfPRv_kXwul0eGeaUPSs"/>
{/*  Holographic Overlay Element  */}
<div className="absolute bottom-md right-md holographic-card p-sm rounded-lg flex items-center gap-sm">
<span className="material-symbols-outlined text-holographic-blue" style={{ fontVariationSettings: "'FILL' 1" }}>network_intelligence</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-silver-mist">Processing Capacity</span>
<span className="font-headline-md text-headline-md text-pure-white">ExaFLOPS Active</span>
</div>
</div>
</div>
</section>
{/*  Instructors Section  */}
<section className="w-full bg-graphite-base py-section-gap border-y border-surface-container-highest relative">
<div className="max-w-1440 mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-lg">
<div className="flex flex-col md:flex-row justify-between items-end gap-sm">
<div className="flex flex-col gap-xs">
<span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">Global Elite</span>
<h2 className="font-display-hero-mobile text-display-hero-mobile md:font-headline-lg md:text-headline-lg text-pure-white uppercase">Learn from the <br/>Architects of the Future</h2>
</div>
<button className="text-tertiary hover:text-pure-white transition-colors flex items-center gap-xs font-headline-md text-headline-md">
                        View All <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
{/*  Instructor Carousel (Bento-ish Grid for demonstration)  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter overflow-hidden relative">
{/*  Card 1  */}
<div className="bg-deep-slate rounded-xl overflow-hidden group flex flex-col relative h-[450px]">
<img alt="Instructor" className="w-full h-1/2 object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A dramatic, low-key portrait of a visionary female tech executive in her 40s. The lighting is cinematic, with deep shadows on one side of her face and a subtle, cool-toned rim light on the other, suggesting illumination from a glowing screen. She looks off-camera with an expression of intense focus. The background is a pure, light-absorbing pitch black. The style is premium, authoritative, and evocative of high-end editorial photography for an advanced AI education platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHbYYG0f5jO606O1fGlRadn_I9SroIW6A7LP88frIB7VLE4Rrqc8Ldt7Yna3GOQJmS2m7xOlmH4_iO4rwl7ov2bdRwmsiQRHxpifRJvI2q6Iy-q1RP5iaDxjeta8CFpgDXjsJrDR7S1_GOvmn_-i1MFF4v71ZCxay3hG0_xVksI_ANfuBr2KNhuVSYmfKuceSvSYRacrq4RC0-exLRFNdSoSNRU0YO7QO-dwA740YcCInPv74vd2H2t910CZGHFVKahjtb5TDRh3Y"/>
<div className="p-sm flex flex-col gap-xs flex-grow justify-end relative z-10 bg-gradient-to-t from-deep-slate via-deep-slate to-transparent absolute inset-0">
<span className="font-label-caps text-label-caps text-primary uppercase">Neural Architect</span>
<h3 className="font-headline-md text-headline-md text-pure-white">Dr. Elena Rostova</h3>
<p className="font-body-md text-body-md text-silver-mist mt-xs line-clamp-2">Pioneering the intersection of quantum computing and neural network design.</p>
</div>
</div>
{/*  Card 2 (AI Focus)  */}
<div className="holographic-card rounded-xl overflow-hidden group flex flex-col relative h-[450px]">
<div className="w-full h-1/2 bg-surface-container flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tertiary/20 to-transparent blur-md"></div>
<span className="material-symbols-outlined text-[120px] text-holographic-blue/80 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">psychology</span>
</div>
<div className="p-sm flex flex-col gap-xs flex-grow justify-end relative z-10">
<span className="font-label-caps text-label-caps text-tertiary uppercase">Synthetic Entity</span>
<h3 className="font-headline-md text-headline-md text-pure-white">AETHER Prime</h3>
<p className="font-body-md text-body-md text-silver-mist mt-xs line-clamp-2">Our flagship AI tutor, continuously updated with global knowledge and strategic models.</p>
</div>
</div>
{/*  Card 3  */}
<div className="bg-deep-slate rounded-xl overflow-hidden group flex flex-col relative h-[450px]">
<img alt="Instructor" className="w-full h-1/2 object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A high-contrast, moody portrait of a male data scientist in his 30s. He is lit by a strong, singular light source that creates dramatic highlights and deep, inky shadows across his face and dark clothing. The aesthetic is stark, minimalist, and deeply focused, reflecting a cinematic dark-mode style. The background is completely black, emphasizing his presence as a master of complex AI architecture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs4jEU1Bt57ha-8ZfauOOmJfP3o4LKlvubOlhsl150GNPg3ttBlgnOrcTC6skU_lsJGyd6a_RkZ1-4t96xDASaZg0JQ7AY8dUJCYXkCAX4vSEBb1HCbK5cJHfHebsmrQ4EGEeZ-sJQJc9gXy0L-17k-PAj3L__7uhZOhqydKvN2-nVdrTLxqBwDyVZEFPA7iT3SMn5cDvpx8IiR5jOPcnMs-GJqgVY9OEDwug5kWBU_qNDC8TlbZfwsvypZrBkQm15sFbZJA4Hyps"/>
<div className="p-sm flex flex-col gap-xs flex-grow justify-end relative z-10 bg-gradient-to-t from-deep-slate via-deep-slate to-transparent absolute inset-0">
<span className="font-label-caps text-label-caps text-primary uppercase">Data Strategist</span>
<h3 className="font-headline-md text-headline-md text-pure-white">Marcus Chen</h3>
<p className="font-body-md text-body-md text-silver-mist mt-xs line-clamp-2">Mastering predictive models and large-scale data synthesis for enterprise applications.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Trust Section  */}
<section className="w-full max-w-1440 mx-auto px-margin-mobile md:px-margin-desktop py-xl flex flex-col items-center gap-md">
<h4 className="font-label-caps text-label-caps text-silver-mist uppercase tracking-widest text-center">Trusted by Global Intelligence Leaders</h4>
<div className="flex flex-wrap justify-center items-center gap-lg opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
{/*  Abstract placeholders for logos  */}
<div className="flex items-center gap-xs text-silver-mist font-headline-md text-headline-md"><span className="material-symbols-outlined text-headline-lg">category</span> QUANTUM CORP</div>
<div className="flex items-center gap-xs text-silver-mist font-headline-md text-headline-md"><span className="material-symbols-outlined text-headline-lg">hub</span> NEURAL DYNAMICS</div>
<div className="flex items-center gap-xs text-silver-mist font-headline-md text-headline-md"><span className="material-symbols-outlined text-headline-lg">language</span> GLOBAL SYNC</div>
<div className="flex items-center gap-xs text-silver-mist font-headline-md text-headline-md"><span className="material-symbols-outlined text-headline-lg">api</span> DATA FORGE</div>
</div>
</section>
</main>
        </>
    );
}