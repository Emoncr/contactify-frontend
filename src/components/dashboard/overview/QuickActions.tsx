import { FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function QuickActions() {
  return (
    <Card className="ghost-border rounded-2xl p-8">
      <h3 className="text-primary font-heading mb-6 text-xl font-bold">Quick Actions</h3>
      <div className="space-y-4">
        <Button
          variant="outline"
          className="border-border hover:bg-muted group h-auto w-full justify-start rounded-xl py-3 transition-all"
        >
          <div className="bg-secondary/10 text-secondary group-hover:bg-secondary mr-4 flex h-10 w-10 items-center justify-center rounded-lg transition-colors group-hover:text-white">
            <FileText className="h-5 w-5" />
          </div>
          <span className="text-base font-bold">Create New Form</span>
        </Button>
        <Button
          variant="outline"
          className="border-border hover:bg-muted group h-auto w-full justify-start rounded-xl py-3 transition-all"
        >
          <div className="bg-primary/10 text-primary group-hover:bg-primary mr-4 flex h-10 w-10 items-center justify-center rounded-lg transition-colors group-hover:text-white">
            <Users className="h-5 w-5" />
          </div>
          <span className="text-base font-bold">Export Leads (CSV)</span>
        </Button>
      </div>
    </Card>
  );
}
