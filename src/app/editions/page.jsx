"use client";
import React from "react";
import { motion } from "motion/react";
import {
  Calendar,
  Image as ImageIcon,
  Video,
  FileText,
  Award,
  Users,
  Target,
  TrendingUp,
  Download,
  Trophy,
  Sparkles,
  BarChart3,
  Tv,
  Newspaper,
} from "lucide-react";

const EDITIONS = [
  {
    year: "2024",
    theme: "Import-substitution, outil d'accélération de croissance",
    date: "19 Décembre 2024",
    lieu: "Palais des Congrès de Yaoundé",
    participants: "300",
    laureats: "30",
    finalistes: "15",
    partenaires: "8",
    budget: "15 042 000 FCFA",
    highlights: "Bootcamp intensif + Cérémonie prestigieuse",
    image:
      "/slider2.jpg",
    prixPrincipaux: [
      { nom: "GREEN POWER", prix: "Meilleur Projet National", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&h=500&auto=format&fit=crop" },
      { nom: "CAMAROES", prix: "Prix de l'Innovation", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&h=500&auto=format&fit=crop" },
      { nom: "KINDAK", prix: "Prix du Développement Durable", image: "https://images.unsplash.com/photo-1522202221519-199623e3fcfa?q=80&w=500&h=500&auto=format&fit=crop" },
    ],
    prixSpeciaux: [
      { nom: "HABI SARL", prix: "Entrepreneuriat Féminin", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&h=500&auto=format&fit=crop" },
      { nom: "FOOD-MAC ENGINEERING", prix: "Développement International", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=500&h=500&auto=format&fit=crop" },
      { nom: "DIGITAL RENTER", prix: "Diaspora", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&h=500&auto=format&fit=crop" },
      { nom: "NAT PRODUIT", prix: "Initiative Jeune", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&h=500&auto=format&fit=crop" },
      { nom: "OCEAN BIOTECH", prix: "Meilleur Startup", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&h=500&auto=format&fit=crop" },
      { nom: "RELESS BATCHENGA", prix: "Initiative Sociale", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&h=500&auto=format&fit=crop" },
      { nom: "O HAIRA WALET FOODS", prix: "Coup de Cœur", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&h=500&auto=format&fit=crop" },
      { nom: "SOTRACAO", prix: "Prix Spécial Jury", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&h=500&auto=format&fit=crop" },
    ],
    photos: [
      {
        url: "/c1.jpeg",
        caption: "Cérémonie de remise des prix",
      },
      {
        url: "/c2.jpeg",
        caption: "Bootcamp des finalistes",
      },
      {
        url: "/c3.jpeg",
        caption: "Networking entrepreneurs",
      },
      {
        url: "/c4.jpeg",
        caption: "Discours ministériels",
      },
      {
        url: "/c6.jpeg",
        caption: "Lauréats 2024",
      },
      {
        url: "/c7.jpeg",
        caption: "Buffet Made in Cameroon",
      },
    ],
    reportUrl: "https://example.com/rapport-financier-2024.pdf",
  },
  {
    year: "2023",
    theme: "Innovation & Impact",
    date: "22 Novembre 2023",
    lieu: "Centre de conférences de Douala",
    participants: "250",
    laureats: "25",
    partenaires: "6",
    highlights: "Première édition historique",
    image:
      "/32023.jpg",
    objectifs: {
      emplois: "500 K",
      entrepreneurs: "50 000",
    },
    intro: [
      "Retour en images sur les Cameroon Business Awards 2023 – revivez les moments forts à travers une sélection d'images inspirantes.",
      "Objectifs : 500 K emplois à l’horizon 2035, entrepreneurs accompagnés 50 000.",
      "Plongez dans les moments marquants de l’édition 2023 : cérémonie d’ouverture, interventions, remise des prix, partenaires, networking et gala.",
    ],
  
  },
];

export default function EditionsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] pt-48 pb-24 bg-[#007A5E]">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/slider1.png"
            className="w-full h-full object-cover"
            alt="Pattern"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <span className="bg-[#FCD116] text-[#007A5E] px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-xl">
              Éditions Passées
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          >
            Historique des <span className="text-[#FCD116]">Éditions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl"
          >
            Revivez les moments forts qui ont marqué le Cameroon Business Awards
            depuis sa création.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
        {EDITIONS.map((ed, idx) => (
          <div key={idx}>
            <div
              className={`flex flex-col lg:flex-row lg:items-start gap-16 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#FCD116] text-[#1A1A1A] rounded-full font-black text-xl sm:text-2xl shadow-lg">
                  <Calendar size={24} />
                  <span>Édition {ed.year}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                  {ed.theme}
                </h2>
                {ed.date && (
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">
                      <Calendar size={18} className="text-[#008751]" />
                      {ed.date}
                    </p>
                    <p className="text-lg">{ed.lieu}</p>
                  </div>
                )}
                {/* description or default text */}
                {ed.intro ? (
                  ed.intro.map((p, i) => (
                    <p key={i} className="text-lg text-gray-600">
                      {p}
                    </p>
                  ))
                ) : (
                  <p className="text-base sm:text-lg text-gray-600">
                    {ed.year === "2024"
                      ? "La deuxième édition du CBA a confirmé son rôle de catalyseur pour l'entrepreneuriat camerounais, avec un focus sur l'import-substitution et le Made in Cameroon."
                      : "Une année charnière où le CBA a confirmé son rôle de catalyseur pour le business local, avec des innovations majeures et un impact mesurable."}
                  </p>
                )}
                
                {ed.objectifs && (
                  <div className="grid grid-cols-2 gap-6 mt-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <p className="text-2xl sm:text-3xl font-bold text-[#008751]">
                        {ed.objectifs.emplois}
                      </p>
                      <p className="text-sm font-medium text-gray-400">
                        Emplois visés
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <p className="text-2xl sm:text-3xl font-bold text-[#008751]">
                        {ed.objectifs.entrepreneurs}
                      </p>
                      <p className="text-sm font-medium text-gray-400">
                        Entrepreneurs accompagnés
                      </p>
                    </div>
                  </div>
                )}
                {ed.budget && (
                  <div className="bg-gradient-to-r from-[#008751]/10 to-[#FCD116]/10 p-6 rounded-2xl border border-[#008751]/20">
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      Budget de réalisation
                    </p>
                    <p className="text-3xl font-bold text-[#008751]">
                      {ed.budget}
                    </p>
                  </div>
                )}

              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src={ed.image}
                    className="rounded-[2.5rem] shadow-2xl h-[300px] sm:h-[400px] w-full object-cover"
                    alt={`Edition ${ed.year}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[2.5rem]"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-sm font-bold uppercase tracking-widest opacity-80">
                      Highlights
                    </p>
                    <p className="text-xl font-bold">{ed.highlights}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-6">
                  <div className="relative group overflow-hidden bg-gradient-to-br from-[#008751] to-[#006B3F] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative">
                      <Users size={24} className="text-white/60 mb-4" />
                      <p className="text-3xl sm:text-4xl font-black text-white mb-2">
                        {ed.participants}
                      </p>
                      <p className="text-sm font-semibold text-white/80 uppercase tracking-wide">
                        Participants
                      </p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden bg-gradient-to-br from-[#E73138] to-[#B8232B] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative">
                      <Trophy size={24} className="text-white/60 mb-4" />
                      <p className="text-3xl sm:text-4xl font-black text-white mb-2">
                        {ed.laureats}
                      </p>
                      <p className="text-sm font-semibold text-white/80 uppercase tracking-wide">
                        Lauréats Récompensés
                      </p>
                    </div>
                  </div>
                  {ed.finalistes && (
                    <div className="relative group overflow-hidden bg-gradient-to-br from-[#FCD116] to-[#E8A900] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                      <div className="relative">
                        <Target size={24} className="text-white/60 mb-4" />
                        <p className="text-3xl sm:text-3xl sm:text-4xl font-black text-[#1A1A1A] mb-2">
                          {ed.finalistes}
                        </p>
                        <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          Finalistes
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="relative group overflow-hidden bg-gradient-to-br from-[#008751]/80 to-[#FCD116] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative">
                      <Users size={24} className="text-white/60 mb-4" />
                      <p className="text-3xl sm:text-4xl font-black text-white mb-2">
                        {ed.partenaires}
                      </p>
                      <p className="text-sm font-semibold text-white/80 uppercase tracking-wide">
                        Partenaires Officiels
                      </p>
                    </div>
                  </div>
                </div>
            {/* Section Récompenses pour 2024 */}
            {ed.prixPrincipaux && (
              <div className="mt-24 space-y-16">
                {/* Prix Principaux */}
                <div>
                  <div className="flex items-center gap-3 mb-12">
                    <Trophy size={32} className="text-[#FCD116]" />
                    <h3 className="text-3xl font-extrabold text-[#1A1A1A]">
                      Prix Principaux {ed.year}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ed.prixPrincipaux.map((laureat, i) => (
                      <div key={i} className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#FCD116] via-[#008751] to-[#E73138] rounded-3xl blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative bg-white p-8 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#FCD116] to-[#E8A900] rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                            <span className="text-3xl font-black text-[#1A1A1A]">{i + 1}</span>
                          </div>
                          <p className="text-sm font-bold text-[#008751] uppercase tracking-wider mb-3 text-center">
                            {laureat.prix}
                          </p>
                          <p className="text-2xl font-extrabold text-[#1A1A1A] text-center">
                            {laureat.nom}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prix Spéciaux */}
                <div>
                  <div className="flex items-center gap-3 mb-12">
                    <Award size={32} className="text-[#008751]" />
                    <h3 className="text-3xl font-extrabold text-[#1A1A1A]">
                      Prix Spéciaux
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ed.prixSpeciaux.map((laureat, i) => (
                      <div key={i} className="relative group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#008751]">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#008751] to-[#006B3F] rounded-full flex items-center justify-center mb-4 shadow-md">
                          <Award size={20} className="text-[#FCD116]" />
                        </div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#008751] mb-2">
                          {laureat.prix}
                        </p>
                        <p className="text-lg font-bold text-[#1A1A1A] line-clamp-2">
                          {laureat.nom}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Galerie Photos */}
              
                  <div>
                    <div className="flex items-center gap-3 mb-12">
                      <ImageIcon size={32} className="text-[#008751]" />
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">
                        Galerie Photos
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {ed.photos.map((photo, i) => (
                        <div
                          key={i}
                          className="relative group overflow-hidden rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-shadow"
                        >
                          <img
                            src={photo.url}
                            alt={photo.caption}
                            className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="font-bold text-lg">{photo.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Charger plus link */}
             
                  </div>
          



                {/* Rapport Financier */}
                {ed.reportUrl && (
                  <div className="bg-gradient-to-r from-[#008751] to-[#006B3F] rounded-[2.5rem] p-12 text-white text-center">
                    <Download size={48} className="mx-auto mb-6" />
                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                      Rapport Financier {ed.year}
                    </h3>
                    <p className="text-lg mb-8 opacity-90">
                      Téléchargez le rapport détaillé avec toutes les statistiques
                      et résultats de cette édition
                    </p>
                    <a
                      href={ed.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#008751] font-bold text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center gap-2 sm:gap-3"
                    >
                      <Download size={20} />
                      Télécharger le rapport PDF
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Press Coverage Preview */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Tv size={48} className="text-[#FCD116]" />
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Couverture Médiatique
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {["CRTV", "CANAL 2", "INFO TV", "DASH TV", "CAMEROON TRIBUNE"].map(
              (media, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Newspaper size={32} />
                  <div className="text-xl font-black">{media}</div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}



