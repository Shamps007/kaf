import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Truck } from "lucide-react";
import { NumberTicker, ShimmerButton } from "./UIComponents";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !bgRef.current || !textRef.current) return;
    
    // Disable animation on small screens
    if (window.innerWidth < 768) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(bgRef.current, {
      y: "30%",
      ease: "none",
    }).to(
      textRef.current,
      {
        y: "0%",
        opacity: 1,
        ease: "none",
      },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full min-h-[70vh] flex flex-col items-center justify-center pt-24 md:pt-32 pb-16 md:pb-20 px-4 z-[50] overflow-hidden"
    >
      {/* Overlay Escuro */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>

      {/* Conteúdo */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center text-center w-full"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kaf-gold/10 border border-kaf-gold/20 mb-8 md:mb-12 glassmorphism shadow-[0_0_15px_rgba(255,215,0,0.2)]"
        >
          <Truck className="w-4 h-4 text-kaf-gold" />
          <span className="text-xs font-bold uppercase tracking-widest text-kaf-gold drop-shadow-sm">
            Tradição & Qualidade desde 1999
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tighter leading-[0.9] mb-6 md:mb-10 max-w-6xl mx-auto [text-shadow:_3px_3px_12px_rgb(0_0_0_/_90%)]"
        >
          A Tradição de 1999 encontra a <br className="hidden md:block" />
          <span className="text-kaf-gold italic font-display [text-shadow:_3px_3px_12px_rgb(0_0_0_/_90%)]">Perfeição do Chopp</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white mb-10 md:mb-16 max-w-2xl md:max-w-4xl mx-auto font-light [text-shadow:_3px_3px_12px_rgb(0_0_0_/_90%)]"
        >
          Experiência premium em distribuição de bebidas. Elevando o padrão do seu evento com o melhor chopp da região.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10"
        >
          <Dialog>
            <DialogTrigger asChild>
              <ShimmerButton asChild className="w-full sm:w-auto h-16 text-lg px-10">
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento
              </ShimmerButton>
            </DialogTrigger>
            <DialogContent
              className="bg-kaf-dark border-kaf-gold/20 text-kaf-cream p-0 overflow-hidden sm:max-w-md"
            >
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-display font-bold text-kaf-gold uppercase tracking-tighter">
                    Fale Conosco
                  </DialogTitle>
                  <DialogDescription className="text-kaf-cream/60">
                    Preencha os dados rápidos e entraremos em contato via WhatsApp.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-kaf-cream/50">Nome</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome"
                      className="w-full bg-kaf-dark/50 px-4 py-3 rounded-xl text-kaf-cream outline-none focus:border-kaf-gold transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-kaf-cream/50">WhatsApp</label>
                    <input 
                      type="tel" 
                      placeholder="(48) 99151-0012"
                      className="w-full bg-kaf-dark/50 px-4 py-3 rounded-xl text-kaf-cream outline-none focus:border-kaf-gold transition-all"
                    />
                  </div>
                  <ShimmerButton className="w-full h-14 mt-4 text-sm uppercase tracking-widest rounded-xl">
                    Enviar
                  </ShimmerButton>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <a
            href="/catalogo"
            className="w-full sm:w-auto px-10 py-5 rounded-full hover:bg-kaf-cream/10 transition-all font-bold uppercase tracking-widest text-sm glassmorphism text-center text-kaf-cream shadow-lg"
          >
            Explorar Catálogo
          </a>
        </motion.div>

        {/* Stats Section */}
        <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-24 md:mt-40">
          {[
            { label: "Anos de História", value: 25, suffix: "+" },
            { label: "Eventos Realizados", value: 5000, suffix: "+" },
            { label: "Barris Entregues", value: 15000, suffix: "+" },
            { label: "Clientes Satisfeitos", value: 98, suffix: "%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-kaf-gold mb-2">
                <NumberTicker value={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-xs uppercase tracking-widest text-kaf-cream/50 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
