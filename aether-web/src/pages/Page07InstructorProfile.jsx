export default function Page07InstructorProfile() {
    return (
        <>
            <main>
{/*  Hero Section  */}
<section className="relative w-full h-[819px] min-h-[600px] flex items-end pb-lg px-margin-desktop md:px-margin-desktop px-margin-mobile">
{/*  Background Image  */}
<div className="absolute inset-0 z-0">
<img alt="Instructor Portrait" className="w-full h-full object-cover object-center" data-alt="A dramatic, cinematic portrait of a visionary female AI researcher standing in a futuristic, dark-mode laboratory. The scene is lit with striking high-contrast lighting, casting deep shadows that contrast sharply with glowing holographic data visualizations projected in the background. The aesthetic is premium, moody, and highly sophisticated, relying on deep blacks, cool slates, and vibrant holographic blue light illuminating the subject's face and creating an aura of world-class intelligence and cutting-edge technology." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACm3iWVP4C3eaq9h5CErigcICVmmojqYOMicPoKnvQ8_3dLN8YsZatiVh-0OuR2sdhKFT0SmG_EH7Wq5kKryxTSVkYEFqKbOzTkTNeCX2_8LoTQBshzuMLu0y5vdgrlCQnYITTrTjZOh9IZEEgjc_XpxpZBmDkHp6L8Lb95sbusKOVTkEcnH-pHFwTlTiHGojfUZVgrP61a37W3NAxhi4kwUU2UCHI1swYrF3Umfi7GpEr1H8aKdrYywcmI4DkJH4m1rqRI-H1hY4"/>
{/*  Gradient Overlay for Text Readability  */}
<div className="absolute inset-0 bg-gradient-to-t from-pitch-black via-pitch-black/60 to-transparent"></div>
</div>
{/*  Content  */}
<div className="relative z-10 max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div className="md:col-span-8">
<h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-pure-white mb-sm">DR. ELARA VANCE</h1>
<p className="font-headline-md text-headline-md text-silver-mist max-w-2xl">Pioneer in Neural Architecture Search and Generative adversarial networks. Former Lead AI Scientist at Quantum Dynamics.</p>
</div>
</div>
</section>
{/*  Classes Section  */}
<section className="max-w-[1440px] mx-auto px-margin-desktop md:px-margin-desktop px-margin-mobile py-section-gap">
<h2 className="font-headline-lg text-headline-lg text-pure-white mb-lg">Classes by this Instructor</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
{/*  Course Card 1  */}
<div className="bg-deep-slate rounded-lg overflow-hidden group cursor-pointer border border-white/5 hover:border-holographic-blue/30 transition-colors">
<div className="h-48 relative overflow-hidden">
<div className="absolute inset-0 bg-holographic-blue/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Course Image" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" data-alt="Abstract visualization of neural networks. Glowing, interconnected nodes and thin blue lines over a dark, deep slate background. The image feels dense with data and highly technical, representing advanced artificial intelligence architecture. Soft holographic glows highlight specific clusters, maintaining the high-contrast, cinematic dark mode aesthetic of the platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP2NSAxo0rnwE68tTflcazJODPz_GJX4Tyc0bfXRAEovP_JJZ4xdmUQ-NUkDRwnF-64ALNfssX49h_Y5gCYY_F472IOoz3QWZDj24LzSrd1bYU_2x21-AeTIeZ32YIjG8lWc2Jx7U0HaSMAumxUNqGQibt15dDAZYOvbrtx1niQwM7UdKFl8aBVSoy4i4fAA6PMQ2S747Wbn_HLfGmwZOmd2uHm3NFvUcbmZrf_dXYRh21NhU4sEFQ9l3fvLrGTllfWu0FRsHG2-w"/>
</div>
<div className="p-md relative">
<div className="absolute top-0 right-md -translate-y-1/2 bg-surface-container-highest px-xs py-base rounded text-silver-mist font-label-caps text-label-caps border border-white/10">ADVANCED</div>
<h3 className="font-headline-md text-headline-md text-pure-white mb-xs group-hover:text-holographic-blue transition-colors">Neural Architecture Design</h3>
<p className="font-body-md text-body-md text-silver-mist mb-md">Master the art of designing efficient and scalable neural networks from scratch.</p>
<div className="flex items-center justify-between text-silver-mist font-label-caps text-label-caps">
<span className="flex items-center gap-base"><span className="material-symbols-outlined text-[16px]">schedule</span> 12 Weeks</span>
<span className="flex items-center gap-base"><span className="material-symbols-outlined text-[16px]">group</span> 4,200 Students</span>
</div>
</div>
</div>
{/*  Course Card 2  */}
<div className="bg-deep-slate rounded-lg overflow-hidden group cursor-pointer border border-white/5 hover:border-holographic-blue/30 transition-colors">
<div className="h-48 relative overflow-hidden">
<div className="absolute inset-0 bg-holographic-blue/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Course Image" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" data-alt="A sophisticated digital rendering representing generative AI processes. Flowing streams of glowing data particles in cool blues and silvers create abstract, fluid shapes against an infinite pitch-black background. The visual is crisp, modern, and conveys a sense of creation and endless possibility inherent in advanced machine learning models." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd0ASDkUfL7x2z8NZRqXRti8EgEJ4gTUHGA8v4MT5jkzVHj4OOpIlZA9yPwiNt0xKS0jRC9BkewW_gxiES0PopfgvUuGyU16pELzIivR6UHkh3lm4pjdjG9ftJ0iqTs0WndNp2jSkY1pTrwr7D4ejmfaKZRG0rNWQQyEN3k7Z8NbnBYgvIGDvuhCEjBnfVkqMspYbwhjFpAVna5a3BQQw9g1LE5OBjVzmmVb3CAjuwWiPnD5Aag1fkKeYhMpo_eJ2wsUqd3NkZWts"/>
</div>
<div className="p-md relative">
<div className="absolute top-0 right-md -translate-y-1/2 bg-surface-container-highest px-xs py-base rounded text-silver-mist font-label-caps text-label-caps border border-white/10">INTERMEDIATE</div>
<h3 className="font-headline-md text-headline-md text-pure-white mb-xs group-hover:text-holographic-blue transition-colors">Generative Models</h3>
<p className="font-body-md text-body-md text-silver-mist mb-md">Explore GANs, VAEs, and diffusion models in this comprehensive deep dive.</p>
<div className="flex items-center justify-between text-silver-mist font-label-caps text-label-caps">
<span className="flex items-center gap-base"><span className="material-symbols-outlined text-[16px]">schedule</span> 8 Weeks</span>
<span className="flex items-center gap-base"><span className="material-symbols-outlined text-[16px]">group</span> 8,150 Students</span>
</div>
</div>
</div>
</div>
</section>
{/*  Key Insights Section (Glassmorphism)  */}
<section className="max-w-[1440px] mx-auto px-margin-desktop md:px-margin-desktop px-margin-mobile pb-section-gap relative">
{/*  Background Radial Gradient for subtle lighting  */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-holographic-blue/5 rounded-full blur-3xl pointer-events-none"></div>
<h2 className="font-headline-lg text-headline-lg text-pure-white mb-lg relative z-10">Key Insights</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md relative z-10">
{/*  Insight Card 1  */}
<div className="bg-[rgba(34,35,38,0.7)] backdrop-blur-[20px] rounded-lg p-lg border border-holographic-blue/30 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-md opacity-20 group-hover:opacity-40 transition-opacity">
<span className="material-symbols-outlined text-display-hero text-holographic-blue" style="font-size: 64px;">lightbulb</span>
</div>
<h3 className="font-headline-md text-headline-md text-pure-white mb-sm">The Future of General Intelligence</h3>
<p className="font-body-lg text-body-lg text-silver-mist leading-relaxed">"We are moving past single-task optimization. The next decade will be defined by models that can generalize across wildly different domains with minimal few-shot prompting. The architecture must evolve to support fluid, dynamic reasoning rather than static pattern recognition."</p>
</div>
{/*  Insight Card 2  */}
<div className="bg-[rgba(34,35,38,0.7)] backdrop-blur-[20px] rounded-lg p-lg border border-holographic-blue/30 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-md opacity-20 group-hover:opacity-40 transition-opacity">
<span className="material-symbols-outlined text-display-hero text-holographic-blue" style="font-size: 64px;">psychology</span>
</div>
<h3 className="font-headline-md text-headline-md text-pure-white mb-sm">Ethical Alignment in Core Design</h3>
<p className="font-body-lg text-body-lg text-silver-mist leading-relaxed">"Safety cannot be bolted on as an afterthought. True alignment requires embedding ethical constraints directly into the loss function during the initial training phase. It must be as fundamental to the network as learning to minimize error."</p>
</div>
</div>
</section>
</main>
        </>
    );
}