"use client";

import Image from "next/image";
import { useState } from "react";

interface Conference {
  id: number;
  title: string;
  date: string;
  location: string;
  participants: number;
  description: string;
  image?: string;
}

interface FormationRealisee {
  id: number;
  title: string;
  date: string;
  participants: number;
  duration: string;
  type: string;
}

interface Etudiant {
  id: number;
  name: string;
  formation: string;
  dateFormation: string;
  isTrader: boolean;
  testimonial?: string;
  image?: string;
}

export default function RealisationsPage() {
  const [activeSection, setActiveSection] = useState<"conferences" | "formations" | "etudiants" | "traders">("conferences");

  // Statistiques globales
  const stats = [
    { label: "Conférences organisées", value: "+50", icon: "🎙" },
    { label: "Classes formées", value: "+30", icon: "📚" },
    { label: "Étudiants formés", value: "+350", icon: "🎓" },
    { label: "Personnes touchées", value: "+500", icon: "📈" },
  ];

  // Conférences
  const conferences: Conference[] = [
    {
      id: 1,
      title: "Conférence Trading – Brazzaville",
      date: "2025-11-14",
      location: "Hôtel GHS, Brazzaville, Congo",
      participants: 20,
      description: "Échange avec les traders résidant en République du Congo sur les enjeux du trading, les risques et les stratégies appropriées pour améliorer leur rentabilité. Thème : Expérience Deriv (+25 ans d'activité). Durée : 2 jours (14-16/11/2025). Partenaire : Deriv.",
    },
    {
      id: 2,
      title: "Conférence Déc-Fin : Déclic Financier",
      date: "2026-02-07",
      location: "Silikin Village",
      participants: 100,
      description: "Événement à venir. Thème : Déclic financier. Date : 07 février 2026. Heure : 09h00. Durée : 3 heures. Capacité : 100 personnes.",
    },
  ];

  // Formations réalisées
  const formationsRealisees: FormationRealisee[] = [
    {
      id: 1,
      title: "Trading Forex Avancé - Cohorte 15",
      date: "2025-12-01",
      participants: 45,
      duration: "4 semaines",
      type: "En ligne",
    },
    {
      id: 2,
      title: "Introduction au Trading - Cohorte 30",
      date: "2025-11-15",
      participants: 80,
      duration: "2 semaines",
      type: "En ligne",
    },
    {
      id: 3,
      title: "Indices Synthétiques Masterclass",
      date: "2025-10-20",
      participants: 35,
      duration: "3 semaines",
      type: "Présentiel",
    },
    {
      id: 4,
      title: "Crypto Trading Bootcamp",
      date: "2025-09-10",
      participants: 60,
      duration: "2 semaines",
      type: "Hybride",
    },
    {
      id: 5,
      title: "Analyse Technique Pro",
      date: "2025-08-05",
      participants: 40,
      duration: "3 semaines",
      type: "En ligne",
    },
    {
      id: 6,
      title: "Scalping & Day Trading",
      date: "2025-07-15",
      participants: 30,
      duration: "2 semaines",
      type: "En ligne",
    },
  ];

  // Étudiants formés
  const etudiants: Etudiant[] = [
    {
      id: 1,
      name: "Jean-Pierre Mukendi",
      formation: "Trading Forex Avancé",
      dateFormation: "2025-06",
      isTrader: true,
      testimonial: "Grâce à MPS, je trade maintenant à plein temps et je vis de mes revenus de trading.",
    },
    {
      id: 2,
      name: "Marie Kasongo",
      formation: "Crypto Trading",
      dateFormation: "2025-05",
      isTrader: true,
      testimonial: "J'ai quitté mon emploi pour devenir trader. Meilleure décision de ma vie !",
    },
    {
      id: 3,
      name: "Patrick Lubamba",
      formation: "Indices Synthétiques",
      dateFormation: "2025-04",
      isTrader: true,
      testimonial: "Les stratégies apprises chez MPS m'ont permis de générer des revenus constants.",
    },
    {
      id: 4,
      name: "Sarah Ngalula",
      formation: "Introduction au Trading",
      dateFormation: "2025-08",
      isTrader: false,
      testimonial: "Formation excellente, je continue d'apprendre pour devenir trader à plein temps.",
    },
    {
      id: 5,
      name: "David Tshimanga",
      formation: "Forex + Crypto",
      dateFormation: "2025-03",
      isTrader: true,
      testimonial: "Je gère maintenant un portefeuille diversifié grâce aux compétences acquises.",
    },
    {
      id: 6,
      name: "Esther Mbuyi",
      formation: "Analyse Technique",
      dateFormation: "2025-07",
      isTrader: false,
      testimonial: "J'ai amélioré mes analyses et mes décisions d'investissement.",
    },
    {
      id: 7,
      name: "Christian Kabongo",
      formation: "Scalping Masterclass",
      dateFormation: "2025-02",
      isTrader: true,
      testimonial: "Le scalping est devenu ma spécialité. Revenus quotidiens stables.",
    },
    {
      id: 8,
      name: "Grace Mutombo",
      formation: "Trading Complet",
      dateFormation: "2025-01",
      isTrader: true,
      testimonial: "De débutante à trader rentable en 6 mois. Merci MPS !",
    },
  ];

  const etudiantsFormes = etudiants;
  const etudiantsTraders = etudiants.filter((e) => e.isTrader);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-blue-900 text-white pt-16">
      {/* Hero Section - Design Amélioré */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background avec effets */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/95 via-red-800/90 to-blue-900/95"></div>
          {/* Cercles décoratifs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Badge animé */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            🏆 Notre parcours d'excellence
          </div>
          
          {/* Titre avec effet */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-white">Nos</span>
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
              Réalisations
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
            Découvrez notre impact : des conférences inspirantes, des formations de qualité, 
            et des centaines d'étudiants devenus <span className="text-orange-400 font-semibold">traders prospères</span>.
          </p>

          {/* Stats avec design premium */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 bg-white/5 backdrop-blur-sm p-2 rounded-2xl border border-white/10">
            {[
              { id: "conferences", label: "🎤 Conférences", count: conferences.length },
              { id: "formations", label: "📚 Formations", count: formationsRealisees.length },
              { id: "etudiants", label: "🎓 Étudiants formés", count: etudiantsFormes.length },
              { id: "traders", label: "📈 Traders actifs", count: etudiantsTraders.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as typeof activeSection)}
                className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl font-medium transition-all text-sm ${
                  activeSection === tab.id
                    ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeSection === tab.id ? "bg-white/20" : "bg-white/10"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section Conférences */}
      {activeSection === "conferences" && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-medium mb-4">
                🎤 Événements
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Conférences</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Des événements majeurs pour partager nos connaissances et inspirer la communauté des traders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {conferences.map((conf, index) => (
                <div
                  key={conf.id}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 via-orange-600/30 to-red-800/40"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-5xl">🎤</span>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full text-sm font-medium">
                        #{index + 1}
                      </div>
                      <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-sm font-bold shadow-lg">
                        {conf.participants} participants
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full">
                          <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(conf.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full">
                          <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {conf.location}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-300 transition-colors">
                        {conf.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{conf.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section Formations Réalisées */}
      {activeSection === "formations" && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4">
                📚 Historique
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Formations Réalisées</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Un historique de nos formations qui ont transformé des centaines de vies.
              </p>
            </div>

            {/* Cards au lieu du tableau */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {formationsRealisees.map((formation, index) => (
                <div
                  key={formation.id}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        formation.type === "En ligne" ? "bg-blue-500/20 text-blue-300" :
                        formation.type === "Présentiel" ? "bg-green-500/20 text-green-300" :
                        "bg-purple-500/20 text-purple-300"
                      }`}>
                        {formation.type}
                      </span>
                      <span className="text-2xl font-bold text-orange-400">{formation.participants}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-orange-300 transition-colors">{formation.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(formation.date).toLocaleDateString("fr-FR", { month: "short", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formation.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats résumé */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    {formationsRealisees.length}
                  </div>
                  <div className="text-gray-400">Formations terminées</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    {formationsRealisees.reduce((acc, f) => acc + f.participants, 0)}
                  </div>
                  <div className="text-gray-400">Participants formés</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section Étudiants Formés */}
      {activeSection === "etudiants" && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium mb-4">
                🎓 Nos diplômés
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Étudiants Formés</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Des profils diversifiés, unis par leur passion pour les marchés financiers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {etudiantsFormes.map((etudiant) => (
                <div
                  key={etudiant.id}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {etudiant.name.charAt(0)}
                    </div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-orange-300 transition-colors">{etudiant.name}</h4>
                    <p className="text-sm text-orange-300 mb-2">{etudiant.formation}</p>
                    <p className="text-xs text-gray-500 mb-4">Formé en {etudiant.dateFormation}</p>
                    {etudiant.isTrader ? (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Trader actif
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        En formation
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section Étudiants Traders */}
      {activeSection === "traders" && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium mb-4">
                📈 Success Stories
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Traders Actifs</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Ces étudiants sont devenus des traders rentables et vivent de leur passion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {etudiantsTraders.map((trader) => (
                <div
                  key={trader.id}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {trader.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-xl group-hover:text-green-300 transition-colors">{trader.name}</h4>
                          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Trader Actif
                          </span>
                        </div>
                        <p className="text-orange-300 mb-4">{trader.formation}</p>
                        {trader.testimonial && (
                          <div className="relative">
                            <svg className="absolute -top-2 -left-2 w-8 h-8 text-green-600/30" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-gray-300 italic pl-6 leading-relaxed">{trader.testimonial}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Taux de réussite */}
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-emerald-600/30 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-md rounded-3xl border border-green-500/20 p-12 max-w-3xl mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 shadow-xl">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Taux de réussite exceptionnel</h3>
                  <p className="text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                    {Math.round((etudiantsTraders.length / etudiantsFormes.length) * 100)}%
                  </p>
                  <p className="text-xl text-gray-300">
                    de nos étudiants sont devenus des traders actifs et rentables
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Design Premium */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Places limitées
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rejoignez notre prochaine cohorte
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Faites partie de nos success stories. Inscrivez-vous à nos formations et transformez votre avenir.
          </p>
          <a
            href="/formations"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-red-900 hover:bg-gray-100 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-2xl"
          >
            Voir les formations
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
