document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  // Cargar preferencia
  if (localStorage.getItem("theme") === "light") {
    body.classList.remove("dark-mode");
  } else {
    body.classList.add("dark-mode");
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const newTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  });
});
