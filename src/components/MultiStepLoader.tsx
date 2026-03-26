import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";
import { FoamBubbles } from "./UIComponents";

export const MultiStepLoader = ({
  loadingStates,
  loading,
  duration = 2000,
  loop = true,
}: {
  loadingStates: { text: string }[];
  loading?: boolean;
  duration?: number;
  loop?: boolean;
}) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (!loading) {
      setCurrentState(0);
      return;
    }
    const timeout = setTimeout(() => {
      setCurrentState((prev) =>
        loop
          ? prev === loadingStates.length - 1
            ? 0
            : prev + 1
          : Math.min(prev + 1, loadingStates.length - 1)
      );
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentState, loading, loop, loadingStates.length, duration]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-secondary backdrop-blur-2xl"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-primary/20" />
            {/* Rising Bubbles */}
            <FoamBubbles count={50} className="opacity-40" />
          </div>
          <div className="relative h-[500px] w-full max-w-md z-10 flex flex-col items-center justify-between py-10">
            <div className="relative w-full h-40">
              {loadingStates.map((state, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index === currentState ? 1 : 0,
                      y: index === currentState ? 0 : 20,
                      scale: index === currentState ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "absolute inset-0 flex items-center justify-center text-center text-3xl font-bold px-4",
                      "text-primary drop-shadow-[0_2px_10px_rgba(212,175,55,0.5)]"
                    )}
                  >
                    {state.text}
                  </motion.div>
                );
              })}
            </div>

            {/* Beer Mug Animation */}
            <div className="relative w-48 h-64 mt-12">
              {/* Mug Handle */}
              <div className="absolute right-[-25px] top-[20%] w-16 h-32 border-[10px] border-cream/20 rounded-[0_20px_20px_0]" />
              
              {/* Mug Body */}
              <div className="absolute inset-0 border-[6px] border-cream/20 rounded-b-2xl rounded-t-lg overflow-hidden bg-white/5 backdrop-blur-sm">
                {/* Liquid */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-copper via-primary to-primary/80"
                  initial={{ height: "0%" }}
                  animate={{ height: `${((currentState + 1) / loadingStates.length) * 90}%` }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  {/* Liquid Bubbles */}
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      style={{ left: `${Math.random() * 100}%`, bottom: 0 }}
                      animate={{ y: -200, opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                    />
                  ))}
                </motion.div>

                {/* Foam */}
                <motion.div
                  className="absolute left-0 right-0 bg-white shadow-[0_-5px_15px_rgba(255,255,255,0.5)]"
                  style={{ height: "20px" }}
                  initial={{ bottom: "0%" }}
                  animate={{ bottom: `${((currentState + 1) / loadingStates.length) * 90}%` }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <div className="absolute -top-4 left-0 right-0 flex justify-around">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-white rounded-full -mt-2" />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mt-8 text-cream/40 text-sm font-medium tracking-widest uppercase">
              {Math.round(((currentState + 1) / loadingStates.length) * 100)}% Concluído
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
