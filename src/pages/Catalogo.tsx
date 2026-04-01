import React from "react";
import { CatalogBento } from "../components/CatalogBento";

export const Catalogo = () => {
  return (
    <div className="opacity-100">
      <section className="py-20 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">
            Nosso <span className="text-amber-gold italic">Catálogo</span>
          </h1>
          <p className="text-foam/60 max-w-2xl mx-auto text-lg">
            Explore nossa seleção completa de barris, equipamentos e serviços para o seu evento ou estabelecimento.
          </p>
        </div>
      </section>

      <div className="pb-32">
        <CatalogBento />
      </div>
    </div>
  );
};
