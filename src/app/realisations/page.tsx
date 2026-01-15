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
  theme: string;
  duration: string;
  time?: string;
  partner?: string;
  image?: string;
}

interface FormationRealisee {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  level: string;
  price: string;
  instructor: string;
  participants: number;
}

interface Colloque {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  level: string;
  price: string;
  instructor: string;
  participants: number;
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
      participants: 120,
      description: "Échange avec les traders résidant en République du Congo sur les enjeux du trading, les risques et les stratégies appropriées pour améliorer leur rentabilité.",
      theme: "Expérience Deriv (+25 ans d'activité)",
      duration: "2 jours (14-16/11/2025)",
      partner: "Deriv",
    },
    {
      id: 2,
      title: "Conférence Déc-Fin : Déclic Financier",
      date: "2026-02-07",
      location: "Silikin Village",
      participants: 100,
      description: "Événement à venir pour inspirer et motiver la communauté des traders.",
      theme: "Déclic financier",
      duration: "3 heures",
      time: "09h00",
    },
  ];

  // Formations réalisées (5 formations)
  const formationsRealisees: FormationRealisee[] = [
    {
      id: 1,
      title: "Gestion du Risque et Psychologie du Trader",
      description: "Apprendre à protéger son capital, gérer ses émotions et construire une discipline de trader professionnel.",
      date: "2025-11-05",
      duration: "16 heures",
      level: "Avancé",
      price: "250 $ (promo)",
      instructor: "Darryl K.",
      participants: 22,
    },
    {
      id: 2,
      title: "Boom & Crash – Détection des Spikes",
      description: "Techniques avancées pour détecter les spikes sur Boom et Crash et améliorer la précision d'entrée.",
      date: "2025-08-20",
      duration: "16 heures",
      level: "Avancé",
      price: "180 $",
      instructor: "Darryl K.",
      participants: 15,
    },
    {
      id: 3,
      title: "Analyse Technique et Indicateurs",
      description: "Utilisation des indicateurs techniques : RSI, MACD, Moyennes mobiles et figures graphiques.",
      date: "2025-06-15",
      duration: "18 heures",
      level: "Intermédiaire",
      price: "150 $",
      instructor: "Darryl K.",
      participants: 20,
    },
    {
      id: 4,
      title: "Trading Forex – Stratégies de Base",
      description: "Comprendre le Forex, les paires de devises, les sessions de marché et les stratégies simples pour débuter.",
      date: "2025-05-10",
      duration: "20 heures",
      level: "Débutant",
      price: "120 $",
      instructor: "Expert MPS",
      participants: 18,
    },
    {
      id: 5,
      title: "Base du Trading",
      description: "Les bases du trading : initiation au trading et aux plateformes de trading.",
      date: "2025-02-17",
      duration: "24 heures",
      level: "Débutant",
      price: "100 $ (promo)",
      instructor: "Hervé K. & Darryl K.",
      participants: 24,
    },
  ];

  // Colloque réalisé
  const colloque: Colloque = {
    id: 1,
    title: "Colloque – Les Indices Synthétiques Deriv",
    description: "Échange pratique sur les indices synthétiques Deriv : Boom, Crash, Jump, Volatilité.",
    date: "2025-04-17",
    duration: "6 heures",
    level: "Mixte",
    price: "100 $ (promo)",
    instructor: "Darryl K. & Joycelin P.",
    participants: 24,
  };

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
    <div className="min-h-screen bg-white text-gray-800 pt-16">
      {/* Hero Section - Design Amélioré */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        {/* Background avec effets */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/tradeur.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center text-white">
          {/* Badge animé */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            🏆 Notre parcours d'excellence
          </div>
          
          {/* Titre avec effet */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block">Nos Réalisations</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed">
            Découvrez notre impact : des conférences inspirantes, des formations de qualité, 
            et des centaines d'étudiants devenus <span className="font-semibold">traders prospères</span>.
          </p>

          {/* Stats avec design premium */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80 font-medium">{stat.label}</div>
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
      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 bg-white p-2 rounded-2xl border border-gray-200 shadow-lg">
            {[
              { id: "conferences", label: "🎙 Conférences", count: conferences.length },
              { id: "formations", label: "📚 Formations", count: formationsRealisees.length },
              { id: "etudiants", label: "🎓 Étudiants formés", count: etudiantsFormes.length },
              { id: "traders", label: "📈 Traders actifs", count: etudiantsTraders.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as typeof activeSection)}
                className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl font-medium transition-all text-sm ${
                  activeSection === tab.id
                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                    : "text-gray-500 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                {tab.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeSection === tab.id ? "bg-white/20" : "bg-gray-100"
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
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                🎙 Événements
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Nos Conférences</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Des événements majeurs pour partager nos connaissances et inspirer la communauté des traders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {conferences.map((conf, index) => (
                <div
                  key={conf.id}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-red-200 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-2xl">🎤</span>
                        </div>
                        <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-bold">
                          {conf.participants} participants
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-red-600 transition-colors">
                        {conf.title}
                      </h3>
                      
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{conf.description}</p>
                      
                      <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Thème :</span>
                          <span className="font-medium text-gray-700 text-right">{conf.theme}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Date :</span>
                          <span className="font-medium text-gray-700">{new Date(conf.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                        </div>
                        {conf.time && (
                          <div className="flex justify-between">
                            <span className="text-gray-500">Heure :</span>
                            <span className="font-medium text-gray-700">{conf.time}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-500">Durée :</span>
                          <span className="font-medium text-gray-700">{conf.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Lieu :</span>
                          <span className="font-medium text-gray-700 text-right">{conf.location}</span>
                        </div>
                        {conf.partner && (
                          <div className="flex justify-between">
                            <span className="text-gray-500">Partenaire :</span>
                            <span className="font-medium text-red-600">{conf.partner}</span>
                          </div>
                        )}
                      </div>
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
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                📚 Historique
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Formations & Colloques</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Un historique de nos formations et colloques qui ont transformé des centaines de vies.
              </p>
            </div>

            {/* Deux cards principales */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Card Formations */}
              <div className="bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">📚</span>
                  </div>
                  <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-bold">
                    ✓ {formationsRealisees.length} Terminées
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Formations</h3>
                <p className="text-gray-500 mb-6">Nos formations complètes pour devenir trader professionnel.</p>
                
                <div className="space-y-3 mb-6">
                  {formationsRealisees.map((formation) => (
                    <div key={formation.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700 font-medium text-sm">{formation.title}</span>
                      <span className="text-red-600 font-bold text-sm">{formation.participants} pers.</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-red-50 rounded-xl p-4 text-center">
                  <div className="text-4xl font-bold text-red-600 mb-1">
                    {formationsRealisees.reduce((acc, f) => acc + f.participants, 0)}
                  </div>
                  <div className="text-gray-600 text-sm">Participants au total</div>
                </div>
              </div>

              {/* Card Colloque */}
              <div className="bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-bold">
                    ✓ 1 Terminé
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Colloque</h3>
                <p className="text-gray-500 mb-6">Échange pratique et partage d'expériences entre traders.</p>
                
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">{colloque.title}</h4>
                  <p className="text-gray-500 text-sm mb-4">{colloque.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Date :</span>
                      <span className="font-medium text-gray-700">{new Date(colloque.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Durée :</span>
                      <span className="font-medium text-gray-700">{colloque.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Niveau :</span>
                      <span className="font-medium text-gray-700">{colloque.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Formateur :</span>
                      <span className="font-medium text-gray-700">{colloque.instructor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Prix :</span>
                      <span className="font-medium text-red-600">{colloque.price}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    {colloque.participants}
                  </div>
                  <div className="text-gray-600 text-sm">Participants</div>
                </div>
              </div>
            </div>

            {/* Stats résumé global */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-50 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl border border-gray-200 shadow-lg p-8 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-red-600">
                    {formationsRealisees.length + 1}
                  </div>
                  <div className="text-gray-600">Événements terminés</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-red-600">
                    {formationsRealisees.reduce((acc, f) => acc + f.participants, 0) + colloque.participants}
                  </div>
                  <div className="text-gray-600">Participants formés</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section Étudiants Formés */}
      {activeSection === "etudiants" && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
                🎓 Nos diplômés
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Nos Étudiants Formés</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Des profils diversifiés, unis par leur passion pour les marchés financiers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {etudiantsFormes.map((etudiant) => (
                <div
                  key={etudiant.id}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-red-200 transition-all duration-300 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {etudiant.name.charAt(0)}
                    </div>
                    <h4 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-red-600 transition-colors">{etudiant.name}</h4>
                    <p className="text-sm text-red-600 mb-2">{etudiant.formation}</p>
                    <p className="text-xs text-gray-500 mb-4">Formé en {etudiant.dateFormation}</p>
                    {etudiant.isTrader ? (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-full text-xs font-medium">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Trader actif
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
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
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                📈 Success Stories
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Nos Traders Actifs</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ces étudiants sont devenus des traders rentables et vivent de leur passion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {etudiantsTraders.map((trader) => (
                <div
                  key={trader.id}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl hover:border-red-200 transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {trader.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-xl text-gray-800 group-hover:text-red-600 transition-colors">{trader.name}</h4>
                          <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Trader Actif
                          </span>
                        </div>
                        <p className="text-red-600 font-medium mb-4">{trader.formation}</p>
                        {trader.testimonial && (
                          <div className="relative bg-gray-50 rounded-xl p-4">
                            <svg className="absolute top-2 left-2 w-6 h-6 text-red-200" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-gray-600 italic pl-8 leading-relaxed">{trader.testimonial}</p>
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
              <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-50 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl border border-red-200 shadow-xl p-12 max-w-3xl mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full blur-3xl"></div>
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl mb-6 shadow-xl">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">Taux de réussite exceptionnel</h3>
                  <p className="text-7xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-4">
                    {Math.round((etudiantsTraders.length / etudiantsFormes.length) * 100)}%
                  </p>
                  <p className="text-xl text-gray-600">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
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
