"use client"
import { useState } from "react"
import NavBar from "@/components/ui/NavBar"
import MissionBox from "@/components/ui/MissionBox"
import LaunchModal from "@/components/ui/LaunchModal"
import FooterBar from "@/components/ui/FooterBar"

export default function Home() {
  const [showModal, setShowModal] = useState(true)

  return (
    <main className="flex flex-col justify-between min-h-screen bg-[#0033ff] text-white transition-all">
      <NavBar />
      <section className="flex-grow flex items-center justify-center px-4">
        <MissionBox />
      </section>
      <FooterBar />
      {showModal && <LaunchModal onClose={() => setShowModal(false)} />}
    </main>
  )
}