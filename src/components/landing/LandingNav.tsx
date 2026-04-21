import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingNav() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-200/15 bg-slate-50/80 backdrop-blur-md"
      role="banner"
    >
      <nav
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-8"
        aria-label="Main site navigation"
      >
        <Link href="/">
          <span className="text-primary font-heading text-2xl font-extrabold tracking-tighter md:text-4xl">
            Contactify
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a
            className="hover:text-primary text-sm font-medium tracking-tight text-slate-600 transition-colors duration-200"
            href="#features"
          >
            Features
          </a>
          <a
            className="hover:text-primary text-sm font-medium tracking-tight text-slate-600 transition-colors duration-200"
            href="#solutions"
          >
            Solutions
          </a>
          <a
            className="hover:text-primary text-sm font-medium tracking-tight text-slate-600 transition-colors duration-200"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="hover:text-primary text-sm font-medium tracking-tight text-slate-600 transition-colors duration-200"
            href="#testimonials"
          >
            Testimonials
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="ghost"
              className="hover:text-primary hidden text-sm font-medium text-slate-600 transition-colors sm:block"
            >
              Log In
            </Button>
          </Link>
          <Link href="/login">
            <Button
              className="signature-gradient group relative flex h-10 items-center justify-center gap-3 overflow-hidden rounded-lg px-6 font-semibold text-white transition-all active:scale-[0.98]"
              variant="default"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
