import React from "react";

export default function LegalPage() {
  return (
    <div className="pt-20 pb-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="space-y-6">
          <h1 className="text-4xl font-extrabold text-[#1A1A1A]">
            Mentions Légales & Politique de Confidentialité
          </h1>
          <p className="text-gray-500">Dernière mise à jour : 1er Mars 2026</p>
        </section>

        <section id="mentions" className="space-y-4">
          <h2 className="text-2xl font-bold text-[#008751]">
            1. Éditeur du Site
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Le site Cameroon Business Awards est édité par l'organisation CBA
            Group, société à responsabilité limitée au capital de 1.000.000
            FCFA, immatriculée au RCCM de Douala sous le numéro
            RC/DLA/202X/B/XXX.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Siège social : Rue de l'Indépendance, Douala, Cameroun</li>
            <li>Directeur de la publication : Le Promoteur CBA</li>
            <li>Contact : info@cameroonbusinessawards.cm</li>
          </ul>
        </section>

        <section id="privacy" className="space-y-4">
          <h2 className="text-2xl font-bold text-[#E73138]">
            2. Politique de Confidentialité
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nous accordons une importance capitale à la protection de vos
            données personnelles. En utilisant notre site, vous consentez à la
            collecte et à l'utilisation de vos informations comme décrit
            ci-dessous.
          </p>
          <h3 className="text-xl font-bold">Collecte des données</h3>
          <p className="text-gray-600 leading-relaxed">
            Nous collectons des informations lorsque vous remplissez un
            formulaire de contact, de candidature ou d'inscription à notre
            newsletter. Ces données incluent votre nom, adresse e-mail et numéro
            de téléphone.
          </p>
          <h3 className="text-xl font-bold">Utilisation des données</h3>
          <p className="text-gray-600 leading-relaxed">
            Les informations que nous recueillons sont utilisées pour :
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Traiter vos candidatures pour les prix.</li>
            <li>Vous envoyer des informations sur l'événement.</li>
            <li>Améliorer l'expérience utilisateur sur notre site.</li>
          </ul>
        </section>

        <section id="cookies" className="space-y-4">
          <h2 className="text-2xl font-bold text-[#FCD116]">3. Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Le site utilise des cookies pour analyser le trafic et personnaliser
            le contenu. Vous pouvez désactiver les cookies dans les paramètres
            de votre navigateur.
          </p>
        </section>

        <section id="property" className="space-y-4">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">
            4. Propriété Intellectuelle
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Tous les contenus présents sur ce site (textes, logos, images,
            vidéos) sont la propriété exclusive du Cameroon Business Awards ou
            de leurs auteurs respectifs. Toute reproduction sans autorisation
            est strictement interdite.
          </p>
        </section>
      </div>
    </div>
  );
}
