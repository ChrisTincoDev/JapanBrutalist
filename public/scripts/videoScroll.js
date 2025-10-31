import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const video = document.getElementById("mainVideo");
const videoHeroWrap = document.getElementById("videoWrapHero");
const videoFinalWrap = document.getElementById("videoWrapFinalHero");

// Aseguramos que el video esté primero en el Hero
videoHeroWrap.appendChild(video);

// Animación de crecimiento en la sección Hero
gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",        // Cuando empieza el hero
    end: "bottom top",       // Cuando hero sale
    scrub: true,
  }
})
.fromTo(video, 
  { scale: 1, y: 0 },        // Tamaño inicial en el centro
  { scale: 2.5, y: "20vh" }  // Crece y baja un poco
);

// Movimiento hacia el contenedor final
ScrollTrigger.create({
  trigger: "#videoContainerHero",
  start: "top bottom",
  end: "top top",
  scrub: true,
  onUpdate: (self) => {
    const progress = self.progress;

    if (progress > 0.5 && !videoFinalWrap.contains(video)) {
      videoFinalWrap.appendChild(video);
    } else if (progress <= 0.5 && !videoHeroWrap.contains(video)) {
      videoHeroWrap.appendChild(video);
    }
  }
});
