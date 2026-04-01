import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Truck } from "lucide-react";
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
  const barrelRef = useRef<HTMLImageElement>(null);
  const glassRef = useRef<HTMLImageElement>(null);
  const hopsLeftRef = useRef<HTMLImageElement>(null);
  const hopsRightRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!heroRef.current || !bgRef.current || !textRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(bgRef.current, {
      y: "30%",
      ease: "none",
    }).to(
      textRef.current,
      {
        y: "50%",
        opacity: 0,
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
      className="relative h-screen w-full overflow-hidden bg-obsidian flex items-center justify-center"
    >
      {/* Layer 0: Background Scenery (z-index: 1) */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1575037614876-c385aa886184?auto=format&fit=crop&q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4) contrast(1.1)",
        }}
      />
      
      {/* Contrast Overlay: Gradient for Depth (z-index: 2) */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/60 via-black/20 to-obsidian" />
      
      {/* Layer 2: Main Content (z-index: 10) */}
      <div
        ref={textRef}
        className="z-[10] text-center px-4 max-w-5xl mt-20 opacity-100"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-gold/10 border border-amber-gold/20 mb-8 glassmorphism shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          <Truck className="w-4 h-4 text-amber-gold" />
          <span className="text-xs font-bold uppercase tracking-widest text-amber-gold drop-shadow-sm">
            Tradição & Qualidade desde 1999
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foam uppercase tracking-tighter leading-[0.9] mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          A Tradição de 1999 encontra a <br className="hidden md:block" />
          <span className="text-amber-gold italic font-display drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">Perfeição do Chopp</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foam/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Experiência premium em distribuição de bebidas. Elevando o padrão do seu evento com o melhor chopp da região.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="w-full sm:w-auto text-lg py-5 px-10 flex items-center justify-center gap-2 bg-amber-gold text-obsidian font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:bg-amber-gold/90 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento
              </button>
            </DialogTrigger>
            <DialogContent
              className="bg-obsidian border-amber-gold/20 text-foam p-0 overflow-hidden sm:max-w-md"
            >
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-display font-bold text-amber-gold uppercase tracking-tighter">
                    Fale Conosco
                  </DialogTitle>
                  <DialogDescription className="text-foam/60">
                    Preencha os dados rápidos e entraremos em contato via WhatsApp.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foam/50">Nome</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome"
                      className="w-full bg-obsidian/50 border border-foam/10 px-4 py-3 rounded-xl text-foam outline-none focus:border-amber-gold transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foam/50">WhatsApp</label>
                    <input 
                      type="tel" 
                      placeholder="(48) 99999-9999"
                      className="w-full bg-obsidian/50 border border-foam/10 px-4 py-3 rounded-xl text-foam outline-none focus:border-amber-gold transition-all"
                    />
                  </div>
                  <button className="w-full py-4 mt-4 text-sm font-bold uppercase tracking-widest rounded-xl bg-amber-gold text-obsidian shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:bg-amber-gold/90 transition-all duration-300">
                    Enviar
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <a
            href="/catalogo"
            className="w-full sm:w-auto px-10 py-5 rounded-full border border-foam/20 hover:bg-foam/10 transition-all font-bold uppercase tracking-widest text-sm glassmorphism text-center text-foam shadow-lg"
          >
            Explorar Catálogo
          </a>
        </div>
      </div>
    </section>
  );
};
