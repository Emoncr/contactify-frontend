"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  Sparkles,
  X,
  ArrowRight,
  LayoutDashboard,
  FormInput,
  Code,
  Settings,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    id: "explore-dashboard",
    title: "Explore the Dashboard",
    description: "Get familiar with your lead intelligence and conversion metrics.",
    icon: LayoutDashboard,
  },
  {
    id: "create-form",
    title: "Create Your First Form",
    description: "Design a custom lead capture tool tailored to your business.",
    icon: FormInput,
  },
  {
    id: "embed-script",
    title: "Embed the Curator Script",
    description: "Connect your website to Contactify with a single line of code.",
    icon: Code,
  },
  {
    id: "configure-settings",
    title: "Configure Integrations",
    description: "Connect Slack or HubSpot to automate your lead workflow.",
    icon: Settings,
  },
];

export function OnboardingChecklist() {
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [isVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("contactify-onboarding");
    if (saved) {
      setCompletedSteps(JSON.parse(saved));
    }
    const dismissed = localStorage.getItem("contactify-onboarding-dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
    }
  }, []);

  const toggleStep = (id: string) => {
    const newSteps = completedSteps.includes(id)
      ? completedSteps.filter((s) => s !== id)
      : [...completedSteps, id];

    setCompletedSteps(newSteps);
    localStorage.setItem("contactify-onboarding", JSON.stringify(newSteps));
  };

  const dismiss = () => {
    setIsDismissed(true);
    localStorage.setItem("contactify-onboarding-dismissed", "true");
  };

  const progress = (completedSteps.length / STEPS.length) * 100;

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-10"
        >
          <Card className="ghost-border hatched-pattern relative overflow-hidden rounded-2xl shadow-sm">
            <div className="bg-secondary absolute top-0 left-0 h-full w-1"></div>
            <CardHeader className="flex flex-row items-start justify-between p-8 pb-4">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Sparkles className="text-secondary h-5 w-5" />
                  <span className="text-secondary text-[10px] font-bold tracking-widest uppercase">
                    Curator Onboarding
                  </span>
                </div>
                <CardTitle
                  className="text-primary font-heading text-2xl font-bold"
                  id="onboarding-title"
                >
                  Welcome to Contactify
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Complete these steps to unlock the full potential of your lead management
                  workspace.
                </CardDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={dismiss}
                className="text-muted-foreground hover:text-primary"
                aria-label="Dismiss onboarding checklist"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </Button>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="mb-8 flex items-center gap-4">
                <Progress
                  value={progress}
                  className="bg-muted h-2 flex-1"
                  aria-label="Onboarding progress"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                />
                <span
                  className="text-primary text-xs font-bold whitespace-nowrap"
                  aria-live="polite"
                >
                  {completedSteps.length} of {STEPS.length} complete
                </span>
              </div>

              <div
                className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
                aria-labelledby="onboarding-title"
              >
                {STEPS.map((step) => {
                  const isDone = completedSteps.includes(step.id);
                  return (
                    <button
                      key={step.id}
                      onClick={() => toggleStep(step.id)}
                      aria-pressed={isDone}
                      className={cn(
                        "group w-full cursor-pointer rounded-xl border p-4 text-left transition-all",
                        isDone
                          ? "bg-secondary/5 border-secondary/20"
                          : "bg-card border-border hover:border-primary/20 hover:shadow-sm"
                      )}
                    >
                      <div className="mb-4 flex items-start justify-between">
                        <div
                          className={cn(
                            "rounded-lg p-2",
                            isDone
                              ? "bg-secondary/10 text-secondary"
                              : "bg-muted text-muted-foreground group-hover:text-primary"
                          )}
                        >
                          <step.icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <Checkbox
                          checked={isDone}
                          onCheckedChange={() => toggleStep(step.id)}
                          tabIndex={-1}
                          className={cn(
                            "h-5 w-5 rounded-full border-2",
                            isDone ? "bg-secondary border-secondary" : "border-muted-foreground/30"
                          )}
                          aria-label={`Mark ${step.title} as complete`}
                        />
                      </div>
                      <h4
                        className={cn(
                          "mb-1 text-sm font-bold",
                          isDone ? "text-secondary line-through opacity-70" : "text-primary"
                        )}
                      >
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground text-[11px] leading-relaxed">
                        {step.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              {progress === 100 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary mt-8 flex items-center justify-between rounded-xl p-4 text-white"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary h-5 w-5" />
                    <span className="text-sm font-bold">
                      You&apos;re all set! Your workspace is fully optimized.
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={dismiss}
                    className="text-sm font-bold text-white hover:bg-white/10"
                  >
                    Dismiss <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
