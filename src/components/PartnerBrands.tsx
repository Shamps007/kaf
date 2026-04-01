import React from "react";

const BRANDS = [
  { name: "Spaten", src: "spaten.png" },
  { name: "Brahma", src: "brahma.png" },
  { name: "Stella Artois", src: "stella.png" },
  { name: "Patagonia", src: "patagonia.png" },
  { name: "Colorado", src: "colorado.png" },
  { name: "KAF", src: "kaf.png" },
];

export const PartnerBrands = () => {
  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mb-12 text-center text-kaf-cream">
          Marcas Parceiras
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {BRANDS.map((brand, index) => (
            <div key={index} className="w-full flex justify-center">
              <img
                src={brand.src}
                alt={brand.name}
                className="h-16 md:h-20 w-auto object-contain opacity-70 transition-all duration-300 ease-in-out filter brightness-0 invert hover:opacity-100 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
