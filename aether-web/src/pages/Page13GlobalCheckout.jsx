export default function Page13GlobalCheckout() {
    return (
        <>
            <main className="flex-grow flex flex-col md:flex-row w-full max-w-[1440px] mx-auto">
{/*  Left Side: Order Summary  */}
<section className="w-full md:w-1/2 p-margin-mobile md:p-margin-desktop bg-surface-container-lowest border-r border-outline-variant/10 flex flex-col justify-center">
<div className="max-w-md mx-auto w-full">
<h1 className="font-headline-md text-headline-md text-pure-white mb-xl">주문 요약</h1>
<div className="flex gap-md mb-lg">
<div className="w-32 h-48 bg-deep-slate rounded-lg overflow-hidden border border-outline-variant/30 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<img alt="eBook Cover" className="w-full h-full object-cover grayscale brightness-75 contrast-125 mix-blend-luminosity" data-alt="A striking digital installation art piece featuring glowing, generative geometric shapes suspended in a vast, minimalist gallery space. The room is illuminated by high-key, soft white lighting that creates a bright, modern light-mode aesthetic. The artwork relies on a sophisticated palette of deep blacks and pristine whites, punctuated by intense accents of vibrant red. The mood is serene yet technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIVUBg4XQiMjMx0U-q-tCHaG3BH3lUHLcr6d9hm0bqj-60bjpJ835E1q5SXZDSl0aFDLdAIJExa4Iw2j7ruh1OH7LQaC4m53xK6zkFnhBgl_k7H60i54fd7ri6vHWkiabiygP8Orw2HrMpYKW_LkE3wLzMR0FF4k2-Ws7hmlEP_JgK0gRQ6Q12toaxDM3AtEgY4NGQXAdTeMf6s20TeJrdvFPg50YwEYYotkGZOinxP13OrZyooJ1FmR6PsoDoC3SHdIeu7e5Vk70"/>
</div>
<div className="flex flex-col justify-between py-xs">
<div>
<div className="font-label-caps text-label-caps text-holographic-blue mb-xs">eBook</div>
<h2 className="font-body-lg text-body-lg text-pure-white font-semibold">THE ARCHITECTURE<br/>OF INTELLIGENCE</h2>
</div>
<div className="font-headline-md text-headline-md text-primary">$49.99</div>
</div>
</div>
<div className="space-y-sm mb-lg">
<div className="flex justify-between font-body-md text-body-md text-silver-mist">
<span>소계</span>
<span>$49.99</span>
</div>
<div className="flex justify-between font-body-md text-body-md text-silver-mist">
<span>세금 (10%)</span>
<span>$5.00</span>
</div>
<div className="h-px w-full bg-outline-variant/30 my-sm"></div>
<div className="flex justify-between font-body-lg text-body-lg text-pure-white font-semibold">
<span>총 결제 금액</span>
<span>$54.99</span>
</div>
</div>
</div>
</section>
{/*  Right Side: Payment Methods  */}
<section className="w-full md:w-1/2 p-margin-mobile md:p-margin-desktop bg-background flex flex-col justify-center relative overflow-hidden">
{/*  Subtle background glow  */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,38,82,0.05)_0%,transparent_70%)] pointer-events-none"></div>
<div className="max-w-md mx-auto w-full relative z-10">
<h2 className="font-headline-md text-headline-md text-pure-white mb-xl">결제 수단</h2>
<div className="space-y-md">
{/*  PayPal Primary  */}
<button className="w-full bg-[#ffc439] hover:bg-[#f4bb33] text-pitch-black rounded-full h-14 flex items-center justify-center gap-xs transition-colors shadow-lg active:scale-95 duration-200">
<span className="font-body-lg text-body-lg font-bold italic">PayPal</span>
</button>
<div className="relative flex py-sm items-center">
<div className="flex-grow border-t border-outline-variant/30"></div>
<span className="flex-shrink-0 mx-4 font-label-caps text-label-caps text-silver-mist">또는</span>
<div className="flex-grow border-t border-outline-variant/30"></div>
</div>
{/*  Credit Card Secondary  */}
<div className="glass-panel rounded-lg p-md">
<div className="flex items-center gap-xs mb-md">
<span className="material-symbols-outlined text-silver-mist">credit_card</span>
<span className="font-body-md text-body-md text-pure-white">신용카드 결제</span>
</div>
<div className="space-y-sm mb-md">
<input className="w-full bg-transparent border-b border-outline-variant/50 focus:border-holographic-blue text-pure-white font-body-md text-body-md px-0 py-xs placeholder-silver-mist outline-none transition-colors" placeholder="카드 번호" type="text"/>
<div className="flex gap-sm">
<input className="w-1/2 bg-transparent border-b border-outline-variant/50 focus:border-holographic-blue text-pure-white font-body-md text-body-md px-0 py-xs placeholder-silver-mist outline-none transition-colors" placeholder="MM/YY" type="text"/>
<input className="w-1/2 bg-transparent border-b border-outline-variant/50 focus:border-holographic-blue text-pure-white font-body-md text-body-md px-0 py-xs placeholder-silver-mist outline-none transition-colors" placeholder="CVC" type="text"/>
</div>
</div>
<button className="w-full bg-primary-container hover:bg-inverse-primary text-on-primary-container rounded-lg h-12 flex items-center justify-center font-body-md text-body-md font-semibold transition-colors duration-300">
                            결제 완료
                        </button>
</div>
</div>
<p className="font-label-caps text-label-caps text-silver-mist text-center mt-lg opacity-60">
                    안전한 256비트 암호화 결제
                </p>
</div>
</section>
</main>
        </>
    );
}