import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "motion/react";
import { cn } from "@/src/lib/utils";

const BRANDS = [
  { src: "/src/pages/public/amstel.png", height: "h-[180px]" },
  { src: "/src/pages/public/colina.png", height: "h-[120px]" },
  { src: "/src/pages/public/duck.png", height: "h-[120px]" },
  { src: "/src/pages/public/heineken.png", height: "h-[120px]" },
  { src: "/src/pages/public/kaf-branco.png", height: "h-[120px]" },
  { src: "/src/pages/public/serra-gerais-1.png", height: "h-[120px]" },
  { src: "/src/pages/public/zimmermann.png", height: "h-[180px]" },
];

export const BrandMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);

  const updateConstraints = () => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const offsetWidth = containerRef.current.offsetWidth;
      setConstraints({ left: -(scrollWidth - offsetWidth), right: 0 });
    }
  };

  const startAutoScroll = async () => {
    if (isDragging) return;
    
    const currentX = x.get();
    const scrollWidth = containerRef.current?.scrollWidth || 0;
    const offsetWidth = containerRef.current?.offsetWidth || 0;
    const maxScroll = scrollWidth - offsetWidth;

    // Se já estivermos no fim, reseta para o início (ou para uma posição que mantenha o loop)
    if (currentX <= -maxScroll + 10) {
      x.set(0);
    }

    const remainingDistance = maxScroll + x.get();
    const speed = 50; // pixels por segundo
    const duration = remainingDistance / speed;
    
    await controls.start({
      x: -maxScroll,
      transition: {
        duration: duration > 0 ? duration : 60,
        ease: "linear",
      },
    });

    // Quando terminar, recomeça do zero para o loop
    if (!isDragging) {
      x.set(0);
      startAutoScroll();
    }
  };

  useEffect(() => {
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    startAutoScroll();
    return () => {
      window.removeEventListener("resize", updateConstraints);
      controls.stop();
    };
  }, [controls]);

  return (
    <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing py-6 md:py-10">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={constraints}
        dragElastic={0.1}
        dragTransition={{ power: 0.2, timeConstant: 200 }}
        style={{ x }}
        animate={controls}
        onDragStart={() => {
          setIsDragging(true);
          controls.stop();
        }}
        onDragEnd={() => {
          setIsDragging(false);
          // Pequeno delay antes de retomar o auto-scroll
          setTimeout(startAutoScroll, 500);
        }}
        whileTap={{ cursor: "grabbing" }}
        className="flex items-center gap-[40px] md:gap-[100px] whitespace-nowrap px-4"
      >
        {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, index) => (
          <motion.img
            key={index}
            src={brand.src}
            alt="Marca Parceira"
            className={cn(
              "w-auto object-contain mix-blend-screen shrink-0 select-none pointer-events-none",
              brand.height.replace("h-", "h-[80px] md:h-") // Responsive height
            )}
            referrerPolicy="no-referrer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        ))}
      </motion.div>
    </div>
  );
};
