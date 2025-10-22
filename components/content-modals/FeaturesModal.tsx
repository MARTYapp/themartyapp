"use client";

import Modal from "@/components/Modal";

interface FeaturesModalProps {
  show: boolean;
  onClose: () => void;
}

export default function FeaturesModal({ show, onClose }: FeaturesModalProps) {
  return (
    <Modal show={show} onClose={onClose}>
      <h2 className="text-2xl font-semibold text-[#3B82F6] mb-6">
        Features
      </h2>

      <ul className="text-gray-300 text-base space-y-3 mb-8">
        <li>— Voice reflections</li>
        <li>— Loop detection</li>
        <li>— Adaptive persona engine</li>
        <li>— DBT-aligned nudges</li>
        <li>— Daily reflection summaries</li>
      </ul>

      <button
        onClick={onClose}
        className="px-6 py-3 rounded-full text-[#3B82F6] border border-[#3B82F6] font-semibold hover:bg-[#3B82F6] hover:text-black transition"
      >
        Close
      </button>
    </Modal>
  );
}