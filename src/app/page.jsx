"use client";

import { useState, useEffect } from "react";
import {
  Award,
  Target,
  Users,
  Briefcase,
  TrendingUp,
  Lightbulb,
  Heart,
  Globe,
  ArrowRight,
  Calendar,
  MapPin,
  CheckCircle,
  Star,
  Play,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Cameroon Business Awards 2024",
      subtitle: "Import-substitution, outil d'accélération de croissance",
      image:
        "/slider1.png",
      cta: "Découvrir les Lauréats",
    },
    {
      title: "Made in Cameroon",
      subtitle: "Promouvoir l'excellence entrepreneuriale camerounaise",
      image:
        "/slider2.jpg",
      cta: "Notre Vision",
    },
    {
      title: "Bootcamp & Incubation",
      subtitle: "Accompagnement vers l'excellence",
      image:
        "/slider1.png",
      cta: "En Savoir Plus",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      number: "300+",
      label: "Participants 2024",
      color: "#008751",
    },
    {
      icon: Award,
      number: "11",
      label: "Catégories de Prix",
      color: "#E73138",
    },
    {
      icon: Briefcase,
      number: "15M",
      label: "FCFA Investis",
      color: "#FCD116",
    },
    { icon: TrendingUp, number: "2ème", label: "Édition", color: "#008751" },
  ];

  const objectives = [
    {
      icon: Target,
      title: "Visibilité & Crédibilité",
      description:
        "Mettre en lumière les entrepreneurs camerounais et leur offrir une reconnaissance nationale",
    },
    {
      icon: Users,
      title: "Réseau Public-Privé",
      description:
        "Créer des ponts entre producteurs, transformateurs, investisseurs et institutions",
    },
    {
      icon: TrendingUp,
      title: "Accès au Financement",
      description:
        "Faciliter les opportunités de financement et structurer les projets",
    },
    {
      icon: Lightbulb,
      title: "Accompagnement",
      description:
        "Incubation et mentorat des lauréats vers l'excellence entrepreneuriale",
    },
  ];

  const objectiveColors = ["#008751", "#E73138", "#FCD116", "#007A5E"]; // used for left border and icon background

  const mainWinners = [
    {
      name: "GREEN POWER",
      category: "Meilleur Projet National",
      icon: "🏆",
      color: "#FFD700",
      description: "Excellence entrepreneuriale et impact économique majeur",
    },
    {
      name: "CAMAROES",
      category: "Prix de l'Innovation",
      icon: "💡",
      color: "#E73138",
      description: "Innovation technologique et disruption sectorielle",
    },
    {
      name: "KINDAK",
      category: "Développement Durable",
      icon: "🌱",
      color: "#008751",
      description: "Impact environnemental et responsabilité sociale",
    },
  ];

  const allWinners = [
    "HABI SARL",
    "FOOD-MAC ENGINEERING",
    "DIGITAL RENTER",
    "NAT PRODUIT",
    "OCEAN BIOTECH",
    "RELESS BATCHENGA",
    "O HAIRA WALET FOODS",
    "SOTRACAO",
  ];

  const partners = [
    { name: "MINCOMMERCE", type: "Institutionnel" },
    { name: "MINEPAT", type: "Institutionnel" },
    { name: "MINPMEESA", type: "Institutionnel" },
    { name: "Groupe Boissons du Cameroun", type: "Privé" },
    { name: "CCIMA", type: "Institutionnel" },
    { name: "ANOR", type: "Institutionnel" },
  ];

  const timeline = [
    { year: "2023", edition: "1ère Édition", highlight: "Lancement du CBA" },
    {
      year: "2024",
      edition: "2ème Édition",
      highlight: "300 participants • 11 prix • Thème Import-Substitution",
    },
    {
      year: "2025",
      edition: "Programme Incubation",
      highlight: "66.5M FCFA • 1 an d'accompagnement",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <div className="relative h-[90vh] md:h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end pb-8 sm:pb-16 md:pb-20">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-2xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-1 bg-[#008751]"></div>
                    <div className="w-12 h-1 bg-[#E73138]"></div>
                    <div className="w-12 h-1 bg-[#FCD116]"></div>
                  </div>
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-8">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/contact"
                      className="px-8 py-4 bg-gradient-to-r from-[#008751] to-[#00a561] text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#008751]/50 transition-all flex items-center space-x-2"
                    >
                      <span>Contacter</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                    <a
                      href="/about"
                      className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#008751] transition-all"
                    >
                      Plus d'infos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-12 bg-[#FCD116]"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-br from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform"
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ backgroundColor: stat.color + "20" }}
                >
                  <stat.icon
                    className="w-8 h-8"
                    style={{ color: stat.color }}
                  />
                </div>
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#008751]/10 text-[#008751] rounded-full text-sm font-semibold mb-6">
                Notre Identité
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Cameroon Business Awards
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                Événement national de promotion du{" "}
                <span className="font-bold text-[#008751]">
                  Made in Cameroon
                </span>{" "}
                et de l'
                <span className="font-bold text-[#E73138]">
                  import-substitution
                </span>
                .
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#008751] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Vision</h3>
                    <p className="text-gray-600">
                      Accélérer l'industrialisation et l'autonomie économique du
                      Cameroun
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#E73138] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Organisateur
                    </h3>
                    <p className="text-gray-600">
                      Africa Business Solutions (ABS)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#FCD116] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Promoteur</h3>
                    <p className="text-gray-600">Désiré Makan II</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                alt="Vision CBA"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#008751] to-[#00a561] text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold mb-1">19 Déc 2024</div>
                <div className="text-sm">Palais des Congrès, Yaoundé</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Theme 2024 */}
      <div className="py-20 bg-gradient-to-br from-[#008751] to-[#00a561] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FCD116] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-8">
              Thème 2024
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              « Import-substitution, outil d'accélération de croissance »
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {[
                { emoji: '🇨🇲', label: 'Made in Cameroon' },
                { emoji: '📉', label: 'Réduction Importations' },
                { emoji: '🏭', label: 'Industrialisation' },
                { emoji: '💪', label: 'Autonomie Économique' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-transform"
                >
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <div className="font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#E73138]/10 text-[#E73138] rounded-full text-sm font-semibold mb-4">
              Nos Objectifs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi le CBA ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Un catalyseur de croissance et un pont entre producteurs,
              transformateurs, investisseurs et institutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((obj, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border-l-4 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                style={{ borderColor: objectiveColors[index] }}
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full text-white mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: objectiveColors[index] }}
                >
                  <obj.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {obj.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Winners */}
      <div className="py-20 bg-gradient-to-br from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#FCD116]/20 text-[#8B6F00] rounded-full text-sm font-semibold mb-4">
              Lauréats Principaux 2024
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Les Grands Gagnants
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {mainWinners.map((winner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-t-4"
                style={{ borderTopColor: winner.color }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-4">{winner.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {winner.name}
                </h3>
                <div
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
                  style={{
                    backgroundColor: winner.color + "20",
                    color: winner.color,
                  }}
                >
                  {winner.category}
                </div>
                <p className="text-gray-600">{winner.description}</p>
              </div>
            ))}
          </div>

          {/* Other Winners */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              Autres Lauréats Notables
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {allWinners.map((winner, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-[#008751]/5 to-transparent hover:from-[#008751]/10 transition-colors"
                >
                  <Star className="w-4 h-4 text-[#FCD116] flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">
                    {winner}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/awards"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#008751] to-[#00a561] text-white font-semibold rounded-lg hover:shadow-xl transition-all"
            >
              <span>Voir Tous les Lauréats</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bootcamp Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070"
                alt="Bootcamp"
                className="rounded-2xl shadow-2xl"
              />
              <div className="hidden sm:block absolute -top-6 -right-6 bg-[#E73138] text-white p-6 rounded-xl shadow-xl">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">66.5M</div>
                <div className="text-sm">Budget Incubation 2025</div>
              </div>
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-[#008751]/10 text-[#008751] rounded-full text-sm font-semibold mb-6">
                Bootcamp & Incubation
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Accompagnement vers l'Excellence
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
                Un programme intensif pour transformer les projets en
                entreprises structurées et compétitives
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#008751]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#008751]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Business Plan & Pitch
                    </h4>
                    <p className="text-gray-600">
                      Structuration et présentation de projet
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#E73138]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#E73138]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Levée de Fonds & Gestion
                    </h4>
                    <p className="text-gray-600">
                      Accès au financement et gestion financière
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#FCD116]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#8B6F00]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Marketing Digital & Mentorat
                    </h4>
                    <p className="text-gray-600">
                      Stratégies digitales et accompagnement personnalisé
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#008751]/5 to-transparent p-6 rounded-xl border-l-4 border-[#008751]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">
                    Démarrage Programme
                  </span>
                  <span className="text-[#008751] font-bold">04 Mai 2025</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Durée</span>
                  <span className="text-[#008751] font-bold">1 An</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="py-20 bg-gradient-to-br from-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#008751]/10 text-[#008751] rounded-full text-sm font-semibold mb-4">
              Nos Partenaires
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ensemble pour le Cameroun
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all hover:scale-105 text-center"
              >
                <div className="text-sm text-gray-500 mb-2">{partner.type}</div>
                <div className="font-bold text-gray-900 text-sm">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#E73138]/10 text-[#E73138] rounded-full text-sm font-semibold mb-4">
              Notre Parcours
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Éditions du CBA
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#008751] via-[#E73138] to-[#FCD116]"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                      <div className="text-3xl font-bold text-[#008751] mb-2">
                        {item.year}
                      </div>
                      <div className="text-xl font-bold text-gray-900 mb-2">
                        {item.edition}
                      </div>
                      <div className="text-gray-600">{item.highlight}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#008751] shadow-lg"></div>
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="/editions"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#E73138] to-[#ff4755] text-white font-semibold rounded-lg hover:shadow-xl transition-all"
            >
              <span>Découvrir Toutes les Éditions</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-[#008751] via-[#E73138] to-[#8B6F00] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FCD116] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez le Mouvement
            </h2>
            <p className="text-xl mb-12 text-white/90">
              Que vous soyez entrepreneur, sponsor ou partenaire, ensemble
              accélérons l'industrialisation du Cameroun
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-[#008751] font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center space-x-2"
              >
                <Briefcase className="w-5 h-5" />
                <span>Devenir Sponsor</span>
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#008751] transition-all flex items-center space-x-2"
              >
                <Award className="w-5 h-5" />
                <span>Participer au CBA</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Valeurs */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: "💡", label: "Innovation" },
              { icon: "💪", label: "Résilience" },
              { icon: "⭐", label: "Excellence" },
              { icon: "🇨🇲", label: "Patriotisme Économique" },
              { icon: "🏭", label: "Made in Cameroon" },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl text-center hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <div className="font-bold text-gray-900">{value.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
