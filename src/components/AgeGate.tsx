import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Beer } from "lucide-react";

export const AgeGate = ({ onAccept }: { onAccept: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isVerified = sessionStorage.getItem("age-verified");
    if (!isVerified) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      onAccept();
    }
  }, [onAccept]);

  const handleVerify = () => {
    sessionStorage.setItem("age-verified", "true");
    setIsVisible(false);
    document.body.style.overflow = "unset";
    onAccept();
  };

  const handleReject = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-xl px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="max-w-md w-full bg-obsidian border-2 border-amber-gold/30 rounded-3xl p-8 md:p-12 text-center shadow-[0_0_50px_rgba(212,175,55,0.2)] relative overflow-hidden"
          >
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-gold to-transparent" />
            
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-amber-gold/10 border border-amber-gold/20 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <Beer className="w-10 h-10 text-amber-gold" />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-display font-bold text-foam mb-4 uppercase tracking-tighter">
              VOCÊ TEM MAIS DE <span className="text-amber-gold italic">18 ANOS?</span>
            </h2>
            
            <p className="text-foam/60 mb-10 leading-relaxed font-serif italic text-lg">
              Para acessar este site, você deve ter a idade legal para consumo de bebidas alcoólicas.
            </p>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleVerify}
                className="w-full py-4 bg-amber-gold text-obsidian font-bold uppercase tracking-widest rounded-xl hover:bg-amber-gold/90 transition-all shadow-[0_4px_20px_rgba(212,175,55,0.3)] active:scale-95"
              >
                SIM, SOU MAIOR
              </button>
              
              <button
                onClick={handleReject}
                className="w-full py-4 bg-transparent text-foam/40 font-bold uppercase tracking-widest rounded-xl border border-foam/10 hover:border-red-500/50 hover:text-red-500 transition-all active:scale-95"
              >
                NÃO
              </button>
            </div>

            <p className="mt-8 text-[10px] text-foam/30 uppercase tracking-[0.2em] font-medium">
              Beba com responsabilidade. Se beber, não dirija.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
