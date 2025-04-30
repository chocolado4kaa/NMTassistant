import { useEffect, useRef } from "react";
import "./useRevealOnScroll.scss"

export const useRevealOnScroll = (className = "show") => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(className);
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [className]);

  return ref;
};
