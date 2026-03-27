import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const PageFade = ({ children }: any) => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!el.current) return;

    gsap.fromTo(
      el.current,
      {
        y: 60, // 🔥 subtle upward motion (not 100%)
        opacity: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
    );
  }, []);

  return <div ref={el}>{children}</div>;
};
