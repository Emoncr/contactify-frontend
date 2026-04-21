import { MessageSquare, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface LeadNotesCardProps {
  notes: string;
  tags: string[];
}

export function LeadNotesCard({ notes, tags }: LeadNotesCardProps) {
  return (
    <Card className="ghost-border rounded-2xl shadow-sm">
      <CardHeader className="p-8 pb-4">
        <CardTitle className="text-primary font-heading text-xl font-bold">
          Notes & Context
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <div className="bg-muted/30 border-border/50 mb-6 rounded-xl border p-6">
          <div className="flex items-start gap-3">
            <MessageSquare className="text-secondary mt-1 h-5 w-5" />
            <p className="text-primary text-sm leading-relaxed italic">&quot;{notes}&quot;</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-border text-muted-foreground rounded-full px-3 py-1 text-[10px] font-medium tracking-wider uppercase"
            >
              <Tag className="mr-1 h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
