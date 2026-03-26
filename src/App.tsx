import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Beer, 
  Truck, 
  Settings, 
  Users, 
  History, 
  Award, 
  Phone, 
  Instagram, 
  Facebook, 
  MapPin, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  Droplets
} from "lucide-react";
import { 
  AuroraBackground, 
  TextGenerateEffect, 
  ShimmerButton, 
  BentoGrid, 
  BentoGridItem, 
  InfiniteMovingCards, 
  StickyScroll, 
  WobbleCard, 
  FloatingNav,
  NumberTicker,
  FoamBubbles,
  BeerGlassEffect
} from "./components/UIComponents";
import { MultiStepLoader } from "./components/MultiStepLoader";
import confetti from "canvas-confetti";

// Mock Data
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

const LOADING_STATES = [
  { text: "Selecionando os melhores grãos de malte..." },
  { text: "Aquecendo a água na temperatura ideal..." },
  { text: "Iniciando o processo de mosturação..." },
  { text: "Fervura e adição de lúpulos aromáticos..." },
  { text: "Resfriamento e fermentação controlada..." },
  { text: "Maturação para o sabor perfeito..." },
  { text: "Envase e pressurização do barril..." },
  { text: "Chopp gelado pronto para servir!" },
];

const NAV_ITEMS = [
  { name: "Início", link: "#home" },
  { name: "História", link: "#history" },
  { name: "Produtos", link: "#products" },
  { name: "Serviços", link: "#services" },
  { name: "Contato", link: "#contact" },
];

