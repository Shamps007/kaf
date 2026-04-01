import React from "react";
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
  InfiniteMovingCards, 
  StickyScroll, 
  WobbleCard, 
  NumberTicker
} from "../components/UIComponents";
import { Hero } from "../components/Hero";
import { Newsletter } from "../components/Newsletter";

const BRANDS = [
  { name: "KAF", logo: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80&w=400&h=200" },
  { name: "Zimmermann", logo: "https://images.unsplash.com/photo-1618889482923-38250401a84e?auto=format&fit=crop&q=80&w=400&h=200" },
  { name: "Colina", logo: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80&w=400&h=200" },
  { name: "Brahma", logo: "https://logo.clearbit.com/brahma.com.br" },
  { name: "Heineken", logo: "https://logo.clearbit.com/heineken.com" },
  { name: "Amstel", logo: "https://logo.clearbit.com/amstel.com" },
  { name: "Duque Beer", logo: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=400&h=200" },
  { name: "Serras Gerais", logo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400&h=200" },
  { name: "Budweiser", logo: "https://logo.clearbit.com/budweiser.com" },
  { name: "Stella Artois", logo: "https://logo.clearbit.com/stellaartois.com" },
  { name: "Corona", logo: "https://logo.clearbit.com/corona.com" },
  { name: "Eisenbahn", logo: "https://logo.clearbit.com/eisenbahn.com.br" },
];

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

const OPERATIONAL_DIFFERENTIALS = [
  {
    title: "Entrega Expressa",
    description: "Seu chopp gelado na porta de casa ou no seu evento, sem atrasos. Atendemos toda a Grande Florianópolis com frota própria e ágil.",
    icon: <Truck className="w-6 h-6" />,
    content: (
      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <Truck className="w-20 h-20 text-amber-gold relative z-10" />
      </div>
    ),
  },
  {
    title: "Instalação Grátis",
    description: "Nossa equipe técnica faz toda a instalação e regulagem da chopeira no local. Você não precisa se preocupar com nada, apenas em servir.",
    icon: <SettingsIcon className="w-6 h-6" />,
    content: (
      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <SettingsIcon className="w-20 h-20 text-amber-gold relative z-10" />
      </div>
    ),
  },
  {
    title: "Chopeiras de Alta Performance",
    description: "Trabalhamos apenas com equipamentos novos e revisados, garantindo que o seu chopp saia na temperatura ideal do primeiro ao último copo.",
    icon: <Beer className="w-6 h-6" />,
    content: (
      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <Beer className="w-20 h-20 text-amber-gold relative z-10" />
      </div>
    ),
  },
];

export const Home = () => {
  return (
    <div className="opacity-100">
      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-bottle-green/10 border-y border-foam/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Anos de História", value: 25, suffix: "+" },
            { label: "Eventos Realizados", value: 5000, suffix: "+" },
            { label: "Barris Entregues", value: 15000, suffix: "+" },
            { label: "Clientes Satisfeitos", value: 98, suffix: "%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-amber-gold mb-2">
                <NumberTicker value={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-xs uppercase tracking-widest text-foam/50 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Verticals (Bento Grid) */}
      <section id="servicos" className="py-32 px-4 bg-obsidian border-y border-foam/5">
        <div className="max-w-7xl mx-auto mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
            Como Podemos <span className="text-amber-gold italic">Ajudar?</span>
          </h2>
          <p className="text-foam/60 max-w-2xl mx-auto">
            Atendemos desde a sua festa de fim de semana até o abastecimento contínuo do seu bar ou restaurante.
          </p>
        </div>
        <BentoGrid>
          <BentoGridItem
            title="Para o seu Bar ou Restaurante"
            description="Aumente seus lucros com nosso chopp. Fornecemos a chopeira em comodato, manutenção preventiva grátis e entrega programada. Seu estoque nunca fica vazio."
            header={
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover/bento:scale-110 transition-transform duration-500" />
            }
            icon={<Beer className="w-5 h-5 text-amber-gold" />}
            className="md:col-span-2"
          />
          <BentoGridItem
            title="Para a sua Festa"
            description="Chopp gelado na porta de casa. Levamos a chopeira, instalamos, ensinamos a usar e buscamos depois. Você só se preocupa em curtir!"
            header={
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover/bento:scale-110 transition-transform duration-500" />
            }
            icon={<Truck className="w-5 h-5 text-amber-gold" />}
          />
          <BentoGridItem
            title="Distribuição & Revenda"
            description="Seja um parceiro KAF. Amplo portfólio de marcas com preços competitivos para você revender e lucrar mais na sua região."
            header={
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover/bento:scale-110 transition-transform duration-500" />
            }
            icon={<Users className="w-5 h-5 text-amber-gold" />}
          />
          <BentoGridItem
            title="Marcas Premium"
            description="Além das nossas joias da casa (KAF e Zimmermann), trabalhamos com as melhores marcas do mercado para garantir variedade ao seu cliente."
            header={
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover/bento:scale-110 transition-transform duration-500" />
            }
            icon={<Award className="w-5 h-5 text-amber-gold" />}
            className="md:col-span-2"
          />
        </BentoGrid>
      </section>

      {/* Brand Marquee */}
      <section className="py-20 bg-bottle-green/5 border-y border-foam/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-gold text-center">
            Nossas Marcas & Parceiros
          </p>
        </div>
        <InfiniteMovingCards items={BRANDS} speed="slow" />
      </section>

      {/* Operational Differentials (Sticky Scroll) */}
      <section className="py-32 px-4 bg-obsidian relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-6">
              Vantagens de ser <span className="text-amber-gold italic">Cliente KAF</span>
            </h2>
            <p className="text-foam/60 max-w-xl">
              Mais do que vender chopp, entregamos uma experiência completa para que o seu evento ou negócio seja um sucesso absoluto.
            </p>
          </div>
          <StickyScroll content={OPERATIONAL_DIFFERENTIALS} />
        </div>
      </section>

      {/* Human Element (Wobble Cards) */}
      <section id="history" className="py-32 px-4 bg-bottle-green/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <WobbleCard containerClassName="h-full bg-amber-gold/5 border-amber-gold/20">
            <div className="max-w-sm">
              <Award className="w-12 h-12 text-amber-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foam uppercase tracking-tighter mb-4">
                Qualidade <span className="text-amber-gold italic">Garantida</span>
              </h2>
              <p className="text-foam/70 leading-relaxed mb-6">
                Desde 1999, somos referência em distribuição de chopp na Grande Florianópolis. Trabalhamos apenas com marcas consagradas e equipamentos de ponta para garantir o melhor sabor.
              </p>
              <a href="/catalogo.html" className="inline-flex items-center gap-2 text-amber-gold font-bold uppercase tracking-widest text-sm hover:text-foam transition-colors">
                Ver Catálogo <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?auto=format&fit=crop&q=80&w=1000"
              alt="História KAF"
              className="absolute -right-20 -bottom-20 w-[300px] h-[300px] object-cover rounded-full opacity-20 grayscale"
              referrerPolicy="no-referrer"
            />
          </WobbleCard>
          <WobbleCard containerClassName="h-full bg-amber-gold/5 border-amber-gold/20">
            <div className="max-w-sm">
              <Users className="w-12 h-12 text-amber-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foam uppercase tracking-tighter mb-4">
                Atendimento <span className="text-amber-gold italic">Premium</span>
              </h2>
              <p className="text-foam/70 leading-relaxed">
                Nossa equipe é treinada para oferecer um serviço impecável, desde o primeiro contato até o recolhimento da chopeira. Seu evento merece esse cuidado.
              </p>
              <div className="mt-8 p-4 rounded-xl bg-obsidian border border-amber-gold/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-gold/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-amber-gold" />
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-gold uppercase tracking-widest mb-1">Satisfação</p>
                  <p className="text-sm text-foam/80">98% de aprovação dos nossos clientes.</p>
                </div>
              </div>
            </div>
          </WobbleCard>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};
