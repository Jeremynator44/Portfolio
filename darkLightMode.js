document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const html = document.documentElement;
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon"); // Récupère la balise <img>

    // Chemins vers tes images PNG
    const sunIconPath = "image/iconsSoleil.png"; // Adapte le chemin
    const moonIconPath = "image/iconsDark.png"; // Adapte le chemin

  function setTheme(mode) {
    if (mode === "dark") {
      html.classList.add("dark");
      body.classList.add("dark");
      //toggleBtn.textContent = "☼";
      localStorage.setItem("theme", "dark");
      themeIcon.src = sunIconPath; // Mode sombre -> affiche l'icône soleil
    } else {
      html.classList.remove("dark");
      body.classList.remove("dark");
      //toggleBtn.textContent = "☾";
      localStorage.setItem("theme", "light");
      themeIcon.src = moonIconPath; // Mode sombre -> affiche l'icône soleil
    }
  }

  // Initialiser
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  toggleBtn.addEventListener("click", () => {
    const isDark = html.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });
});
