// --------------------------------------------------
// Brew & Bloom — Minimal JS
// - Updates footer year
// - Placeholder hooks for future enhancements
// --------------------------------------------------
(function(){
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
