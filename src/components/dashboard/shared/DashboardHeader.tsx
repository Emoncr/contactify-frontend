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
    <header className="mb-10 flex flex-col items-start justify-between gap-4 pt-16 md:flex-row md:items-center md:pt-0">
      <div className="w-full md:w-auto">
        <h1 className="text-primary font-heading text-3xl font-bold tracking-tight">{title}</h1>
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>
      <div className="flex w-full items-center gap-4 md:w-auto">
        <div className="relative flex-1 md:w-64">
          <Search
            className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
            aria-hidden="true"
          />
          <Input
            className="bg-card border-border h-11 w-full rounded-xl pl-10 text-sm"
            placeholder="Search..."
            aria-label="Search leads"
          />
        </div>
        <ThemeToggle />
        <Avatar className="border-primary/10 h-11 w-11 shrink-0 border-2">
          <AvatarImage
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf47CKPpukVLWloBYWX8U4KDY5UOjKDg-z1dUdL2QJKwvuEosPw-_UPHxSoW3G8OCjJrWr2YagHPCy2luV2KVR08uIM7z9BpuP2ErrcpBUHNMIg3UpHNMfTGUCWzglr6G1WgCHBqhujGRFmC5bd2jDGtzE66IoQOH7Tbu6ESO2IFheO7IjHJXNuDXOwtML-azbUbguvQ8z8cb3_wizatiSByo_EEzspNK7wG6FoNTf0XkDVjKup2uaVVNTJYjtg1CcIU5ANfVxcVHo"
            alt="User Profile"
          />
          <AvatarFallback aria-label="Mark Thompson">MT</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
