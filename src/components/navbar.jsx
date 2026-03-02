"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import classnames from "classnames";

const TOP_NAV_ITEMS = {
  email: "info@cameroonbusinessawards.cm",
  phone: "+237 600 000 000",
  socials: [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ],
};

const MAIN_NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Programme", href: "/program" },
  { label: "Lauréats", href: "/awards" },
  { label: "Éditions", href: "/editions" },

];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Navbar */}
      <div
        className="fixed top-0 left-0 right-0 bg-[#1A1A1A] text-white py-2 px-4 md:px-8 z-[60]"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${TOP_NAV_ITEMS.email}`}
              className="flex items-center gap-2 hover:text-[#008751] transition-colors"
            >
              <Mail size={14} />
              <span className="hidden sm:inline">{TOP_NAV_ITEMS.email}</span>
            </a>
            <a
              href={`tel:${TOP_NAV_ITEMS.phone}`}
              className="flex items-center gap-2 hover:text-[#008751] transition-colors"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">{TOP_NAV_ITEMS.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            {TOP_NAV_ITEMS.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="hover:text-[#008751] transition-colors"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={classnames(
          "transition-all duration-300 px-4 md:px-8 mt-5 lg:mt-9",
          isScrolled
            ? "bg-white shadow-md py-3"
            : "bg-white/90 backdrop-blur-sm py-4",
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="https://ucarecdn.com/646e02ef-85da-4d7b-870c-743afca45e9d/-/format/auto/"
              alt="CBA Logo"
              className="h-10 md:h-12 object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {MAIN_NAV_ITEMS.map((item, idx) => (
              <li key={idx} className="relative group">
                {item.children ? (
                  <div className="flex items-center gap-1 cursor-pointer py-2 font-medium hover:text-[#008751] transition-colors">
                    {item.label}
                    <ChevronDown size={16} />
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                      {item.children.map((child, cIdx) => (
                        <a
                          key={cIdx}
                          href={child.href}
                          className="block px-4 py-3 hover:bg-gray-50 hover:text-[#008751] transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="font-medium hover:text-[#008751] transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a
                href="/contact"
                className="bg-[#008751] hover:bg-[#007043] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-[#008751]/20 active:scale-95"
              >
                Contacter
              </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
          >
            <ul className="px-6 py-8 flex flex-col gap-6">
              {MAIN_NAV_ITEMS.map((item, idx) => (
                <li key={idx}>
                  {item.children ? (
                    <div className="space-y-4">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                        {item.label}
                      </span>
                      <ul className="pl-4 space-y-4 border-l-2 border-gray-100">
                        {item.children.map((child, cIdx) => (
                          <li key={cIdx}>
                            <a
                              href={child.href}
                              className="text-lg font-medium hover:text-[#008751]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-xl font-bold hover:text-[#008751]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="/contact"
                  className="block w-full text-center bg-[#008751] text-white py-4 rounded-xl font-bold shadow-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacter
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
