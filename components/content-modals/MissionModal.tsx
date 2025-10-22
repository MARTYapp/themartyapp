"use client";

import Modal from "@/components/core-ui/Modal";

interface MissionModalProps {
  show: boolean;
  onClose: () => void;
}

export default function MissionModal({ show, onClose }: MissionModalProps) {
  return (
    <Modal show={show} onClose={onClose}>
      <h2 className="text-2xl font-semibold text-[#3B82F6] mb-4">
        theMARTYapp
      </h2>
      <p className="text-gray-300 text-base leading-relaxed mb-8">
        Built in New York City by Eric Adler.<br />
        <br />
        theMARTYapp is a masculine, emotionally fluent ecosystem designed to
        help people turn chaos into clarity — without pretending to be therapy.
        <br />
        <br />
        We believe emotional fluency is a muscle, not a mood.
      </p>
      <button
        onClick={onClose}
        className="px-6 py-3 rounded-full text-[#3B82F6] border border-[#3B82F6] font-semibold hover:bg-[#3B82F6] hover:text-black transition"
      >
        Talk to MARTY
      </button>
    </Modal>
  );
}