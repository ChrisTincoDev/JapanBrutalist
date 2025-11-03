// src/scripts/lenis.client.js

if (typeof window !== "undefined") {
  Promise.all([
    import("lenis"),
    import("gsap"),
    import("gsap/ScrollTrigger")
  ]).then(([{ default: Lenis }, gsapPkg, { ScrollTrigger }]) => {
    const gsap = gsapPkg.default;
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.5,
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
}
