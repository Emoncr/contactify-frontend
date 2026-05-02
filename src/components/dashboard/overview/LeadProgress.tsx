"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const percentage = 41;
const converted = 3240;
const remaining = 4650;

export function LeadProgress() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const start = 0;
    const end = percentage;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  // SVG circle math
  const size = 160;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex w-full lg:w-[280px]"
    >
      <Card className="flex w-full flex-col items-center border-none p-6 shadow-sm">
        <div className="mb-2 w-full">
          <h3 className="text-foreground font-heading text-xl font-bold">Lead Progress</h3>
          <p className="text-muted-foreground text-sm">Monthly target reach</p>
        </div>

        {/* Donut ring */}
        <div className="relative my-6 flex items-center justify-center">
          <svg width={size} height={size} className="-rotate-90">
            {/* Background track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              className="stroke-muted"
              strokeWidth={strokeWidth}
            />
            {/* Active track */}
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#1b6d24"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="dark:stroke-[#89d88d]"
            />
          </svg>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <span className="text-foreground font-heading text-3xl font-extrabold">{count}%</span>
            <span className="text-secondary text-[10px] font-bold tracking-[0.2em] uppercase">
              Active
            </span>
          </motion.div>
        </div>

        {/* Legend */}
        <div className="w-full space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="bg-secondary inline-block h-2.5 w-2.5 rounded-full" />
              <span className="text-muted-foreground text-sm">Converted</span>
            </div>
            <span className="text-foreground font-heading text-sm font-bold">
              {converted.toLocaleString()}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="bg-muted-foreground/30 inline-block h-2.5 w-2.5 rounded-full" />
              <span className="text-muted-foreground text-sm">Remaining</span>
            </div>
            <span className="text-foreground font-heading text-sm font-bold">
              {remaining.toLocaleString()}
            </span>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
