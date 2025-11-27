// hooks/useAos.js
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * useAos(options = {}, deps = [])
 * - options: object passed to AOS.init(...)
 * - deps: dependency array that triggers AOS.refresh() when items change (e.g. [items])
 */
export default function useAos(
  options = { duration: 700, easing: "ease-out", once: true },
  deps = []
) {
  useEffect(() => {
    // respect user's reduced motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finalOptions = {
      ...options,
      // If user prefers reduced motion, disable AOS entirely
      disable: prefersReducedMotion ? true : options.disable ?? false,
    };

    AOS.init(finalOptions);

    // optional: refreshHard on unmount to clear any listeners/measurements AOS may have set
    return () => {
      try {
        AOS.refreshHard();
      } catch (e) {
        // ignore
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // init only once

  // When deps change (e.g., dynamic content), refresh AOS so it recalculates positions
  useEffect(
    () => {
      AOS.refresh();
    },
    Array.isArray(deps) ? deps : [deps]
  );
}
