"use client";

import { DashboardHeader } from "@/components/dashboard/shared/DashboardHeader";
import EmptyDataState from "@/components/dashboard/shared/EmptyDataState";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/useModalStore";
import { Inbox, Plus } from "lucide-react";
import React from "react";

const ContactFormsPage = () => {
  const { openModal } = useModalStore();

  return (
    <>
      <DashboardHeader
        title="Contact Forms"
        description="Manage your contact forms and track submissions."
      />
      <div className="mt-8">
        <EmptyDataState
          icon={<Inbox />}
          title="No Leads Found"
          description="You haven't received any leads yet. Create your first contact form to get started!"
          action={
            <Button
              size="lg"
              className="signature-gradient shadow-primary/20 hover:shadow-primary/30 h-12 rounded-xl px-8 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
              onClick={() => {
                openModal({
                  title: "Create New Contact Form",
                  description: "Fill in the details below to create a new form.",
                  content: (
                    <div className="space-y-4 py-4">
                      <div className="bg-muted border-border flex h-32 w-full animate-pulse items-center justify-center rounded-lg border border-dashed">
                        <p className="text-muted-foreground text-sm">Form builder coming soon...</p>
                      </div>
                      <div className="flex justify-end gap-3">
                        <Button variant="outline" onClick={() => {}}>
                          Cancel
                        </Button>
                        <Button>Create Form</Button>
                      </div>
                    </div>
                  ),
                });
              }}
            >
              <Plus className="mr-2 h-5 w-5" />
              Create First Form
            </Button>
          }
        />
      </div>
    </>
  );
};

export default ContactFormsPage;
