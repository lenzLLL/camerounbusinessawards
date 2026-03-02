import React from "react";
import { motion } from "motion/react";
import { History, Target, Users, Heart } from "lucide-react";

const VALUES = [
  {
    title: "Innovation",
    desc: "Soutenir la création de valeur par de nouvelles approches.",
    icon: Heart,
  },
  {
    title: "Résilience",
    desc: "Célébrer la force des entrepreneurs face aux défis.",
    icon: History,
  },
  {
    title: "Excellence",
    desc: "Viser les plus hauts standards de qualité.",
    icon: Target,
  },
  {
    title: "Made in Cameroon",
    desc: "Promouvoir le génie et le savoir-faire local.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20 pb-24">
      {/* Header */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A1A1A]">
            À Propos du <span className="text-[#008751]">CBA</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une plateforme dédiée à la célébration de l'écosystème
            entrepreneurial camerounais, son histoire et sa vision pour le
            futur.
          </p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#008751]">
              Notre Histoire
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Né de la volonté de mettre en lumière les réussites locales
              souvent invisibles, le Cameroon Business Awards est devenu en
              quelques années le rendez-vous incontournable du business au
              Cameroun. Notre parcours est marqué par des rencontres
              exceptionnelles et des projets qui changent la vie de milliers de
              Camerounais.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#E73138]">
              Objectifs & Vision
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Notre vision stratégique est de positionner le Cameroun comme un
              hub d'excellence entrepreneuriale en Afrique Centrale. Nous visons
              à créer des ponts entre les investisseurs, les mentors et les
              porteurs de projets innovants.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            className="rounded-2xl shadow-lg w-full h-64 object-cover"
            alt="About Team"
          />
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop"
            className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
            alt="About Event"
          />
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Nos Valeurs Fondamentales
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((v, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#008751] flex items-center justify-center mb-6">
                  <v.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / President Message */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-[#FCD116]/10 rounded-[2.5rem] p-12 flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-8 border-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="President"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-[#1A1A1A]">
              Le mot du Président
            </h2>
            <blockquote className="text-2xl font-medium text-gray-700 italic leading-relaxed">
              "Le succès n'est pas seulement une question de chiffres, c'est une
              question d'impact. Le CBA est là pour dire à chaque entrepreneur
              que son travail compte."
            </blockquote>
            <div>
              <p className="text-xl font-bold text-[#008751]">Promoteur CBA</p>
              <p className="text-gray-500">Visionnaire & Leader d'Impact</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
