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
      {/* Overlay Escuro removido para manter a cor contínua */}

      {/* Conteúdo */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center text-center w-full"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <img src="/kaf-branco.png" alt="KAF Chopp Express" className="h-28 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8 max-w-6xl mx-auto [text-shadow:_3px_3px_12px_rgb(0_0_0_/_90%)]"
        >
          Distribuidora de Chopp
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-4xl text-kaf-gold mb-16 md:mb-24 font-bold [text-shadow:_3px_3px_12px_rgb(0_0_0_/_90%)]"
        >
          Qualidade que se destaca
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10"
        >
          <Dialog>
            <DialogTrigger asChild>
              <ShimmerButton asChild className="w-full sm:w-auto h-16 text-lg px-12">
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
