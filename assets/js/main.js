/* Manish Steel Traders — minimal JS: mobile nav toggle + footer year. */
(function () {
  "use strict";
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
  var y = document.getElementById("year");
  if (y) { y.textContent = new Date().getFullYear(); }

  /* Floating WhatsApp button. Injected here rather than pasted into every page,
     so the number and message live in one place. */
  var wa = document.createElement("a");
  wa.className = "wa-float";
  wa.href = "https://wa.me/919822221699?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20steel.%20My%20requirement%20is%3A";
  wa.target = "_blank";
  wa.rel = "noopener";
  wa.setAttribute("aria-label", "Message us on WhatsApp");
  wa.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.3 4.8 4.92-1.29A9.9 9.9 0 1 0 12.04 2m-2.3 5.2c.15 0 .37-.06.55.36.22.48.69 1.7.75 1.82.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.25.25-.11.49.14.24.63 1.04 1.35 1.68.93.83 1.72 1.09 1.96 1.21.24.12.38.1.52-.06.14-.16.61-.72.77-.96.16-.24.33-.2.55-.12.22.08 1.43.68 1.67.8.24.12.4.18.46.28.06.11.06.59-.14 1.16-.21.57-1.21 1.12-1.66 1.16-.45.04-.87.21-2.93-.62-2.49-1-4.07-3.54-4.19-3.7-.12-.16-.99-1.31-.99-2.51 0-1.19.63-1.78.85-2.02.22-.24.48-.3.64-.3z"/></svg><span>WhatsApp</span>';
  document.body.appendChild(wa);
})();
