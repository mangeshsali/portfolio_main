var typed = new Typed("#auto-type", {
  strings: ["Web Developer", "Frontend Developer"],
  startDelay: 50,
  typeSpeed: 50,
  backSpeed: 50,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
});

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
