import { CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface HistoryItem {
  action: string;
  time: string;
  details: string;
}

interface LeadActivityHistoryProps {
  history: HistoryItem[];
}

export function LeadActivityHistory({ history }: LeadActivityHistoryProps) {
  return (
    <Card className="ghost-border h-full rounded-2xl shadow-sm">
      <CardHeader className="p-8 pb-4">
        <CardTitle className="text-primary font-heading text-xl font-bold">
          Activity History
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <div className="relative space-y-8" role="list" aria-label="Activity history">
          <div
            className="bg-border/50 absolute top-2 bottom-2 left-[19px] w-0.5"
            aria-hidden="true"
          ></div>
          {history.map((item, i) => (
            <div key={i} className="relative z-10 flex gap-4" role="listitem">
              <div
                className="bg-card border-border flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2"
                aria-hidden="true"
              >
                {i === 0 ? (
                  <CheckCircle2 className="text-secondary h-5 w-5" />
                ) : (
                  <Clock className="text-primary h-5 w-5" />
                )}
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <h5 className="text-primary text-sm font-bold">{item.action}</h5>
                  <span className="text-muted-foreground text-[10px] font-medium">{item.time}</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="bg-border my-8" />

        <Button
          variant="outline"
          className="border-border hover:bg-muted text-primary h-auto w-full rounded-xl py-6 text-sm font-bold transition-all"
        >
          Add Manual Note
        </Button>
      </CardContent>
    </Card>
  );
}
