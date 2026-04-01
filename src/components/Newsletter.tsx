import React from "react";
import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import { ShimmerButton } from "./UIComponents";

export const Newsletter = () => {
  return (
    <section className="relative py-32 bg-obsidian overflow-hidden border-t border-foam/5">
      {/* Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-5 select-none">
        <h2 className="text-[20vw] font-display font-bold text-foam whitespace-nowrap leading-none tracking-tighter">
          KAF CHOPP
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-gold/10 text-amber-gold mb-8 border border-amber-gold/20">
            <Mail className="w-8 h-8" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foam mb-6">
            Assine nossa <span className="text-amber-gold italic">Newsletter</span>
          </h2>
          
          <p className="text-xl text-foam/60 mb-12 max-w-2xl mx-auto font-light">
            Receba ofertas exclusivas, novidades sobre novos rótulos e dicas para o seu negócio ou evento.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 bg-obsidian/50 border border-foam/20 px-6 py-4 rounded-full text-foam outline-none focus:border-amber-gold transition-colors placeholder:text-foam/30"
              required
            />
            <ShimmerButton className="py-4 px-8 rounded-full bg-amber-gold text-obsidian hover:bg-amber-gold/90 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 neo-shadow">
              Inscrever-se
              <ArrowRight className="w-4 h-4" />
            </ShimmerButton>
          </form>
          
          <p className="text-xs text-foam/40 mt-6 uppercase tracking-widest">
            Não enviamos spam. Cancele quando quiser.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
