"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

export const ContactSection = () => {
  const { scrollY } = useScroll();
  const animationTriggers = [7200, 7500];
  const opacity = useTransform(scrollY, animationTriggers, [0, 1]);
  const blur = useTransform(scrollY, animationTriggers, [7, 0]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <>
      <motion.p
        style={{ opacity, filter }}
        className="-translate-x-1/2 -translate-y-1/2 absolute top-[calc(50%_-_1.875rem)] left-1/2 w-full text-center font-semibold text-3xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
      >
        And I can't wait to
        <br />
        work with you.
      </motion.p>
    </>
  );
};
