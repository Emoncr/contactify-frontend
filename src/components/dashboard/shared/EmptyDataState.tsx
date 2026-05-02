"use client";

import React from "react";
import { motion } from "motion/react";
import { Inbox } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EmptyDataStateProps {
  /**
   * The icon to display. Can be a React node (e.g., <Inbox />).
   */
  icon?: React.ReactNode;
  /**
   * The main title of the empty state.
   */
  title: string;
  /**
   * A helpful description of what's missing and how to fix it.
   */
  description: string;
  /**
   * Optional action slot for buttons or links.
   */
  action?: React.ReactNode;
  /**
   * Additional class names for the container.
   */
  className?: string;
}

/**
 * A reusable empty data state component built using Shadcn UI primitives.
 * Features smooth motion animations and follows the project's design system.
 */
const EmptyDataState = ({ icon, title, description, action, className }: EmptyDataStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card
        className={cn(
          "flex flex-col items-center justify-center border-dashed bg-white p-8 py-16 text-center shadow-none",
          className
        )}
      >
        <CardContent className="flex flex-col items-center p-0">
          <div className="relative mb-8">
            <div className="bg-primary/10 absolute inset-0 scale-150 rounded-full blur-3xl" />

            <motion.div
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
              className="bg-muted ring-border relative flex h-24 w-24 items-center justify-center rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1"
            >
              <div className="text-primary *:h-12 *:w-12">
                {icon || <Inbox strokeWidth={1.5} />}
              </div>

              {/* Subtle sparkles/decorations */}
              <div className="bg-primary/20 absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full" />
              <div className="bg-primary/10 absolute -bottom-2 -left-2 h-4 w-4 animate-pulse rounded-full delay-700" />
            </motion.div>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading text-foreground text-2xl font-bold tracking-tight">
              {title}
            </h3>
            <p className="text-muted-foreground mx-auto max-w-sm text-base leading-relaxed">
              {description}
            </p>
          </div>

          {action && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10"
            >
              {action}
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EmptyDataState;
