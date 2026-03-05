"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Trophy,
  Lightbulb,
  Leaf,
  Users,
  Globe,
  Rocket,
  Heart,
  Star,
  Zap,
  Sparkles,
  Award,
  ArrowRight,
} from "lucide-react";

export default function LaureatsPage() {
  const mainAwards = [
    {
      title: "Meilleur Projet National",
      winner: "GREEN POWER",
      description:
        "Projet distingué pour son impact économique et son potentiel de transformation dans le paysage entrepreneurial camerounais.",
      icon: Trophy,
      color: "yellow",
    },
    {
      title: "Prix de l'Innovation",
      winner: "CAMAROES",
      description:
        "Récompense attribuée pour une innovation remarquable contribuant à l'amélioration des solutions locales.",
      icon: Lightbulb,
      color: "red",
    },
    {
      title: "Prix du Développement Durable",
      winner: "KINDAK",
      description:
        "Distinction accordée à une initiative favorisant un développement économique responsable et durable.",
      icon: Leaf,
      color: "green",
    },
  ];

  const specialAwards = [
    { title: "Entrepreneuriat Féminin", winner: "HABI SARL", icon: Users },
    {
      title: "Développement International",
      winner: "FOOD-MAC ENGINEERING",
      icon: Globe,
    },
    { title: "Prix de la Diaspora", winner: "DIGITAL RENTER", icon: Award },
    { title: "Initiative Jeune", winner: "NAT PRODUIT", icon: Sparkles },
    { title: "Prix Startup", winner: "OCEAN BIOTECH", icon: Rocket },
    { title: "Initiative Sociale", winner: "RELESS BATCHENGA", icon: Heart },
    {
      title: "Prix Coup de Cœur",
      winner: "O HAIRA WALET FOODS",
      icon: Star,
    },
    { title: "Prix Spécial du Jury", winner: "SOTRACAO", icon: Zap },
  ];

  const objectives = [
    "Encourager l'innovation entrepreneuriale",
    "Valoriser les initiatives économiques locales",
    "Promouvoir le Made in Cameroon",
    "Soutenir les jeunes entrepreneurs",
    "Favoriser le développement durable",
  ];

  return (
    <div className="min-h-screen bg-white">
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

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Cameroon Business Awards 2024
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            La deuxième édition des Cameroon Business Awards a récompensé des
            entrepreneurs et des entreprises qui contribuent activement au
            développement économique du Cameroun à travers l'innovation, la
            création de valeur et la promotion du Made in Cameroon.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500">
            Les prix décernés mettent en lumière des initiatives remarquables
            dans différents secteurs stratégiques.
          </p>
        </div>
      </section>

      {/* Prix Principaux */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Sparkles className="text-yellow-500" size={32} />
              Prix Principaux
              <Sparkles className="text-yellow-500" size={32} />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainAwards.map((award, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    award.color === "yellow"
                      ? "bg-yellow-100"
                      : award.color === "red"
                        ? "bg-red-100"
                        : "bg-green-100"
                  }`}
                >
                  <award.icon
                    size={32}
                    className={
                      award.color === "yellow"
                        ? "text-yellow-600"
                        : award.color === "red"
                          ? "text-red-600"
                          : "text-green-600"
                    }
                  />
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">
                  {award.title}
                </h3>
                <p className="text-3xl font-black text-gray-900 mb-4">
                  {award.winner}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prix Spéciaux */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Trophy className="text-red-500" size={32} />
              Prix Spéciaux
              <Trophy className="text-red-500" size={32} />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialAwards.map((award, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 via-yellow-400 to-red-400 flex items-center justify-center mb-4">
                  <award.icon size={24} className="text-white" />
                </div>

                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  {award.title}
                </h3>
                <p className="text-xl font-bold text-gray-900">
                  {award.winner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Objectif des prix
            </h2>
            <p className="text-gray-600">
              Les Cameroon Business Awards visent à créer un impact durable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((obj, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-800">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Galerie des Lauréats
            </h2>
            <p className="text-gray-600">
              Revivez les meilleurs moments de la cérémonie
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['/e1.jpeg','/e2.jpeg','/e3.jpeg','/e4.jpeg'].map((src, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <img
                  src={src}
                  alt={`Lauréat ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 via-yellow-500 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Consultez les catégories et soumettez votre candidature
          </h2>

          <p className="text-xl text-white/90 mb-10">
            Consultez toutes les catégories et soumettez votre candidature dès maintenant pour participer à cet événement prestigieux.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScN_5iO_z-iMQtR8HAeJeKmUpSm7BILmJG0ZJFjVu8lx5kd_A/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Soumettre ma candidature
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}



