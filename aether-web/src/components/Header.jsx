export default function Header() {
    return (
        <nav className="bg-background/80 backdrop-blur-xl font-headline-md text-headline-md tracking-tight docked full-width top-0 sticky z-50 border-b border-white/10 flat no shadows flex justify-between items-center px-margin-desktop py-md max-w-1440 mx-auto w-full">
<a className="font-display-hero text-headline-lg uppercase text-primary" href="08-main-landing-page.html">AETHER AI</a>
<div className="hidden md:flex gap-gutter items-center">
<a className="text-on-surface/70 hover:text-on-surface transition-colors pb-2 hover:text-holographic-blue transition-all duration-300 scale-95 active:scale-90 duration-200" href="05-explore-courses.html">Courses</a>
<a className="text-on-surface/70 hover:text-on-surface transition-colors pb-2 hover:text-holographic-blue transition-all duration-300 scale-95 active:scale-90 duration-200" href="08-main-landing-page.html">Instructors</a>
<a className="text-on-surface/70 hover:text-on-surface transition-colors pb-2 hover:text-holographic-blue transition-all duration-300 scale-95 active:scale-90 duration-200" href="05-explore-courses.html">Academy</a>
<a className="text-on-surface/70 hover:text-on-surface transition-colors pb-2 hover:text-holographic-blue transition-all duration-300 scale-95 active:scale-90 duration-200" href="01-login.html">About</a>
</div>
<div className="flex items-center gap-sm">
<button className="hidden md:flex text-on-surface/70 hover:text-on-surface transition-colors pb-2 font-headline-md text-headline-md hover:text-holographic-blue transition-all duration-300 scale-95 active:scale-90 duration-200">Sign In</button>
<button className="bg-primary-container text-on-primary-container px-sm py-xs rounded-xl font-headline-md text-headline-md hover:bg-inverse-primary transition-colors duration-300 scale-95 active:scale-90 duration-200">Join Premium</button>
</div>
</nav>
    );
}