import React from "react";
import { Trophy, Star, TrendingUp, Users, Zap } from "lucide-react";

const WINNERS_2024 = [
  {
    name: "Jean Dupont",
    project: "AgriTech Solutions",
    category: "Meilleur Projet Innovation",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Sarah Mbia",
    project: "Solar Cameroon",
    category: "Développement Durable",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "Paul Kengne",
    project: "Financier Express",
    category: "Startup de l'Année",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Divine Ngo",
    project: "Mama Made",
    category: "Entrepreneuriat Féminin",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
  },
];

const CATEGORIES = [
  { icon: Zap, name: "Innovation Tech", color: "#008751" },
  { icon: TrendingUp, name: "Impact Économique", color: "#E73138" },
  { icon: Star, name: "Coup de Cœur Jury", color: "#FCD116" },
  { icon: Users, name: "Social & Solidaire", color: "#1A1A1A" },
];

export default function AwardsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#1A1A1A] text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Trophy size={400} className="text-[#FCD116] rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-7xl font-extrabold">
            Lauréats & <span className="text-[#008751]">Prix</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Découvrez les visages de l'excellence camerounaise. Ces hommes et
            femmes qui repoussent les limites de l'entrepreneuriat.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Catégories de Prix</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-xl transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: cat.color }}
                >
                  <cat.icon size={20} />
                </div>
                <p className="text-lg font-bold">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Winners List */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold text-[#1A1A1A]">
                Grands Gagnants 2024
              </h2>
              <p className="text-gray-500">
                Une sélection rigoureuse parmi des centaines de candidats.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WINNERS_2024.map((winner, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={winner.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={winner.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold mb-1">{winner.name}</h3>
                <p className="text-[#008751] font-semibold mb-2">
                  {winner.category}
                </p>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
                  {winner.project}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Prizes */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] p-12 shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-20 h-20 bg-[#FCD116] rounded-2xl flex items-center justify-center text-[#1A1A1A] mb-4">
              <Star size={40} />
            </div>
            <h2 className="text-4xl font-extrabold">
              Prix de la <span className="text-[#E73138]">Diaspora</span>
            </h2>
            <p className="text-lg text-gray-600">
              Nouveauté de cette édition, ce prix récompense les initiatives des
              Camerounais résidant à l'étranger ayant un impact direct sur le
              développement économique national.
            </p>
            <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#333] transition-all">
              En savoir plus
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
              className="rounded-2xl shadow-2xl"
              alt="Diaspora Prize"
            />
            <div className="absolute -top-4 -right-4 bg-[#008751] text-white p-4 rounded-xl font-black shadow-xl">
              NOUVEAU
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
