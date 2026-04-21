import { DashboardHeader } from "@/components/dashboard/shared/DashboardHeader";
import { OnboardingChecklist } from "@/components/dashboard/shared/OnboardingChecklist";
import { StatsGrid } from "@/components/dashboard/overview/StatsGrid";
import { RecentLeadsTable } from "@/components/dashboard/overview/RecentLeadsTable";
import { CuratorInsights } from "@/components/dashboard/overview/CuratorInsights";
import { QuickActions } from "@/components/dashboard/overview/QuickActions";

export default function DashboardOverview() {
  return (
    <>
      <DashboardHeader
        title="Overview"
        description="Welcome back, Curator. Here's your lead intelligence."
      />

      <OnboardingChecklist />

      <StatsGrid />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <RecentLeadsTable />
        <div className="space-y-8 lg:col-span-4">
          <CuratorInsights />
          <QuickActions />
        </div>
      </div>
    </>
  );
}
