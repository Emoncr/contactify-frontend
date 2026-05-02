"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/store/useModalStore";

/**
 * A global modal wrapper that uses Shadcn UI's Dialog component.
 * This ensures consistency with the rest of the application's UI components.
 */
export const GlobalModal = () => {
  const { isOpen, title, description, content, closeModal } = useModalStore();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="rounded-xl sm:max-w-[500px]">
        {(title || description) && (
          <DialogHeader>
            {title && (
              <DialogTitle className="font-heading text-2xl font-bold tracking-tight">
                {title}
              </DialogTitle>
            )}
            {description && (
              <DialogDescription className="text-muted-foreground font-medium">
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        )}
        <div className="py-2">{content}</div>
      </DialogContent>
    </Dialog>
  );
};
