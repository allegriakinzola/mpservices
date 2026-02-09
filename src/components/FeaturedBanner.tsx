"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FeaturedBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const messages = [
    "🎓 Formation Boom/Crash Index - De zéro à trader confirmé",
    "💰 Prix spécial : 139$ seulement",
    "📅 Début : 16 février 2026 à 9h00",
    "⏰ Places limitées - Inscrivez-vous maintenant !",
    "🎯 30 heures de formation complète",
    "✨ Formation en ligne via Google Meet",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-3">
          {/* Image miniature */}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScy_M1z6q9VMlpFMq3pKVEr83I8D8TYVtImKWXk_d6fj5i-XQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 hidden md:block"
          >
            <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 hover:border-white transition-all hover:scale-105 shadow-lg">
              <Image
                src="/images/Market_place_formation.jpg.jpeg"
                alt="Formation Boom/Crash"
                fill
                className="object-cover"
              />
            </div>
          </Link>

          <div className="flex-1 flex items-center justify-center gap-3 overflow-hidden">
            <div className="flex-shrink-0">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/30">
                ⭐ FORMATION À LA UNE
              </span>
            </div>
            
            <div className="flex-1 overflow-hidden">
              <div className="animate-fade-in">
                <p className="text-sm md:text-base font-medium text-center whitespace-nowrap">
                  {messages[currentMessageIndex]}
                </p>
              </div>
            </div>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScy_M1z6q9VMlpFMq3pKVEr83I8D8TYVtImKWXk_d6fj5i-XQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-4 py-2 bg-white text-red-700 hover:bg-gray-100 rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow-lg hidden sm:block"
            >
              S'inscrire
            </Link>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Fermer la bannière"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
