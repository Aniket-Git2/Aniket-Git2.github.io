const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }));
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const roleTarget = document.querySelector("#rotatingRole");
if (roleTarget) {
  const roles = ["full-stack applications", "secure REST APIs", "responsive web interfaces", "cloud-ready solutions"];
  let roleIndex = 0;
  window.setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleTarget.animate([{opacity:0,filter:"blur(5px)"},{opacity:1,filter:"blur(0)"}],{duration:500,easing:"ease-out"});
    roleTarget.textContent = roles[roleIndex];
  }, 2400);
}
