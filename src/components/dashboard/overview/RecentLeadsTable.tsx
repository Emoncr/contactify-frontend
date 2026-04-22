"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const recentLeads = [
  {
    id: "1",
    name: "Julianne Davis",
    initials: "JD",
    email: "j.davis@tech-flow.com",
    source: "LinkedIn Ads",
    status: "Qualified",
    statusColor: "text-secondary",
    activity: "2h ago",
  },
  {
    id: "2",
    name: "Marcus Miller",
    initials: "MM",
    email: "marcus.m@creative-studio.io",
    source: "Organic Search",
    status: "Pending",
    statusColor: "text-muted-foreground",
    activity: "5h ago",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    initials: "ER",
    email: "elena.r@fintech-inc.net",
    source: "Direct Mail",
    status: "Negotiation",
    statusColor: "text-primary",
    activity: "Yesterday",
  },
];

export function RecentLeadsTable() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card rounded-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <h3 className="text-foreground font-heading text-xl font-bold">Recent Leads</h3>
        <button
          onClick={() => router.push("/leads")}
          className="text-primary flex cursor-pointer items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
        >
          View All Leads
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-muted-foreground px-6 py-3 text-left text-[11px] font-bold tracking-[0.1em] uppercase">
                Contact
              </th>
              <th className="text-muted-foreground px-6 py-3 text-left text-[11px] font-bold tracking-[0.1em] uppercase">
                Email
              </th>
              <th className="text-muted-foreground px-6 py-3 text-left text-[11px] font-bold tracking-[0.1em] uppercase">
                Source
              </th>
              <th className="text-muted-foreground px-6 py-3 text-left text-[11px] font-bold tracking-[0.1em] uppercase">
                Status
              </th>
              <th className="text-muted-foreground px-6 py-3 text-right text-[11px] font-bold tracking-[0.1em] uppercase">
                Activity
              </th>
            </tr>
          </thead>
          <tbody>
            {recentLeads.map((lead, i) => (
              <motion.tr
                key={lead.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                onClick={() => router.push(`/leads/${lead.id}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    router.push(`/leads/${lead.id}`);
                  }
                }}
                tabIndex={0}
                role="link"
                aria-label={`View details for ${lead.name}`}
                className="hover:bg-muted/40 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/8 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                      {lead.initials}
                    </div>
                    <span className="text-foreground text-sm font-semibold">{lead.name}</span>
                  </div>
                </td>
                <td className="text-muted-foreground px-6 py-4 text-sm">{lead.email}</td>
                <td className="px-6 py-4">
                  <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-xs font-medium">
                    {lead.source}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "inline-block h-2 w-2 rounded-full",
                        lead.status === "Qualified"
                          ? "bg-secondary"
                          : lead.status === "Pending"
                            ? "bg-muted-foreground/50"
                            : "bg-primary"
                      )}
                    />
                    <span className={cn("text-sm font-medium", lead.statusColor)}>
                      {lead.status}
                    </span>
                  </div>
                </td>
                <td className="text-muted-foreground px-6 py-4 text-right text-sm">
                  {lead.activity}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
