"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-8 pt-20 pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <span className="bg-secondary/10 text-secondary mb-6 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider">
            THE EXECUTIVE CURATOR
          </span>
          <h1 className="font-heading text-primary mb-8 text-5xl leading-tight font-extrabold tracking-tighter lg:text-7xl">
            Turn Silent Visitors into <span className="text-secondary">Vocal Leads.</span>
          </h1>
          <p className="text-muted-foreground mb-10 max-w-lg text-lg leading-relaxed">
            The sophisticated way to capture, manage, and nurture your website traffic. No coding
            required, just high-conversion results.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/login" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary h-auto w-full rounded-xl px-8 py-6 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
              >
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-primary border-primary/10 hover:bg-muted h-auto w-full rounded-xl border-2 px-8 py-6 text-lg font-bold transition-all sm:w-auto"
            >
              View Demo
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center lg:h-[600px]"
        >
          <div className="bg-secondary/5 absolute inset-0 -rotate-2 rounded-3xl"></div>
          <img
            alt="Dashboard Preview"
            className="z-10 transform rounded-2xl border border-white/20 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtNa5b72gkYgr9s4Tawm3Z91sNPKTqXScxRdVE-mN1F_4fonqJVDtm7pW1RilGhAbD754eQtuai3hSAE2P-7Lu3eysi3mdjlTWgcwGsSqp2FNQxh-KGWwMsUQtX9APlM5iQQkIZGse50icbPzu7RUNjf7hNsPQvI0lq_Xbk-BzoDYlqoWPQ00W0NaWK3g5maV3xRUmXgeMf8jP7cmJfqGDQJzwH3LuvDUNkwW90qt5vOTq5iBruw5ZShcseAUJJwzCeN_KtjT4FS6B"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
