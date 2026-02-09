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
  mode?: string; // En ligne, Présentiel, Hybride
  vacation?: string; // Matinale, Soir
  pratique?: string; // Continu, etc.
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
          <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg text-white">
            {String(item.value).padStart(2, "0")}
          </div>
          <span className="text-xs text-gray-500 mt-1 block">{item.label}</span>
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
      price: "139 $",
      image: "/images/Market_place_formation.jpg.jpeg",
      instructor: "Expert MPS",
      spots: 20,
      status: "future",
      index: 10, // Mise en avant maximale - Formation à la une
      mode: "En ligne",
      vacation: "Matinale",
      pratique: "Continu",
    },
    {
      id: 2,
      title: "Spike Detector - Boom/Crash Avancé",
      description: "Base incontournable pour trader les spikes Boom/Crash Index. Débloquez la compétence \"Spike Detector\" sur Boom/Crash Index !",
      date: "2026-03-17T18:00:00",
      duration: "30 heures",
      level: "Avancé",
      price: "259 $",
      instructor: "Expert MPS",
      spots: 15,
      status: "future",
      index: 9, // Formation à venir
      mode: "En ligne",
      vacation: "Soir",
      pratique: "Continu",
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
    // Formations récentes
    {
      id: 5,
      title: "Base du Trading",
      description: "Les bases du trading : initiation au trading et aux plateformes de trading.",
      date: "2025-02-17T18:00:00",
      duration: "24 heures",
      level: "Débutant",
      price: "100 $ (promo)",
      instructor: "Hervé K. & Darryl K.",
      spots: 24,
      status: "passee",
      index: 6,
      mode: "Présentiel",
      vacation: "Soir",
    },
    {
      id: 6,
      title: "Colloque – Les Indices Synthétiques Deriv",
      description: "Échange pratique sur les indices synthétiques Deriv : Boom, Crash, Jump, Volatilité.",
      date: "2025-04-17T18:00:00",
      duration: "6 heures",
      level: "Mixte",
      price: "100 $ (promo)",
      instructor: "Darryl K. & Joycelin P.",
      spots: 24,
      status: "passee",
      index: 5,
      mode: "Présentiel",
      vacation: "Soir",
    },
    {
      id: 8,
      title: "Trading Forex – Stratégies de Base",
      description: "Comprendre le Forex, les paires de devises, les sessions de marché et les stratégies simples pour débuter.",
      date: "2025-05-10T09:00:00",
      duration: "20 heures",
      level: "Débutant",
      price: "120 $",
      instructor: "Expert MPS",
      spots: 18,
      status: "passee",
      index: 4,
      mode: "Présentiel",
      vacation: "Matinale",
    },
    {
      id: 9,
      title: "Analyse Technique et Indicateurs",
      description: "Utilisation des indicateurs techniques : RSI, MACD, Moyennes mobiles et figures graphiques.",
      date: "2025-06-15T18:00:00",
      duration: "18 heures",
      level: "Intermédiaire",
      price: "150 $",
      instructor: "Darryl K.",
      spots: 20,
      status: "passee",
      index: 3,
      mode: "En ligne",
      vacation: "Soir",
    },
    {
      id: 10,
      title: "Boom & Crash – Détection des Spikes",
      description: "Techniques avancées pour détecter les spikes sur Boom et Crash et améliorer la précision d'entrée.",
      date: "2025-08-20T18:00:00",
      duration: "16 heures",
      level: "Avancé",
      price: "180 $",
      instructor: "Darryl K.",
      spots: 15,
      status: "passee",
      index: 2,
      mode: "En ligne",
      vacation: "Soir",
    },
    {
      id: 11,
      title: "Gestion du Risque et Psychologie du Trader",
      description: "Apprendre à protéger son capital, gérer ses émotions et construire une discipline de trader professionnel.",
      date: "2025-11-05T09:00:00",
      duration: "36 heures",
      level: "Mixte",
      price: "250 $ (promo)",
      instructor: "Darryl K.",
      spots: 22,
      status: "passee",
      index: 1,
      mode: "En ligne",
      vacation: "Matinale",
    },
  ];

  // Filtrer et trier les formations par statut et date
  const getFormationsByStatus = (status: Formation["status"]) => {
    return formations
      .filter((f) => f.status === status)
      .sort((a, b) => {
        // Tri chronologique par date (plus récent en premier pour passées, plus proche en premier pour futures/encours)
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        if (status === "passee") {
          return dateB - dateA; // Plus récent en premier
        }
        return dateA - dateB; // Plus proche en premier
      });
  };

  const formationsFutures = getFormationsByStatus("future");
  const formationsEnCours = getFormationsByStatus("encours");
  const formationsPassees = getFormationsByStatus("passee");

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant":
        return "bg-green-100 text-green-700";
      case "Intermédiaire":
        return "bg-yellow-100 text-yellow-700";
      case "Avancé":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-[116px]">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        <div className="absolute inset-0 bg-[url('/images/tradeur.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
            🎓 Développez vos compétences
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos Formations
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Formations complètes pour maîtriser les marchés financiers, du débutant à l'expert.
            Modules annuels, formateurs expérimentés, sécurité et professionnalisme garantis.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-2 bg-white p-2 rounded-2xl border border-gray-200 shadow-lg">
            {[
              { id: "future", label: "Formations à venir", count: formationsFutures.length },
              { id: "encours", label: "En cours", count: formationsEnCours.length },
              { id: "passee", label: "Récentes", count: formationsPassees.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                    : "text-gray-500 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                {tab.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id ? "bg-white/20" : "bg-gray-100"
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
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* Formation principale mise en avant */}
            {formationsFutures[0] && (
              <div className="mb-16">
                <div className="text-center mb-8">
                  <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                    ⭐ Prochaine formation
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Formation à la une</h2>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-red-50 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                      <div className="relative h-64 lg:h-auto">
                        <Image
                          src={formationsFutures[0].image || "/images/tradeur.jpg"}
                          alt={formationsFutures[0].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/80 lg:bg-gradient-to-r lg:from-transparent lg:to-white"></div>
                      </div>
                      <div className="p-8 lg:p-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(formationsFutures[0].level)}`}>
                            {formationsFutures[0].level}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {formationsFutures[0].duration}
                          </span>
                          {formationsFutures[0].mode && (
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              {formationsFutures[0].mode}
                            </span>
                          )}
                          {formationsFutures[0].vacation && (
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                              {formationsFutures[0].vacation}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-red-600">
                          {formationsFutures[0].title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {formationsFutures[0].description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Début : <strong>16 février 2026</strong></span>
                          </div>
                          {formationsFutures[0].pratique && (
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Pratique : <strong>{formationsFutures[0].pratique}</strong></span>
                            </div>
                          )}
                        </div>

                        <div className="mb-8">
                          <p className="text-sm text-gray-500 mb-3 text-center">La formation commence dans :</p>
                          <Countdown targetDate={formationsFutures[0].date} />
                        </div>

                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <span className="text-3xl font-bold text-gray-800">{formationsFutures[0].price}</span>
                            <span className="text-gray-500 text-sm ml-2">/ formation complète</span>
                          </div>
                          {formationsFutures[0].spots && (
                            <span className="text-red-600 text-sm font-medium">
                              {formationsFutures[0].spots} places disponibles
                            </span>
                          )}
                        </div>

                        <Link
                          href="https://docs.google.com/forms/d/e/1FAIpQLScy_M1z6q9VMlpFMq3pKVEr83I8D8TYVtImKWXk_d6fj5i-XQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer"
                          className="block w-full text-center py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
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
                <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Autres formations à venir</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {formationsFutures.slice(1).map((formation) => (
                    <div
                      key={formation.id}
                      className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all hover:border-red-200"
                    >
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(formation.level)}`}>
                          {formation.level}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {formation.duration}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold mb-3 text-gray-800">{formation.title}</h4>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{formation.description}</p>

                      <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Début : {new Date(formation.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">Commence dans :</p>
                        <Countdown targetDate={formation.date} />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-800">{formation.price}</span>
                        <Link
                          href="https://docs.google.com/forms/d/e/1FAIpQLSe7sK1_kaXCvfuuG7Xu5o3hOA-sEc4CZ5xc5ZwKEferAAZWHw/viewform" target="_blank" rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-medium text-sm transition-all hover:scale-105"
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
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {formationsEnCours.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {formationsEnCours.map((formation) => (
                  <div
                    key={formation.id}
                    className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-green-600 text-sm font-medium">En cours</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(formation.level)}`}>
                        {formation.level}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {formation.duration}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold mb-2 text-gray-800">{formation.title}</h4>
                    <p className="text-gray-500 text-sm mb-4">{formation.description}</p>

                    <div className="space-y-2 text-sm border-t border-gray-100 pt-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Début :</span>
                        <span className="font-medium text-gray-700">{new Date(formation.date).toLocaleDateString("fr-FR")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Formateur :</span>
                        <span className="font-medium text-gray-700">{formation.instructor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Prix :</span>
                        <span className="font-medium text-red-600">{formation.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Aucune formation en cours</h3>
                <p className="text-gray-500">Consultez nos formations à venir pour vous inscrire.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Formations Récentes */}
      {activeTab === "passee" && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {formationsPassees.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {formationsPassees.map((formation) => (
                  <div
                    key={formation.id}
                    className="bg-white rounded-2xl border border-gray-200 p-6 opacity-90"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-gray-500 text-sm font-medium">✓ Terminée</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(formation.level)}`}>
                        {formation.level}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {formation.duration}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold mb-2 text-gray-800">{formation.title}</h4>
                    <p className="text-gray-500 text-sm mb-4">{formation.description}</p>

                    <div className="space-y-2 text-sm border-t border-gray-100 pt-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Date :</span>
                        <span className="font-medium text-gray-700">{new Date(formation.date).toLocaleDateString("fr-FR")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Formateur :</span>
                        <span className="font-medium text-gray-700">{formation.instructor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Participants :</span>
                        <span className="font-medium text-gray-700">{formation.spots}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Prix :</span>
                        <span className="font-medium text-red-600">{formation.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📖</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Aucune formation récente</h3>
                <p className="text-gray-500">Les formations terminées apparaîtront ici.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">
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
