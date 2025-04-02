import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-primary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-primary">
            RTS
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-tertiary hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-tertiary hover:text-primary transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/sobre-nosotros"
              className="text-tertiary hover:text-primary transition-colors"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/contacto"
              className="text-tertiary hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </div>

          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/"
              className="block text-tertiary hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="block text-tertiary hover:text-primary transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/sobre-nosotros"
              className="block text-tertiary hover:text-primary transition-colors"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/contacto"
              className="block text-tertiary hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
