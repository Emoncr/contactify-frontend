import { User, Code, CreditCard } from "lucide-react";

import { DashboardHeader } from "@/components/dashboard/shared/DashboardHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileSettings } from "@/components/dashboard/settings/ProfileSettings";
import { IntegrationSettings } from "@/components/dashboard/settings/IntegrationSettings";
import { BillingSettings } from "@/components/dashboard/settings/BillingSettings";

export default function Settings() {
  return (
    <>
      <DashboardHeader
        title="Settings"
        description="Manage your workspace, profile, and integrations."
      />

      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList className="bg-muted ghost-border flex w-full overflow-x-auto rounded-xl p-1 md:w-auto">
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-card data-[state=active]:text-primary flex-1 rounded-lg px-6 py-3 text-sm font-bold whitespace-nowrap transition-all data-[state=active]:shadow-sm md:flex-none"
          >
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="integrations"
            className="data-[state=active]:bg-card data-[state=active]:text-primary flex-1 rounded-lg px-6 py-3 text-sm font-bold whitespace-nowrap transition-all data-[state=active]:shadow-sm md:flex-none"
          >
            <Code className="mr-2 h-4 w-4" />
            Integrations
          </TabsTrigger>
          <TabsTrigger
            value="billing"
            className="data-[state=active]:bg-card data-[state=active]:text-primary flex-1 rounded-lg px-6 py-3 text-sm font-bold whitespace-nowrap transition-all data-[state=active]:shadow-sm md:flex-none"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <ProfileSettings />
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <IntegrationSettings />
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <BillingSettings />
        </TabsContent>
      </Tabs>
    </>
  );
}
