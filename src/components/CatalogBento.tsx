import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, Filter } from "lucide-react";
import { cn } from "@/src/lib/utils";

const CATALOG = [
  {
    id: 1,
    name: "Chopp KAF Pilsen 30L",
    style: "Pilsen",
    category: "Barril",
    price: "R$ 387,00",
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Chopp Zimmermann IPA 50L",
    style: "IPA",
    category: "Barril",
    price: "R$ 845,00",
    image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Chopeira Elétrica 2 Vias",
    style: "Equipamento",
    category: "Serviço",
    price: "Comodato",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Chopp de Vinho 30L",
    style: "Vinho",
    category: "Barril",
    price: "R$ 447,00",
    image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "KAF Weiss 50L",
    style: "Weiss",
    category: "Barril",
    price: "R$ 650,00",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    name: "Instalação & Manutenção",
    style: "Suporte",
    category: "Serviço",
    price: "Incluso",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  },
];

const FILTERS = ["Todos", "Pilsen", "IPA", "Weiss", "Vinho", "Equipamento", "Suporte"];

export const CatalogBento = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredCatalog = CATALOG.filter(
    (item) => activeFilter === "Todos" || item.style === activeFilter
  );

  return (
    <section id="produtos" className="py-32 px-4 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6 text-kaf-cream">
              Catálogo <span className="text-kaf-gold italic">Comercial</span>
            </h2>
            <p className="text-kaf-cream/60 max-w-2xl">
              Soluções completas para o seu negócio ou evento. Escolha o estilo e nós garantimos a qualidade.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all",
                  activeFilter === filter
                    ? "bg-kaf-gold text-kaf-dark shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                    : "bg-kaf-dark/50 text-kaf-cream/60 hover:border-kaf-gold/50 hover:text-kaf-cream"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {filteredCatalog.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "group relative rounded-3xl overflow-hidden bg-kaf-dark hover:border-kaf-gold/50 transition-colors duration-500 opacity-100",
                index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
              )}
            >
                <div className="absolute inset-0 overflow-hidden z-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
                    style={{ filter: "contrast(1.1) brightness(1.1)" }}
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-kaf-dark/80 backdrop-blur-md text-kaf-gold rounded-full border border-kaf-gold/20 shadow-lg">
                    {item.category}
                  </span>
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                  <h3 className={cn(
                    "font-display font-bold text-kaf-cream mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
                    index === 0 || index === 3 ? "text-3xl md:text-4xl" : "text-xl"
                  )}>
                    {item.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="text-[10px] text-kaf-cream/60 uppercase tracking-widest mb-1 font-bold drop-shadow-sm">Valor</p>
                      <p className="text-lg font-bold text-kaf-gold drop-shadow-md">{item.price}</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-kaf-gold/20 backdrop-blur-sm flex items-center justify-center text-kaf-gold border border-kaf-gold/30 group-hover:bg-kaf-gold group-hover:text-kaf-dark transition-all duration-300 shadow-lg">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};
