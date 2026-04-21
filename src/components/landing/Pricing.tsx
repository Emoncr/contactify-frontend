import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonData = [
  { feature: "Monthly Leads", essential: "100", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Custom Forms", essential: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "CRM Integrations", essential: "Basic", pro: "Advanced", enterprise: "Custom" },
  {
    feature: "Branding",
    essential: "Contactify Logo",
    pro: "White-label",
    enterprise: "White-label",
  },
  {
    feature: "Support",
    essential: "Community",
    pro: "24/7 Priority",
    enterprise: "Dedicated Manager",
  },
  { feature: "API Access", essential: "—", pro: "Full Access", enterprise: "Full Access" },
  { feature: "Custom Domains", essential: "—", pro: "1 Domain", enterprise: "Unlimited" },
  { feature: "Team Members", essential: "1 User", pro: "5 Users", enterprise: "Unlimited" },
];

export function Pricing() {
  return (
    <section className="bg-muted px-8 py-24" id="pricing">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-primary mb-4 text-4xl font-bold">
            Investment in Growth
          </h2>
          <p className="text-muted-foreground">
            Simple, transparent plans designed to scale with your business.
          </p>
        </div>

        <div className="mx-auto mb-24 grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Free Tier */}
          <div className="bg-card ghost-border flex flex-col rounded-3xl p-10">
            <h3 className="font-heading mb-2 text-xl font-bold">Essential</h3>
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-primary text-4xl font-extrabold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="mb-10 grow space-y-4">
              {["First 100 leads free", "Unlimited forms", "Email notifications"].map(
                (item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="text-secondary h-5 w-5" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <Button
              variant="outline"
              className="border-primary/10 text-primary hover:bg-muted w-full rounded-xl border-2 py-4 font-bold transition-colors"
            >
              Start Free
            </Button>
          </div>

          {/* Pro Tier */}
          <div className="bg-primary relative flex scale-105 flex-col rounded-3xl p-10 text-white shadow-2xl">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="font-heading text-xl font-bold">Pro Curator</h3>
              <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold tracking-tighter text-white uppercase">
                Recommended
              </span>
            </div>
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-white">$14</span>
              <span className="text-white/60">/month</span>
            </div>
            <ul className="mb-10 grow space-y-4">
              {[
                "Unlimited leads",
                "Advanced CRM integrations",
                "Remove Contactify branding",
                "Priority 24/7 support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="text-secondary-foreground fill-secondary-foreground/20 h-5 w-5" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              variant="ghost"
              className="text-primary w-full rounded-xl border-none bg-white py-4 font-bold transition-all hover:bg-white/90 hover:shadow-lg"
            >
              Go Pro Now
            </Button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h3 className="font-heading text-primary mb-2 text-2xl font-bold">
              Detailed Feature Comparison
            </h3>
            <p className="text-muted-foreground text-sm">
              Everything you need to know about our tiers.
            </p>
          </div>

          <div className="bg-card ghost-border overflow-hidden rounded-3xl shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-primary bg-slate-50/50 p-6 text-sm font-bold tracking-wider uppercase">
                      Feature
                    </th>
                    <th className="text-primary p-6 text-center text-sm font-bold tracking-wider uppercase">
                      Essential
                    </th>
                    <th className="text-secondary bg-secondary/5 p-6 text-center text-sm font-bold tracking-wider uppercase">
                      Pro Curator
                    </th>
                    <th className="text-primary p-6 text-center text-sm font-bold tracking-wider uppercase">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="transition-colors hover:bg-slate-50/50">
                      <td className="text-primary p-6 text-sm font-medium">{row.feature}</td>
                      <td className="text-muted-foreground p-6 text-center text-sm">
                        {row.essential}
                      </td>
                      <td className="text-secondary bg-secondary/5 p-6 text-center text-sm font-bold">
                        {row.pro}
                      </td>
                      <td className="text-muted-foreground p-6 text-center text-sm">
                        {row.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
