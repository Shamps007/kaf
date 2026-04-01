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
    <section id="produtos" className="py-32 px-4 bg-bottle-green/10 border-y border-foam/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6 text-foam">
              Catálogo <span className="text-amber-gold italic">Comercial</span>
            </h2>
            <p className="text-foam/60 max-w-2xl">
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
                    ? "bg-amber-gold text-obsidian shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : "bg-obsidian/50 text-foam/60 border border-foam/10 hover:border-amber-gold/50 hover:text-foam"
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
                "group relative rounded-3xl overflow-hidden bg-obsidian border border-foam/10 hover:border-amber-gold/50 transition-colors duration-500 opacity-100",
                index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
              )}
            >
                <div className="absolute inset-0 overflow-hidden z-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Contrast Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                </div>

                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-obsidian/80 backdrop-blur-md text-amber-gold rounded-full border border-amber-gold/20 shadow-lg">
                    {item.category}
                  </span>
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                  <h3 className={cn(
                    "font-display font-bold text-foam mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
                    index === 0 || index === 3 ? "text-3xl md:text-4xl" : "text-xl"
                  )}>
                    {item.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="text-[10px] text-foam/60 uppercase tracking-widest mb-1 font-bold drop-shadow-sm">Valor</p>
                      <p className="text-lg font-bold text-amber-gold drop-shadow-md">{item.price}</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-amber-gold/20 backdrop-blur-sm flex items-center justify-center text-amber-gold border border-amber-gold/30 group-hover:bg-amber-gold group-hover:text-obsidian transition-all duration-300 shadow-lg">
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
