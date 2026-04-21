"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Edit2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DashboardHeader } from "@/components/dashboard/shared/DashboardHeader";
import { LeadInfoCard } from "@/components/dashboard/leads/LeadInfoCard";
import { LeadNotesCard } from "@/components/dashboard/leads/LeadNotesCard";
import { LeadActivityHistory } from "@/components/dashboard/leads/LeadActivityHistory";
import { cn } from "@/lib/utils";

const LEADS_DATA = {
  "1": {
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    source: "Landing Page",
    status: "New",
    date: "2024-04-13T10:30:00Z",
    company: "Smith & Associates",
    position: "CEO",
    notes:
      "Interested in the Pro Curator plan for his plumbing business. Needs a demo of the CRM integration.",
    tags: ["High Intent", "Plumbing", "Pro Plan"],
    history: [
      {
        action: "Form Submitted",
        time: "2m ago",
        details: "Submitted via 'Main Landing Page' form",
      },
      { action: "Email Sent", time: "1m ago", details: "Automated welcome email delivered" },
    ],
  },
  "2": {
    name: "Sarah Connor",
    email: "sarah@tech.co",
    phone: "+1 (555) 987-6543",
    source: "Contact Us",
    status: "Contacted",
    date: "2024-04-13T09:15:00Z",
    company: "Cyberdyne Systems",
    position: "Operations Manager",
    notes: "Inquired about bulk lead exports. Follow up scheduled for next Tuesday.",
    tags: ["Tech", "Enterprise"],
    history: [
      { action: "Form Submitted", time: "1h ago", details: "Submitted via 'Contact Us' form" },
      { action: "Manual Follow-up", time: "45m ago", details: "Sent personalized pricing guide" },
    ],
  },
};

export default function LeadDetails() {
  const { id } = useParams<{ id: string }>();
  const lead = LEADS_DATA[id as keyof typeof LEADS_DATA] || LEADS_DATA["1"];

  return (
    <>
      <DashboardHeader title={lead.name} description={`${lead.position} at ${lead.company}`} />

      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <Link href="/leads">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-muted rounded-full"
              aria-label="Back to leads list"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
          <Badge
            className={cn(
              "rounded-full border-none px-3 py-1 text-[10px] font-bold tracking-tighter uppercase",
              lead.status === "New"
                ? "bg-secondary/10 text-secondary"
                : "bg-primary/10 text-primary"
            )}
          >
            {lead.status}
          </Badge>
        </div>
        <div className="flex w-full items-center gap-3 md:w-auto">
          <Button variant="outline" size="icon" className="border-border h-12 w-12 rounded-xl">
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="border-border h-12 w-12 rounded-xl">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button className="bg-primary h-12 flex-1 rounded-xl px-8 text-sm font-bold text-white shadow-md md:flex-none">
            Mark as Qualified
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-8">
          <LeadInfoCard
            email={lead.email}
            phone={lead.phone}
            source={lead.source}
            date={lead.date}
          />
          <LeadNotesCard notes={lead.notes} tags={lead.tags} />
        </div>
        <div className="space-y-8 lg:col-span-4">
          <LeadActivityHistory history={lead.history} />
        </div>
      </div>
    </>
  );
}
