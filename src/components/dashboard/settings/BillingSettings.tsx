import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function BillingSettings() {
  return (
    <Card className="signature-gradient relative overflow-hidden rounded-2xl p-8 text-white md:p-12">
      <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold tracking-tighter text-white uppercase">
            Current Plan
          </span>
          <h3 className="mb-3 text-4xl font-bold">Pro Curator</h3>
          <p className="text-base text-white/70">
            Your next billing date is April 24, 2024 for $14.00.
          </p>
        </div>
        <Button className="text-primary h-auto rounded-xl bg-white px-10 py-7 text-base font-bold shadow-xl transition-all hover:bg-slate-50">
          Manage Subscription
        </Button>
      </div>
      <div className="absolute -right-8 -bottom-8 opacity-10">
        <CreditCard className="h-48 w-48" />
      </div>
    </Card>
  );
}
