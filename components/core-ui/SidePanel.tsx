"use client"

interface SidePanelProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export default function SidePanel({ open, setOpen }: SidePanelProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 sm:w-80 bg-[#001f3f]/95 text-white backdrop-blur-md shadow-xl transform transition-transform duration-500 z-40 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-6 flex flex-col gap-6">
        <h2 className="text-xl font-semibold tracking-wide">MARTY ≠ THERAPY</h2>
        <nav className="flex flex-col gap-3 text-sm sm:text-base">
          <a href="#" className="hover:text-[#0070f3]">Mission</a>
          <a href="#" className="hover:text-[#0070f3]">Features & Pricing</a>
          <a href="#" className="hover:text-[#0070f3]">Subscribe</a>
          <a href="#" className="hover:text-[#0070f3]">About the Founder</a>
          <a href="#" className="hover:text-[#0070f3]">Help Fund MARTY</a>
        </nav>
        <button
          onClick={() => setOpen(false)}
          className="mt-6 px-4 py-2 text-sm rounded-full bg-[#0070f3] hover:bg-[#0090ff] transition"
        >
          Close
        </button>
      </div>
    </div>
  )
}