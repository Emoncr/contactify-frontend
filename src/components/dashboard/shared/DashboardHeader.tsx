import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "./ThemeToggle";

interface DashboardHeaderProps {
  title: string;
  description?: string;
}

export function DashboardHeader({ title, description }: DashboardHeaderProps) {
  return (
    <header className="mb-8 flex flex-col items-start justify-between gap-4 pt-16 md:flex-row md:items-center md:pt-0">
      <div className="w-full md:w-auto">
        <h1 className="text-foreground font-heading text-3xl font-bold tracking-tight">{title}</h1>
        {description && <p className="text-muted-foreground mt-0.5 text-sm">{description}</p>}
      </div>
      <div className="flex w-full items-center gap-4 md:w-auto">
        <div className="relative flex-1 md:w-56">
          <Search
            className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
            aria-hidden="true"
          />
          <Input
            className="bg-muted h-10 w-full rounded-xl border-0 pl-10 text-sm shadow-none"
            placeholder="Search leads..."
            aria-label="Search leads"
          />
        </div>
        <ThemeToggle />
        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-foreground text-sm leading-tight font-semibold">Alex Thompson</p>
            <p className="text-muted-foreground text-[11px] font-medium">Premium Plan</p>
          </div>
          <Avatar className="h-10 w-10 shrink-0">
            <AvatarImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf47CKPpukVLWloBYWX8U4KDY5UOjKDg-z1dUdL2QJKwvuEosPw-_UPHxSoW3G8OCjJrWr2YagHPCy2luV2KVR08uIM7z9BpuP2ErrcpBUHNMIg3UpHNMfTGUCWzglr6G1WgCHBqhujGRFmC5bd2jDGtzE66IoQOH7Tbu6ESO2IFheO7IjHJXNuDXOwtML-azbUbguvQ8z8cb3_wizatiSByo_EEzspNK7wG6FoNTf0XkDVjKup2uaVVNTJYjtg1CcIU5ANfVxcVHo"
              alt="Alex Thompson"
              referrerPolicy="no-referrer"
            />
            <AvatarFallback aria-label="Alex Thompson">AT</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
