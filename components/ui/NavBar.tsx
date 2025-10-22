export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 text-sm font-medium">
      <a href="/" className="font-bold hover:opacity-80">theMARTYapp</a>
      <div className="space-x-6">
        <a href="/features" className="hover:underline">Features</a>
        <a href="/pricing" className="hover:underline">Pricing</a>
      </div>
    </nav>
  )
}