import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// The ported page scripts use gsap / ScrollTrigger / Lenis as globals, like the static site.
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
window.Lenis = Lenis;
gsap.registerPlugin(ScrollTrigger);

export function setupPage({ title, bodyClass, bodyStyle, orbs }) {
  document.title = title;
  document.body.className = bodyClass;
  document.body.style.cssText = bodyStyle;
  if (orbs) document.body.dataset.orbs = orbs;
  else delete document.body.dataset.orbs;
}
