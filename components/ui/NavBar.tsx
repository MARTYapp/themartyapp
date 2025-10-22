import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 text-sm font-medium">
      <Link href="/" className="font-bold hover:opacity-80">theMARTYapp</Link>
      <div className="space-x-6">
        <Link href="/features" className="hover:underline">Features</Link>
        <Link href="/pricing" className="hover:underline">Pricing</Link>
      </div> </nav>
  )
}