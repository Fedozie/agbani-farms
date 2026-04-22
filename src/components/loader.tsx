import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Logo } from "../assets";

export const Loader = ({ onComplete }: { onComplete?: () => void }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let animationDone = false;
    let pageDone = false;

    const tryExit = () => {
      if (!animationDone || !pageDone) return;

      gsap.to(overlayRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => onComplete?.(),
      });
    };

    const tl = gsap.timeline({
      onComplete: () => {
        animationDone = true;
        tryExit();
      },
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    ).to(logoRef.current, {
      scale: 1.08,
      duration: 1.4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
    });

    // Signal that the page is ready
    const timeout = setTimeout(() => {
      pageDone = true;
      tryExit();
    }, 100); // small delay to let Suspense settle

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#2D442F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img ref={logoRef} src={Logo} alt="Loading State" style={{ width: 120 }} />
    </div>
  );
};