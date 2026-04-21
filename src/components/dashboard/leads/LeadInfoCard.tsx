import { Mail, Phone, Globe, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LeadInfoCardProps {
  email: string;
  phone: string;
  source: string;
  date: string;
}

export function LeadInfoCard({ email, phone, source, date }: LeadInfoCardProps) {
  return (
    <Card className="ghost-border rounded-2xl shadow-sm">
      <CardHeader className="p-8 pb-4">
        <CardTitle className="text-primary font-heading text-xl font-bold">
          Lead Information
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-muted text-muted-foreground flex h-10 w-10 items-center justify-center rounded-xl">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                  Email Address
                </p>
                <p className="text-primary text-sm font-medium">{email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-muted text-muted-foreground flex h-10 w-10 items-center justify-center rounded-xl">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                  Phone Number
                </p>
                <p className="text-primary text-sm font-medium">{phone}</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-muted text-muted-foreground flex h-10 w-10 items-center justify-center rounded-xl">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                  Source
                </p>
                <p className="text-primary text-sm font-medium">{source}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-muted text-muted-foreground flex h-10 w-10 items-center justify-center rounded-xl">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                  Acquired On
                </p>
                <p className="text-primary text-sm font-medium">
                  {new Date(date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
