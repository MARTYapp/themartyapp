export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800 mt-12">
      <p>MARTY ≠ THERAPY • © {year}</p>
      <p className="mt-1 text-gray-600">
        Built and founded by <span className="text-gray-400">Eric Adler</span>
      </p>
    </footer>
  );
}