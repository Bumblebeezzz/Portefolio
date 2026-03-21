(function () {
  const STORAGE_KEY = "portfolio-theme";
  const root = document.documentElement;

  function syncControls(mode) {
    document.querySelectorAll("[data-theme-btn]").forEach(function (btn) {
      var v = btn.getAttribute("data-theme-btn");
      var active = v === mode;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.classList.toggle("is-active", active);
    });
  }

  function applyAuto() {
    var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.setAttribute("data-theme", dark ? "dark" : "light");
    root.setAttribute("data-theme-mode", "auto");
    syncControls("auto");
  }

  function setTheme(mode) {
    localStorage.setItem(STORAGE_KEY, mode);
    if (mode === "auto") {
      applyAuto();
      return;
    }
    root.setAttribute("data-theme", mode);
    root.setAttribute("data-theme-mode", mode);
    syncControls(mode);
  }

  function init() {
    var saved = localStorage.getItem(STORAGE_KEY) || "dark";
    setTheme(saved);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
      if (localStorage.getItem(STORAGE_KEY) === "auto") applyAuto();
    });

    document.querySelectorAll("[data-theme-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setTheme(btn.getAttribute("data-theme-btn"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
