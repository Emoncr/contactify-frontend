import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LeadsPaginationProps {
  currentPage: number;
  totalPages: number;
  totalLeads: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function LeadsPagination({
  currentPage,
  totalPages,
  totalLeads,
  itemsPerPage,
  onPageChange,
}: LeadsPaginationProps) {
  return (
    <div className="border-border bg-muted/10 flex items-center justify-between border-t px-6 py-4">
      <div className="text-muted-foreground text-xs font-medium">
        Showing{" "}
        <span className="text-primary font-bold">{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
        <span className="text-primary font-bold">
          {Math.min(currentPage * itemsPerPage, totalLeads)}
        </span>{" "}
        of <span className="text-primary font-bold">{totalLeads}</span> leads
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="border-border h-9 rounded-lg px-4 text-xs font-bold disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          Previous
        </Button>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              className={cn(
                "h-9 w-9 rounded-lg text-xs font-bold",
                currentPage === page
                  ? "bg-primary text-white"
                  : "border-border text-muted-foreground"
              )}
              onClick={() => onPageChange(page)}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </Button>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="border-border h-9 rounded-lg px-4 text-xs font-bold disabled:opacity-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
