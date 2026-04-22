"use client";

import { motion } from "motion/react";
import { Users, UserPlus, FileText, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Total Leads",
    value: "12,842",
    icon: Users,
    trend: "+12%",
    isHero: true,
  },
  {
    label: "New This Month",
    value: "843",
    icon: UserPlus,
    trend: null,
    isHero: false,
  },
  {
    label: "Active Forms",
    value: "24",
    icon: FileText,
    trend: null,
    isHero: false,
  },
  {
    label: "Conversion Rate",
    value: "4.8%",
    icon: TrendingUp,
    trend: null,
    isHero: false,
  },
];

export function StatsGrid() {
  return (
    <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className={
            stat.isHero
              ? "signature-gradient relative overflow-hidden rounded-2xl p-6"
              : "bg-card rounded-2xl p-6"
          }
        >
          <div className="mb-4 flex items-start justify-between">
            <div
              className={
                stat.isHero
                  ? "flex h-10 w-10 items-center justify-center rounded-xl bg-white/15"
                  : "bg-muted flex h-10 w-10 items-center justify-center rounded-xl"
              }
            >
              <stat.icon className={stat.isHero ? "h-5 w-5 text-white" : "text-primary h-5 w-5"} />
            </div>
            {stat.trend && (
              <span className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold text-white">
                {stat.trend}
              </span>
            )}
          </div>
          <div
            className={
              stat.isHero
                ? "font-heading text-[2rem] leading-none font-extrabold text-white"
                : "text-foreground font-heading text-[2rem] leading-none font-extrabold"
            }
          >
            {stat.value}
          </div>
          <p
            className={
              stat.isHero
                ? "mt-1.5 text-sm font-medium text-white/70"
                : "text-muted-foreground mt-1.5 text-sm font-medium"
            }
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
