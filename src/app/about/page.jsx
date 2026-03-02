"use client"
import React from "react";
import { motion } from "motion/react";
import {
  Award,
  Target,
  Users,
  Globe,
  TrendingUp,
  ShieldCheck,
  Lightbulb,
  Heart,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const colors = {
  green: "#007A5E",
  red: "#CE1126",
  yellow: "#FCD116",
  gold: "#D4AF37",
};





const SectionHeading = ({ children, subtitle, light = false }) => (
  <div className="text-center mb-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-2xl sm:text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter ${light ? "text-white" : "text-gray-900"}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`text-lg max-w-2xl mx-auto ${light ? "text-gray-300" : "text-gray-600"}`}
      >
        {subtitle}
      </motion.p>
    )}
    <div
      className={`w-24 h-1.5 mx-auto mt-6 rounded-full flex overflow-hidden ${light ? "bg-gray-700" : "bg-gray-100"}`}
    >
      <div className="w-1/3 bg-[#007A5E]"></div>
      <div className="w-1/3 bg-[#CE1126]"></div>
      <div className="w-1/3 bg-[#FCD116]"></div>
    </div>
  </div>
);

const MinisterQuote = ({ name, title, quote, image, reverse = false }) => (
  <motion.div
    initial={{ opacity: 0, x: reverse ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`flex flex-col md:flex-row items-center gap-8 mb-24 ${reverse ? "md:flex-row-reverse" : ""}`}
  >
    <div className="w-full md:w-1/3 flex justify-center">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#007A5E] via-[#CE1126] to-[#FCD116] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <img
          src={image}
          alt={name}
          className="relative w-64 h-80 object-cover rounded-2xl shadow-2xl border-2 border-white"
        />
      </div>
    </div>
    <div className="w-full md:w-2/3">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative">
        <span className="absolute top-4 left-4 text-4xl sm:text-5xl text-gray-100 font-serif leading-none">
          "
        </span>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl italic leading-relaxed mb-6 relative z-10">
          {quote}
        </p>
        <div className="border-t border-gray-100 pt-6">
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{name}</h4>
          <p className="text-[#007A5E] font-semibold uppercase text-sm tracking-widest">
            {title}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen pt-8 pb-12 sm:pt-32 sm:pb-24 md:pt-48 md:pb-40 bg-[#007A5E]">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://cameroonbusinessawards.org/wp-content/uploads/2024/11/pexels-kelly-1179532-17290978-300x300.jpg"
            className="w-full h-full object-cover"
            alt="Pattern"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <span className="bg-[#FCD116] text-[#007A5E] px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-xl">
              À Propos de Nous
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            L'Excellence <br />{" "}
            <span className="text-[#FCD116]">Made in Cameroon</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez l'histoire, la vision et l'engagement des Cameroon
            Business Awards pour la transformation économique de notre nation.
          </motion.p>
        </div>

        {/* Abstract shapes */}
        <div
          className="absolute bottom-0 left-0 w-full h-24 bg-gray-50"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* Haut Patronage - Paul Biya */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f9f9f9] rounded-[3rem] p-8 md:p-16 border-4 border-[#FCD116] shadow-2xl relative">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <div className="mb-6">
                  <span className="text-base sm:text-lg md:text-xl font-bold text-[#CE1126] uppercase tracking-[0.2em]">
                    Sous le Haut Patronage
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase leading-tight">
                  S.E.M. Paul BIYA
                </h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl border-l-8 border-[#007A5E] shadow-lg">
                    <p className="text-base sm:text-lg text-gray-700 italic font-serif leading-relaxed">
                      "Une économie moderne ne saurait se concevoir sans
                      l’existence d’un secteur industriel performant. Nous
                      disposons d’un Plan Directeur d’industrialisation qui
                      définit les contours et le contenu d’un projet d’envergure
                      dans ce domaine."
                    </p>
                  </div>
                  <p className="text-gray-600 font-bold uppercase tracking-wider text-sm">
                    — Président de la République du Cameroun
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img
                    src="https://cameroonbusinessawards.org/wp-content/uploads/2024/11/sem-paul-biya-1024x576.jpg"
                    alt="Paul Biya"
                    className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100">
                    <div className="w-12 h-12 bg-[#007A5E] rounded-full flex items-center justify-center">
                      <ShieldCheck color="white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold">
                        Septennat des Grandes Opportunités
                      </p>
                      <p className="font-black text-gray-900">
                        Souveraineté Économique
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous / Vision / Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Découvrez les piliers de notre engagement pour l'écosystème entrepreneurial.">
            Qui sommes-nous ?
          </SectionHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-6 uppercase">
                Un catalyseur de réussite
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                Les <strong>Cameroon Business Awards (CBA)</strong> sont une
                initiative dédiée à la promotion de l’entrepreneuriat et du{" "}
                <strong>Made in Cameroon</strong>. Notre mission est de
                valoriser les talents, les savoir-faire locaux et les
                entreprises innovantes qui contribuent à la transformation
                économique du Cameroun.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                Créé par <strong>Africa Business Solutions</strong>, le CBA
                constitue une plateforme nationale de reconnaissance,
                d’accompagnement et de mise en réseau des entrepreneurs,
                startups et entreprises à fort potentiel.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                  <Award color={colors.gold} size={24} />
                  <span className="font-bold text-gray-800 tracking-tight">
                    Excellence
                  </span>
                </div>
                <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                  <Lightbulb color={colors.green} size={24} />
                  <span className="font-bold text-gray-800 tracking-tight">
                    Innovation
                  </span>
                </div>
                <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                  <Heart color={colors.red} size={24} />
                  <span className="font-bold text-gray-800 tracking-tight">
                    Patriotisme
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-[#007A5E] p-8 rounded-[2rem] text-white shadow-xl flex flex-col justify-between aspect-square">
                <Target size={40} className="mb-4 text-[#FCD116]" />
                <div>
                <h4 className="text-lg sm:text-xl font-black mb-2">VISION</h4>
                  <p className="text-sm opacity-80 leading-relaxed">
                    Émergence d’une économie forte, compétitive et autonome.
                  </p>
                </div>
              </div>
              <div className="bg-[#CE1126] p-8 rounded-[2rem] text-white shadow-xl flex flex-col justify-between aspect-square mt-12">
                <TrendingUp size={40} className="mb-4 text-[#FCD116]" />
                <div>
                <h4 className="text-lg sm:text-xl font-black mb-2">MISSION</h4>
                  <p className="text-sm opacity-80 leading-relaxed">
                    Révéler et accompagner les entrepreneurs à fort impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Institutional Support Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Les voix qui portent et soutiennent l'initiative au plus haut niveau.">
            Soutien Institutionnel
          </SectionHeading>

          <MinisterQuote
            name="Dr. Joseph DION NGUTE"
            title="Premier Ministre, Chef du Gouvernement"
            quote="Le cap étant de porter le pays au rang des Nouveaux Pays Industrialisés (NPI) en 2035, les stratégies sectorielles ont été articulées autour du développement des industries et services en cohérence avec le Plan Directeur d’Industrialisation (PDI)."
            image="https://cameroonbusinessawards.org/wp-content/uploads/2024/11/dr-joseph-dion-ngute.jpg"
          />

          <MinisterQuote
            name="M. MBARGA ATANGANA Luc Magloire"
            title="Ministre du Commerce"
            quote="Le Made in Cameroon est un symbole de qualité, de créativité et d’innovation. En tant que Ministre du commerce, je suis constamment impressionné par le talent et le dévouement que vous montrez chaque jour."
            image="https://cameroonbusinessawards.org/wp-content/uploads/2024/11/Mbarga-Atangana.jpg"
            reverse
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-lg"
            >
              <div className="flex items-center gap-6 mb-6">
                <img
                  src="https://cameroonbusinessawards.org/wp-content/uploads/2024/11/M.-ALAMINE-OUSMANE-MEY-270x300.png"
                  alt="Alamine Mey"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold">M. ALAMINE OUSMANE MEY</h4>
                  <p className="text-xs text-[#007A5E] font-bold uppercase">
                    Ministre de l'Économie
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
                "Le label 'Made in Cameroon' est un élément clé de cette
                stratégie. Le Cameroon Business Awards joue un rôle essentiel en
                valorisant les entreprises camerounaises."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-lg"
            >
              <div className="flex items-center gap-6 mb-6">
                <img
                  src="https://cameroonbusinessawards.org/wp-content/uploads/2024/11/M.-Achille-BASSILEKIN-III-200x300.jpg"
                  alt="Achille Bassilekin"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold">
                    M. Achille BASSILEKIN III
                  </h4>
                  <p className="text-xs text-[#007A5E] font-bold uppercase">
                    Ministre des PME
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
                "Vos entreprises sont des moteurs de l’emploi, de la
                diversification de l’économie et de l’autonomisation des
                communautés locales. Nous rendons hommage à votre excellence."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact & Objects Section */}
      <section className="py-24 bg-[#007A5E] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            light
            subtitle="Notre engagement se mesure par les actions concrètes et les résultats sur le terrain."
          >
            Notre Impact & Ambition
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                label: "Emplois visés",
                value: "500 000",
                sub: "Horizon 2035",
                icon: Users,
              },
              {
                label: "Entrepreneurs accompagnés",
                value: "50 000+",
                sub: "En 5 ans",
                icon: TrendingUp,
              },
              {
                label: "Éditions réussies",
                value: "Annuelle",
                sub: "Régularité",
                icon: Award,
              },
              {
                label: "Portée du label",
                value: "National",
                sub: "10 régions",
                icon: Globe,
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center border border-white/20"
              >
                <stat.icon className="mx-auto mb-4 text-[#FCD116]" size={40} />
                <p className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">{stat.value}</p>
                <p className="text-[#FCD116] font-bold uppercase text-xs tracking-widest">
                  {stat.label}
                </p>
                <p className="text-white/50 text-xs mt-2">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white/5 rounded-[3rem] p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-black mb-8 uppercase text-center">
              Ce que nous faisons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Compétition nationale d'excellence",
                "Bootcamp de formation intensive",
                "Incubation & Mentorat spécialisé",
                "Réseautage avec investisseurs",
                "Visibilité médiatique accrue",
                "Structuration de business plan",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-[#FCD116] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ChevronRight
                      size={16}
                      color={colors.green}
                      strokeWidth={4}
                    />
                  </div>
                  <span className="text-base sm:text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Presentation du Promoteur */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="L'esprit visionnaire derrière les Cameroon Business Awards.">
            Présentation du Promoteur
          </SectionHeading>

          <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 h-[400px] sm:h-[500px] lg:h-full min-h-[400px] overflow-hidden">
                <img
                  src="https://cameroonbusinessawards.org/wp-content/uploads/2024/11/Desire-Makan-II.jpeg"
                  alt="Désire Makan II"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full lg:w-2/3 p-12 md:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 uppercase">
                    Désire Makan II
                  </h3>
                  <div className="space-y-1">
                    <p className="text-[#007A5E] font-bold uppercase tracking-widest">
                      Président du Cameroon Business Council (CBC)
                    </p>
                    <p className="text-[#CE1126] font-bold uppercase tracking-widest">
                      CEO & Founder Africa Business Solutions (ABS)
                    </p>
                  </div>
                </div>

                <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center gap-3 italic">
                  "Un visionnaire engagé pour l'émergence"
                </h4>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  Entrepreneur et fondateur de{" "}
                  <strong>Africa Business Solutions</strong>, Désire Makan II
                  est le moteur derrière les Cameroon Business Awards. Avec une
                  profonde compréhension des défis économiques locaux et une
                  passion pour le développement durable, il a conçu les CBA
                  comme une plateforme pour propulser les talents locaux sur la
                  scène internationale.
                </p>

                <div className="flex flex-wrap gap-12 mt-4 items-center">
                  <img
                    src="https://cameroonbusinessawards.org/wp-content/uploads/2024/11/logo-abs.png"
                    alt="ABS"
                    className="h-12 object-contain"
                  />
                  <img
                    src="https://cameroonbusinessawards.org/wp-content/uploads/2024/11/logo-rbc.png"
                    alt="RBC"
                    className="h-12 object-contain"
                  />
                  <div className="flex-1 border-t border-gray-200 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3rem] shadow-2xl border-4 border-[#FCD116]"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6 uppercase">
              Rejoignez l'Élite Entrepreneuriale
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Que vous soyez entrepreneur, partenaire ou investisseur, votre
              place est parmi nous pour bâtir le Cameroun de demain.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="/contact"
                className="bg-[#007A5E] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-opacity-90 shadow-xl transition-all transform hover:-translate-y-1 inline-block"
              >
                Devenir Partenaire
              </a>
              <a 
                href="/awards"
                className="bg-[#CE1126] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-opacity-90 shadow-xl transition-all transform hover:-translate-y-1 inline-block"
              >
                Participer aux Awards
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
        
        body {
          font-family: 'Montserrat', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .reveal {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
}
