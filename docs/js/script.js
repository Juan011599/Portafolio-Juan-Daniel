document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggle");

  // Verificar preferencia guardada
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    toggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
      toggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
      localStorage.setItem("theme", "light");
    } else {
      toggleBtn.innerHTML = `<i class="fas fa-moon"></i>`;
      localStorage.setItem("theme", "dark");
    }
  });
});
