export default function Page11SmartReader() {
    return (
        <>
            <main className="flex-1 flex overflow-hidden relative">
{/*  Left Sidebar: Table of Contents  */}
<aside className="w-80 border-r border-surface-container-highest bg-background/50 backdrop-blur-md flex flex-col h-full transform transition-transform duration-300 z-40 hidden lg:flex">
<div className="p-md border-b border-surface-container-highest">
<h2 className="font-label-caps text-label-caps text-silver-mist uppercase tracking-widest">Contents</h2>
</div>
<div className="flex-1 overflow-y-auto p-md space-y-4">
{/*  TOC Items  */}
<div className="group cursor-pointer">
<p className="font-body-md text-body-md text-silver-mist group-hover:text-pure-white transition-colors">I. Foundations</p>
<div className="pl-4 mt-2 space-y-2 border-l border-surface-container-highest ml-2">
<p className="font-body-md text-[14px] text-silver-mist hover:text-holographic-blue transition-colors">1. The Dawn of Compute</p>
<p className="font-body-md text-[14px] text-silver-mist hover:text-holographic-blue transition-colors">2. Silicon Dreams</p>
</div>
</div>
<div className="group cursor-pointer">
<p className="font-body-md text-body-md text-pure-white font-bold transition-colors">II. Structures</p>
<div className="pl-4 mt-2 space-y-2 border-l-2 border-tertiary ml-[7px]">
<p className="font-body-md text-[14px] text-silver-mist hover:text-holographic-blue transition-colors">3. Data Oceans</p>
<p className="font-body-md text-[14px] text-holographic-blue font-semibold flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-holographic-blue"></span>
                            4. Neural Pathways
                        </p>
<p className="font-body-md text-[14px] text-silver-mist hover:text-holographic-blue transition-colors">5. The Attention Mechanism</p>
</div>
</div>
<div className="group cursor-pointer">
<p className="font-body-md text-body-md text-silver-mist group-hover:text-pure-white transition-colors">III. Synthetics</p>
<div className="pl-4 mt-2 space-y-2 border-l border-surface-container-highest ml-2">
<p className="font-body-md text-[14px] text-silver-mist hover:text-holographic-blue transition-colors">6. Generative Models</p>
<p className="font-body-md text-[14px] text-silver-mist hover:text-holographic-blue transition-colors">7. Emergence</p>
</div>
</div>
</div>
</aside>
{/*  Center: Reader Canvas  */}
<article className="flex-1 overflow-y-auto bg-pitch-black scroll-smooth relative" id="reader-container">
{/*  Subtle background glow  */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-tertiary opacity-[0.03] blur-[100px] pointer-events-none rounded-full"></div>
<div className="max-w-[720px] mx-auto px-margin-desktop py-xl relative z-10">
<header className="mb-16 text-center">
<h1 className="font-headline-md text-headline-md text-pure-white mb-4">Neural Pathways</h1>
<div className="w-12 h-1 bg-primary mx-auto"></div>
</header>
<div className="font-reader-serif text-reader-text text-inverse-surface reader-content">
<p>
                        The architecture of a neural network is profoundly inspired by the biological brain, yet it is entirely mathematical in its execution. At its core, a pathway is a series of transformations, matrix multiplications and non-linear activations that warp input data into higher-dimensional representations.
                    </p>
<p>
                        Consider the simple perceptron, a relic of early exploration. It could draw a line, partition space into two simplistic domains. But intelligence requires nuance; it requires the ability to bend space, to fold it upon itself until the complex becomes linearly separable. This is where depth emerges. Layers upon layers of synthetic neurons, each extracting features progressively more abstract than the last.
                    </p>
{/*  Inline Image / Figure  */}
<figure className="my-12">
<div className="w-full h-64 bg-deep-slate rounded-lg border border-surface-container-highest overflow-hidden relative group">
{/*  Placeholder for an abstract neural network visualization  */}
<img alt="Neural network visualization" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-screen" data-alt="An abstract digital visualization of a neural network. Glowing cyan and magenta nodes are connected by thin, luminous lines over a pitch-black background. The lighting is cinematic, highlighting the complex, deep-space web of data points. The aesthetic is high-tech, futuristic, and aligns with a dark-mode premium UI style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2fVWsFywZSUIdy7FnDnCh4mX4YG9fg__3zcV9PJRDfSrESbxmHZv11DsDdkZQHW68HqWUErCyHnjWS0hAERrZhrrAwf3OFR_N3ZChma3RETqQgDqq5PvRIZj1JJL88vuv1DV2w4-tuqxjpWhnmb7fQlIpfbytQYx3N8hqD97YjowvfDA4SEB_Hob6HHsz2UKFrTEj4fuL8nX7Trz1jgNwQQDC1I8DsTMn90mw3iZ8EmFkBdy7FPDXxuFMVYKJtEUKAKpmkvfawZw"/>
<div className="absolute inset-0 bg-gradient-to-t from-pitch-black/80 to-transparent"></div>
<figcaption className="absolute bottom-4 left-4 font-label-caps text-label-caps text-silver-mist">Fig 4.1: High-dimensional abstraction</figcaption>
</div>
</figure>
<p>
                        As data flows through these pathways, it is not merely transmitted; it is interpreted. The weights—those millions or billions of parameters—act as the accumulated experience of the model. Training is the delicate art of adjusting these weights, finding the subtle gradient descents in an unimaginably vast loss landscape.
                    </p>
<p>
                        It is in this unseen landscape that the 'magic' occurs. A model does not memorize; it compresses. It finds the underlying manifolds of reality represented in the training data. When it generates, it is walking these manifolds, traversing the neural pathways established during its creation.
                    </p>
</div>
{/*  Chapter Footer Navigation  */}
<div className="mt-24 pt-8 border-t border-surface-container-highest flex justify-between items-center">
<button className="flex items-center gap-2 text-silver-mist hover:text-pure-white transition-colors group">
<span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_left</span>
<span className="font-body-md text-body-md">Previous: Data Oceans</span>
</button>
<button className="flex items-center gap-2 text-silver-mist hover:text-holographic-blue transition-colors group">
<span className="font-body-md text-body-md">Next: Attention</span>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right</span>
</button>
</div>
</div>
</article>
{/*  Right Sidebar: AI Insights Panel  */}
<aside className="w-96 glass-panel border-l border-holographic-blue/20 flex flex-col h-full transform transition-transform duration-300 z-40 hidden xl:flex">
{/*  Panel Header  */}
<div className="p-md border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-holographic-blue" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
<h2 className="font-headline-md text-[18px] text-pure-white">AI Insights</h2>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
<span className="font-label-caps text-[10px] text-silver-mist uppercase">Active</span>
</div>
</div>
<div className="flex-1 overflow-y-auto p-md space-y-6">
{/*  Real-time Analysis Widget  */}
<div className="bg-deep-slate/50 rounded-xl p-4 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-tertiary"></div>
<h3 className="font-label-caps text-label-caps text-silver-mist mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">analytics</span>
                        Page Analysis
                    </h3>
<div className="space-y-3">
<div>
<div className="flex justify-between font-label-caps text-[10px] text-silver-mist mb-1">
<span>Complexity Level</span>
<span>Advanced</span>
</div>
<div className="w-full bg-graphite-base h-1.5 rounded-full overflow-hidden">
<div className="bg-holographic-blue w-[85%] h-full"></div>
</div>
</div>
<div className="flex gap-2 flex-wrap pt-2">
<span className="px-2 py-1 bg-surface-container rounded text-[11px] font-body-md text-inverse-surface border border-white/5">Perceptron</span>
<span className="px-2 py-1 bg-surface-container rounded text-[11px] font-body-md text-inverse-surface border border-white/5">Manifolds</span>
<span className="px-2 py-1 bg-surface-container rounded text-[11px] font-body-md text-inverse-surface border border-white/5">Gradient Descent</span>
</div>
</div>
</div>
{/*  Page Summary  */}
<div className="bg-surface-container-low/80 rounded-xl p-4 border border-white/5">
<h3 className="font-label-caps text-label-caps text-silver-mist mb-2">Auto-Summary</h3>
<p className="font-body-md text-[14px] text-inverse-surface leading-relaxed">
                        This section explains how artificial neural networks transition from simple linear classifiers (perceptrons) to deep structures capable of modeling high-dimensional, complex data spaces via non-linear transformations and weight optimization.
                    </p>
</div>
{/*  Suggested Questions  */}
<div>
<h3 className="font-label-caps text-label-caps text-silver-mist mb-3 pl-1">Suggested Queries</h3>
<div className="space-y-2">
<button className="w-full text-left p-3 rounded-lg border border-white/5 bg-deep-slate/30 hover:border-holographic-blue/50 hover:bg-holographic-blue/5 transition-all group">
<p className="font-body-md text-[13px] text-pure-white group-hover:text-holographic-blue transition-colors">Explain "linear separability" simply.</p>
</button>
<button className="w-full text-left p-3 rounded-lg border border-white/5 bg-deep-slate/30 hover:border-holographic-blue/50 hover:bg-holographic-blue/5 transition-all group">
<p className="font-body-md text-[13px] text-pure-white group-hover:text-holographic-blue transition-colors">How do weights act as memory?</p>
</button>
</div>
</div>
</div>
{/*  Chat Input Area  */}
<div className="p-4 border-t border-white/5 bg-surface-container-lowest">
<div className="relative">
<input className="w-full bg-deep-slate text-pure-white placeholder:text-silver-mist font-body-md text-[14px] rounded-lg pl-4 pr-10 py-3 border border-white/10 focus:border-holographic-blue focus:ring-1 focus:ring-holographic-blue transition-all outline-none" placeholder="Ask about this chapter..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-silver-mist hover:text-holographic-blue transition-colors p-1 rounded-md hover:bg-white/5">
<span className="material-symbols-outlined text-[20px]">send</span>
</button>
</div>
</div>
</aside>
</main>
        </>
    );
}