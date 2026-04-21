"use client";

import { motion } from "motion/react";
import { HelpCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function LoginPage() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <div className="bg-background flex min-h-screen flex-col font-sans">
      <main className="flex grow items-center justify-center p-6">
        <div className="flex w-full max-w-[440px] flex-col items-center">
          {/* Brand Logo */}
          <Link href="/" className="mb-12">
            <span className="text-primary font-heading text-4xl font-extrabold tracking-tighter">
              Contactify
            </span>
          </Link>

          {/* Login Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card w-full rounded-xl border border-slate-200/10 p-10 text-center shadow-sm lg:p-12"
          >
            <h1 className="text-foreground font-heading mb-3 text-3xl font-bold tracking-tight">
              Welcome Back
            </h1>
            <p className="text-muted-foreground mb-10 text-sm">
              Access your premium curator workspace
            </p>

            {/* Google Auth Button */}
            <Link href="/dashboard">
              <Button className="signature-gradient group relative flex h-auto w-full items-center justify-center gap-3 overflow-hidden rounded-lg px-6 py-7 font-semibold text-white transition-all active:scale-[0.98]">
                <div className="flex items-center justify-center rounded-full bg-white p-1.5">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.87 0-5.3-1.94-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.83z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.83c.86-2.59 3.29-4.53 6.16-4.53z"
                      fill="#EA4335"
                    ></path>
                  </svg>
                </div>
                <span className="text-base">Sign in with Google</span>
              </Button>
            </Link>

            {/* Divider */}
            <div className="mt-12 mb-8 flex items-center justify-center gap-4">
              <div className="h-[1px] flex-1 bg-slate-200"></div>
              <div className="bg-primary/20 h-1.5 w-1.5 rounded-full"></div>
              <div className="h-[1px] flex-1 bg-slate-200"></div>
            </div>

            {/* Decorative Image */}
            <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNay_qJteVs0RtRSChYlOUDAyXNCPhOo4WfnQ6zyW1vlCy-wt_lgBtwIirXRGYPWwX4_8S3fFyljCP4-DZuFe7tBhooIKCUu3m8yuiUz0ZWgHXaXPl0e7JOJCv8pYJD_rmxEdrbrCSartKmlezkVi9ST-m-B0O5jOZlz9DrvLhgFQ1OAk0BOVLdVMIU-unGzTjQ7Mc0xYky1NtTsMCcHQfFB2COQPnEZHPWp8gDaXFSUy3xrVPcNKRdfjPBWn0c3kBvSrO7KBvHxi7"
                alt="Workspace"
                referrerPolicy="no-referrer"
              />
              <div className="from-primary/40 absolute inset-0 bg-gradient-to-t to-transparent"></div>
            </div>

            {/* Footer Links */}
            <p className="text-muted-foreground mx-auto max-w-[280px] text-xs leading-relaxed">
              By signing in, you agree to our
              <a
                className="text-primary mx-1 font-semibold transition-all hover:underline"
                href="#"
              >
                Terms
              </a>
              and
              <a
                className="text-primary mx-1 font-semibold transition-all hover:underline"
                href="#"
              >
                Privacy Policy
              </a>
              .
            </p>
          </motion.div>

          {/* Contextual Help */}
          <div className="mt-8 flex items-center gap-6">
            <a
              className="hover:text-primary flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors"
              href="#"
            >
              <HelpCircle className="h-4 w-4" />
              Help Center
            </a>
            <a
              className="hover:text-primary flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors"
              href="#"
            >
              <Globe className="h-4 w-4" />
              English (US)
            </a>
          </div>
        </div>
      </main>

      <footer className="flex w-full items-center justify-center px-8 py-8">
        <p className="text-[10px] font-medium tracking-[0.2em] text-slate-400 uppercase">
          © 2024 Contactify Lead Management
        </p>
      </footer>
    </div>
  );
}
