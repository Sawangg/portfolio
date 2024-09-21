"use client";

import { stagger, useAnimate } from "framer-motion";
import { Fragment, useEffect } from "react";

export const Title = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("span", { opacity: 1, filter: "blur(0px)" }, { duration: 0.75, delay: stagger(0.15, { startDelay: 0.1 }) });

    animate(
      "#gradient",
      {
        backgroundPosition: ["0% center", "200% center"],
      },
      {
        duration: 10,
        repeat: Number.POSITIVE_INFINITY,
      },
    );
  });

  return (
    <h1
      ref={scope}
      className="mt-[30vh] text-center font-bold text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
    >
      {["Meet", "your", "next", "creative", "engineer."].map((word, i) => (
        <Fragment key={word}>
          <span
            id={i === 3 ? "gradient" : undefined}
            style={{ opacity: 0, filter: "blur(7px)" }}
            className={
              i === 3
                ? "bg-[length:200%] bg-gradient-to-r from-purple-400 via-red-500 to-purple-400 bg-clip-text text-transparent"
                : undefined
            }
          >
            {word}
            {i < 4 && " "}
          </span>
          {i === 2 && <br />}
        </Fragment>
      ))}
    </h1>
  );
};
