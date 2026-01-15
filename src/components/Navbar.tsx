"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/formations', label: 'Formations' },
    { href: '/realisations', label: 'Réalisations' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-gray-800 shadow-lg backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-10 h-10 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/logojpg.jpeg"
                  alt="Market Place Services"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold hidden sm:block">
                Market Place <span className="text-red-600">Services</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="ml-4 px-5 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-red-900/30"
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-red-50 focus:outline-none transition-colors"
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
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} border-t border-gray-100`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="block w-full text-center px-4 py-3 mt-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg text-base font-semibold transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </nav>
  );
}
