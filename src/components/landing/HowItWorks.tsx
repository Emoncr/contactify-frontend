import { FormInput, Copy, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Create Form",
      description: "Select fields and style your capture tool in seconds.",
      icon: <FormInput className="mx-auto h-10 w-10" />,
    },
    {
      id: 2,
      title: "Paste Script",
      description: "Drop the lightweight snippet into your site's header.",
      icon: <Copy className="mx-auto h-10 w-10" />,
    },
    {
      id: 3,
      title: "Get Leads",
      description: "Watch the dashboard fill with qualified opportunities.",
      icon: <TrendingUp className="mx-auto h-10 w-10" />,
    },
  ];

  return (
    <section className="bg-background px-8 py-24" id="solutions">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-heading text-primary mb-16 text-4xl font-bold">The Three-Step Flow</h2>
        <div className="relative grid gap-12 md:grid-cols-3">
          <div className="absolute top-1/2 right-0 left-0 -z-10 hidden h-0.5 bg-slate-200 opacity-20 md:block"></div>

          {steps.map((step) => (
            <div key={step.id} className="bg-card ghost-border relative rounded-3xl p-8">
              <div className="bg-primary absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-xl font-bold text-white shadow-lg">
                {step.id}
              </div>
              <div className="text-secondary mt-4 mb-6">{step.icon}</div>
              <h4 className="font-heading mb-2 text-xl font-bold">{step.title}</h4>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
