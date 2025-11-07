// public/lenis.client.js
if (typeof window !== 'undefined') {
  Promise.all([
    import("https://cdn.jsdelivr.net/npm/lenis@1.3.13/+esm"),
    import("https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js"),
    import("https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"),
  ]).then(([lenisModule, gsapModule, scrollTriggerModule]) => {
    const Lenis = lenisModule.default;
    const gsap = gsapModule.gsap || gsapModule.default;
    const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.4,
      smooth: true,
      smoothTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  });
}