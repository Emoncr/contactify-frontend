import { TrendingUp, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CuratorInsights() {
  return (
    <Card className="signature-gradient relative overflow-hidden rounded-2xl p-8 text-white">
      <div className="relative z-10">
        <h3 className="mb-3 text-xl font-bold">Curator Insights</h3>
        <p className="mb-8 text-sm leading-relaxed text-white/70">
          Your conversion rate is up 4% this week. Consider optimizing your &apos;Contact Us&apos;
          form.
        </p>
        <Button
          variant="ghost"
          className="text-primary w-full rounded-xl border-none bg-white py-4 font-bold transition-all hover:bg-white/90 hover:shadow-lg dark:bg-[#03442e]"
        >
          View Full Report
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <div className="absolute -right-4 -bottom-4 opacity-10">
        <TrendingUp className="h-32 w-32" />
      </div>
    </Card>
  );
}
