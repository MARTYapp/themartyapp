export default function Navbar() {
    return (
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#0B0C0F]/80 backdrop-blur-md">
        <a href="/" className="flex items-center space-x-2">
          <img src="/branding/logo-icon.png" alt="Marty" className="w-8 h-8" />
          <span className="font-semibold tracking-wide text-gray-100">MARTY</span>
        </a>
        <div className="space-x-6 text-sm text-gray-300">
          <a href="/pricing" className="hover:text-white">Pricing</a>
          <a href="/fund" className="hover:text-white">#FundTheFounder</a>
        </div>
      </nav>
    );
  }