export default function Page06Dashboard() {
    return (
        <>
            <main className="ml-64 flex-1 flex flex-col md:flex-row h-screen overflow-hidden p-gutter gap-gutter relative">
{/*  Left: Video Player Area  */}
<section className="flex-1 flex flex-col h-full rounded-xl overflow-hidden glass-panel relative group">
{/*  Video Container (Simulated)  */}
<div className="relative w-full h-full bg-pitch-black flex items-center justify-center overflow-hidden">
<img alt="Neural Networks Visual" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" data-alt="A highly detailed, cinematic visualization of a neural network artificial intelligence concept. Glowing data nodes connected by thin lines of bright cyan and deep magenta light against a pitch-black background. The scene feels like looking inside a massive quantum computer, with subtle depth-of-field blurring the distant nodes. It conveys a sense of immense processing power and advanced technology." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyHx_lWtXDlaGjMSBzDCsYIzXzQTwSvU1KMs0Y32iFivv7Q0d9ajI4UlUvfhLstT47NWu2x6asPp6dIWTEb009JUpuOs2ZkXaMYzSjSOWbS6QA6DPPTzSwmGlKAnfuCxGki24Rr3zYko7g1vRvKSy3Ftf211oVHJKk_pDsl8lMPZ5ZjBteq9xMoFTC4WiBydgCbRXzcH3tjc4oepWcd__gB7jD7Mqyj4lIsvNJWCKDAbQre8oQvagB-iKqatqlVJ2S5TiqOUyAK4E"/>
{/*  Play Button Overlay  */}
<button className="absolute z-10 w-20 h-20 rounded-full bg-holographic-blue/10 border border-holographic-blue/50 flex items-center justify-center backdrop-blur-md hover:scale-105 hover:bg-holographic-blue/20 transition-all duration-300 group-hover:opacity-100 opacity-0">
<span className="material-symbols-outlined text-holographic-blue text-display-hero-mobile ml-2" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</button>
{/*  UI Overlays on Video  */}
<div className="absolute top-0 left-0 w-full p-md bg-gradient-to-b from-pitch-black/80 to-transparent z-10 flex justify-between items-start">
<div>
<h2 className="font-headline-md text-headline-md text-pure-white mb-xs tracking-tight">Introduction to Neural Networks</h2>
<div className="flex items-center gap-sm font-label-caps text-label-caps text-tertiary">
<span className="px-2 py-1 rounded bg-deep-slate/80 border border-holographic-blue/30 backdrop-blur-sm">MODULE 3</span>
<span className="px-2 py-1 rounded bg-deep-slate/80 border border-white/10 backdrop-blur-sm">14:20 / 45:00</span>
</div>
</div>
<div className="flex gap-sm">
<button className="w-10 h-10 rounded-full bg-deep-slate/50 border border-white/10 flex items-center justify-center hover:border-holographic-blue/50 transition-colors backdrop-blur-sm text-silver-mist hover:text-pure-white">
<span className="material-symbols-outlined text-[20px]">closed_caption</span>
</button>
<button className="w-10 h-10 rounded-full bg-deep-slate/50 border border-white/10 flex items-center justify-center hover:border-holographic-blue/50 transition-colors backdrop-blur-sm text-silver-mist hover:text-pure-white">
<span className="material-symbols-outlined text-[20px]">settings</span>
</button>
</div>
</div>
{/*  Video Progress Bar  */}
<div className="absolute bottom-0 left-0 w-full p-md bg-gradient-to-t from-pitch-black/90 to-transparent z-10">
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden mb-sm cursor-pointer group/progress">
<div className="h-full bg-holographic-blue w-1/3 relative group-hover/progress:bg-tertiary transition-colors shadow-[0_0_10px_rgba(0,240,255,0.8)]">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-pure-white rounded-full scale-0 group-hover/progress:scale-100 transition-transform"></div>
</div>
</div>
<div className="flex justify-between items-center text-silver-mist text-sm">
<div className="flex items-center gap-md">
<button className="hover:text-pure-white"><span className="material-symbols-outlined text-[24px]">pause</span></button>
<button className="hover:text-pure-white"><span className="material-symbols-outlined text-[20px]">volume_up</span></button>
<span className="font-mono text-xs">14:20 / 45:00</span>
</div>
<button className="hover:text-pure-white"><span className="material-symbols-outlined text-[20px]">fullscreen</span></button>
</div>
</div>
</div>
</section>
{/*  Right: Holographic AI Tutor Interface  */}
<aside className="w-full md:w-[400px] lg:w-[480px] h-full flex flex-col gap-sm">
{/*  Real-time Transcription Glass Card  */}
<div className="flex-1 glass-panel rounded-xl flex flex-col overflow-hidden relative">
{/*  Glowing corner accent  */}
<div className="absolute top-0 right-0 w-24 h-24 bg-holographic-blue/20 blur-2xl rounded-full -mt-10 -mr-10"></div>
<div className="p-sm border-b border-holographic-blue/20 flex justify-between items-center bg-deep-slate/30 z-10">
<div className="flex items-center gap-xs text-holographic-blue">
<span className="material-symbols-outlined text-[18px] animate-pulse">model_training</span>
<h3 className="font-label-caps text-label-caps uppercase tracking-wider">Live Analysis</h3>
</div>
<span className="text-xs text-silver-mist flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div> Synced</span>
</div>
<div className="flex-1 p-md overflow-y-auto custom-scroll text-silver-mist z-10 flex flex-col gap-md">
<p className="leading-relaxed opacity-50">...so when we consider the hidden layers, the non-linear activation functions are what allow the network to compute complex boundaries.</p>
<p className="leading-relaxed opacity-80">Without them, no matter how many layers we stack, the entire network would collapse into a single linear transformation.</p>
{/*  Highlighted active transcription  */}
<div className="p-sm rounded-lg bg-holographic-blue/5 border-l-2 border-holographic-blue relative">
<div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-holographic-blue shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
<p className="leading-relaxed text-pure-white">
                            This is crucial. The <span className="text-tertiary font-bold holographic-text">Rectified Linear Unit (ReLU)</span>, for instance, introduces this non-linearity very efficiently...
                        </p>
</div>
</div>
</div>
{/*  Contextual Resources Card  */}
<div className="h-auto glass-panel rounded-xl p-md flex flex-col gap-sm">
<h4 className="font-label-caps text-label-caps text-silver-mist uppercase mb-xs">Relevant Data Fragments</h4>
<a className="group flex items-center gap-sm p-sm rounded-lg bg-deep-slate/50 border border-white/5 hover:border-holographic-blue/40 transition-colors" href="#">
<div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-silver-mist group-hover:text-holographic-blue transition-colors">
<span className="material-symbols-outlined text-[18px]">functions</span>
</div>
<div className="flex-1">
<div className="text-sm text-pure-white group-hover:text-holographic-blue transition-colors">Activation Functions Cheat Sheet</div>
<div className="text-xs text-silver-mist">PDF Reference</div>
</div>
<span className="material-symbols-outlined text-silver-mist text-[16px] group-hover:text-pure-white">download</span>
</a>
<a className="group flex items-center gap-sm p-sm rounded-lg bg-deep-slate/50 border border-white/5 hover:border-holographic-blue/40 transition-colors" href="#">
<div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-silver-mist group-hover:text-holographic-blue transition-colors">
<span className="material-symbols-outlined text-[18px]">code</span>
</div>
<div className="flex-1">
<div className="text-sm text-pure-white group-hover:text-holographic-blue transition-colors">Implementing ReLU in PyTorch</div>
<div className="text-xs text-silver-mist">Interactive Sandbox</div>
</div>
<span className="material-symbols-outlined text-silver-mist text-[16px] group-hover:text-pure-white">open_in_new</span>
</a>
</div>
{/*  AI Chat Interface  */}
<div className="h-64 glass-panel rounded-xl flex flex-col overflow-hidden">
<div className="p-sm border-b border-white/5 bg-deep-slate/30 flex justify-between items-center">
<div className="flex items-center gap-xs text-pure-white">
<span className="material-symbols-outlined text-[18px] text-primary">smart_toy</span>
<h3 className="font-label-caps text-label-caps uppercase">AETHER Assistant</h3>
</div>
</div>
<div className="flex-1 p-sm overflow-y-auto custom-scroll flex flex-col gap-sm">
{/*  AI Message  */}
<div className="flex gap-sm max-w-[85%]">
<div className="w-6 h-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center flex-shrink-0 mt-1">
<span className="material-symbols-outlined text-primary text-[14px]">smart_toy</span>
</div>
<div className="bg-deep-slate/80 p-sm rounded-lg rounded-tl-none border border-white/5 text-sm text-silver-mist">
                            I noticed we are discussing ReLU. Would you like me to visualize how it handles the vanishing gradient problem compared to Sigmoid?
                        </div>
</div>
</div>
<div className="p-xs bg-deep-slate/50 border-t border-white/5">
<div className="relative flex items-center">
<input className="w-full bg-transparent border-none text-pure-white text-sm focus:ring-0 placeholder:text-silver-mist/50 py-sm pl-sm pr-12" placeholder="Query AETHER..." type="text"/>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 transition-colors focus-within:bg-holographic-blue shadow-[0_0_4px_rgba(0,240,255,0)] focus-within:shadow-[0_0_8px_rgba(0,240,255,0.5)]"></div>
<button className="absolute right-sm text-holographic-blue hover:text-pure-white transition-colors">
<span className="material-symbols-outlined text-[20px]">send</span>
</button>
</div>
</div>
</div>
</aside>
</main>
        </>
    );
}