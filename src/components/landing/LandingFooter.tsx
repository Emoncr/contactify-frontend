import { Share2, Globe } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="border-t border-slate-200/30 bg-slate-50 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="text-primary font-heading text-2xl font-bold tracking-tighter">
              Contactify
            </div>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Empowering businesses to capture, curate, and convert every visitor into a meaningful
              relationship. The premium lead management choice.
            </p>
            <div className="flex gap-4">
              <div className="hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-200/50 text-slate-600 transition-all hover:text-white">
                <Share2 className="h-5 w-5" />
              </div>
              <div className="hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-200/50 text-slate-600 transition-all hover:text-white">
                <Globe className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-primary mb-6 font-bold">Product</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#features"
                  className="hover:text-primary text-sm text-slate-600 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-primary text-sm text-slate-600 transition-colors"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-primary text-sm text-slate-600 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary text-sm text-slate-600 transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary mb-6 font-bold">Resources</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-primary text-sm text-slate-600 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary text-sm text-slate-600 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary text-sm text-slate-600 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary text-sm text-slate-600 transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary mb-6 font-bold">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-primary text-sm text-slate-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary text-sm text-slate-600 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary text-sm text-slate-600 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary text-sm text-slate-600 transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/30 pt-8 md:flex-row">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Contactify Lead Management. Built for the modern curator.
          </div>
          <div className="flex gap-6 text-xs text-slate-400">
            <span>English (US)</span>
            <span>Status: All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
