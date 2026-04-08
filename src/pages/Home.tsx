import React from "react";
import { Hero } from "../components/Hero";
import { Marcas } from "../components/Marcas";

import { 
  Beer, 
  Truck, 
  Users, 
  Award, 
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { 
  BentoGrid, 
  BentoGridItem, 
  WobbleCard
} from "../components/UIComponents";

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Home = () => {
  return (
    <div className="flex flex-col flex-grow">
      <Hero />

      {/* Marcas (Brand Marquee) */}
      <Marcas />

      {/* Business Verticals (Bento Grid) */}
      <section id="servicos" className="py-20 px-4 bg-transparent relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
            Como Podemos <span className="text-kaf-gold italic">Ajudar?</span>
          </h2>
          <p className="text-kaf-cream/60 max-w-2xl mx-auto">
            Atendemos desde a sua festa de fim de semana até o abastecimento contínuo do seu bar ou restaurante.
          </p>
        </div>
        <BentoGrid>
          <BentoGridItem
            title="Para o seu Bar ou Restaurante"
            description="Aumente seus lucros com nosso chopp. Fornecemos a chopeira em comodato, manutenção preventiva grátis e entrega programada. Seu estoque nunca fica vazio."
            header={
              <img src="/bar.jpeg" alt="Para o seu Bar ou Restaurante" className="w-full h-full object-cover group-hover/bento:scale-105 transition-transform duration-500" />
            }
            icon={<Beer className="w-5 h-5 text-kaf-gold" />}
            className="md:col-span-2"
          />
          <BentoGridItem
            title="Para a sua Festa"
            description="Chopp gelado na porta de casa. Levamos a chopeira, instalamos, ensinamos a usar e buscamos depois. Você só se preocupa em curtir!"
            header={
              <img src="/festa.jpeg" alt="Para a sua Festa" className="w-full h-full object-cover group-hover/bento:scale-105 transition-transform duration-500" />
            }
            icon={<Truck className="w-5 h-5 text-kaf-gold" />}
          />
          <BentoGridItem
            title="Distribuição & Revenda"
            description="Seja um parceiro KAF. Amplo portfólio de marcas com preços competitivos para você revender e lucrar mais na sua região."
            header={
              <img src="/kaf-distrib-1.png" alt="Distribuição & Revenda" className="w-full h-full object-cover group-hover/bento:scale-105 transition-transform duration-500" />
            }
            icon={<Users className="w-5 h-5 text-kaf-gold" />}
          />
          <BentoGridItem
            title="Marcas Premium"
            description={
              <span>
                Além das nossas joias da casa (KAF e <span className="text-kaf-gold font-bold">Zimmermann</span>), trabalhamos com as melhores marcas do mercado para garantir variedade ao seu cliente.
              </span>
            }
            header={
              <img src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=1000" alt="Marcas Premium" className="w-full h-full object-cover group-hover/bento:scale-105 transition-transform duration-500" />
            }
            icon={<Award className="w-5 h-5 text-kaf-gold" />}
            className="md:col-span-2"
          />
        </BentoGrid>
      </section>

      {/* Operational Differentials */}
      <section className="py-20 px-4 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
              Vantagens de ser <span className="text-kaf-gold italic">Cliente KAF</span>
            </h2>
            <p className="text-kaf-cream/60 max-w-2xl mx-auto">
              Mais do que vender chopp, entregamos uma experiência completa para que o seu evento ou negócio seja um sucesso absoluto.
            </p>
          </div>
          
          <div className="flex flex-col gap-24">
            {/* Item 1: Text Left, Image Right */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 rounded-full bg-kaf-gold/10 flex items-center justify-center border border-kaf-gold/20">
                  <Truck className="w-8 h-8 text-kaf-gold" />
                </div>
                <h3 className="text-3xl font-display font-bold text-kaf-gold uppercase tracking-tighter">Entrega Expressa</h3>
                <p className="text-kaf-cream/70 text-lg leading-relaxed">
                  Seu chopp gelado na porta de casa ou no seu evento, sem atrasos. Atendemos toda a Grande Florianópolis com frota própria e ágil.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden group shadow-[0_0_30px_rgba(255,215,0,0.1)] border border-kaf-gold/10">
                  <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000" alt="Entrega Expressa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </div>
            </div>

            {/* Item 2: Image Left, Text Right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 rounded-full bg-kaf-gold/10 flex items-center justify-center border border-kaf-gold/20">
                  <SettingsIcon className="w-8 h-8 text-kaf-gold" />
                </div>
                <h3 className="text-3xl font-display font-bold text-kaf-gold uppercase tracking-tighter">Instalação Grátis</h3>
                <p className="text-kaf-cream/70 text-lg leading-relaxed">
                  Nossa equipe técnica faz toda a instalação e regulagem da chopeira no local. Você não precisa se preocupar com nada, apenas em servir.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden group shadow-[0_0_30px_rgba(255,215,0,0.1)] border border-kaf-gold/10">
                  <img src="/barril-chopp.png" alt="Instalação Grátis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </div>
            </div>

            {/* Item 3: Text Left, Image Right */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 rounded-full bg-kaf-gold/10 flex items-center justify-center border border-kaf-gold/20">
                  <Beer className="w-8 h-8 text-kaf-gold" />
                </div>
                <h3 className="text-3xl font-display font-bold text-kaf-gold uppercase tracking-tighter">Qualidade Premium</h3>
                <p className="text-kaf-cream/70 text-lg leading-relaxed">
                  Trabalhamos apenas com equipamentos novos e revisados, garantindo que o seu chopp saia na temperatura ideal do primeiro ao último copo.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden group shadow-[0_0_30px_rgba(255,215,0,0.1)] border border-kaf-gold/10">
                  <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000" alt="Qualidade Premium" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human Element (Wobble Cards) */}
      <section id="history" className="py-20 px-4 bg-transparent relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <WobbleCard containerClassName="h-full bg-kaf-gold/5 border-kaf-gold/20">
            <div className="max-w-sm">
              <Award className="w-12 h-12 text-kaf-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-kaf-cream uppercase tracking-tighter mb-4">
                Qualidade <span className="text-kaf-gold italic">Garantida</span>
              </h2>
              <p className="text-kaf-cream/70 leading-relaxed mb-6">
                Desde 1999, somos referência em distribuição de chopp na Grande Florianópolis. Trabalhamos apenas com marcas consagradas e equipamentos de ponta para garantir o melhor sabor.
              </p>
              <a href="/catalogo" className="inline-flex items-center gap-2 text-kaf-gold font-bold uppercase tracking-widest text-sm hover:text-kaf-cream transition-colors">
                Ver Catálogo <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?auto=format&fit=crop&q=80&w=1000"
              alt="História KAF"
              className="absolute -right-20 -bottom-20 w-[300px] h-[300px] object-cover rounded-full opacity-20"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </WobbleCard>
          <WobbleCard containerClassName="h-full bg-kaf-gold/5 border-kaf-gold/20">
            <div className="max-w-sm">
              <Users className="w-12 h-12 text-kaf-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-kaf-cream uppercase tracking-tighter mb-4">
                Atendimento <span className="text-kaf-gold italic">Premium</span>
              </h2>
              <p className="text-kaf-cream/70 leading-relaxed">
                Nossa equipe é treinada para oferecer um serviço impecável, desde o primeiro contato até o recolhimento da chopeira. Seu evento merece esse cuidado.
              </p>
              <div className="mt-8 p-4 rounded-xl bg-kaf-dark border border-kaf-gold/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-kaf-gold/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-kaf-gold" />
                </div>
                <div>
                  <p className="text-xs font-bold text-kaf-gold uppercase tracking-widest mb-1">Satisfação</p>
                  <p className="text-sm text-kaf-cream/80">98% de aprovação dos nossos clientes.</p>
                </div>
              </div>
            </div>
          </WobbleCard>
        </div>
      </section>


    </div>
  );
};

