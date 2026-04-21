import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="px-8 py-24">
      <div className="bg-primary relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-12 text-center lg:p-20">
        <div className="relative z-10">
          <h2 className="font-heading mb-6 text-4xl font-bold text-white lg:text-5xl">
            Ready to curate your growth?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/80">
            Join over 10,000 businesses using Contactify to capture more value from every visitor.
          </p>
          <Link href="/login" className="inline-block w-full sm:w-auto">
            <Button
              size="lg"
              variant="ghost"
              className="text-primary h-auto w-full rounded-xl border-none bg-white px-10 py-6 text-xl font-bold transition-all hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-xl sm:w-auto"
            >
              Get Started for Free
            </Button>
          </Link>
          <p className="mt-6 text-sm text-white/50">No credit card required. Cancel anytime.</p>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Sparkles className="h-48 w-48 text-white" />
        </div>
      </div>
    </section>
  );
}
