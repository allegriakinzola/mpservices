"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "rekalby@gmail.com",
      link: "mailto:rekalby@gmail.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Téléphone",
      value: "+243 820 486 006",
      link: "tel:+243820486006",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Adresse",
      value: "Kinshasa, RD Congo",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      href: "https://wa.me/243820486006",
      color: "hover:bg-green-600",
    },
    {
      name: "Telegram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      href: "https://t.me/+243820486006",
      color: "hover:bg-blue-500",
    },
    {
      name: "Discord",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.8 8.18 1.8 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.158-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.158 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
      href: "https://discord.gg/2XZBd9ty",
      color: "hover:bg-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        <div className="absolute inset-0 bg-[url('/images/tradeur.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Nous sommes à votre écoute
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Contactez Notre Équipe
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Une question ? Un projet ? Nous sommes là pour vous accompagner dans votre 
            <span className="font-semibold"> parcours vers le succès</span>.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Envoyez-nous un message</h2>
                <p className="text-gray-500 mb-8">Nous vous répondrons dans les plus brefs délais.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-green-600">Message envoyé !</h3>
                    <p className="text-gray-500 mb-6">Nous vous répondrons très bientôt.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Nom complet</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-gray-800 placeholder-gray-400"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-gray-800 placeholder-gray-400"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Téléphone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-gray-800 placeholder-gray-400"
                          placeholder="+243..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Sujet</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-gray-800"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="formation">Formation</option>
                          <option value="partenariat">Partenariat</option>
                          <option value="information">Demande d&apos;information</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-gray-800 placeholder-gray-400 resize-none"
                        placeholder="Décrivez votre demande..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-bold text-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer le message
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Informations de contact</h2>
                <p className="text-gray-500">Plusieurs moyens de nous joindre.</p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-red-200 transition-all">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{info.title}</p>
                        {info.link ? (
                          <a href={info.link} className="text-lg font-medium text-gray-800 hover:text-red-600 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium text-gray-800">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-50 rounded-3xl blur-xl"></div>
                <div className="relative bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Rejoignez notre communauté</h3>
                  <p className="text-gray-500 mb-6">Suivez-nous sur nos réseaux pour ne rien manquer.</p>
                  
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center transition-all hover:scale-110 text-gray-600 ${social.color} hover:text-white`}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl blur-xl"></div>
                <div className="relative bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Horaires de disponibilité</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="text-gray-800 font-medium">9h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span className="text-gray-800 font-medium">10h00 - 14h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="text-gray-400">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              ❓ FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Questions fréquentes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Comment puis-je m'inscrire à une formation ?",
                answer: "Rendez-vous sur notre page Formations, choisissez la formation qui vous intéresse et cliquez sur 'S'inscrire'. Vous pouvez également nous contacter directement.",
              },
              {
                question: "Les formations sont-elles accessibles aux débutants ?",
                answer: "Oui ! Nous proposons des formations adaptées à tous les niveaux, du débutant complet au trader expérimenté souhaitant perfectionner ses stratégies.",
              },
              {
                question: "Quel est le délai de réponse pour une demande ?",
                answer: "Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 à 48 heures ouvrées.",
              },
              {
                question: "Proposez-vous des formations en présentiel ?",
                answer: "Oui, nous proposons des formations en ligne, en présentiel et en format hybride selon les programmes.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:bg-white hover:shadow-lg hover:border-red-200 transition-all"
              >
                <h4 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-red-600 transition-colors">
                  {faq.question}
                </h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
