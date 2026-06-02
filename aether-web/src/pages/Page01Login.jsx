export default function Page01Login() {
    return (
        <>
            <main className="flex-grow flex items-center justify-center px-margin-mobile md:px-margin-desktop py-section-gap relative">
{/*  Abstract Background Element  */}
<div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
<div className="w-[800px] h-[800px] bg-primary-container/5 rounded-full blur-[120px] absolute -top-1/4 -right-1/4 animate-pulse"></div>
<div className="w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-[100px] absolute -bottom-1/4 -left-1/4"></div>
</div>
{/*  Login Card  */}
<div className="w-full max-w-[440px] relative z-10">
<div className="mb-xl text-center">
<h1 className="font-display-hero-mobile md:font-display-hero md:text-display-hero text-pure-white mb-base uppercase">Access Port</h1>
<p className="text-silver-mist font-body-md tracking-wide">Enter credentials to interface with the global intelligence network.</p>
</div>
<div className="glass-panel p-lg md:p-xl shadow-2xl relative overflow-hidden">
{/*  Top Accent Line  */}
<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-container to-transparent"></div>
<form className="space-y-md">
{/*  Email Field  */}
<div className="space-y-xs">
<label className="font-label-caps text-label-caps text-silver-mist uppercase block">Email Address</label>
<input className="w-full bg-transparent border border-pure-white text-pure-white font-body-md px-md py-sm focus:outline-none focus:border-holographic-blue focus:ring-1 focus:ring-holographic-blue transition-all duration-300 placeholder:text-deep-slate rounded-none" placeholder="name@domain.ai" type="email"/>
</div>
{/*  Password Field  */}
<div className="space-y-xs">
<div className="flex justify-between items-center">
<label className="font-label-caps text-label-caps text-silver-mist uppercase block">Secure Password</label>
<a className="text-label-caps font-label-caps text-holographic-blue hover:text-pure-white transition-colors duration-200" href="03-forgot-password.html">Forgot?</a>
</div>
<input className="w-full bg-transparent border border-pure-white text-pure-white font-body-md px-md py-sm focus:outline-none focus:border-holographic-blue focus:ring-1 focus:ring-holographic-blue transition-all duration-300 placeholder:text-deep-slate rounded-none" placeholder="••••••••" type="password"/>
</div>
{/*  Sign In Button  */}
<button className="w-full bg-primary-container text-on-primary-container py-md font-headline-md text-body-lg font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all glow-accent mt-sm" type="submit">
                        SIGN IN
                    </button>
</form>
<div className="mt-xl flex flex-col gap-md">
<div className="relative flex items-center">
<div className="flex-grow border-t border-deep-slate"></div>
<span className="flex-shrink mx-sm text-label-caps font-label-caps text-deep-slate">EXTERNAL PROTOCOLS</span>
<div className="flex-grow border-t border-deep-slate"></div>
</div>
{/*  Social Logins  */}
<div className="grid grid-cols-2 gap-sm">
<button className="flex items-center justify-center gap-xs border border-pure-white/20 py-sm hover:bg-pure-white/5 transition-colors rounded-none">
<span className="material-symbols-outlined text-[20px]" data-icon="google">google</span>
<span className="font-label-caps text-label-caps">GOOGLE</span>
</button>
<button className="flex items-center justify-center gap-xs border border-pure-white/20 py-sm hover:bg-pure-white/5 transition-colors rounded-none">
<span className="material-symbols-outlined text-[20px]" data-icon="apple">ios</span>
<span className="font-label-caps text-label-caps">APPLE</span>
</button>
</div>
</div>
{/*  Create Account Link  */}
<div className="mt-xl text-center">
<p className="text-silver-mist font-body-md">New operator? 
                        <a className="text-pure-white font-semibold hover:text-primary-container transition-colors duration-200 underline underline-offset-4 decoration-primary-container/50" href="02-signup.html">Establish Identity</a>
</p>
</div>
</div>
</div>
</main>
        </>
    );
}