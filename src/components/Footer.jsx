export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Algassimou Sow. Tous droits réservés.
      </div>
    </footer>
  )
}