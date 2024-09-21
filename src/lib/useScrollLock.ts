import { useCallback, useEffect } from "react";

export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.body.style.position = "fixed"; // iOS
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.position = "";
    document.body.style.overflow = "";
  }, []);

  const preventTabScroll = useCallback((e: KeyboardEvent) => {
    if (document.body.style.overflow === "hidden" && e.key === "Tab") {
      e.preventDefault();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", preventTabScroll);
    document.addEventListener("keyup", preventTabScroll);

    return () => {
      document.removeEventListener("keydown", preventTabScroll);
      document.removeEventListener("keyup", preventTabScroll);
    };
  }, [preventTabScroll]);

  return {
    lockScroll,
    unlockScroll,
  };
};
