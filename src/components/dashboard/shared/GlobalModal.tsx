"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";
import { cn } from "@/lib/utils";

/**
 * A premium global modal component that listens to the useModalStore.
 * Features smooth spring animations, backdrop blur, and responsive design.
 */
export const GlobalModal = () => {
  const { isOpen, title, description, content, closeModal } = useModalStore();

  // Handle body scroll and keyboard events
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-[6px]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 350,
              mass: 0.5,
            }}
            className={cn(
              "bg-card border-border relative w-full max-w-lg overflow-hidden rounded-xl border shadow-2xl shadow-black/40",
              "before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/5 before:to-transparent"
            )}
          >
            {/* Header */}
            <div className="relative flex items-start justify-between p-8 pb-4">
              <div className="space-y-1">
                {title && (
                  <h3 className="font-heading text-foreground text-2xl font-bold tracking-tight">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="text-muted-foreground text-sm font-medium">{description}</p>
                )}
              </div>
              <button
                onClick={closeModal}
                className="bg-muted text-muted-foreground hover:text-foreground flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95"
              >
                <X className="h-5 w-5" strokeWidth={2.5} />
              </button>
            </div>

            {/* Content Body */}
            <div className="relative p-8 pt-4">{content}</div>

            {/* Decorative bottom element */}
            <div className="via-primary/20 absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent to-transparent" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
