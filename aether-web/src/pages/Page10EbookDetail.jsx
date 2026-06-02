export default function Page10EbookDetail() {
    return (
        <>
            <main className="flex-1 max-w-1440 mx-auto w-full px-margin-mobile md:px-margin-desktop py-xl">
{/*  Hero Section  */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center mb-section-gap relative">
{/*  Subtle background glow  */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-tertiary rounded-[100%] opacity-5 blur-[150px] pointer-events-none"></div>
<div className="md:col-span-6 flex flex-col gap-lg z-10">
<div className="flex flex-col gap-sm">
<span className="font-label-caps text-label-caps text-holographic-blue uppercase tracking-widest">Exclusive eBook Release</span>
<h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-pure-white uppercase">
                        Architecting Intelligence
                    </h1>
<p className="font-body-lg text-body-lg text-silver-mist max-w-[500px]">
                        A foundational blueprint for designing scalable, ethical, and high-performance neural networks. Master the midnight architecture of modern AI.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-md items-start sm:items-center">
<button className="bg-primary-container text-pure-white font-body-lg text-body-lg px-lg py-sm rounded-xl hover:bg-holographic-blue hover:text-pitch-black transition-all duration-300 w-full sm:w-auto text-center shadow-[0_0_20px_rgba(227,38,82,0.3)]">
                        Purchase eBook - $49
                    </button>
<button className="border border-holographic-blue/50 text-holographic-blue font-body-lg text-body-lg px-lg py-sm rounded-xl hover:bg-holographic-blue/10 transition-all duration-300 w-full sm:w-auto text-center">
                        Read Sample
                    </button>
</div>
</div>
<div className="md:col-span-6 flex justify-center md:justify-end z-10 relative mt-xl md:mt-0">
{/*  3D Book Cover Representation  */}
<div className="relative w-[300px] md:w-[400px] aspect-[3/4] perspective-1000">
<div className="absolute inset-0 bg-deep-slate rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-holographic-blue/20 overflow-hidden transform rotate-y-[-15deg] rotate-x-[5deg] transition-transform hover:rotate-y-[0deg] duration-500">
<img alt="Architecting Intelligence Book Cover" className="w-full h-full object-cover opacity-80 mix-blend-screen" data-alt="A highly detailed, cinematic 3D render of a futuristic hardcover book titled 'Architecting Intelligence'. The cover features an intricate, glowing neon blue neural network pattern set against a deep, light-absorbing pitch-black background. Subtle holographic reflections run along the edge of the pages. The lighting is dramatic and moody, characteristic of a premium dark-mode technology aesthetic, emphasizing the high-fidelity texture of the book's surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDghZBKtteixSzb2IIvqxEML_OlAjNH7EQh81NaqtLVh2NqUGlviG9jNdMa5F7yRToHiaNHXpblTUsf4tgrZxqIBQil6ovXlYuDlrjnKtO1f8c_Y4rC54tomkUY1VEDmFaKUkaeTEYoA1SdmmFqVVJNKfTbDxJb0dhoZNMtdt7IIj0Ia4Ts0yLsGjLaJ38Apw0a6Kuf92te4W6dKm6Q1Z1RJa3HcJJGLB2MeV_x1tHXJ8AGom3EZ1Dcu8fD2dcqhs26jIFCO7MbElo"/>
<div className="absolute inset-0 bg-gradient-to-t from-pitch-black via-transparent to-transparent"></div>
<div className="absolute bottom-md left-md right-md">
<h3 className="font-display-hero-mobile text-headline-lg text-pure-white uppercase leading-none mb-xs">Architecting<br/>Intelligence</h3>
<p className="font-label-caps text-label-caps text-silver-mist">Dr. Elara Vance</p>
</div>
</div>
</div>
</div>
</section>
{/*  Inside the Data (Bento Grid)  */}
<section className="mb-section-gap">
<h2 className="font-display-hero-mobile md:font-display-hero text-headline-lg md:text-display-hero text-pure-white mb-xl border-b border-surface-container-highest pb-md uppercase">Inside the Data</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-md auto-rows-[minmax(200px,auto)]">
{/*  Chapter List (Large Cell)  */}
<div className="md:col-span-8 bg-surface-container-low rounded-xl border border-white/5 p-lg flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full"></div>
<h3 className="font-headline-md text-headline-md text-pure-white mb-md relative z-10">Core Modules</h3>
<div className="flex flex-col gap-sm relative z-10 flex-1 overflow-y-auto">
<div className="flex items-center justify-between border-b border-surface-container-highest pb-sm">
<span className="font-label-caps text-label-caps text-silver-mist">01</span>
<span className="font-body-lg text-body-lg text-pure-white flex-1 ml-md">The Midnight Architecture</span>
<span className="material-symbols-outlined text-holographic-blue">lock_open</span>
</div>
<div className="flex items-center justify-between border-b border-surface-container-highest pb-sm">
<span className="font-label-caps text-label-caps text-silver-mist">02</span>
<span className="font-body-lg text-body-lg text-pure-white flex-1 ml-md">Quantum Data Structures</span>
<span className="material-symbols-outlined text-surface-container-highest">lock</span>
</div>
<div className="flex items-center justify-between border-b border-surface-container-highest pb-sm">
<span className="font-label-caps text-label-caps text-silver-mist">03</span>
<span className="font-body-lg text-body-lg text-pure-white flex-1 ml-md">Ethical Node Mapping</span>
<span className="material-symbols-outlined text-surface-container-highest">lock</span>
</div>
<div className="flex items-center justify-between border-b border-surface-container-highest pb-sm">
<span className="font-label-caps text-label-caps text-silver-mist">04</span>
<span className="font-body-lg text-body-lg text-pure-white flex-1 ml-md">Predictive Modeling at Scale</span>
<span className="material-symbols-outlined text-surface-container-highest">lock</span>
</div>
</div>
</div>
{/*  Key Insights (Tall Cell)  */}
<div className="md:col-span-4 bg-deep-slate rounded-xl border border-holographic-blue/20 p-lg flex flex-col relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,240,255,0.05)]">
<h3 className="font-headline-md text-headline-md text-holographic-blue mb-md">Key Insights</h3>
<ul className="flex flex-col gap-md">
<li className="flex gap-sm">
<span className="material-symbols-outlined text-tertiary">data_usage</span>
<p className="font-body-md text-body-md text-silver-mist">Over 50+ detailed architectural diagrams.</p>
</li>
<li className="flex gap-sm">
<span className="material-symbols-outlined text-tertiary">code</span>
<p className="font-body-md text-body-md text-silver-mist">Production-ready code snippets for neural deployment.</p>
</li>
<li className="flex gap-sm">
<span className="material-symbols-outlined text-tertiary">psychology</span>
<p className="font-body-md text-body-md text-silver-mist">Cognitive flow analysis for AI systems.</p>
</li>
</ul>
</div>
{/*  Author Bio (Wide Cell)  */}
<div className="md:col-span-12 bg-charcoal-canvas rounded-xl p-0 flex flex-col md:flex-row overflow-hidden border border-white/5">
<div className="md:w-1/3 relative h-64 md:h-auto">
<img alt="Dr. Elara Vance" className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80" data-alt="A dramatic, high-contrast portrait of a female AI researcher, Dr. Elara Vance. She is looking thoughtfully off-camera. The lighting is cinematic, casting deep shadows that contrast with a subtle, glowing holographic blue rim light on her profile. The background is pitch-black, emphasizing a serious, futuristic, and premium technological atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH-zYz2injRAL6pfkpx7LY4dOyjywfFVy9VkzU733TbZyPr4TDTnvsWKjGwGCvy5S9MP4NR6wx6q4veVFj7wqkw0ZSt7Sfuejmvh2unqh2q6pahRBXAFZ7hgX4V8SrNnBUMSnY-nXNI1ll8fJLHQ47eWIxo5-AleReLkUMrDkdKiDod0C9-_7dgnybC9xoBdog3cd1VS-GCp0HInsNtRpRZV7j5McsckVo3ZtugrSHrUZhxi3G08_kQ-jadMo5Yz_zJ-naiXa3Fkk"/>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/90 md:to-background"></div>
</div>
<div className="md:w-2/3 p-lg flex flex-col justify-center relative z-10 bg-background/90 md:bg-transparent">
<span className="font-label-caps text-label-caps text-primary uppercase mb-xs">The Architect</span>
<h3 className="font-headline-md text-headline-md text-pure-white mb-sm">Dr. Elara Vance</h3>
<p className="font-body-md text-body-md text-silver-mist max-w-[600px]">
                            Former Lead Data Scientist at Global AI Initiatives. Dr. Vance has pioneered methodologies in unsupervised learning that have reshaped the industry. 'Architecting Intelligence' is the distillation of a decade spent at the bleeding edge of neural network design.
                        </p>
</div>
</div>
</div>
</section>
{/*  Pricing Card Section  */}
<section className="mb-section-gap flex justify-center">
<div className="w-full max-w-[600px] bg-surface-container-high rounded-xl border border-surface-container-highest p-xl text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent"></div>
<h2 className="font-headline-md text-headline-md text-pure-white mb-sm">Unlock the Architecture</h2>
<p className="font-body-md text-body-md text-silver-mist mb-lg">Instant access to the complete digital manuscript, high-res diagrams, and future updates.</p>
<div className="font-display-hero-mobile text-display-hero-mobile text-pure-white mb-lg">$49 <span className="font-body-md text-body-md text-silver-mist align-middle">USD</span></div>
<button className="w-full bg-primary-container text-pure-white font-headline-md text-headline-md py-md rounded-xl hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-300 shadow-[0_10px_30px_rgba(227,38,82,0.2)]">
                    Purchase eBook
                </button>
</div>
</section>
{/*  Reviews Section  */}
<section className="mb-section-gap">
<h2 className="font-display-hero-mobile md:font-display-hero text-headline-lg md:text-display-hero text-pure-white mb-xl uppercase text-center">System Feedback</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-md">
{/*  Review Card 1  */}
<div className="bg-surface-container-lowest rounded-xl p-lg border border-white/5 shadow-[inset_0_2px_10px_rgba(255,255,255,0.02)]">
<div className="flex text-tertiary mb-sm">
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-silver-mist mb-md">"A paradigm-shifting text. Vance maps out complex neural topologies with terrifying clarity. Essential reading for any senior developer."</p>
<div className="font-label-caps text-label-caps text-pure-white uppercase">- J. Sterling, Principal Engineer</div>
</div>
{/*  Review Card 2  */}
<div className="bg-surface-container-lowest rounded-xl p-lg border border-white/5 shadow-[inset_0_2px_10px_rgba(255,255,255,0.02)] relative overflow-hidden">
<div className="absolute -right-lg -top-lg w-24 h-24 bg-holographic-blue/10 blur-[30px] rounded-full"></div>
<div className="flex text-tertiary mb-sm relative z-10">
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-silver-mist mb-md relative z-10">"The chapters on Ethical Node Mapping alone justify the price. This is the new standard textbook for AI architecture."</p>
<div className="font-label-caps text-label-caps text-pure-white uppercase relative z-10">- Dr. M. Lin, AI Ethics Board</div>
</div>
{/*  Review Card 3  */}
<div className="bg-surface-container-lowest rounded-xl p-lg border border-white/5 shadow-[inset_0_2px_10px_rgba(255,255,255,0.02)]">
<div className="flex text-tertiary mb-sm">
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-surface-container-highest" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-silver-mist mb-md">"Dense, challenging, and profoundly necessary. Not for beginners, but a masterclass for practitioners."</p>
<div className="font-label-caps text-label-caps text-pure-white uppercase">- TechNode Review</div>
</div>
</div>
</section>
</main>
        </>
    );
}