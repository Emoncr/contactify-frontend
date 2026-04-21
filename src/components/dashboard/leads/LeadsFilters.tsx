import { Search, Filter, Download, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LeadsFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function LeadsFilters({ searchQuery, onSearchChange }: LeadsFiltersProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="relative w-full md:w-96">
        <Search
          className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
          aria-hidden="true"
        />
        <Input
          className="bg-card border-border h-12 rounded-xl pl-10 text-sm"
          placeholder="Search by name, email, or source..."
          aria-label="Search leads"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex w-full gap-3 md:w-auto">
        <Button
          variant="outline"
          className="border-border h-12 flex-1 rounded-xl text-sm font-bold md:flex-none"
        >
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
        <Button
          variant="outline"
          className="border-border h-12 flex-1 rounded-xl text-sm font-bold md:flex-none"
        >
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
        <Button className="bg-primary h-12 flex-1 rounded-xl px-6 text-sm font-bold text-white md:flex-none">
          <UserPlus className="mr-2 h-4 w-4" />
          Add Lead
        </Button>
      </div>
    </div>
  );
}
