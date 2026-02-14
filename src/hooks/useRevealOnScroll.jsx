import { useEffect } from "react";

export const useRevealOnScroll = (
  ref,
  className = "opacity-100 translate-y-0 scale-100"
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Classe inicial invisível e deslocada
    element.classList.add("opacity-0", "translate-y-6", "scale-95", "transition-all", "duration-700", "ease-out");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Quando entra na tela (scroll down)
          element.classList.add(...className.split(" "));
          element.classList.remove("opacity-0", "translate-y-6", "scale-95");
        } else {
          // Quando sai da tela pelo topo (scroll up)
          element.classList.remove(...className.split(" "));
          element.classList.add("opacity-0", "translate-y-6", "scale-95");
        }
      },
      { threshold: 0.15 } // detecta um pouco antes de aparecer totalmente
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, className]);
};