const OPERATIONAL_DIFFERENTIALS = [
  {
    title: "Logística Ágil",
    description: "Entrega rápida e eficiente em toda a região de Palhoça e Grande Florianópolis. Seu chopp sempre gelado e no horário.",
    icon: <Truck className="w-6 h-6" />,
    content: (
      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <Truck className="w-20 h-20 text-primary relative z-10" />
      </div>
    ),
  },
  {
    title: "Suporte Estendido",
    description: "Assistência técnica especializada disponível para garantir que sua chopeira funcione perfeitamente durante todo o evento ou operação.",
    icon: <Settings className="w-6 h-6" />,
    content: (
      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <Settings className="w-20 h-20 text-primary relative z-10" />
      </div>
    ),
  },
  {
    title: "Sistema de Comodato",
    description: "Oferecemos equipamentos de ponta sem custo de aquisição para parceiros B2B, facilitando a entrada do melhor chopp no seu estabelecimento.",
    icon: <Award className="w-6 h-6" />,
    content: (
      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <Beer className="w-20 h-20 text-primary relative z-10" />
      </div>
    ),
  },
];

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#FFBF00", "#FFFFFF"],
    });
  };

  return (
    <div className="bg-secondary text-cream selection:bg-primary selection:text-secondary overflow-x-hidden relative">
      <MultiStepLoader loadingStates={LOADING_STATES} loading={loading} duration={1000} />
      
      {!loading && (
        <>
          <BeerGlassEffect />
          <FloatingNav 
            navItems={NAV_ITEMS} 
            logo="/logo-kaf.png" 
          />

          {/* Hero Section */}
          <section id="home" className="relative h-screen w-full overflow-hidden">
            <AuroraBackground>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center px-4 max-w-5xl"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 glassmorphism">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Desde 1999 em Palhoça
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tighter leading-[0.9] mb-6">
                  Sua Chopeira de <span className="text-primary">Confiança</span>
                </h1>
                <TextGenerateEffect
                  words="Tradição Familiar, Qualidade Cervejeira e Compromisso com o seu Evento."
                  className="text-xl md:text-2xl text-cream/80 mb-10 max-w-2xl mx-auto"
                />
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <ShimmerButton 
                    className="w-full sm:w-auto text-lg py-6 px-10"
                    onMouseEnter={handleConfetti}
                  >
                    Solicitar Orçamento
                  </ShimmerButton>
                  <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all font-bold uppercase tracking-widest text-sm glassmorphism">
                    Nossos Produtos
                  </button>
                </div>
              </motion.div>
            </AuroraBackground>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-charcoal border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Anos de História", value: 25, suffix: "+" },
                { label: "Eventos Realizados", value: 5000, suffix: "+" },
                { label: "Barris Entregues", value: 15000, suffix: "+" },
                { label: "Clientes Satisfeitos", value: 98, suffix: "%" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <NumberTicker value={stat.value} />
                    {stat.suffix}
                  </div>
                  <p className="text-xs uppercase tracking-widest text-cream/50 font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Business Verticals (Bento Grid) */}
          <section id="services" className="py-32 px-4">
            <div className="max-w-7xl mx-auto mb-20 text-center">
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
                Soluções para <span className="text-primary">Todos</span>
              </h2>
              <p className="text-cream/60 max-w-2xl mx-auto">
                Seja para o seu negócio ou para a sua festa, a KAF Chopp entrega a melhor experiência em bebidas.
              </p>
            </div>
            <BentoGrid>
              <BentoGridItem
                title="Bares & Restaurantes"
                description="Sistema de comodato com chopeiras profissionais, manutenção preventiva e entrega programada para o seu estabelecimento nunca parar."
                header={
                  <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover/bento:scale-110 transition-transform duration-500" />
                }
                icon={<Beer className="w-5 h-5 text-primary" />}
                className="md:col-span-2"
              />
              <BentoGridItem
                title="Delivery & Eventos"
                description="Chopp gelado na porta da sua casa ou no local do seu evento. Equipamentos práticos e suporte total."
                header={
                  <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover/bento:scale-110 transition-transform duration-500" />
                }
                icon={<Truck className="w-5 h-5 text-primary" />}
              />
              <BentoGridItem
                title="Distribuição"
                description="Amplo portfólio de marcas próprias e revendas exclusivas para abastecer sua região com competitividade."
                header={
                  <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover/bento:scale-110 transition-transform duration-500" />
                }
                icon={<Users className="w-5 h-5 text-primary" />}
              />
              <BentoGridItem
                title="Marcas Próprias"
                description="Conheça a KAF e a Zimmermann, nossas joias da casa produzidas com rigor técnico e paixão familiar."
                header={
                  <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover/bento:scale-110 transition-transform duration-500" />
                }
                icon={<Award className="w-5 h-5 text-primary" />}
                className="md:col-span-2"
              />
            </BentoGrid>
          </section>

          {/* Brand Marquee */}
          <section className="py-20 bg-charcoal/50 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary text-center">
                Nossas Marcas & Parceiros
              </p>
            </div>
            <InfiniteMovingCards items={BRANDS} speed="slow" />
          </section>

          {/* Operational Differentials (Sticky Scroll) */}
          <section className="py-32 px-4 bg-secondary relative">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20">
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
                  Por que a <span className="text-primary">KAF Chopp?</span>
                </h2>
                <p className="text-cream/60 max-w-xl">
                  Diferenciais técnicos que transformam a logística de bebidas em uma parceria de sucesso.
                </p>
              </div>
              <StickyScroll content={OPERATIONAL_DIFFERENTIALS} />
            </div>
          </section>

          {/* Human Element (Wobble Cards) */}
          <section id="history" className="py-32 px-4 bg-charcoal">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <WobbleCard containerClassName="h-full bg-primary/5 border-primary/20">
                <div className="max-w-sm">
                  <History className="w-12 h-12 text-primary mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-4">
                    Nossa História <span className="text-primary">(Since 1999)</span>
                  </h2>
                  <p className="text-cream/70 leading-relaxed">
                    O que começou como uma paixão familiar em Palhoça, hoje é referência em distribuição de chopp. Mantemos os valores de proximidade e qualidade que nos trouxeram até aqui.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?auto=format&fit=crop&q=80&w=1000"
                  alt="História KAF"
                  className="absolute -right-20 -bottom-20 w-[300px] h-[300px] object-cover rounded-full opacity-20 grayscale"
                  referrerPolicy="no-referrer"
                />
              </WobbleCard>
              <WobbleCard containerClassName="h-full bg-copper/5 border-copper/20">
                <div className="max-w-sm">
                  <Award className="w-12 h-12 text-copper mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-4">
                    O Mestre <span className="text-copper">Cervejeiro</span>
                  </h2>
                  <p className="text-cream/70 leading-relaxed">
                    Cada barril que sai da nossa distribuição passa por um rigoroso controle de qualidade. Nosso mestre cervejeiro garante que o frescor e o sabor sejam impecáveis.
                  </p>
                  <div className="mt-8 p-4 rounded-xl bg-charcoal border border-copper/30">
                    <p className="text-xs font-bold text-copper uppercase tracking-widest mb-2">Dica do Mestre:</p>
                    <p className="text-sm italic text-cream/60">"A temperatura ideal de serviço é entre 0°C e 2°C para manter a cremosidade da espuma."</p>
                  </div>
                </div>
              </WobbleCard>
            </div>
          </section>

          {/* Lead Generation Form */}
          <section id="contact" className="py-32 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
                  Vamos <span className="text-primary">Conversar?</span>
                </h2>
                <p className="text-cream/60">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em menos de 24h.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-cream/50">Nome Completo</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome"
                      className="w-full neobrutalism-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-cream/50">Empresa / Evento</label>
                    <input 
                      type="text" 
                      placeholder="Nome do local ou evento"
                      className="w-full neobrutalism-input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-cream/50">WhatsApp</label>
                    <input 
                      type="tel" 
                      placeholder="(48) 99999-9999"
                      className="w-full neobrutalism-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-cream/50">Segmento</label>
                    <select className="w-full neobrutalism-input appearance-none">
                      <option>Bares & Restaurantes</option>
                      <option>Eventos Particulares</option>
                      <option>Eventos Corporativos</option>
                      <option>Revenda</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-cream/50">Mensagem (Opcional)</label>
                  <textarea 
                    rows={4}
                    placeholder="Conte-nos um pouco sobre sua necessidade..."
                    className="w-full neobrutalism-input"
                  />
                </div>
                <ShimmerButton className="w-full py-8 text-xl uppercase tracking-widest">
                  Enviar Solicitação
                </ShimmerButton>
              </form>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-charcoal pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 mb-6">
                    <Beer className="w-8 h-8 text-primary" />
                    <span className="text-2xl font-bold uppercase tracking-tighter text-white">KAF <span className="text-primary">CHOPP</span></span>
                  </div>
                  <p className="text-cream/50 max-w-sm leading-relaxed mb-8">
                    Referência em distribuição de chopp e bebidas na Grande Florianópolis. Tradição familiar e excelência técnica desde 1999.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-primary/20 transition-colors text-cream/70 hover:text-primary border border-white/10">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-primary/20 transition-colors text-cream/70 hover:text-primary border border-white/10">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-primary/20 transition-colors text-cream/70 hover:text-primary border border-white/10">
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Navegação</h4>
                  <ul className="space-y-4">
                    {NAV_ITEMS.map((item) => (
                      <li key={item.name}>
                        <a href={item.link} className="text-cream/50 hover:text-primary transition-colors text-sm uppercase tracking-wider">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Onde Estamos</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-cream/50">
                      <MapPin className="w-5 h-5 text-primary shrink-0" />
                      <span>Palhoça, Santa Catarina<br />Grande Florianópolis - SC</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-cream/50">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <span>(48) 3333-3333<br />(48) 99999-9999</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-cream/30 uppercase tracking-widest">
                  © 2026 KAF Chopp. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
