"use client";

import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const recentLeads = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    source: "Landing Page",
    status: "New",
    date: "2m ago",
  },
  {
    id: "2",
    name: "Sarah Connor",
    email: "sarah@tech.co",
    source: "Contact Us",
    status: "Contacted",
    date: "1h ago",
  },
  {
    id: "3",
    name: "Michael Vance",
    email: "mv@legal.com",
    source: "Pricing Page",
    status: "Qualified",
    date: "3h ago",
  },
  {
    id: "4",
    name: "Emma Wilson",
    email: "emma@design.io",
    source: "Landing Page",
    status: "New",
    date: "5h ago",
  },
];

export function RecentLeadsTable() {
  const router = useRouter();

  return (
    <Card className="ghost-border h-full overflow-hidden rounded-2xl shadow-sm lg:col-span-8">
      <CardHeader className="border-border flex flex-row items-center justify-between border-b p-6">
        <CardTitle className="text-primary font-heading text-xl font-bold">Recent Leads</CardTitle>
        <Button
          variant="ghost"
          onClick={() => router.push("/leads")}
          className="text-secondary hover:bg-secondary/5 text-sm font-bold"
        >
          View All <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="overflow-x-auto p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground px-6 py-4 text-xs font-bold tracking-wider uppercase">
                Lead
              </TableHead>
              <TableHead className="text-muted-foreground px-6 py-4 text-xs font-bold tracking-wider uppercase">
                Source
              </TableHead>
              <TableHead className="text-muted-foreground px-6 py-4 text-xs font-bold tracking-wider uppercase">
                Status
              </TableHead>
              <TableHead className="text-muted-foreground px-6 py-4 text-right text-xs font-bold tracking-wider uppercase">
                Time
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentLeads.map((lead) => (
              <TableRow
                key={lead.email}
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
                className="hover:bg-muted/50 border-border group focus-visible:ring-primary cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-primary/5 text-primary flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                      aria-hidden="true"
                    >
                      {lead.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-primary text-sm font-bold">{lead.name}</div>
                      <div className="text-muted-foreground text-xs">{lead.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground px-6 py-4 text-sm">
                  {lead.source}
                </TableCell>
                <TableCell className="px-6 py-4">
                  <span
                    className={cn(
                      "rounded-full px-2 py-1 text-[10px] font-bold tracking-tighter uppercase",
                      lead.status === "New"
                        ? "bg-secondary/10 text-secondary"
                        : lead.status === "Contacted"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                    )}
                  >
                    {lead.status}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground px-6 py-4 text-right text-xs font-medium">
                  {lead.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
