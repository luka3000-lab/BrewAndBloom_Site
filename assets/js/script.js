// --------------------------------------------------
// Brew & Bloom — Minimal JS
// - Updates footer year
// - Placeholder hooks for future enhancements
// --------------------------------------------------
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const nav = document.querySelector(".nav");
const toggleBtn = document.querySelector("#menu-toggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

toggleBtn.setAttribute("aria-expanded", "false");
toggleBtn.addEventListener("click", () => {
    const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !expanded);
});

var map = L.map('map').setView([-26.2041, 28.0473], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
}).addTo(map);

L.marker([-26.2041, 28.0473]).addTo(map)
  .bindPopup('Brew & Bloom Café & Plant Studio')
  .openPopup();
const elements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
