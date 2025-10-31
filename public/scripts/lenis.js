// /src/scripts/lenis.js
import Lenis from 'lenis'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
    duration: 1.5, // velocidad
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
})

// GSAP + Lenis sync
lenis.on("scroll", ScrollTrigger.update)

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
