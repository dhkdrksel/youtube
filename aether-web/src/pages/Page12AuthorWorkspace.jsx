export default function Page12AuthorWorkspace() {
    return (
        <>
            <main className="flex-1 ml-64 flex flex-col h-full bg-background relative glow-overlay">
{/*  Top Application Bar  */}
<header className="flex items-center justify-between px-md py-sm border-b border-surface-container-highest bg-surface-container-lowest/80 backdrop-blur-md z-10 shrink-0 h-[72px]">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-silver-mist">article</span>
<h1 className="font-headline-md text-headline-md text-pure-white tracking-tight text-[24px]">Project: My AI Thesis</h1>
<span className="px-2 py-1 bg-surface-container rounded text-silver-mist font-label-caps text-label-caps ml-sm text-[10px]">DRAFT - SAVED JUST NOW</span>
</div>
<div className="flex items-center gap-md">
<button className="text-silver-mist hover:text-pure-white transition-colors flex items-center gap-xs font-label-caps text-label-caps">
<span className="material-symbols-outlined text-[18px]">history</span>
                    HISTORY
                </button>
<button className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-md py-sm rounded-DEFAULT flex items-center gap-xs hover:bg-inverse-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                    PUBLISH
                </button>
</div>
</header>
{/*  3-Column Workspace Area  */}
<div className="flex-1 flex overflow-hidden">
{/*  Left Panel: Data Library  */}
<aside className="w-72 border-r border-surface-container-highest bg-surface-container-lowest/50 flex flex-col shrink-0">
<div className="p-md border-b border-surface-container-highest flex justify-between items-center">
<h2 className="font-label-caps text-label-caps text-silver-mist uppercase tracking-widest">Data Library</h2>
<button className="text-silver-mist hover:text-holographic-blue transition-colors">
<span className="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
<div className="p-md flex-1 overflow-y-auto flex flex-col gap-md">
{/*  Drag & Drop Zone  */}
<div className="border-2 border-dashed border-surface-variant rounded-lg p-md flex flex-col items-center justify-center text-center hover:border-holographic-blue/50 hover:bg-holographic-blue/5 transition-all cursor-pointer group">
<span className="material-symbols-outlined text-surface-variant group-hover:text-holographic-blue mb-sm text-[32px] transition-colors">cloud_upload</span>
<p className="font-body-md text-body-md text-silver-mist group-hover:text-pure-white text-[14px]">Drag and drop datasets here</p>
<p className="font-label-caps text-label-caps text-surface-variant mt-xs">CSV, JSON, TXT</p>
</div>
{/*  Existing Datasets  */}
<div className="flex flex-col gap-sm mt-sm">
<div className="bg-surface-container rounded-DEFAULT p-sm border border-transparent hover:border-surface-variant transition-colors cursor-grab flex items-center gap-sm">
<span className="material-symbols-outlined text-tertiary">dataset</span>
<div className="flex-1 min-w-0">
<p className="font-body-md text-body-md text-pure-white text-[14px] truncate">Global_AI_Ethics_2024.csv</p>
<p className="font-label-caps text-label-caps text-silver-mist text-[10px]">1.2 MB • Linked</p>
</div>
<span className="material-symbols-outlined text-silver-mist hover:text-pure-white text-[16px] cursor-pointer">drag_indicator</span>
</div>
<div className="bg-surface-container rounded-DEFAULT p-sm border border-transparent hover:border-surface-variant transition-colors cursor-grab flex items-center gap-sm">
<span className="material-symbols-outlined text-holographic-blue">description</span>
<div className="flex-1 min-w-0">
<p className="font-body-md text-body-md text-pure-white text-[14px] truncate">Interview_Transcripts_DrChen.txt</p>
<p className="font-label-caps text-label-caps text-silver-mist text-[10px]">450 KB • Linked</p>
</div>
<span className="material-symbols-outlined text-silver-mist hover:text-pure-white text-[16px] cursor-pointer">drag_indicator</span>
</div>
</div>
</div>
</aside>
{/*  Center Panel: Writing Area  */}
<section className="flex-1 flex flex-col overflow-y-auto px-margin-desktop py-xl bg-transparent relative">
{/*  Stark Input for Chapter Title  */}
<input className="bg-transparent border-0 border-b border-surface-container-highest px-0 py-sm text-headline-md font-headline-md text-pure-white w-full focus:ring-0 focus:border-holographic-blue transition-colors placeholder:text-surface-variant outline-none" placeholder="Enter Chapter Title..." type="text" value="Chapter 1: The Emergence of Generative Logic"/>
{/*  Stark Textarea for Content  */}
<textarea className="flex-1 bg-transparent border-0 px-0 py-md mt-md text-body-lg font-body-lg text-silver-mist w-full focus:ring-0 resize-none outline-none leading-relaxed" placeholder="Begin your manuscript here... Type '/' to invoke AI assistance." spellcheck="false">The trajectory of artificial intelligence over the past decade has not merely been a progression of computational power, but a fundamental shift in how systems construct reasoning paths. In analyzing the dataset [Global_AI_Ethics_2024], a stark correlation emerges between model parameter scale and the unpredictable derivation of ethical heuristics.

Traditional programmatic architectures relied on explicit logic gates. However, modern transformers establish 'generative logic'—a fluid state where reasoning is probabilistic rather than deterministic. This introduces a critical vulnerability when deployed in high-stakes environments. As Dr. Chen noted in her recent symposium...</textarea>
</section>
{/*  Right Panel: AI Writing Assistant  */}
<aside className="w-80 border-l border-surface-container-highest bg-surface-container-lowest/50 flex flex-col shrink-0 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-10">
<div className="p-md border-b border-surface-container-highest flex items-center gap-sm">
<div className="w-6 h-6 rounded flex items-center justify-center bg-holographic-blue/10 border border-holographic-blue/30">
<span className="material-symbols-outlined text-holographic-blue text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
</div>
<h2 className="font-label-caps text-label-caps text-pure-white uppercase tracking-widest flex-1">AETHER Assistant</h2>
<div className="w-2 h-2 rounded-full bg-holographic-blue animate-pulse"></div>
</div>
<div className="p-md flex-1 overflow-y-auto flex flex-col gap-md">
{/*  Insight Card: Style Suggestion  */}
<div className="bg-surface-container-high/60 backdrop-blur-md border border-surface-container-highest rounded-lg p-sm relative overflow-hidden group">
{/*  Subtle inner glow effect  */}
<div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] pointer-events-none rounded-lg"></div>
<div className="flex items-start gap-sm mb-sm">
<span className="material-symbols-outlined text-tertiary text-[18px]">edit_note</span>
<div className="flex-1">
<h3 className="font-label-caps text-label-caps text-tertiary">Style Suggestion</h3>
<p className="font-body-md text-body-md text-silver-mist text-[12px] mt-xs">Consider strengthening the passive voice in the second paragraph for greater impact.</p>
</div>
</div>
<div className="bg-surface-container-lowest rounded p-sm border border-surface-variant text-[12px] font-body-md text-surface-variant line-through mb-xs">
                            "...a fundamental shift in how reasoning paths are constructed by systems."
                        </div>
<div className="bg-tertiary-container/10 border border-tertiary/30 rounded p-sm text-[12px] font-body-md text-pure-white">
                            "...a fundamental shift in how systems construct reasoning paths."
                        </div>
<div className="mt-sm flex gap-sm">
<button className="flex-1 bg-surface-container hover:bg-surface-variant text-pure-white font-label-caps text-label-caps py-xs rounded transition-colors">Dismiss</button>
<button className="flex-1 bg-tertiary/20 hover:bg-tertiary/30 text-tertiary border border-tertiary/30 font-label-caps text-label-caps py-xs rounded transition-colors">Apply</button>
</div>
</div>
{/*  Insight Card: Data Fact Check  */}
<div className="bg-[rgba(34,35,38,0.7)] backdrop-blur-[20px] border border-holographic-blue/30 rounded-lg p-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-holographic-blue to-transparent opacity-50"></div>
<div className="flex items-start gap-sm mb-sm">
<span className="material-symbols-outlined text-holographic-blue text-[18px]">fact_check</span>
<div className="flex-1">
<h3 className="font-label-caps text-label-caps text-holographic-blue">Data Fact Check</h3>
<p className="font-body-md text-body-md text-silver-mist text-[12px] mt-xs">Cross-referencing your statement with [Global_AI_Ethics_2024.csv].</p>
</div>
</div>
<div className="border-l-2 border-holographic-blue pl-sm py-xs my-sm">
<p className="font-body-md text-body-md text-pure-white text-[13px] leading-tight">
                                "The correlation coefficient between parameter scale and unpredictability is noted as <span className="text-holographic-blue font-bold">r = 0.84</span> in the dataset, confirming your assertion 'stark correlation'."
                            </p>
</div>
<button className="w-full bg-transparent border border-surface-variant hover:border-holographic-blue hover:text-holographic-blue text-silver-mist font-label-caps text-label-caps py-xs rounded transition-colors flex items-center justify-center gap-xs">
<span className="material-symbols-outlined text-[14px]">add_link</span>
                            Insert Citation
                        </button>
</div>
</div>
</aside>
</div>
</main>
        </>
    );
}