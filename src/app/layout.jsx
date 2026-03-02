"use client";

import React from "react";
import "./global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-sans text-[#1A1A1A] bg-white selection:bg-[#008751] selection:text-white">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </QueryClientProvider>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
          
          :root {
            --cba-green: #008751;
            --cba-red: #E73138;
            --cba-yellow: #FCD116;
          }

          body {
            font-family: 'Plus Jakarta Sans', sans-serif;
          }

          .glass-effect {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
          
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}</style>
      </body>
    </html>
  );
}
