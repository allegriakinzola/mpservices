"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/formations', label: 'Formations' },
    { href: '/partenariats', label: 'Partenariats' },
    { href: '/realisations', label: 'Réalisations' },
    { href: '/services', label: 'Services' },
    { href: '/communaute', label: 'Communauté' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-10 h-10 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/logo.PNG"
                  alt="Market Place Services"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold hidden sm:block">
                Market Place <span className="text-orange-300">Services</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/inscription" 
              className="ml-4 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-orange-900/30"
            >
              S'inscrire
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              <span className="sr-only">Ouvrir le menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} border-t border-white/10`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-gradient-to-b from-red-900 to-red-950">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/inscription" 
            className="block w-full text-center px-4 py-3 mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg text-base font-semibold transition-colors"
            onClick={() => setIsOpen(false)}
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </nav>
  );
}
