import { DashboardHeader } from "@/components/dashboard/shared/DashboardHeader";
import EmptyDataState from "@/components/dashboard/shared/EmptyDataState";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/useModalStore";
import { Inbox, Plus } from "lucide-react";
import React from "react";
import CreateContactForm from "./components/CreateContactForm";

const ContactForm = () => {
  return (
    <>
      <div className="mt-8">
        <EmptyDataState
          icon={<Inbox />}
          title="No Contact Forms Found"
          description="You haven't created any contact forms yet. Create your first contact form to get started!"
          actionModal={<Button>Create New Form</Button>}
          modalTitle="Create New Form"
          modalContent={<CreateContactForm />}
        />
      </div>
    </>
  );
};

export default ContactForm;
