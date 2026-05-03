import { DashboardHeader } from "@/components/dashboard/shared/DashboardHeader";
import ContactForm from "@/pages/dashboard-pages/ContactForm";

const ContactFormsPage = () => {
  return (
    <>
      <DashboardHeader
        title="Contact Forms"
        description="Manage your contact forms and track submissions."
      />
      <ContactForm />
    </>
  );
};

export default ContactFormsPage;
