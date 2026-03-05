import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a1a1a] via-[#0a3d2a] to-[#1a1a1a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <img
              src="https://ucarecdn.com/646e02ef-85da-4d7b-870c-743afca45e9d/-/format/auto/"
              alt="CBA Logo"
              className="h-16 mb-6"
            />
            <h3 className="text-xl font-bold mb-4 text-[#FCD116]">
              Cameroon Business Awards
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Événement national de promotion du Made in Cameroon et de
              l'import-substitution.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <strong className="text-white">Organisateur:</strong> Africa
                Business Solutions
              </p>
              <p>
                <strong className="text-white">Promoteur:</strong> Désiré Makan
                II
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FCD116] border-b-2 border-[#008751] pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-[#FCD116] transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#E73138] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-[#FCD116] transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#E73138] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="/awards"
                  className="text-gray-300 hover:text-[#FCD116] transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#E73138] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Lauréats & Prix
                </a>
              </li>
              <li>
                <a
                  href="/program"
                  className="text-gray-300 hover:text-[#FCD116] transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#E73138] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Programme
                </a>
              </li>
              <li>
                <a
                  href="/editions"
                  className="text-gray-300 hover:text-[#FCD116] transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#E73138] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Éditions
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-[#FCD116] transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#E73138] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/legal"
                  className="text-gray-300 hover:text-[#FCD116] transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#E73138] rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Mentions Légales
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FCD116] border-b-2 border-[#008751] pb-2 inline-block">
              Catégories de Prix
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-300">🏆 Meilleur Projet National</li>
              <li className="text-gray-300">💡 Prix de l'Innovation</li>
              <li className="text-gray-300">🌱 Développement Durable</li>
              <li className="text-gray-300">👩‍💼 Entrepreneuriat Féminin</li>
              <li className="text-gray-300">🌍 Développement International</li>
              <li className="text-gray-300">✈️ Prix Diaspora</li>
              <li className="text-gray-300">🚀 Meilleur Startup</li>
              <li className="text-gray-300">❤️ Initiative Sociale</li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FCD116] border-b-2 border-[#008751] pb-2 inline-block">
              Contact
            </h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#E73138] flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">
                  Palais des Congrès, Yaoundé, Cameroun
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#E73138] flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>+237 657 342 834</p>
                  <p>(237) 242 234 134</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#E73138] flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  contact@cameroonbusinessawards.org
                </p>
              </div>
            </div>


          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="text-lg font-bold mb-6 text-center text-[#FCD116]">
            Nos Partenaires
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-70">
            <div className="text-gray-400 text-xs text-center">MINCOMMERCE</div>
            <div className="text-gray-400 text-xs text-center">MINEPAT</div>
            <div className="text-gray-400 text-xs text-center">MINPMEESA</div>
            <div className="text-gray-400 text-xs text-center">
              Groupe Boissons du Cameroun
            </div>
            <div className="text-gray-400 text-xs text-center">CCIMA</div>
            <div className="text-gray-400 text-xs text-center">ANOR</div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61552191602008"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#008751] flex items-center justify-center transition-all hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/groups/12902655/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#008751] flex items-center justify-center transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/cameroon_business_awards?igsh=MWdpcmIxc25hcXkwNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E73138] flex items-center justify-center transition-all hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="text-gray-400 text-sm text-center">
            <p>
              © {new Date().getFullYear()} Cameroon Business Awards. Tous droits
              réservés.
            </p>
            <p className="text-xs mt-1">
              Organisé par{" "}
              <span className="text-[#FCD116] font-semibold">
                Africa Business Solutions
              </span>
            </p>
          </div>

          <div className="flex items-center space-x-6 text-xs text-gray-400">
            <a href="/legal" className="hover:text-[#FCD116] transition-colors">
              Mentions Légales
            </a>
            <span>|</span>
            <a href="/legal" className="hover:text-[#FCD116] transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
