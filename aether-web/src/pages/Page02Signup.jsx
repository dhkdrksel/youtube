export default function Page02Signup() {
    return (
        <>
            <main className="w-full max-w-[440px] z-10 flex flex-col items-center">
{/*  Brand Identity  */}
<header className="mb-lg text-center animate-fade-in">
<h1 className="font-headline-lg text-headline-lg text-pure-white tracking-[0.25em] uppercase mb-xs">
                AETHER AI
            </h1>
<p className="font-label-caps text-label-caps text-silver-mist tracking-[0.4em] uppercase">
                Initialize Protocol
            </p>
</header>
{/*  Auth Card  */}
<div className="w-full bg-pitch-black/40 backdrop-blur-sm border border-pure-white/5 p-md md:p-lg flex flex-col gap-lg">
<form className="flex flex-col gap-md" onsubmit="event.preventDefault()">
{/*  Full Name Field  */}
<div className="group flex flex-col gap-xs">
<label className="font-label-caps text-label-caps text-silver-mist uppercase">Legal Designation</label>
<input className="w-full bg-transparent border border-pure-white px-md py-sm font-body-md text-pure-white placeholder:text-silver-mist/30 focus:ring-1 focus:ring-holographic-blue focus:border-holographic-blue outline-none transition-all duration-300 rounded-none" placeholder="FULL NAME" type="text"/>
</div>
{/*  Email Field  */}
<div className="group flex flex-col gap-xs">
<label className="font-label-caps text-label-caps text-silver-mist uppercase">Network Identifier</label>
<input className="w-full bg-transparent border border-pure-white px-md py-sm font-body-md text-pure-white placeholder:text-silver-mist/30 focus:ring-1 focus:ring-holographic-blue focus:border-holographic-blue outline-none transition-all duration-300 rounded-none" placeholder="EMAIL ADDRESS" type="email"/>
</div>
{/*  Password Field  */}
<div className="group flex flex-col gap-xs">
<label className="font-label-caps text-label-caps text-silver-mist uppercase">Access Cipher</label>
<div className="relative">
<input className="w-full bg-transparent border border-pure-white px-md py-sm font-body-md text-pure-white placeholder:text-silver-mist/30 focus:ring-1 focus:ring-holographic-blue focus:border-holographic-blue outline-none transition-all duration-300 rounded-none" placeholder="SECURE PASSWORD" type="password"/>
<button className="absolute right-md top-1/2 -translate-y-1/2 text-silver-mist hover:text-pure-white transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</div>
{/*  Primary CTA  */}
<button className="w-full bg-primary-container text-on-primary-container font-headline-md text-[18px] py-sm rounded-xl mt-base hover:opacity-90 active:scale-[0.98] transition-all duration-200 tracking-wide uppercase">
                    Create Account
                </button>
</form>
{/*  Social/Alt Auth Separation  */}
<div className="flex items-center gap-md">
<div className="h-[1px] flex-1 bg-white/10"></div>
<span className="font-label-caps text-label-caps text-silver-mist">OR CONNECT VIA</span>
<div className="h-[1px] flex-1 bg-white/10"></div>
</div>
<div className="grid grid-cols-2 gap-sm">
<button className="flex items-center justify-center gap-xs border border-white/20 py-xs hover:bg-white/5 transition-all text-pure-white font-label-caps text-label-caps uppercase">
<span className="material-symbols-outlined text-[18px]">terminal</span> GitHub
                </button>
<button className="flex items-center justify-center gap-xs border border-white/20 py-xs hover:bg-white/5 transition-all text-pure-white font-label-caps text-label-caps uppercase">
<span className="material-symbols-outlined text-[18px]">key</span> Google
                </button>
</div>
</div>
{/*  Footer Navigation  */}
<footer className="mt-lg text-center">
<p className="font-body-md text-silver-mist">
                Already have an account? 
                <a className="text-pure-white font-bold ml-xs hover:text-holographic-blue transition-colors border-b border-transparent hover:border-holographic-blue pb-0.5" href="01-login.html">
                    Log In
                </a>
</p>
</footer>
</main>
        </>
    );
}