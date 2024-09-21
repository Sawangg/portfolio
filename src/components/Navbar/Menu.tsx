"use client";

import { useScrollLock } from "@lib/useScrollLock";
import { motion, stagger, useAnimate } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Button } from "react-aria-components";

export type MenuProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  iconHsl?: string;
};

export const Menu: React.FC<MenuProps> = ({ iconHsl, className, children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [ref, animate] = useAnimate();
  const { lockScroll, unlockScroll } = useScrollLock();

  const variants = {
    open: {
      y: 0,
      borderRadius: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        borderBottomLeftRadius: { duration: 1 },
        borderBottomRightRadius: { duration: 1 },
      },
    },
    closed: {
      y: "-100%",
      borderRadius: "0px 0px 250px 250px / 0px 0px 25px 25px",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.35,
      },
    },
  };

  const toggleOpen = () => {
    if (!open) {
      // Animate the children (supposed to be <li> tags)
      animate("li", { opacity: 1, rotateX: 0 }, { delay: stagger(0.2, { startDelay: 0.5 }) });
      lockScroll();
    } else {
      unlockScroll();
      animate("li", { opacity: 0, rotateX: 90 }, { delay: stagger(0.2) });
    }
    setOpen(!open); // Starts the menu animation
  };

  const setContainerSize = useCallback(() => {
    if (ref.current) {
      const newHeight = `calc(${window.innerHeight}px - ${
        window.visualViewport ? window.visualViewport.height - window.innerHeight : 0
      }px)`;
      ref.current.style.height = newHeight;
    }
  }, [ref]);

  useEffect(() => {
    unlockScroll(); // Prevent permanent scroll lock after refresh
    setContainerSize();
    window.addEventListener("resize", setContainerSize);
    return () => window.removeEventListener("resize", setContainerSize);
  }, [setContainerSize, unlockScroll]);

  return (
    <>
      <Button className="z-40 outline-none md:hidden" onPress={toggleOpen} aria-haspopup="true" aria-expanded={open}>
        <svg width="32px" height="32px" viewBox="0 0 24 24">
          <title>Menu</title>
          <motion.path
            initial="closed"
            animate={open ? "open" : "closed"}
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 7 L 22 7", stroke: iconHsl ?? "hsl(0, 0%, 0%)" },
              open: { d: "M 5 19 L 19 5", stroke: "hsl(0, 0%, 100%)" },
            }}
            transition={{ stroke: { delay: open ? 0 : 1 } }}
          />
          <motion.path
            initial="closed"
            animate={open ? "open" : "closed"}
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 14 L 22 14", stroke: iconHsl ?? "hsl(0, 0%, 0%)" },
              open: { d: "M 5 5 L 19 19", stroke: "hsl(0, 0%, 100%)" },
            }}
            transition={{ stroke: { delay: open ? 0 : 1 } }}
          />
        </svg>
      </Button>
      <motion.div
        ref={ref}
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={variants}
        // Hide the dom element when the animation is finished to prevent iOS overflow
        onAnimationStart={() => {
          if (open && ref.current) ref.current.style.display = "flex";
        }}
        onAnimationComplete={() => {
          if (!open && ref.current) ref.current.style.display = "none";
        }}
        className={`absolute top-0 left-0 z-30 hidden w-screen ${className}`}
      >
        {children}
      </motion.div>
    </>
  );
};
