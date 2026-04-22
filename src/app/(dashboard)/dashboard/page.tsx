import { DashboardHeader } from "@/components/dashboard/shared/DashboardHeader";
import { DashboardFooter } from "@/components/dashboard/shared/DashboardFooter";
import { StatsGrid } from "@/components/dashboard/overview/StatsGrid";
import { LeadAnalytics } from "@/components/dashboard/overview/LeadAnalytics";
import { LeadProgress } from "@/components/dashboard/overview/LeadProgress";
import { RecentLeadsTable } from "@/components/dashboard/overview/RecentLeadsTable";

export default function DashboardOverview() {
  return (
    <>
      <DashboardHeader title="Dashboard Overview" description="Welcome back, Executive Curator." />

      <StatsGrid />

      {/* Analytics + Progress Ring Row */}
      <div className="mb-8 flex flex-col gap-5 lg:flex-row">
        <LeadAnalytics />
        <LeadProgress />
      </div>

      {/* Recent Leads */}
      <RecentLeadsTable />

      <DashboardFooter />
    </>
  );
}
