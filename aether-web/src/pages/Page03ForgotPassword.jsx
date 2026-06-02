export default function Page03ForgotPassword() {
    return (
        <>
            <main className="flex-grow flex items-center justify-center relative overflow-hidden px-margin-mobile">
{/*  Atmospheric Background Glows  */}
<div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary opacity-5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-holographic-blue opacity-5 rounded-full blur-[120px]"></div>
{/*  Centerpiece Reset Card  */}
<div className="relative z-10 w-full max-w-[440px] bg-deep-slate p-xl rounded-xl shadow-2xl border border-surface-variant/50">
<div className="mb-lg">
<h1 className="font-headline-lg text-headline-md text-pure-white mb-xs">Reset Access</h1>
<p className="font-body-md text-[14px] text-silver-mist">Enter your network identifier to receive a reset cipher.</p>
</div>
<form action="#" className="space-y-lg" method="POST">
<div className="space-y-xs">
<label className="font-label-caps text-label-caps text-pure-white block font-semibold uppercase tracking-widest" htmlFor="email">EMAIL ADDRESS</label>
<input className="w-full bg-transparent border border-pure-white px-md py-sm text-pure-white font-body-md rounded-none stark-focus transition-all placeholder:text-surface-variant" id="email" name="email" placeholder="identity@network.aether" required="" type="email"/>
</div>
<div className="pt-sm">
<button className="w-full bg-primary-container text-pure-white py-md rounded-xl font-body-md font-bold hover:brightness-110 active:scale-[0.98] transition-all tracking-wide uppercase" type="submit">
                        RESET PASSWORD
                    </button>
</div>
</form>
<div className="mt-lg text-center">
<a className="font-body-md text-silver-mist hover:text-pure-white transition-colors flex items-center justify-center gap-xs" href="08-main-landing-page.html">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Back to Login
                </a>
</div>
</div>
{/*  Decorative AI Visual Element  */}
<div className="absolute bottom-10 left-10 hidden lg:block opacity-20 pointer-events-none">
<div className="w-64 h-64 border border-holographic-blue/30 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
<div className="w-48 h-48 border-t-2 border-primary/40 rounded-full"></div>
</div>
</div>
</main>
        </>
    );
}