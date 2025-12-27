gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".shape").forEach(shape => {
  const targetClass = shape.dataset.target;
  const target = document.querySelector(`.${targetClass}`);
  if (!target) return;

  ScrollTrigger.create({
    trigger: target,
    start: "top center",
    end: "center center",
    scrub: true,
    onUpdate: self => {
      gsap.to(shape, {
        y: self.progress * 120,
        ease: "none"
      });
    }
  });
});


/* =========================
   SHAPES → FLOATING MOTION
========================= */

gsap.to(".shape", {
  y: "+=24",
  rotation: 8,
  duration: 5,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  stagger: 0.4
});

/* =========================
   MOBILE MENU
========================= */

(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".micro-nav");
  let menuOpen = false;

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    menuOpen = !menuOpen;

    nav.classList.toggle("open", menuOpen);
    toggle.textContent = menuOpen ? "✕" : "☰";

    document.body.style.overflow = menuOpen ? "hidden" : "";
  });
})();

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('touchstart', () => {
    card.classList.toggle('is-active');
  });
});

