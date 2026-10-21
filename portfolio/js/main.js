// ====== CONFIGURACIÓN ======
// Rellena estos enlaces con los tuyos. Si los dejas vacíos, los botones no se muestran.
const LINKS = {
  github: "",    // ej.: "https://github.com/tu-usuario"
  linkedin: ""   // ej.: "https://www.linkedin.com/in/tu-perfil"
};
// ===========================

(function () {
  document.documentElement.classList.add("js");

  // Enlaces opcionales
  [["github", "linkGithub"], ["linkedin", "linkLinkedin"]].forEach(function (p) {
    var el = document.getElementById(p[1]);
    if (el && LINKS[p[0]]) { el.href = LINKS[p[0]]; el.hidden = false; }
  });

  // Año del pie
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Tema claro/oscuro
  var root = document.documentElement;
  var btn = document.getElementById("themeBtn");
  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  if (btn) btn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Filtro de proyectos
  var chips = document.querySelectorAll(".chip");
  var cards = document.querySelectorAll("#grid .card");
  var empty = document.getElementById("empty");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var f = chip.dataset.filter, shown = 0;
      chips.forEach(function (c) { c.classList.toggle("is-on", c === chip); });
      cards.forEach(function (card) {
        var ok = f === "all" || card.dataset.cat.split(" ").indexOf(f) !== -1;
        card.classList.toggle("is-hidden", !ok);
        if (ok) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
    });
  });

  // Aparición suave al hacer scroll
  var targets = document.querySelectorAll(".card, .skill, .cert-group, .cert, .timeline li, .sec-head, .about > *");
  targets.forEach(function (el) { el.classList.add("reveal"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add("in"); });
  }
})();
