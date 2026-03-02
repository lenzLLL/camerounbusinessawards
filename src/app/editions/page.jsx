import React from "react";
import { Calendar, Image as ImageIcon, Video, FileText } from "lucide-react";

const EDITIONS = [
  {
    year: "2023",
    theme: "Innovation & Impact",
    winners: "52",
    partners: "24",
    highlights: "Plus grand Gala à ce jour",
    image:
      "https://images.unsplash.com/photo-1540575861501-7ad058dfb08e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    year: "2022",
    theme: "Résilience Économique",
    winners: "40",
    partners: "18",
    highlights: "Lancement du Bootcamp",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
  },
  {
    year: "2021",
    theme: "Made in Cameroon",
    winners: "35",
    partners: "12",
    highlights: "Première édition hybride",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function EditionsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A1A1A]">
            Historique des <span className="text-[#008751]">Éditions</span>
          </h1>
          <p className="text-xl text-gray-600">
            Revivez les moments forts qui ont marqué le Cameroon Business Awards
            depuis sa création.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
        {EDITIONS.map((ed, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
          >
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#FCD116] text-[#1A1A1A] rounded-full font-black text-2xl shadow-lg">
                <Calendar size={24} />
                <span>Édition {ed.year}</span>
              </div>
              <h2 className="text-4xl font-extrabold leading-tight">
                {ed.theme}
              </h2>
              <p className="text-lg text-gray-600">
                Une année charnière où le CBA a confirmé son rôle de catalyseur
                pour le business local, avec des innovations majeures et un
                impact mesurable.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-3xl font-bold text-[#008751]">
                    {ed.winners}
                  </p>
                  <p className="text-sm font-medium text-gray-400">
                    Lauréats Récompensés
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-3xl font-bold text-[#E73138]">
                    {ed.partners}
                  </p>
                  <p className="text-sm font-medium text-gray-400">
                    Partenaires Officiels
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-[#008751] font-bold hover:underline">
                  <ImageIcon size={18} /> Galerie Photos
                </button>
                <button className="flex items-center gap-2 text-[#E73138] font-bold hover:underline">
                  <Video size={18} /> Vidéos Highlights
                </button>
                <button className="flex items-center gap-2 text-gray-500 font-bold hover:underline">
                  <FileText size={18} /> Rapport Financier
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={ed.image}
                  className="rounded-[2.5rem] shadow-2xl h-[400px] w-full object-cover"
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
        ))}
      </section>

      {/* Press Coverage Preview */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Couverture Médiatique
          </h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            <div className="text-2xl font-black">CRTV</div>
            <div className="text-2xl font-black">CANAL 2</div>
            <div className="text-2xl font-black">STV</div>
            <div className="text-2xl font-black">CAMEROON TRIBUNE</div>
            <div className="text-2xl font-black">EQUINOXE</div>
          </div>
        </div>
      </section>
    </div>
  );
}
