"use client";

import {
  Calendar,
  MapPin,
  Users,
  Award,
  BookOpen,
  Sparkles,
  Network,
  ArrowRight,
  Trophy,
  Target,
  Handshake,
} from "lucide-react";

export default function ProgrammePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#007A3D] via-[#006030] to-[#004d26] text-white h-[90vh] mt-24 md:py-24 overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FCD116] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CE1126] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/20">
              <Calendar className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium">2ème Édition</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Programme Officiel
              <span className="block text-[#FCD116] mt-2">CBA 2024</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Une journée dédiée à l'excellence entrepreneuriale camerounaise
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-sm md:text-lg">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <Calendar className="w-5 h-5 text-[#FCD116]" />
                <span className="font-semibold">19 Décembre 2024</span>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <MapPin className="w-5 h-5 text-[#FCD116]" />
                <span className="font-semibold">
                  Palais des Congrès, Yaoundé
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Un Événement d'Excellence
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
              Le programme des Cameroon Business Awards 2024 allie{" "}
              <span className="font-semibold text-[#007A3D]">
                formation intensive
              </span>
              ,
              <span className="font-semibold text-[#CE1126]">
                {" "}
                compétition de haut niveau
              </span>{" "}
              et
              <span className="font-semibold text-[#007A3D]">
                {" "}
                célébration du Made in Cameroon
              </span>
              . Une journée complète dédiée à l'excellence entrepreneuriale et à
              l'innovation nationale.
            </p>
          </div>
        </div>
      </section>

      {/* Bootcamp Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#007A3D]/10 text-[#007A3D] px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">Matinée et Après-midi</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Bootcamp des Finalistes
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                Une formation intensive pour préparer les entrepreneurs
                finalistes à la compétition finale et renforcer leurs
                compétences entrepreneuriales.
              </p>

              <div className="bg-[#FCD116]/10 border-l-4 border-[#FCD116] p-6 rounded-r-xl mb-8">
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">
                  Résultat attendu
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                  Les finalistes améliorent leurs projets avant la présentation
                  officielle devant le jury.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-[#007A3D] rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">
                  Business Plan Solide
                </h3>
                <p className="text-sm md:text-base text-gray-700">
                  Élaboration et structuration de modèles d'affaires performants
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-[#CE1126] rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">
                  Techniques de Pitch
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Maîtrise de l'art de présenter son projet avec impact
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-[#FCD116] rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">
                  Stratégies de Levée de Fonds
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Accès aux techniques de financement et aux investisseurs
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-[#007A3D] rounded-xl flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">
                  Marketing Digital
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Communication moderne et visibilité en ligne
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grande Cérémonie Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#CE1126]/10 text-[#CE1126] px-4 py-2 rounded-full mb-6">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">Soirée</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Grande Cérémonie de Gala
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
              Le moment phare de l'événement : une soirée prestigieuse célébrant
              l'excellence entrepreneuriale camerounaise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#007A3D] to-[#005a2d] rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3">
                Accueil des Invités
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Installation des participants et moments de networking
                privilégiés
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CE1126] to-[#a00e1e] rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3">
                Ouverture Officielle
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Discours du Promoteur et mot de bienvenue aux participants
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FCD116] to-[#d4af13] rounded-2xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3">
                Interventions Institutionnelles
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Ministère du Commerce, des PME et de l'Économie
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#007A3D] to-[#005a2d] rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3">
                Présentation des Projets
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Pitchs des finalistes devant le jury et l'assemblée
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#CE1126] to-[#a00e1e] rounded-2xl flex items-center justify-center mb-4">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3">
                Remise des Prix
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                11 prix prestigieux récompensant l'excellence et l'innovation
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FCD116] to-[#d4af13] rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-3">
                Animations Artistiques
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Prestations Gospel, intermèdes musicaux et performances
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#007A3D] to-[#005a2d] p-10 rounded-3xl text-white text-center shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Buffet 100% Made in Cameroon
            </h3>
            <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Un moment convivial d'échanges et de networking autour des
              meilleurs produits locaux
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Handshake className="w-5 h-5" />
              <span className="font-semibold">
                Promotion du Made in Cameroon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Activités Parallèles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#007A3D]/10 text-[#007A3D] px-4 py-2 rounded-full mb-6">
              <Network className="w-5 h-5" />
              <span className="font-semibold">Tout au long de la journée</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Activités de Networking
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Des opportunités stratégiques de connexion et de collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-[#007A3D]/5 to-transparent rounded-2xl border border-[#007A3D]/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#007A3D] rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">
                  Entrepreneurs et Investisseurs
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Rencontres privilégiées pour développer des partenariats
                  stratégiques
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-[#CE1126]/5 to-transparent rounded-2xl border border-[#CE1126]/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#CE1126] rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">
                  Partenaires Institutionnels
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Échanges directs avec les représentants des ministères et
                  institutions
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-[#FCD116]/5 to-transparent rounded-2xl border border-[#FCD116]/40 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#FCD116] rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">
                  Couverture Médiatique
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Visibilité nationale via CRTV, Canal 2, Info TV et Cameroon
                  Tribune
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-gradient-to-br from-[#007A3D]/5 to-transparent rounded-2xl border border-[#007A3D]/20 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#007A3D] rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2">
                  Promotion des Finalistes
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Mise en lumière des entreprises et projets innovants
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-[#004d26] to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Objectifs du Programme
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto">
              Un programme complet au service de l'entrepreneuriat camerounais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Former les Entrepreneurs",
                desc: "Renforcement des compétences et structuration des projets",
              },
              {
                icon: Award,
                title: "Valoriser l'Innovation",
                desc: "Reconnaissance des projets les plus innovants",
              },
              {
                icon: Sparkles,
                title: "Encourager l'Investissement",
                desc: "Facilitation de l'accès au financement",
              },
              {
                icon: Target,
                title: "Promouvoir le Made in Cameroon",
                desc: "Mise en avant de la production locale",
              },
              {
                icon: Network,
                title: "Créer un Réseau d'Affaires",
                desc: "Connexions stratégiques public-privé",
              },
              {
                icon: Trophy,
                title: "Accélérer l'Industrialisation",
                desc: "Contribution à l'autonomie économique nationale",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-[#FCD116] mb-4" />
                <h3 className="font-bold text-lg md:text-xl mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-[#007A3D] via-[#006030] to-[#CE1126] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#FCD116] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Trophy className="w-16 h-16 mx-auto mb-6 text-[#FCD116]" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Un programme riche et inspirant
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-10">
            Découvrez en détails le programme des CBA 2024
          </p>

          <a
            href="/Programme-des-CBA-du-19-decembre-2024.pdf"
            download
            className="bg-white text-[#007A3D] px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#FCD116] hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 mx-auto inline-flex"
          >
            Télécharger le PDF
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
