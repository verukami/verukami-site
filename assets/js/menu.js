document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".micro-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    toggle.textContent = isOpen ? "✕" : "☰";

    // 🔒 Lock / unlock scroll
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
});

