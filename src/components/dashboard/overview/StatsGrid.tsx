"use client";

import { motion } from "motion/react";
import { UserPlus, FileText, TrendingUp } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Total Leads", value: "1,284", icon: UserPlus, trend: "+12.5%", color: "text-primary" },
  { label: "Active Forms", value: "12", icon: FileText, trend: "Stable", color: "text-secondary" },
  {
    label: "Conversion Rate",
    value: "24.8%",
    icon: TrendingUp,
    trend: "+4.2%",
    color: "text-primary",
  },
];

export function StatsGrid() {
  return (
    <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="ghost-border rounded-2xl shadow-sm transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className={cn("bg-muted rounded-xl p-3", stat.color)}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <span
                  className={cn(
                    "rounded-full px-2 py-1 text-xs font-bold",
                    stat.trend.startsWith("+")
                      ? "bg-secondary/10 text-secondary"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {stat.trend}
                </span>
              </div>
              <CardTitle className="text-primary mb-1 text-3xl font-bold">{stat.value}</CardTitle>
              <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
