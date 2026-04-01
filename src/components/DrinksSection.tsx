import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Droplets } from "lucide-react";
import { cn } from "@/src/lib/utils";

const DRINKS = [
  {
    id: 1,
    name: "Água Tônica Premium",
    style: "Tônica",
    calories: "35 kcal",
    sugar: "8g",
    temp: "2-4°C",
    description: "Refrescante e equilibrada, produzida com quinino natural e notas cítricas sutis.",
    image: "https://images.unsplash.com/photo-1596649299486-4cdea56fd59b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Ginger Beer Artesanal",
    style: "Gengibre",
    calories: "45 kcal",
    sugar: "10g",
    temp: "4-6°C",
    description: "Refrigerante natural de gengibre com picância marcante e frescor intenso.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Suco de Uva Integral",
    style: "Suco",
    calories: "60 kcal",
    sugar: "14g (Natural)",
    temp: "4-8°C",
    description: "100% fruta, sem adição de açúcares ou conservantes. O puro sabor da uva.",
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Soda de Frutas Vermelhas",
    style: "Soda Italiana",
    calories: "40 kcal",
    sugar: "9g",
    temp: "2-5°C",
    description: "Mix de framboesa, amora e morango em uma base levemente gaseificada.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "Guaraná da Amazônia",
    style: "Refrigerante",
    calories: "38 kcal",
    sugar: "9g",
    temp: "3-6°C",
    description: "Extrato natural de guaraná selecionado, com sabor autêntico e energia natural.",
    image: "https://images.unsplash.com/photo-1556710807-8127ea411377?auto=format&fit=crop&q=80&w=800",
  },
];

export const DrinksSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="bebidas" className="py-24 bg-obsidian relative overflow-hidden border-t border-foam/5">
      <div className="max-w-7xl mx-auto px-4 mb-16 flex items-end justify-between">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foam mb-4 uppercase tracking-tighter">
            Nossas <span className="text-amber-gold italic">Bebidas</span>
          </h2>
          <p className="text-foam/60 max-w-md">
            Opções não alcoólicas premium para acompanhar seus momentos com sofisticação e sabor.
          </p>
        </div>
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full border border-foam/20 text-foam hover:bg-foam/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full border border-foam/20 text-foam hover:bg-foam/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-4 md:px-12 pb-16 snap-x snap-mandatory scrollbar-hide"
      >
        {DRINKS.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </div>
    </section>
  );
};

const DrinkCard = ({ drink }: { drink: typeof DRINKS[0]; key?: number | string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative min-w-[280px] md:min-w-[320px] h-[500px] rounded-2xl overflow-hidden snap-center cursor-pointer group shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Layer 0: Background Base */}
      <div className="absolute inset-0 bg-obsidian z-0" />
      
      {/* Layer 1: Product Image (100% Opacity, Sharp) */}
      <img
        src={drink.image}
        alt={drink.name}
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-10 group-hover:scale-110 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      
      {/* Contrast Overlay: Gradient for Legibility */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      
      {/* Floating Shadow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-black/80 blur-2xl rounded-[100%] group-hover:w-full transition-all duration-500 z-15" />

      {/* Layer 2: Content (Superior Layer) */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-30">
        <div className="mb-4 w-10 h-10 rounded-full bg-amber-gold/20 flex items-center justify-center border border-amber-gold/40 shadow-lg">
          <Droplets className="w-5 h-5 text-amber-gold" />
        </div>
        
        <h3 className="text-2xl font-display font-bold text-foam mb-1 uppercase tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{drink.name}</h3>
        <p className="text-amber-gold font-medium tracking-widest uppercase text-xs mb-4 drop-shadow-md">{drink.style}</p>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-foam/90 text-sm mb-6 leading-relaxed font-light italic drop-shadow-sm">{drink.description}</p>
              
              <div className="grid grid-cols-3 gap-4 border-t border-foam/20 pt-4">
                <div className="text-center">
                  <p className="text-[9px] uppercase tracking-widest text-foam/60 mb-1 font-bold">Calorias</p>
                  <p className="text-xs font-bold text-foam drop-shadow-md">{drink.calories}</p>
                </div>
                <div className="text-center border-x border-foam/20">
                  <p className="text-[9px] uppercase tracking-widest text-foam/60 mb-1 font-bold">Açúcar</p>
                  <p className="text-xs font-bold text-foam drop-shadow-md">{drink.sugar}</p>
                </div>
                <div className="text-center">
                  <p className="text-[9px] uppercase tracking-widest text-foam/60 mb-1 font-bold">Temp</p>
                  <p className="text-xs font-bold text-foam drop-shadow-md">{drink.temp}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
