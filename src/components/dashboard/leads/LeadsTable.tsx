"use client";

import { useRouter } from "next/navigation";
import { ArrowUpDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Lead {
  id: string;
  name: string;
  email: string;
  source: string;
  status: string;
  date: string;
}

interface LeadsTableProps {
  leads: Lead[];
  sortConfig: { key: string; direction: "asc" | "desc" } | null;
  onSort: (key: string) => void;
}

export function LeadsTable({ leads, sortConfig, onSort }: LeadsTableProps) {
  const router = useRouter();

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-border bg-muted/30 hover:bg-transparent">
            {[
              { key: "name", label: "Lead" },
              { key: "source", label: "Source" },
              { key: "status", label: "Status" },
              { key: "date", label: "Date", className: "text-right" },
            ].map((col) => (
              <TableHead
                key={col.key}
                className={cn(
                  "text-muted-foreground hover:text-primary focus-visible:ring-primary cursor-pointer px-6 py-5 text-xs font-bold tracking-wider uppercase transition-colors focus-visible:ring-2 focus-visible:outline-none",
                  col.className
                )}
                onClick={() => onSort(col.key)}
                tabIndex={0}
                role="columnheader"
                aria-sort={
                  sortConfig?.key === col.key
                    ? sortConfig.direction === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                }
              >
                <div
                  className={cn(
                    "flex items-center gap-2",
                    col.className?.includes("text-right") && "justify-end"
                  )}
                >
                  {col.label} <ArrowUpDown className="h-3 w-3" aria-hidden="true" />
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow
              key={lead.id}
              onClick={() => router.push(`/leads/${lead.id}`)}
              tabIndex={0}
              role="link"
              aria-label={`View details for ${lead.name}`}
              className="hover:bg-muted/50 border-border group focus-visible:ring-primary cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <TableCell className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-primary/5 text-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
                    aria-hidden="true"
                  >
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-primary group-hover:text-secondary text-sm font-bold transition-colors">
                      {lead.name}
                    </div>
                    <div className="text-muted-foreground text-xs">{lead.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground px-6 py-5 text-sm">
                {lead.source}
              </TableCell>
              <TableCell className="px-6 py-5">
                <Badge
                  variant="secondary"
                  className={cn(
                    "rounded-full border-none px-2.5 py-1 text-[10px] font-bold tracking-tighter uppercase",
                    lead.status === "New"
                      ? "bg-secondary/10 text-secondary"
                      : lead.status === "Contacted"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                  )}
                >
                  {lead.status}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground px-6 py-5 text-right text-xs font-medium">
                {new Date(lead.date).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
