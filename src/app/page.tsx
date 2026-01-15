import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-16">
      {/* Bannière principale */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/tradeur.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 px-4 max-w-7xl mx-auto py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left text-white">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
                  🚀 Votre partenaire financier de confiance
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Market Place Services
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
                Plateforme de Formation & d'Orientation Financière
              </p>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 font-medium">
                Forex • Cryptomonnaies • Indices Synthétiques
              </p>
              
              <p className="text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
                Former, orienter et connecter aux vraies opportunités des marchés financiers.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-8">
                <Link 
                  href="/formations" 
                  className="px-8 py-4 bg-white text-red-700 hover:bg-gray-100 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Commencer maintenant
                </Link>
              </div>
              <p className="text-white/70 text-lg mb-4">Découvrir nos formations</p>
              
              <div className="flex justify-center lg:justify-start gap-4">
                <a href="https://wa.me/243820486006" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 hover:bg-green-600 rounded-full transition-all hover:scale-110 group" title="WhatsApp">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a href="https://t.me/+243820486006" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 hover:bg-blue-500 rounded-full transition-all hover:scale-110 group" title="Telegram">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                
                <a href="https://discord.gg/2XZBd9ty" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 hover:bg-indigo-600 rounded-full transition-all hover:scale-110 group" title="Discord">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.8 8.18 1.8 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.158-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.158 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-2xl"></div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/30 shadow-2xl">
                <Image
                  src="/images/tradeur.jpg"
                  alt="Trading Market Place Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Section Qui sommes-nous */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              À propos de nous
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Qui sommes-nous ?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-200/50 to-red-100/50 rounded-2xl blur-xl"></div>
              <div className="relative h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
              <Image
                src="/images/tradeur.jpg" 
                alt="Market Place Services" 
                fill
                className="object-cover"
              />
              </div>
            </div>
            
            <div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Market Place Services est une plateforme dédiée à l'éducation financière et à l'orientation vers les marchés financiers.
              </p>
              <h3 className="text-3xl font-bold mb-6 text-red-600">Notre Mission</h3>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Accompagner les débutants et les profils avancés dans la compréhension du trading, des marchés boursiers et de la gestion du risque, à travers des formations structurées, adaptées à la réalité locale et accessibles en ligne.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Former des personnes responsables, capables de comprendre ce qu'elles font avant d'agir.
                </p>
              </div>
              <Link 
                href="/realisations" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-medium transition-all hover:scale-105"
              >
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos domaines */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              Nos expertises
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Nos domaines d'expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos domaines de spécialisation pour maîtriser les marchés financiers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Trading Forex',
                description: 'Maîtrisez le trading des paires de devises avec nos stratégies éprouvées.',
                icon: '💱',
                color: 'from-blue-600 to-blue-800'
              },
              {
                title: 'Cryptomonnaies',
                description: 'Explorez l\'univers des cryptomonnaies et tradez les actifs numériques.',
                icon: '🪙',
                color: 'from-orange-600 to-orange-800'
              },
              {
                title: 'Indices Synthétiques',
                description: 'Découvrez le trading des indices synthétiques pour diversifier vos gains.',
                icon: '📊',
                color: 'from-purple-600 to-purple-800'
              },
              {
                title: 'Formation & Coaching',
                description: 'Bénéficiez d\'un accompagnement personnalisé adapté à votre niveau.',
                icon: '🎓',
                color: 'from-green-600 to-green-800'
              },
              {
                title: 'Partenariats Crypto',
                description: 'Accédez à des opportunités exclusives via nos partenaires d\'échange.',
                icon: '🤝',
                color: 'from-red-600 to-red-800'
              },
              {
                title: 'Analyse Technique',
                description: 'Apprenez à analyser les graphiques pour des décisions éclairées.',
                icon: '📈',
                color: 'from-cyan-600 to-cyan-800'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-red-200 hover:scale-105 hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                <div className="relative">
                  <div className="text-5xl mb-5">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-red-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-500 group-hover:text-gray-600 transition-colors">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/formations" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Découvrir nos formations
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              Nos outils
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Nos Partenaires</h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-12 items-center">
              {[
                { name: 'Binance', logo: '₿' },
                { name: 'MetaTrader', logo: 'MT' },
                { name: 'TradingView', logo: 'TV' },
                { name: 'Bybit', logo: 'BY' },
                { name: 'OKX', logo: 'OKX' },
                { name: 'Binance', logo: '₿' },
                { name: 'MetaTrader', logo: 'MT' },
                { name: 'TradingView', logo: 'TV' },
                { name: 'Bybit', logo: 'BY' },
                { name: 'OKX', logo: 'OKX' },
              ].map((partner, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-gray-200 hover:border-red-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center font-bold text-sm text-white">
                    {partner.logo}
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre équipe */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              Notre force
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Notre Équipe</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Darryl Kalambayi */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl border border-gray-200 p-8 text-center hover:border-red-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-500 shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <Image src="/images/Kalambayid.jpg" alt="Darryl Kalambayi" fill className="object-cover" />
                </div>
                <h4 className="font-bold text-gray-800 text-2xl mb-2">Darryl Kalambayi</h4>
                <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">Analyste Financier</span>
                <p className="text-gray-600 leading-relaxed text-sm"> Trader indépendant spécialisé sur les indices synthétiques Deriv (Boom/Crash) depuis 2018, avec une solide expérience dans l’analyse des mouvements de marché et la mise en place de stratégies performantes adaptées à ces instruments.</p>
              </div>
            </div>

            {/* Hervé Kabeya */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl border border-gray-200 p-8 text-center hover:border-red-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-500 shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <Image src="/images/Kabeyad.jpg" alt="Hervé Kabeya" fill className="object-cover" />
                </div>
                <h4 className="font-bold text-gray-800 text-2xl mb-2">Hervé Kabeya</h4>
                <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">Expert Forex</span>
                <p className="text-gray-600 leading-relaxed text-sm">+5 ans d'expertise approfondie sur les marchés financiers, spécialisé en Forex et en indices synthétiques Deriv, avec une maîtrise avancée de la détection et de l'exploitation des spikes pour des stratégies de trading précises et performantes.</p>
              </div>
            </div>

            {/* Joycelin Phoba */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl border border-gray-200 p-8 text-center hover:border-red-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-500 shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <Image src="/images/Phobad.JPG" alt="Joycelin Phoba" fill className="object-cover" />
                </div>
                <h4 className="font-bold text-gray-800 text-2xl mb-2">Joycelin Phoba</h4>
                <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">Analyste Technique</span>
                <p className="text-gray-600 leading-relaxed text-sm">+5 ans d'activité sur les marchés financiers, expert en indicateurs techniques et en analyse graphique, avec une solide maîtrise de l'analyse technique pour l'aide à la décision en trading.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
              Ils nous font confiance
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Ils ont transformé leur avenir avec MPS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La force de notre plateforme se mesure au succès de nos apprenants et partenaires. Voici leurs témoignages :
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Glody Zenga',
                role: 'Apprenant Forex',
                content: 'Grâce à la formation Forex de MPS, j\'ai enfin compris comment anticiper les tendances. C\'est la plateforme d\'orientation financière qui manquait en RDC !',
                rating: 5
              },
              {
                name: 'Elie Kalengayi',
                role: 'Participant Colloque',
                content: 'Le colloque sur les indices synthétiques a été un déclic. MPS nous connecte aux vraies opportunités avec un professionnalisme rare.',
                rating: 5
              },
              {
                name: 'Isaac Kamwanga',
                role: 'Investisseur Crypto',
                content: 'Le service Crypto de MPS est d\'une fluidité incroyable. La sécurité des transactions et l\'orientation reçue m\'ont permis de sécuriser mon portefeuille d\'actifs.',
                rating: 5
              },
              {
                name: 'Ged Mukendi',
                role: 'Professionnel',
                content: 'Les ateliers de MPS sur le suivi des procédures financières ont révolutionné notre manière de travailler. Ma productivité a littéralement doublé.',
                rating: 5
              },
              {
                name: 'Pistis Kingwaya',
                role: 'Trader',
                content: 'MPS ne se contente pas de former, ils nous orientent vers des stratégies concrètes. Le respect des standards et du Code du Numérique nous donne une confiance totale.',
                rating: 5
              },
              {
                name: 'Lilia Mapasu',
                role: 'Entrepreneure',
                content: 'La confidentialité et le sérieux de MPS sont exemplaires. Leurs solutions numériques sur mesure ont sécurisé toutes nos données sensibles tout en simplifiant nos processus.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-red-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-lg font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-red-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA Inscription */}
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-6 border border-white/30">
            🎯 Rejoignez-nous
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à transformer votre avenir financier ?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Rejoignez notre communauté et accédez à des formations de qualité, un accompagnement personnalisé et des opportunités uniques dans les marchés financiers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/formations" 
              className="px-8 py-4 bg-white text-red-700 hover:bg-gray-100 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Voir les formations
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 rounded-xl font-semibold text-lg transition-all"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
