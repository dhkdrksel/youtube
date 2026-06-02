export default function Page09EbookLibrary() {
    return (
        <>
            <main className="flex-1 md:ml-64 h-full overflow-y-auto bg-background relative">
{/*  Ambient Background Glow  */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
{/*  Hero Section: Book of the Month  */}
<section className="relative w-full min-h-[614px] flex items-end pb-lg pt-xl px-margin-mobile md:px-margin-desktop border-b border-surface-container-highest z-10">
{/*  Hero Background Image with Overlay  */}
<div className="absolute inset-0 z-0 bg-pitch-black">
<div className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-screen" data-alt="A highly detailed, cinematic rendering of an abstract geometric structure resembling a massive neural network or quantum computer. The scene is bathed in deep blacks and high-contrast glowing lines of white and subtle cyan. The style is hyper-realistic, dark mode, futuristic, and conveys monumental intelligence and complexity." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAapEjLOpaTgGEcBWDwcGuN8F8RS-a2MGKsWfaUPssIpEDS4CA_Gav0UYbiMS2w31xttDEZoli12pWHVfRU4xtWbQKdDvd8GPLMF4pJTc_yLZeqeLYUQ10oZotLYUEMMyJJg7k48IltnQIsI82Yn_-qzkEFvftKipbkhY4kLmKNm1yr5jl1DVtDWUq_GvN_cUBGlJb63Lu8ztqoLUjD3_HZvYM1SDX7fgzgkvY0dKxrM-J2NUbkuGLzxRljTJx8oqJPxg4W2VePjKs')"></div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-[800px] flex flex-col gap-sm">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-caps text-label-caps text-primary tracking-[0.2em]">FEATURED BOOK OF THE MONTH</span>
</div>
<h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-pure-white uppercase mt-xs text-balance">
                    The Architecture<br/>of Intelligence
                </h1>
<p className="font-body-lg text-body-lg text-silver-mist max-w-[600px] mt-sm">
                    A comprehensive dive into the structural paradigms of generative models, written by leading architects of the AETHER cognitive framework.
                </p>
<div className="flex flex-wrap items-center gap-md mt-md">
<button className="bg-primary-container hover:brightness-110 text-pure-white px-lg py-sm rounded flex items-center gap-sm transition-all duration-300 font-label-caps text-label-caps uppercase shadow-[0_0_20px_rgba(227,38,82,0.3)]">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
                        Buy Now - $49.99
                    </button>
<div className="flex items-center gap-sm px-sm py-xs rounded border border-surface-container-highest bg-surface/50 backdrop-blur">
<span className="material-symbols-outlined text-holographic-blue text-[18px]">psychiatry</span>
<div className="flex flex-col">
<span className="font-label-caps text-[10px] text-silver-mist">COMPLEXITY INDEX</span>
<span className="font-body-md text-body-md text-holographic-blue font-bold leading-none">Level 9.8</span>
</div>
</div>
</div>
</div>
</section>
{/*  Category Filter Bar  */}
<section className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-surface-container-highest py-sm px-margin-mobile md:px-margin-desktop w-full overflow-x-auto no-scrollbar">
<div className="flex gap-sm w-max">
<button className="px-md py-xs rounded-full bg-pure-white text-pitch-black font-body-md text-body-md font-bold transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">All Publications</button>
<button className="px-md py-xs rounded-full border border-surface-container-highest text-silver-mist hover:text-pure-white hover:border-holographic-blue transition-colors font-body-md text-body-md">Neural Networks</button>
<button className="px-md py-xs rounded-full border border-surface-container-highest text-silver-mist hover:text-pure-white hover:border-holographic-blue transition-colors font-body-md text-body-md">AI Ethics</button>
<button className="px-md py-xs rounded-full border border-surface-container-highest text-silver-mist hover:text-pure-white hover:border-holographic-blue transition-colors font-body-md text-body-md">Generative Design</button>
<button className="px-md py-xs rounded-full border border-surface-container-highest text-silver-mist hover:text-pure-white hover:border-holographic-blue transition-colors font-body-md text-body-md">Quantum Computing</button>
<button className="px-md py-xs rounded-full border border-surface-container-highest text-silver-mist hover:text-pure-white hover:border-holographic-blue transition-colors font-body-md text-body-md">Cognitive Systems</button>
</div>
</section>
{/*  eBook Grid Section  */}
<section className="px-margin-mobile md:px-margin-desktop py-xl">
<div className="flex justify-between items-end mb-lg">
<h2 className="font-headline-lg text-headline-lg text-pure-white uppercase">Premium Library</h2>
<span className="font-label-caps text-label-caps text-silver-mist hidden md:block">SHOWING 24 RESULTS</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
{/*  Card 1  */}
<article className="bg-surface-container-low rounded-lg overflow-hidden border border-surface-container-highest hover:border-holographic-blue/50 transition-all duration-500 group relative flex flex-col h-[480px]">
<div className="h-[260px] w-full relative overflow-hidden bg-pitch-black">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" data-alt="A striking abstract digital artwork featuring fluid, generative lines of vibrant cyan and deep blue merging on a pure black background. The style is highly technical, smooth, and evokes the concept of artificial neural pathways. High contrast, cinematic lighting." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbNWkFtL-MxMztxe1dn7p1sfoMpFg-lctDol9eg18kjEuCDl66TN0enJr4mFnkPTHvVg0hGML5EWlkx1r7p8b1EgNXwgJc5Mk9U1QHgFMkdAFwGAQyCtKWPEyQv6yXn-ymJZdn3Jh0poBLo-bxD38RwgqTpKNMAUwCJcFwrG60md6jS-oOAun-kz83La1aKQZTVlrevOkaWH34FTh0qLFNHQd1qDhwtrF9QHbxZfl289vxd34j5SM6paDTgmu3xj_bmjq5OonxbBo')"></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-80"></div>
<div className="absolute top-sm right-sm bg-pitch-black/80 backdrop-blur border border-holographic-blue/30 px-sm py-xs rounded flex items-center gap-xs">
<span className="material-symbols-outlined text-holographic-blue text-[14px]">graphic_eq</span>
<span className="font-label-caps text-[10px] text-holographic-blue">C.I. 8.4</span>
</div>
</div>
<div className="p-md flex flex-col flex-1 relative z-10 -mt-xl">
<div className="flex flex-col gap-xs flex-1">
<h3 className="font-headline-md text-[24px] leading-tight text-pure-white uppercase line-clamp-2 drop-shadow-md">Synaptic Echoes</h3>
<p className="font-body-md text-body-md text-silver-mist">By Dr. Aris Vane</p>
</div>
<div className="flex justify-between items-center mt-auto pt-sm border-t border-surface-container-highest">
<span className="font-body-lg text-body-lg text-pure-white">$24.00</span>
<button className="text-holographic-blue hover:text-pure-white transition-colors">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
</article>
{/*  Card 2  */}
<article className="bg-surface-container-low rounded-lg overflow-hidden border border-surface-container-highest hover:border-holographic-blue/50 transition-all duration-500 group relative flex flex-col h-[480px]">
<div className="h-[260px] w-full relative overflow-hidden bg-pitch-black">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" data-alt="A stark, minimalist photograph of a metallic server rack or high-tech monolithic structure in near total darkness. A single red glowing light punctuates the composition. The mood is imposing, silent, and highly structured, fitting a book on AI ethics and control." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaTdSke2qTV_FFagiIWYq52NMVsnAQ5jBB_33XXgG4IOk8S4ZAWx7o0MDM1v8-GTfekWz2-yFAAIEM1TJNP-IUmx-Vsu_YLkQJcvabYWtoy3VnyrAlzt9rl7Vd3qLzqf06ZF8KmmwDq6NsBnMefcltVB5yE0o0UpqJfusN0RPsnqoUyfR3qoQboVnDCJNj6k5zXC0vM-HRYguoj1BfMxera423kaz3ElmaykIcEgBEwhw3SU4EDU4F1EMjh0aLJJb0Cqjnh9wsNOo')"></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-80"></div>
<div className="absolute top-sm right-sm bg-pitch-black/80 backdrop-blur border border-primary/30 px-sm py-xs rounded flex items-center gap-xs">
<span className="material-symbols-outlined text-primary text-[14px]">balance</span>
<span className="font-label-caps text-[10px] text-primary">C.I. 9.1</span>
</div>
</div>
<div className="p-md flex flex-col flex-1 relative z-10 -mt-xl">
<div className="flex flex-col gap-xs flex-1">
<h3 className="font-headline-md text-[24px] leading-tight text-pure-white uppercase line-clamp-2 drop-shadow-md">The Ethics of God-Code</h3>
<p className="font-body-md text-body-md text-silver-mist">By M. Sterling</p>
</div>
<div className="flex justify-between items-center mt-auto pt-sm border-t border-surface-container-highest">
<span className="font-body-lg text-body-lg text-pure-white">$32.50</span>
<button className="text-holographic-blue hover:text-pure-white transition-colors">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
</article>
{/*  Card 3  */}
<article className="bg-surface-container-low rounded-lg overflow-hidden border border-surface-container-highest hover:border-holographic-blue/50 transition-all duration-500 group relative flex flex-col h-[480px]">
<div className="h-[260px] w-full relative overflow-hidden bg-pitch-black">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" data-alt="A highly detailed close-up of a microchip or dense circuit board illuminated by an otherworldly, glowing holographic cyan light. The intricate metallic traces form a complex maze on a deep black substrate. The visual style is macro photography, cyberpunk, and hyper-technological." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgsFHdmeaUul66FRi9hkNZVAm-afRk0RcRrjkrTm6FuLZQL7JvM7SVDDx7QzR1g6KSjs_9lNJi6kseqh2HNXH2I3P8LY9eaQMamZY-gnfJ_N3qfvbmGCqHPCGimEzEU9QGYLhmvhVegdNx4hMcFH2AJcv_TTywaInLKGkEV5xHg9hstoTTE_eYemdqcXLtmo7fz6lhd1JDNtHsqI9J3LCNDl4CAdnXPOT_QjXidsoiW2pAoMJnRbd2cHjX_mvJr6KNXq8-uNw6Fxw')"></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-80"></div>
<div className="absolute top-sm right-sm bg-pitch-black/80 backdrop-blur border border-holographic-blue/30 px-sm py-xs rounded flex items-center gap-xs">
<span className="material-symbols-outlined text-holographic-blue text-[14px]">memory</span>
<span className="font-label-caps text-[10px] text-holographic-blue">C.I. 7.5</span>
</div>
</div>
<div className="p-md flex flex-col flex-1 relative z-10 -mt-xl">
<div className="flex flex-col gap-xs flex-1">
<h3 className="font-headline-md text-[24px] leading-tight text-pure-white uppercase line-clamp-2 drop-shadow-md">Hardware Substrates</h3>
<p className="font-body-md text-body-md text-silver-mist">By J. T. Chen</p>
</div>
<div className="flex justify-between items-center mt-auto pt-sm border-t border-surface-container-highest">
<span className="font-body-lg text-body-lg text-pure-white">$18.99</span>
<button className="text-holographic-blue hover:text-pure-white transition-colors">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
</article>
{/*  Card 4  */}
<article className="bg-surface-container-low rounded-lg overflow-hidden border border-surface-container-highest hover:border-holographic-blue/50 transition-all duration-500 group relative flex flex-col h-[480px]">
<div className="h-[260px] w-full relative overflow-hidden bg-pitch-black">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" data-alt="A view of Earth from space at night, heavily stylized to emphasize glowing city networks and data lines connecting continents. The continents are dark slate, while the lights are brilliant white and cyan, representing global AI processing nodes. Grand, sweeping, and cinematic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBLdCusYb8Q0gjvGcKcYjhziexmlv4v8TzomsVFGkaFPx1rPpMsHOH2ET2fJtCviYVfjbvmxw9s-HC-3STQc4IWGXgCPli1Yus0Tf_Edc6MXCvswYBN-_M0j4L8QF2y7wAmMAXLHXcYEZCdtmuA0dwkNT0K7BxIYfEWXaswFYMMVdeF9jt_2yCrBIJZiFB_jkXLuXOB7dRvFpOIrr9W2T22diBy9X7f8nJgizPEkCfwDWFQRIVFlCMGlhIPhtHR49Wj1eocnBkD1I')"></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-80"></div>
<div className="absolute top-sm right-sm bg-pitch-black/80 backdrop-blur border border-holographic-blue/30 px-sm py-xs rounded flex items-center gap-xs">
<span className="material-symbols-outlined text-holographic-blue text-[14px]">language</span>
<span className="font-label-caps text-[10px] text-holographic-blue">C.I. 6.2</span>
</div>
</div>
<div className="p-md flex flex-col flex-1 relative z-10 -mt-xl">
<div className="flex flex-col gap-xs flex-1">
<h3 className="font-headline-md text-[24px] leading-tight text-pure-white uppercase line-clamp-2 drop-shadow-md">Global Optimization</h3>
<p className="font-body-md text-body-md text-silver-mist">By A. R. Lin</p>
</div>
<div className="flex justify-between items-center mt-auto pt-sm border-t border-surface-container-highest">
<span className="font-body-lg text-body-lg text-pure-white">$21.00</span>
<button className="text-holographic-blue hover:text-pure-white transition-colors">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
</div>
</article>
</div>
<div className="mt-xl flex justify-center">
<button className="px-lg py-sm border border-surface-container-highest rounded text-pure-white font-label-caps text-label-caps hover:border-holographic-blue hover:text-holographic-blue transition-colors">
                    LOAD MORE VOLUMES
                </button>
</div>
</section>
{/*  Footer  */}
<footer className="full-width py-xl mt-section-gap border-t border-surface-container-highest bg-pitch-black flex flex-col items-center gap-md px-margin-desktop w-full">
<div className="font-display-hero text-headline-md text-primary-container">AETHER AI</div>
<div className="flex gap-md font-label-caps text-label-caps text-silver-mist">
<a className="hover:text-tertiary transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-tertiary transition-colors" href="#">Terms of Service</a>
<a className="hover:text-tertiary transition-colors" href="#">AI Ethics Charter</a>
<a className="hover:text-tertiary transition-colors" href="#">Global Partners</a>
</div>
<div className="text-silver-mist font-label-caps text-[10px] mt-sm">
                © 2024 AETHER GLOBAL AI EDUCATION. REDEFINING INTELLIGENCE.
            </div>
</footer>
</main>
        </>
    );
}