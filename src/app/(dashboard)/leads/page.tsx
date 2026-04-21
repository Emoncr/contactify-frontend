"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard/shared/DashboardHeader";
import { LeadsFilters } from "@/components/dashboard/leads/LeadsFilters";
import { LeadsTable } from "@/components/dashboard/leads/LeadsTable";
import { LeadsPagination } from "@/components/dashboard/leads/LeadsPagination";

const ALL_LEADS = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    source: "Landing Page",
    status: "New",
    date: "2024-04-13T15:40:00Z",
  },
  {
    id: "2",
    name: "Sarah Connor",
    email: "sarah@tech.co",
    source: "Contact Us",
    status: "Contacted",
    date: "2024-04-13T14:45:00Z",
  },
  {
    id: "3",
    name: "Michael Vance",
    email: "mv@legal.com",
    source: "Pricing Page",
    status: "Qualified",
    date: "2024-04-13T12:30:00Z",
  },
  {
    id: "4",
    name: "Emma Wilson",
    email: "emma@design.io",
    source: "Landing Page",
    status: "New",
    date: "2024-04-13T10:15:00Z",
  },
  {
    id: "5",
    name: "David Miller",
    email: "david@build.com",
    source: "Google Search",
    status: "New",
    date: "2024-04-12T16:20:00Z",
  },
  {
    id: "6",
    name: "Lisa Wong",
    email: "lisa@creative.net",
    source: "Referral",
    status: "Contacted",
    date: "2024-04-12T09:05:00Z",
  },
  {
    id: "7",
    name: "Robert Fox",
    email: "robert@fox.com",
    source: "Landing Page",
    status: "Qualified",
    date: "2024-04-11T14:20:00Z",
  },
  {
    id: "8",
    name: "Jane Cooper",
    email: "jane@cooper.io",
    source: "Direct",
    status: "New",
    date: "2024-04-11T11:15:00Z",
  },
  {
    id: "9",
    name: "Cody Fisher",
    email: "cody@fisher.net",
    source: "Google Search",
    status: "Contacted",
    date: "2024-04-10T16:45:00Z",
  },
  {
    id: "10",
    name: "Esther Howard",
    email: "esther@howard.com",
    source: "Referral",
    status: "New",
    date: "2024-04-10T10:30:00Z",
  },
];

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredLeads = ALL_LEADS.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.source.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedLeads = [...filteredLeads].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    const valA = a[key as keyof typeof a];
    const valB = b[key as keyof typeof b];
    if (valA < valB) return direction === "asc" ? -1 : 1;
    if (valA > valB) return direction === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedLeads.length / itemsPerPage);
  const paginatedLeads = sortedLeads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <>
      <DashboardHeader
        title="Leads"
        description="Manage and filter your captured lead intelligence."
      />

      <div className="space-y-6">
        <LeadsFilters searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <Card className="ghost-border overflow-hidden rounded-2xl shadow-sm">
          <LeadsTable leads={paginatedLeads} sortConfig={sortConfig} onSort={handleSort} />

          <LeadsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalLeads={sortedLeads.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </Card>
      </div>
    </>
  );
}
