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

  /* Language toggle (English / Hindi). Translatable elements carry a data-i18n key.
     Their English is read from the DOM at load; Hindi comes from window.HI (i18n-hi.js).
     The choice is remembered in localStorage. Pages without data-i18n keys are skipped. */
  var i18nNodes = document.querySelectorAll("[data-i18n]");
  if (i18nNodes.length) {
    var EN = {};
    i18nNodes.forEach(function (n) { EN[n.getAttribute("data-i18n")] = n.innerHTML; });
    var HI = window.HI || {};
    function applyLang(lang) {
      i18nNodes.forEach(function (n) {
        var k = n.getAttribute("data-i18n");
        var hi = HI[k];
        n.innerHTML = (lang === "hi" && hi != null) ? hi : EN[k];
      });
      document.documentElement.lang = lang;
      document.body.classList.toggle("lang-hi", lang === "hi");
      var btns = document.querySelectorAll(".lang-toggle button");
      btns.forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-lang") === lang); });
    }
    var saved = "en";
    try { saved = localStorage.getItem("mst-lang") || "en"; } catch (e) {}
    applyLang(saved);
    var lt = document.querySelector(".lang-toggle");
    if (lt) {
      lt.addEventListener("click", function (ev) {
        var b = ev.target.closest("button[data-lang]");
        if (!b) return;
        var lang = b.getAttribute("data-lang");
        try { localStorage.setItem("mst-lang", lang); } catch (e2) {}
        applyLang(lang);
      });
    }
  }
})();
