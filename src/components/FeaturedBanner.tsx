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
    <div className="fixed top-16 left-0 right-0 z-40 shadow-lg animate-slide-down overflow-hidden">
      {/* Dégradé blanc-rouge animé */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-red-500 to-red-700 animate-gradient-move"></div>
      
      {/* Effet shimmer animé */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-2 relative">
        <div className="flex items-center justify-between gap-3">
          {/* Image miniature avec animation */}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScy_M1z6q9VMlpFMq3pKVEr83I8D8TYVtImKWXk_d6fj5i-XQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 hidden md:block animate-bounce-slow"
          >
            <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 hover:border-white transition-all hover:scale-110 shadow-lg animate-pulse-border">
              <Image
                src="/images/Market_place_formation.jpg.jpeg"
                alt="Formation Boom/Crash"
                fill
                className="object-cover"
              />
              {/* Badge "NEW" animé */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center animate-ping-slow">
                <span className="absolute w-3 h-3 bg-yellow-400 rounded-full"></span>
              </div>
            </div>
          </Link>

          <div className="flex-1 flex items-center justify-center gap-3 overflow-hidden">
            <div className="flex-shrink-0 animate-pulse-glow">
              <span className="inline-block px-3 py-1 bg-red-700/80 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/50 shadow-glow text-white">
                ⭐ FORMATION À LA UNE
              </span>
            </div>
            
            <div className="flex-1 overflow-hidden">
              <div className="animate-fade-in">
                <p className="text-sm md:text-base font-bold text-center whitespace-nowrap animate-text-glow text-red-900">
                  {messages[currentMessageIndex]}
                </p>
              </div>
            </div>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScy_M1z6q9VMlpFMq3pKVEr83I8D8TYVtImKWXk_d6fj5i-XQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-4 py-2 bg-red-700 text-white hover:bg-red-800 rounded-lg font-semibold text-sm transition-all hover:scale-110 shadow-lg hidden sm:block animate-bounce-subtle"
            >
              S'inscrire
            </Link>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 hover:bg-red-700/30 rounded-full transition-colors hover:rotate-90 duration-300 text-red-900"
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
        
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
            background-size: 200% 200%;
          }
          50% {
            background-position: 100% 50%;
            background-size: 200% 200%;
          }
          100% {
            background-position: 0% 50%;
            background-size: 200% 200%;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes pulse-border {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          50% {
            box-shadow: 0 0 0 4px rgba(255, 255, 255, 0);
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-gradient-move {
          animation: gradient-move 8s ease infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
        
        .shadow-glow {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
