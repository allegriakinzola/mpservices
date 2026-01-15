"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Formation {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  level: string;
  price: string;
  image?: string;
  instructor: string;
  spots?: number;
  status: "future" | "encours" | "passee";
  index: number; // Plus l'index est élevé, plus la formation est mise en avant
}

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-3 justify-center">
      {[
        { value: timeLeft.days, label: "Jours" },
        { value: timeLeft.hours, label: "Heures" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Sec" },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
            {String(item.value).padStart(2, "0")}
          </div>
          <span className="text-xs text-gray-400 mt-1 block">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function FormationsPage() {
  const [activeTab, setActiveTab] = useState<"future" | "encours" | "passee">("future");

  // Tableau unique de toutes les formations
  const formations: Formation[] = [
    // Formations futures
    {
      id: 1,
      title: "Boom/Crash Index - Formation Complète",
      description: "Base incontournable pour trader les indices Boom/Crash. Maîtriser les contours de Boom/Crash Index comme un pro. De zéro à trader confirmé.",
      date: "2026-02-16T09:00:00",
      duration: "30 heures",
      level: "Débutant",
      price: "139$",
      instructor: "Expert MPS",
      spots: 20,
      status: "future",
      index: 10, // Mise en avant maximale - Formation à la une
    },
    {
      id: 2,
      title: "Spike Detector - Boom/Crash Avancé",
      description: "Base incontournable pour trader les spikes Boom/Crash Index. Débloquez la compétence \"Spike Detector\" sur Boom/Crash Index !",
      date: "2026-03-17T18:00:00",
      duration: "30 heures",
      level: "Avancé",
      price: "259$",
      instructor: "Expert MPS",
      spots: 15,
      status: "future",
      index: 9, // Formation à venir
    },
    // Formations en cours
    {
      id: 4,
      title: "Trading Forex - Niveau Intermédiaire",
      description: "Formation en cours sur les techniques intermédiaires du trading Forex.",
      date: "2026-01-10T09:00:00",
      duration: "3 semaines",
      level: "Intermédiaire",
      price: "199$",
      instructor: "Expert MPS",
      status: "encours",
      index: 8,
    },
    {
      id: 7,
      title: "Scalping & Day Trading",
      description: "Techniques de scalping et day trading pour des gains quotidiens.",
      date: "2026-01-12T10:00:00",
      duration: "2 semaines",
      level: "Avancé",
      price: "249$",
      instructor: "Expert MPS",
      status: "encours",
      index: 5,
    },
    // Formations passées
    {
      id: 5,
      title: "Les Bases du Trading",
      description: "Formation complète sur les fondamentaux du trading pour débutants.",
      date: "2025-12-01T09:00:00",
      duration: "2 semaines",
      level: "Débutant",
      price: "99$",
      instructor: "Expert MPS",
      status: "passee",
      index: 2,
    },
    {
      id: 6,
      title: "Analyse Technique Fondamentale",
      description: "Maîtrisez les outils d'analyse technique essentiels pour le trading.",
      date: "2025-11-15T09:00:00",
      duration: "2 semaines",
      level: "Débutant",
      price: "129$",
      instructor: "Expert MPS",
      status: "passee",
      index: 1,
    },
  ];

  // Filtrer et trier les formations par statut et index
  const getFormationsByStatus = (status: Formation["status"]) => {
    return formations
      .filter((f) => f.status === status)
      .sort((a, b) => b.index - a.index); // Tri décroissant par index
  };

  const formationsFutures = getFormationsByStatus("future");
  const formationsEnCours = getFormationsByStatus("encours");
  const formationsPassees = getFormationsByStatus("passee");

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant":
        return "bg-green-500/20 text-green-300";
      case "Intermédiaire":
        return "bg-yellow-500/20 text-yellow-300";
      case "Avancé":
        return "bg-red-500/20 text-red-300";
      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-blue-900 text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 to-red-900"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
            🎓 Développez vos compétences
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos <span className="text-orange-400">Formations</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Formations complètes pour maîtriser les marchés financiers, du débutant à l'expert.
            Modules annuels, formateurs expérimentés, sécurité et professionnalisme garantis.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-4 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-2 bg-white/5 backdrop-blur-sm p-2 rounded-2xl border border-white/10">
            {[
              { id: "future", label: "Formations à venir", count: formationsFutures.length },
              { id: "encours", label: "En cours", count: formationsEnCours.length },
              { id: "passee", label: "Passées", count: formationsPassees.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id ? "bg-white/20" : "bg-white/10"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Futures - Featured */}
      {activeTab === "future" && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Formation principale mise en avant */}
            {formationsFutures[0] && (
              <div className="mb-16">
                <div className="text-center mb-8">
                  <span className="inline-block px-4 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-medium mb-4">
                    ⭐ Prochaine formation
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold">Formation à la une</h2>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-600/30 to-orange-500/30 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                      <div className="relative h-64 lg:h-auto">
                        <Image
                          src="/images/tradeur.jpg"
                          alt={formationsFutures[0].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-red-900/80 lg:bg-gradient-to-r lg:from-transparent lg:to-red-950"></div>
                      </div>
                      <div className="p-8 lg:p-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(formationsFutures[0].level)}`}>
                            {formationsFutures[0].level}
                          </span>
                          <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                            {formationsFutures[0].duration}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-orange-300">
                          {formationsFutures[0].title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {formationsFutures[0].description}
                        </p>

                        <div className="flex items-center gap-2 mb-4 text-gray-300">
                          <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>Début : <strong>{new Date(formationsFutures[0].date).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</strong></span>
                        </div>

                        <div className="mb-8">
                          <p className="text-sm text-gray-400 mb-3 text-center">La formation commence dans :</p>
                          <Countdown targetDate={formationsFutures[0].date} />
                        </div>

                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <span className="text-3xl font-bold text-white">{formationsFutures[0].price}</span>
                            <span className="text-gray-400 text-sm ml-2">/ formation complète</span>
                          </div>
                          {formationsFutures[0].spots && (
                            <span className="text-orange-300 text-sm">
                              {formationsFutures[0].spots} places disponibles
                            </span>
                          )}
                        </div>

                        <Link
                          href="https://docs.google.com/forms/d/e/1FAIpQLSe7sK1_kaXCvfuuG7Xu5o3hOA-sEc4CZ5xc5ZwKEferAAZWHw/viewform" target="_blank" rel="noopener noreferrer"
                          className="block w-full text-center py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
                        >
                          S'inscrire maintenant
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Autres formations futures */}
            {formationsFutures.length > 1 && (
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Autres formations à venir</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {formationsFutures.slice(1).map((formation) => (
                    <div
                      key={formation.id}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all hover:border-white/20"
                    >
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(formation.level)}`}>
                          {formation.level}
                        </span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                          {formation.duration}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold mb-3">{formation.title}</h4>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{formation.description}</p>

                      <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Début : {new Date(formation.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Commence dans :</p>
                        <Countdown targetDate={formation.date} />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">{formation.price}</span>
                        <Link
                          href="https://docs.google.com/forms/d/e/1FAIpQLSe7sK1_kaXCvfuuG7Xu5o3hOA-sEc4CZ5xc5ZwKEferAAZWHw/viewform" target="_blank" rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-lg font-medium text-sm transition-all hover:scale-105"
                        >
                          S'inscrire
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Formations En Cours */}
      {activeTab === "encours" && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {formationsEnCours.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {formationsEnCours.map((formation) => (
                  <div
                    key={formation.id}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-green-400 text-sm font-medium">En cours</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(formation.level)}`}>
                        {formation.level}
                      </span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                        {formation.duration}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold mb-3">{formation.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{formation.description}</p>

                    <div className="text-sm text-gray-500">
                      Début : {new Date(formation.date).toLocaleDateString("fr-FR")}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold mb-2">Aucune formation en cours</h3>
                <p className="text-gray-400">Consultez nos formations à venir pour vous inscrire.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Formations Passées */}
      {activeTab === "passee" && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {formationsPassees.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {formationsPassees.map((formation) => (
                  <div
                    key={formation.id}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 opacity-75"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-gray-500 text-sm font-medium">✓ Terminée</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(formation.level)}`}>
                        {formation.level}
                      </span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                        {formation.duration}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold mb-3">{formation.title}</h4>
                    <p className="text-gray-400 text-sm mb-4">{formation.description}</p>

                    <div className="text-sm text-gray-500">
                      Date : {new Date(formation.date).toLocaleDateString("fr-FR")}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📖</div>
                <h3 className="text-2xl font-bold mb-2">Aucune formation passée</h3>
                <p className="text-gray-400">Les formations terminées apparaîtront ici.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-800 via-red-700 to-red-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'une formation personnalisée ?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contactez-nous pour un coaching sur mesure adapté à vos objectifs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-900 hover:bg-gray-100 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Nous contacter
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
