"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function FadeIn({
  children,
  delay,
  direction,
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: direction === "right" ? -100 : direction === "left" ? 100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            scale: 0.95,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 1.25,
          delay,
        }}
        whileHover={{ scale: 1.05 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
