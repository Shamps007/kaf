import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { 
  Beer, 
  Instagram, 
  Facebook, 
  Phone, 
  MapPin 
} from "lucide-react";
import { 
  FloatingNav,
  BeerGlassEffect
} from "./UIComponents";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { AgeGate } from "./AgeGate";
import { ScrollToTop } from "./ScrollToTop";
import Footer from "./Footer";

const NAV_ITEMS = [
  { name: "Início", link: "/" },
  { name: "A Cervejaria", link: "/cervejaria" },
  { name: "Catálogo", link: "/catalogo" },
  { name: "Bebidas", link: "/bebidas" },
  { name: "Contato", link: "/contato" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isAgeVerified, setIsAgeVerified] = useState<boolean>(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const verified = sessionStorage.getItem('age-verified');
      if (verified === 'true') {
        setIsAgeVerified(true);
      }
    } catch (e) {
      console.error("Session storage not available", e);
    }
    setIsReady(true);
  }, []);

  if (!isReady) return <div className="fixed inset-0 bg-black z-[99999]" />;

  return (
    <div className={`text-kaf-cream selection:bg-kaf-gold selection:text-kaf-dark relative font-sans dark bg-[#000000] ${!isAgeVerified ? 'h-screen overflow-hidden' : 'overflow-x-hidden'}`}>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {!isAgeVerified && (
          <AgeGate onAccept={() => setIsAgeVerified(true)} />
        )}
      </AnimatePresence>

      {isAgeVerified && (
        <>
          <main className="min-h-screen relative z-10">
            {children}
          </main>

          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
};
