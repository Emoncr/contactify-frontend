import { motion } from "motion/react";
import { FileEdit, Code, Bell, LayoutDashboard, Users } from "lucide-react";

export function Features() {
  const features = [
    {
      id: 1,
      title: "Create Custom Forms",
      description:
        "Design bespoke forms that match your brand perfectly. Our editor makes it simple to add fields that matter to your business.",
      icon: <FileEdit className="h-6 w-6" />,
      className:
        "md:col-span-8 bg-card p-10 rounded-3xl ghost-border flex flex-col md:flex-row gap-8 items-center",
      showAsset: true,
    },
    {
      id: 2,
      title: "Easy Script Embedding",
      description:
        "Copy, paste, and thrive. Just one line of code connects your site to the Contactify ecosystem.",
      icon: <Code className="h-6 w-6" />,
      className: "md:col-span-4 bg-card p-10 rounded-3xl ghost-border",
    },
    {
      id: 3,
      title: "Real-time Notifications",
      description:
        "Never miss a beat. Get instant alerts via email, Slack, or SMS the moment a visitor reaches out.",
      icon: <Bell className="h-6 w-6" />,
      className: "md:col-span-4 bg-card p-10 rounded-3xl ghost-border",
    },
    {
      id: 4,
      title: "Manage Leads in One Place",
      description:
        "Our Executive Curator dashboard provides a centralized hub for tracking status, notes, and conversion history for every single lead.",
      icon: <LayoutDashboard className="h-6 w-6" />,
      className: "md:col-span-8 bg-primary text-white p-10 rounded-3xl relative overflow-hidden",
      iconOverlay: <Users className="h-64 w-64" />,
      isHighlight: true,
    },
  ];

  return (
    <section className="bg-muted px-8 py-24" id="features">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="font-heading text-primary mb-4 text-4xl font-bold">
            Powerful Lead Intelligence
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Everything you need to capture intent and build relationships, tucked into a seamless,
            elegant interface.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {features.map((feature) => (
            <motion.div key={feature.id} whileHover={{ y: -5 }} className={feature.className}>
              <div className={feature.isHighlight ? "relative z-10" : "flex-1"}>
                <div
                  className={`h-12 w-12 ${feature.isHighlight ? "bg-white/10 text-white" : "bg-primary/5 text-primary"} mb-6 flex items-center justify-center rounded-xl`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-heading mb-4 text-2xl font-bold">{feature.title}</h3>
                <p
                  className={
                    feature.isHighlight ? "max-w-md text-white/80" : "text-muted-foreground"
                  }
                >
                  {feature.description}
                </p>
              </div>

              {feature.showAsset && (
                <div className="relative h-48 w-full flex-1 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                  <div className="absolute top-4 right-4 left-4 rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-2 h-2 w-1/2 rounded bg-slate-100"></div>
                    <div className="mb-2 h-8 w-full rounded border border-slate-100 bg-slate-50"></div>
                    <div className="bg-primary h-8 w-full rounded"></div>
                  </div>
                </div>
              )}

              {feature.iconOverlay && (
                <div className="absolute right-[-10%] bottom-[-20%] w-2/3 opacity-20">
                  {feature.iconOverlay}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
