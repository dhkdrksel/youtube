export default function Page05ExploreCourses() {
    return (
        <>
            <main className="flex-1 md:ml-64 flex flex-col min-h-screen relative">
{/*  Subtle Background Glow  */}
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-tertiary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
{/*  Top Header Area (Search & Filters)  */}
<div className="px-margin-mobile md:px-margin-desktop py-lg pt-xl md:pt-lg sticky top-0 md:top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-surface-container-highest">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-md items-center justify-between">
<div className="relative w-full md:max-w-md">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-silver-mist">search</span>
<input className="w-full bg-surface-container-highest border-0 border-b border-silver-mist/30 text-pure-white px-md pl-xl py-sm focus:ring-0 focus:border-holographic-blue focus:bg-surface-container transition-all placeholder:text-silver-mist/50" placeholder="Search knowledge matrices..." type="text"/>
</div>
<div className="flex gap-sm overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide snap-x">
<button className="snap-start whitespace-nowrap px-md py-xs rounded-full border border-holographic-blue text-holographic-blue font-label-caps text-label-caps bg-holographic-blue/10">All Modules</button>
<button className="snap-start whitespace-nowrap px-md py-xs rounded-full border border-surface-container-highest text-silver-mist font-label-caps text-label-caps hover:border-silver-mist hover:text-pure-white transition-colors">Generative AI</button>
<button className="snap-start whitespace-nowrap px-md py-xs rounded-full border border-surface-container-highest text-silver-mist font-label-caps text-label-caps hover:border-silver-mist hover:text-pure-white transition-colors">Robotics</button>
<button className="snap-start whitespace-nowrap px-md py-xs rounded-full border border-surface-container-highest text-silver-mist font-label-caps text-label-caps hover:border-silver-mist hover:text-pure-white transition-colors">Machine Learning</button>
<button className="snap-start whitespace-nowrap px-md py-xs rounded-full border border-surface-container-highest text-silver-mist font-label-caps text-label-caps hover:border-silver-mist hover:text-pure-white transition-colors">Ethics</button>
</div>
</div>
</div>
{/*  Course Grid  */}
<div className="px-margin-mobile md:px-margin-desktop py-lg max-w-7xl mx-auto w-full flex-grow">
<div className="mb-lg">
<h2 className="font-headline-md text-headline-md text-pure-white mb-xs tracking-tight">Discover Intelligence</h2>
<p className="text-silver-mist font-body-lg text-body-lg">Curated matrices for advanced cognition.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/*  Card 1  */}
<div className="glass-card rounded-lg overflow-hidden group cursor-pointer flex flex-col h-full">
<div className="relative h-64 overflow-hidden bg-deep-slate">
<img alt="Abstract visualization of an AI neural network with glowing blue nodes and connections against a dark background. The image has a cinematic, high-contrast style with shallow depth of field, suggesting advanced technology and complex data processing in a futuristic setting." className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-screen" data-alt="Abstract visualization of an AI neural network with glowing blue nodes and connections against a dark background. The image has a cinematic, high-contrast style with shallow depth of field, suggesting advanced technology and complex data processing in a futuristic setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD30h-I9RC-TPijaFy74v-et0nVAsZzpstRbiFnXGlcVi4aFe4WXcwpXcgutpEnzq1eVnM9fx3plHe7CTtqw85xJiuh9Qu--gXUFMXfywqG7EkPCdAEbwvqcYf4PPBezu4ja-xFsn_GrsQOjxNhVF_IWLNu7NIrz4rURsWxyBAVVrR_fMKk0PcNTNTlHIRhNr2DGfBoa44Dg_2iBTmud43S4lhtcE40C6lFhlhSFQLJlMEzYUbRYQjKgvix1YskfSAOJGUNeIi_PZo"/>
<div className="absolute top-sm right-sm bg-secondary-fixed-dim text-on-secondary px-sm py-1 rounded text-xs font-label-caps font-bold tracking-wider">PREMIUM</div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pitch-black to-transparent"></div>
<div className="absolute bottom-sm left-sm flex items-center gap-2">
<span className="material-symbols-outlined text-holographic-blue text-sm">schedule</span>
<span className="text-silver-mist text-xs">12 Weeks</span>
</div>
</div>
<div className="p-md flex flex-col flex-grow bg-gradient-to-b from-surface-container-low to-surface-container-highest">
<h3 className="font-headline-md text-xl text-pure-white mb-2 leading-tight group-hover:text-tertiary transition-colors">Advanced Generative Architectures</h3>
<p className="text-silver-mist text-sm mb-md flex-grow line-clamp-3">Master the underlying mechanics of modern LLMs and diffusion models. A deep dive into attention mechanisms and latent space manipulation.</p>
<div className="flex items-center gap-sm mt-auto pt-md border-t border-white/5">
<img alt="Cinematic portrait of a male instructor with sharp lighting, looking intensely at the camera." className="w-8 h-8 rounded-full border border-surface-container object-cover grayscale" data-alt="Cinematic portrait of a male instructor with sharp lighting, looking intensely at the camera against a pitch black background. The lighting highlights the contours of his face, suggesting authority and intelligence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwAXTIun_AurLLrRI_dxjkn8fvltafeoafbP49GqrYY4t3Cp2UCR9GuN968_3lUWpx7rM_5eb0CVKMHgfAi51woZYg6z7euqGnsrNVpPFh0utqZ4VDkoLTijeK6EdBkZFEg4pEq1batVD9x9C-nMduibrjQ-AHrxrGR1Tlrfqk2HZ22dNwW4dwDTfjzc3Nq6YS-wnO4YbMrKWLwxyRD14ZzfYnI-5pHOvbHzDP0DydZbRvYbCzXeLGS6EOAIZJRxx6WdwPj6RYpTc"/>
<div>
<div className="text-pure-white text-sm font-semibold">Dr. Elias Vance</div>
<div className="text-holographic-blue text-xs uppercase tracking-widest font-label-caps">Lead Architect</div>
</div>
</div>
</div>
</div>
{/*  Card 2  */}
<div className="glass-card rounded-lg overflow-hidden group cursor-pointer flex flex-col h-full">
<div className="relative h-64 overflow-hidden bg-deep-slate">
<img alt="A sophisticated robotic arm performing precise maneuvers in a sleek, dark industrial environment. The scene is lit with cool, artificial light, highlighting the metallic textures and joints of the machine, conveying precision and advanced engineering." className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-screen" data-alt="A sophisticated robotic arm performing precise maneuvers in a sleek, dark industrial environment. The scene is lit with cool, artificial light, highlighting the metallic textures and joints of the machine, conveying precision and advanced engineering." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1XJNc1HxqqZElfgbQvoZGAxdZnHeI7GUuW3bEo0uLPZghPF4TeScuMGay2DvCwY4PXRQEjfaLjs31s9JJr7Ay2GCQgIX7yCzwIjxD0CPegn850Y7JG7ryw0RlRC2OKMkapBjg9O8T5thl4H32nAAa43PoliYscC5aWplkxZwnrwy_aFRvkBYpu91ZPNAkSwcKS4xY7lb0rK9bLaQG3eux3SstsyYdkAjXyH3wzn7ov5WAgdAyn9njOF0lOspjLsWiQg2nBD2WIyk"/>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pitch-black to-transparent"></div>
<div className="absolute bottom-sm left-sm flex items-center gap-2">
<span className="material-symbols-outlined text-holographic-blue text-sm">schedule</span>
<span className="text-silver-mist text-xs">8 Weeks</span>
</div>
</div>
<div className="p-md flex flex-col flex-grow bg-gradient-to-b from-surface-container-low to-surface-container-highest">
<h3 className="font-headline-md text-xl text-pure-white mb-2 leading-tight group-hover:text-tertiary transition-colors">Cognitive Robotics &amp; Control Systems</h3>
<p className="text-silver-mist text-sm mb-md flex-grow line-clamp-3">Bridge the gap between digital intelligence and physical execution. Learn kinematics, sensor fusion, and real-time decision making.</p>
<div className="flex items-center gap-sm mt-auto pt-md border-t border-white/5">
<img alt="Professional portrait of a female engineer with a determined expression, lit dramatically from one side." className="w-8 h-8 rounded-full border border-surface-container object-cover grayscale" data-alt="Professional portrait of a female engineer with a determined expression, lit dramatically from one side against a dark slate background. The image conveys focus and expertise in a high-tech field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-2tx8BSpC9JclHNa1dBpflonFozuDT5Xhr3jh4W6cOK9XeryTbawbblxk2vrJbpZOwgXzeRmsU-iIVWJ2I-j_q98lwxYqJQcCpVSPH1R9efEhsTJrqpZF-xcX4rTI6-cnm58Y1KCF7AVjJqqTk_TOYCP7okInNsqiswtjaTzOQPnNjTLH6N2hWaEecAvwnlGk30uSwQngQMZ99tASu5exw-qJRXFHtSZpfuM4Lt7bX8Uz24qNbtF1XrTeHjbd-8x3SUZCFmxz3Ng"/>
<div>
<div className="text-pure-white text-sm font-semibold">Sarah Chen, PhD</div>
<div className="text-holographic-blue text-xs uppercase tracking-widest font-label-caps">Robotics Systems</div>
</div>
</div>
</div>
</div>
{/*  Card 3  */}
<div className="glass-card rounded-lg overflow-hidden group cursor-pointer flex flex-col h-full">
<div className="relative h-64 overflow-hidden bg-deep-slate">
<img alt="A conceptual image of digital security and ethics, showing glowing binary code and a glowing padlock icon overlaying a dark, textured background. The aesthetic is cybernetic and serious, emphasizing protection and ethical boundaries in data." className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-screen" data-alt="A conceptual image of digital security and ethics, showing glowing binary code and a glowing padlock icon overlaying a dark, textured background. The aesthetic is cybernetic and serious, emphasizing protection and ethical boundaries in data." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb3mitauXd0YxXoTJLrc_hnHddzh0KFXp2wwd76qhNwRsVVtTmCb4iNFyrq9ycB6BEQu0RcZC6VQzcw1Yn8FojztwoNpe0rl9kK8Fev2mXXRb4S_2YInbqh_vpyIMEkLxapuxgbP9i-G18rRKr0XHqFqhYzi0NhYQauGwVTSrYAgCE4R7VHZtucEUfFboHTlQVHSpKfggdsW9dCaECjuWgpN8MSwNfaEoJhc6msdXUfTa3tUmDBKLmPauTCIeN_hANQmuTPSB-pQc"/>
<div className="absolute top-sm right-sm bg-secondary-fixed-dim text-on-secondary px-sm py-1 rounded text-xs font-label-caps font-bold tracking-wider">PREMIUM</div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pitch-black to-transparent"></div>
<div className="absolute bottom-sm left-sm flex items-center gap-2">
<span className="material-symbols-outlined text-holographic-blue text-sm">schedule</span>
<span className="text-silver-mist text-xs">4 Weeks</span>
</div>
</div>
<div className="p-md flex flex-col flex-grow bg-gradient-to-b from-surface-container-low to-surface-container-highest">
<h3 className="font-headline-md text-xl text-pure-white mb-2 leading-tight group-hover:text-tertiary transition-colors">Algorithmic Ethics &amp; Bias Mitigation</h3>
<p className="text-silver-mist text-sm mb-md flex-grow line-clamp-3">Crucial frameworks for developing responsible AI. Analyze historical bias, fairness metrics, and the societal impact of autonomous systems.</p>
<div className="flex items-center gap-sm mt-auto pt-md border-t border-white/5">
<img alt="Portrait of a serious woman with glasses, lit softly against a dark background." className="w-8 h-8 rounded-full border border-surface-container object-cover grayscale" data-alt="Portrait of a serious woman with glasses, lit softly against a dark background. Her expression is thoughtful and analytical, reflecting the nuanced subject matter of AI ethics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdiJUeBjQazU_RlbMio6rlyomfwBS7YhXahEKcl2QVChij4JwmodT8FkFcRi5fmDtoKuz--LR1WAofzC0PvWKnMEJtPmGXRU6frM8u8JfUf3REjBUhY4LZKg1oe9TVQx6Y6_HRZvzkikkvpqlMUoCCndXcsYQwztE1lwTCESJcYm5DHnq1yJZp2OxSVzDcK1r19d1s7ZVXY-fUGV-IU33h3kilhorHc4pF0O4pOtP7KBuMe7XUYHOSBuAQU0yKNNMEwJCcIwC-iR8"/>
<div>
<div className="text-pure-white text-sm font-semibold">Maya Patel</div>
<div className="text-holographic-blue text-xs uppercase tracking-widest font-label-caps">Ethics Lead</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Footer  */}
<footer className="mt-auto bg-pitch-black py-xl mt-section-gap border-t border-surface-container-highest flex flex-col items-center gap-md px-margin-desktop w-full z-10">
<h2 className="font-display-hero text-headline-md text-primary-container mb-sm tracking-tight uppercase">Aether AI</h2>
<div className="flex flex-wrap justify-center gap-md mb-md">
<a className="font-label-caps text-label-caps text-silver-mist hover:text-tertiary transition-colors uppercase tracking-widest" href="#">Privacy Policy</a>
<a className="font-label-caps text-label-caps text-silver-mist hover:text-tertiary transition-colors uppercase tracking-widest" href="#">Terms of Service</a>
<a className="font-label-caps text-label-caps text-silver-mist hover:text-tertiary transition-colors uppercase tracking-widest" href="#">AI Ethics Charter</a>
<a className="font-label-caps text-label-caps text-silver-mist hover:text-tertiary transition-colors uppercase tracking-widest" href="#">Global Partners</a>
</div>
<p className="font-label-caps text-[10px] text-silver-mist/50 uppercase tracking-widest text-center max-w-lg">
                © 2024 AETHER GLOBAL AI EDUCATION. REDEFINING INTELLIGENCE.
            </p>
</footer>
</main>
        </>
    );
}