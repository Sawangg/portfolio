"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

export const Section1 = () => {
  const { scrollY } = useScroll();
  const animationTriggers = [500, 800, 1100, 1400];
  const opacity = useTransform(scrollY, animationTriggers, [0, 1, 1, 0]);
  const blur = useTransform(scrollY, animationTriggers, [7, 0, 0, 7]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.p
      style={{ opacity, filter }}
      className="-translate-x-1/2 -translate-y-1/2 absolute top-[calc(50%_-_1.875rem)] left-1/2 w-full text-center font-semibold text-3xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
    >
      I love experimenting
      <br />
      with new tech
    </motion.p>
  );
};
