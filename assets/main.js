(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.add("js");
  var body = document.body;

  function setMenu(open) {
    body.classList.toggle("menu-open", open);
    doc.style.overflow = open ? "hidden" : "";
    var btn = document.querySelector(".menu-btn");
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  var menuBtn = document.querySelector(".menu-btn");
  if (menuBtn) menuBtn.addEventListener("click", function () { setMenu(true); });
  var closeBtn = document.querySelector(".mob-close");
  if (closeBtn) closeBtn.addEventListener("click", function () { setMenu(false); });
  var overlay = document.querySelector(".mob-overlay");
  if (overlay) overlay.addEventListener("click", function () { setMenu(false); });
  document.querySelectorAll(".mob-drawer a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      setMenu(false);
      document.querySelectorAll(".has-drop.open").forEach(function (li) { li.classList.remove("open"); });
    }
  });

  document.querySelectorAll(".has-drop > button").forEach(function (b) {
    b.addEventListener("click", function () {
      var li = b.parentNode;
      var open = li.classList.toggle("open");
      b.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", function () {
      var open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
      a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) setMenu(false);
    document.querySelectorAll(".faq-item.open .faq-a").forEach(function (a) { a.style.maxHeight = a.scrollHeight + "px"; });
  });
})();
