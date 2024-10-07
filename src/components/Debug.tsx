"use client";

import { useEffect, useState } from "react";

export const Debug = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      setScrollY(Math.floor(scrollTop));
      setScrollYProgress(Math.floor(scrollProgress));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 rounded-bl-md bg-black p-2 text-white">
      ScrollY: {scrollY} <br />
      ScrollY Progress: {scrollYProgress}%
    </div>
  );
};
