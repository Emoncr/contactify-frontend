"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const monthlyData = [
  {
    month: "Jan",
    converted: 420,
    pending: 280,
    projected: 180,
  },
  {
    month: "Feb",
    converted: 580,
    pending: 350,
    projected: 220,
  },
  {
    month: "Mar",
    converted: 720,
    pending: 480,
    projected: 300,
  },
  {
    month: "Apr",
    converted: 450,
    pending: 320,
    projected: 250,
  },
  {
    month: "May",
    converted: 680,
    pending: 520,
    projected: 380,
  },
  {
    month: "Jun",
    converted: 380,
    pending: 180,
    projected: 0,
  },
];

const weeklyData = [
  { month: "Mon", converted: 120, pending: 80, projected: 40 },
  { month: "Tue", converted: 180, pending: 110, projected: 60 },
  { month: "Wed", converted: 220, pending: 150, projected: 80 },
  { month: "Thu", converted: 160, pending: 90, projected: 50 },
  { month: "Fri", converted: 200, pending: 140, projected: 70 },
  { month: "Sat", converted: 90, pending: 50, projected: 20 },
  { month: "Sun", converted: 60, pending: 30, projected: 10 },
];

export function LeadAnalytics() {
  const [view, setView] = useState<"weekly" | "monthly">("monthly");

  const data = view === "monthly" ? monthlyData : weeklyData;
  const maxVal = Math.max(...data.map((d) => d.converted + d.pending + d.projected));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card flex-1 rounded-2xl p-6"
    >
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-foreground font-heading text-xl font-bold">Lead Analytics</h3>
        <div className="bg-muted flex items-center gap-1 rounded-full p-1">
          <button
            onClick={() => setView("weekly")}
            className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              view === "weekly"
                ? "bg-primary text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setView("monthly")}
            className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              view === "monthly"
                ? "bg-primary text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end gap-4 px-2" style={{ height: 220 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial="initial"
            animate="animate"
            className="flex w-full items-end gap-4"
          >
            {data.map((d, i) => {
              const total = d.converted + d.pending + d.projected;
              const hConverted = (d.converted / maxVal) * 200;
              const hPending = (d.pending / maxVal) * 200;
              const hProjected = (d.projected / maxVal) * 200;

              return (
                <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="flex w-full flex-col items-stretch justify-end overflow-hidden rounded-lg"
                    style={{ height: 200 }}
                    title={`${d.month}: ${total} total`}
                  >
                    {/* Projected - hatched pattern */}
                    {d.projected > 0 && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: hProjected }}
                        transition={{ duration: 0.8, delay: i * 0.1 + 0.4 }}
                        className="hatched-pattern w-full rounded-t-md bg-[#c0c9bb]/30"
                      />
                    )}
                    {/* Pending */}
                    {d.pending > 0 && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: hPending }}
                        transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
                        className="w-full bg-[#86d9b1]/40 dark:bg-[#86d9b1]/25"
                      />
                    )}
                    {/* Converted */}
                    {d.converted > 0 && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: hConverted }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="w-full rounded-b-md bg-[#03442e] dark:bg-[#86d9b1]"
                      />
                    )}
                  </div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                    className="text-muted-foreground text-[11px] font-medium"
                  >
                    {d.month}
                  </motion.span>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
