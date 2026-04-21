import { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/shared/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="bg-background flex min-h-screen font-sans">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8 lg:ml-64">{children}</main>
    </div>
  );
}
