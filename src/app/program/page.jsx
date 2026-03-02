import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Coffee,
  Trophy,
  Mic,
  Users,
} from "lucide-react";

const SCHEDULE = [
  {
    time: "08:30",
    title: "Accueil & Café de Bienvenue",
    location: "Hall Principal",
    type: "Networking",
    icon: Coffee,
  },
  {
    time: "09:30",
    title: "Discours d'Ouverture",
    location: "Grande Salle",
    type: "Cérémonie",
    icon: Mic,
  },
  {
    time: "10:30",
    title: "Panel : L'Innovation au Cameroun",
    location: "Salle Alpha",
    type: "Discussion",
    icon: Users,
  },
  {
    time: "13:00",
    title: "Pause Déjeuner Networking",
    location: "Restaurant",
    type: "Pause",
    icon: Coffee,
  },
  {
    time: "14:30",
    title: "Pitch Session : Les Finalistes",
    location: "Grande Salle",
    type: "Compétition",
    icon: Trophy,
  },
  {
    time: "19:00",
    title: "Soirée de Gala & Remise des Prix",
    location: "Palais des Congrès",
    type: "Gala",
    icon: Star,
  },
];

function Star(props) {
  return <Trophy {...props} />; // Placeholder
}

export default function ProgramPage() {
  return (
    <div className="pt-20 pb-24">
      {/* Header */}
      <section className="bg-[#008751] text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Programme & <span className="text-[#FCD116]">Agenda</span>
          </h1>
          <p className="text-xl text-white/80">
            Une journée intense dédiée à l'entrepreneuriat, au networking et à
            la célébration de la réussite.
          </p>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="space-y-8">
          {SCHEDULE.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row gap-6 items-start md:items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="flex-shrink-0 w-24 h-24 bg-gray-50 rounded-2xl flex flex-col items-center justify-center border border-gray-100 group-hover:bg-[#008751]/10 transition-colors">
                <item.icon size={28} className="text-[#008751] mb-1" />
                <span className="text-lg font-bold text-[#1A1A1A]">
                  {item.time}
                </span>
              </div>
              <div className="flex-grow space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-bold uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-[#008751] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>Durée approx. 1h30</span>
                  </div>
                </div>
              </div>
              <button className="hidden md:block bg-gray-100 hover:bg-[#008751] hover:text-white text-gray-600 px-6 py-2 rounded-xl font-bold transition-all">
                Détails
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1A1A1A] rounded-[2rem] p-12 text-center text-white space-y-8">
          <h2 className="text-3xl font-bold">Calendrier Officiel</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Téléchargez le calendrier complet au format PDF pour ne rien manquer
            de l'événement.
          </p>
          <button className="bg-white text-[#1A1A1A] px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all">
            Télécharger le PDF (.pdf)
          </button>
        </div>
      </section>

      {/* FAQ Quick Link */}
      <section className="py-12 px-6 text-center">
        <p className="text-gray-500">
          Des questions sur le programme ?{" "}
          <a href="/contact" className="text-[#008751] font-bold underline">
            Contactez notre équipe
          </a>
        </p>
      </section>
    </div>
  );
}
