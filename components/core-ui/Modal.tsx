"use client";

import { ReactNode } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ show, onClose, children }: ModalProps) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 rounded-t-2xl sm:rounded-2xl w-full sm:w-[480px] p-8 text-center text-gray-200 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}