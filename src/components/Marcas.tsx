import React from "react";
import { BrandMarquee } from "./BrandMarquee";

export const Marcas = () => {
  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-kaf-gold text-center">
          Nossas Marcas & Parceiros
        </p>
      </div>
      <BrandMarquee />
    </section>
  );
};

export default Marcas;
