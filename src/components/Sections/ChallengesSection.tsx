"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

export const ChallengesSection = () => {
  const { scrollY } = useScroll();
  const animationTriggers = [3900, 4200];
  const opacity = useTransform(scrollY, animationTriggers, [0, 1]);
  const blur = useTransform(scrollY, animationTriggers, [7, 0]);
  const filter = useMotionTemplate`${blur}px`;

  return (
    <motion.p
      style={{ opacity, filter }}
      className="-translate-x-1/2 -translate-y-1/2 absolute top-[calc(50%_-_1.875rem)] left-1/2 w-full text-center font-semibold text-3xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
    >
      I'm ready for new
    </motion.p>
  );
};
