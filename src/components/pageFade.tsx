import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

export const PageFade = ({ children }: { children: React.ReactNode }) => {
  const el = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (!el.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        { y: 60, opacity: 0 },  // start fully transparent
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }, el);

    return () => ctx.revert(); // cleanup on unmount
  }, [location.pathname]); // re-run on every route change

  return <div ref={el}>{children}</div>;
};