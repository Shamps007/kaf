import React from "react";
import { ProductCarousel } from "../components/ProductCarousel";
import { DrinksSection } from "../components/DrinksSection";

export const Bebidas = () => {
  return (
    <div className="opacity-100">
      <section className="py-20 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">
            Nossas <span className="text-amber-gold italic">Bebidas</span>
          </h1>
          <p className="text-foam/60 max-w-2xl mx-auto text-lg">
            Desde o chopp pilsen clássico até bebidas não alcoólicas artesanais. Qualidade em cada copo.
          </p>
        </div>
      </section>

      <div className="pb-20">
        <ProductCarousel />
      </div>

      <div className="pb-32">
        <DrinksSection />
      </div>
    </div>
  );
};
