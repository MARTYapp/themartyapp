"use client";

import Modal from "@/components/Modal";

interface UpgradeModalProps {
  show: boolean;
  onClose: () => void;
}

export default function UpgradeModal({ show, onClose }: UpgradeModalProps) {
  return (
    <Modal show={show} onClose={onClose}>
      <h2 className="text-2xl font-semibold text-[#3B82F6] mb-6">
        Upgrade to Pro
      </h2>

      <div className="space-y-6 mb-8 text-gray-300 text-base">
        <div>
          <p className="font-semibold text-white">Free</p>
          <p>Basic journaling & reflection</p>
        </div>
        <div>
          <p className="font-semibold text-white">Pro — $9.99/mo</p>
          <p>Deeper analytics & adaptive tone</p>
        </div>
        <div>
          <p className="font-semibold text-white">Premium</p>
          <p>Custom coaching modules</p>
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-6">
        Help fund theMARTYapp<br />
        Built by Eric Adler — Quiet tech for loud minds.
      </p>

      <a
        href="https://www.buymeacoffee.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-full text-[#3B82F6] border border-[#3B82F6] font-semibold hover:bg-[#3B82F6] hover:text-black transition inline-block"
      >
        Buy Me a Coffee
      </a>
    </Modal>
  );
}