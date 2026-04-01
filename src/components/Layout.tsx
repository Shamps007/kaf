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

const NAV_ITEMS = [
  { name: "Início", link: "/" },
  { name: "A Cervejaria", link: "/cervejaria" },
  { name: "Catálogo", link: "/catalogo" },
  { name: "Bebidas", link: "/bebidas" },
  { name: "Contato", link: "/contato" },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isAgeVerified, setIsAgeVerified] = useState<boolean | null>(null);

  useEffect(() => {
    const verified = sessionStorage.getItem('age-verified');
    if (verified === 'true') {
      setIsAgeVerified(true);
    } else {
      setIsAgeVerified(false);
    }
  }, []);

  return (
    <div className={`bg-obsidian text-foam selection:bg-amber-gold selection:text-obsidian relative font-sans dark ${isAgeVerified === false ? 'h-screen overflow-hidden' : 'overflow-x-hidden'}`}>
      <ScrollToTop />
      <AnimatePresence>
        {isAgeVerified === false && (
          <AgeGate onAccept={() => setIsAgeVerified(true)} />
        )}
      </AnimatePresence>

      {isAgeVerified === true && (
        <>
          <BeerGlassEffect />
          <FloatingNav 
            navItems={NAV_ITEMS} 
            logo="/logo-kaf.png" 
          />

          <main className="min-h-screen pt-20">
            {children}
          </main>

          <footer id="footer" className="bg-obsidian pt-20 pb-10 border-t border-foam/5">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 mb-6">
                    <Beer className="w-8 h-8 text-amber-gold" />
                    <span className="text-2xl font-display font-bold uppercase tracking-tighter text-foam">KAF <span className="text-amber-gold italic">CHOPP</span></span>
                  </div>
                  <p className="text-foam/50 max-w-sm leading-relaxed mb-8">
                    Referência em distribuição de chopp e bebidas na Grande Florianópolis. Tradição familiar e excelência técnica desde 1999.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 rounded-xl bg-foam/5 hover:bg-amber-gold/20 transition-colors text-foam/70 hover:text-amber-gold border border-foam/10">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 rounded-xl bg-foam/5 hover:bg-amber-gold/20 transition-colors text-foam/70 hover:text-amber-gold border border-foam/10">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 rounded-xl bg-foam/5 hover:bg-amber-gold/20 transition-colors text-foam/70 hover:text-amber-gold border border-foam/10">
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-foam mb-6">Navegação</h4>
                  <ul className="space-y-4">
                    {NAV_ITEMS.map((item) => (
                      <li key={item.name}>
                        <a 
                          href={item.link} 
                          className="text-foam/50 hover:text-amber-gold transition-colors text-sm uppercase tracking-wider"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-foam mb-6">Onde Estamos</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-foam/50">
                      <MapPin className="w-5 h-5 text-amber-gold shrink-0" />
                      <span>Palhoça, Santa Catarina<br />Grande Florianópolis - SC</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-foam/50">
                      <Phone className="w-5 h-5 text-amber-gold shrink-0" />
                      <span>(48) 3333-3333<br />(48) 99999-9999</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-10 border-t border-foam/5 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-foam/30 uppercase tracking-widest">
                  © 2026 KAF Chopp. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </footer>

          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
};
