import { gsap } from "gsap";

export const TransitionLayout = (navigate: () => void) => {
  const tl = gsap.timeline();

  tl.to(".page-transition-overlay", {
    y: "0%",
    duration: 0.4,
    ease: "power4.inOut",
  })
    .add(() => {
      window.scrollTo(0, 0);
      navigate();
    })
    .to(".page-transition-overlay", {
      y: "-100%",
      duration: 0.4,
      ease: "power4.inOut",
    });
};
