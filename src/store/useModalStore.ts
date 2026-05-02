import { create } from "zustand";
import { ReactNode } from "react";

interface ModalState {
  isOpen: boolean;
  title?: string;
  description?: string;
  content?: ReactNode;
  openModal: (config: { title?: string; description?: string; content: ReactNode }) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: undefined,
  description: undefined,
  content: undefined,
  openModal: ({ title, description, content }) =>
    set({ isOpen: true, title, description, content }),
  closeModal: () =>
    set({
      isOpen: false,
    }),
}));
