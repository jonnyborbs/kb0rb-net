/* KB0RB.net — the only JavaScript on the site: theme toggle, mobile nav,
   and a border on the header once you scroll. */
(function () {
  "use strict";

  var root = document.documentElement;

  /* --- theme ------------------------------------------------------------ */
  var themeBtn = document.getElementById("theme-toggle");

  function label() {
    if (!themeBtn) return;
    var next = root.dataset.theme === "dark" ? "light" : "dark";
    themeBtn.setAttribute("aria-label", "Switch to " + next + " theme");
  }

  label();

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("kb0rb-theme", root.dataset.theme);
      } catch (e) {
        /* private browsing — the choice just won't persist */
      }
      label();
    });
  }

  /* --- mobile nav ------------------------------------------------------- */
  var navBtn = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav");

  if (navBtn && nav) {
    navBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navBtn.setAttribute("aria-expanded", String(open));
      navBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        navBtn.setAttribute("aria-expanded", "false");
        navBtn.setAttribute("aria-label", "Open menu");
        navBtn.focus();
      }
    });
  }

  /* --- header border on scroll ------------------------------------------ */
  var header = document.getElementById("site-header");

  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
