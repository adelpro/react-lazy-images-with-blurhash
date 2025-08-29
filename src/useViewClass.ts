// hooks/useInViewClass.ts
import { useEffect, useRef } from "react";

export function useInViewClass(className = "show", threshold = 0.5) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.target.classList.toggle(className, entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [className, threshold]);

  return ref;
}
