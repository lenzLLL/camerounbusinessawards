"use client"
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

emailjs.init('lb_BgoUzA_095QY5J');

export default function ContactPage() {
   const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    domain: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

   const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Validation des champs obligatoires
    if (!formData.name || !formData.email || !formData.phone || !formData.subject) {
      setSubmitMessage("Veuillez remplir tous les champs obligatoires.");
      setIsSubmitting(false);
      return;
    }

    try {
      const messageContent = `
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Sujet: ${formData.subject}
Site Web: ${formData.domain || "Non fourni"}
Message: ${formData.message || "Aucun message additionnel"}
      `;

      const templateParams = {
        email: "lenzyounda@gmail.com",
        name: messageContent,
      };

      const result = await emailjs.send(
        "service_lnnc46d",
        "template_te8t1r7",
        templateParams
      );

      setSubmitMessage("Votre message a été envoyé avec succès !");
      setFormData({ name: "", phone: "", domain: "", subject: "", message: "", email: "" });
    } catch (error) {
      console.error(error);
      setSubmitMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A]">
            Contactez-<span className="text-[#008751]">Nous</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous
            accompagner.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Nos Coordonnées</h2>
              <p className="text-gray-500">
                Retrouvez-nous dans nos bureaux ou contactez-nous par téléphone.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#008751]/10 flex items-center justify-center text-[#008751] flex-shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">Adresse</h3>
                  <p className="text-gray-600">
                    Immeuble CBA, Rue de l'Indépendance, Douala, Cameroun
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#E73138]/10 flex items-center justify-center text-[#E73138] flex-shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">Téléphone</h3>
                  <p className="text-gray-600">
                    +237 657 342 834 / (237) 242 234 134
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#FCD116]/10 flex items-center justify-center text-[#FCD116] flex-shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">Email</h3>
                  <p className="text-gray-600">
                    contact@cameroonbusinessawards.org
                  </p>
                </div>
              </div>
            </div>

            {/* Support Box */}
            <div className="bg-[#1A1A1A] text-white p-8 rounded-[2rem] space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <MessageSquare size={100} />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Support Rapide</h3>
              <p className="text-gray-400">
                Nous répondons généralement en moins de 24 heures ouvrées.
              </p>
              <button className="w-full bg-[#008751] text-white px-6 py-3 rounded-xl font-bold">
                Contacter WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ex: Jean Dupont"
                    className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#008751]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="jean@exemple.com"
                    className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#008751]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+237 6XX XXX XXX"
                    className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#008751]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Site Web
                  </label>
                  <input
                    type="url"
                    name="domain"
                    value={formData.domain}
                    onChange={(e) => setFormData({...formData, domain: e.target.value})}
                    placeholder="https://example.com"
                    className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#008751]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Sujet</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#008751]"
                >
                  <option value="Devenir Sponsor">Devenir Sponsor</option>
                  <option value="Candidature">Candidature</option>
                  <option value="Partenariat Média">Partenariat Média</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Votre message ici..."
                  className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#008751]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#008751] text-white py-5 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-2 hover:bg-[#007043] transition-all"
              >
                Envoyer le message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Interactive Google Map */}
      <section className="h-[400px] mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.1234567890123!2d9.737635315744396!3d4.048265995949408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1050ab1c2d3ef123%3A0xabcdef1234567890!2sRue%20de%20l%27Ind%C3%A9pendance%2C%20Douala%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
