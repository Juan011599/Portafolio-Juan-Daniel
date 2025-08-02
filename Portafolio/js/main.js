import { initThemeToggle } from './toggleTheme.js';
import { initSmoothScroll } from './smoothScroll.js';
import { initspotlightEffect } from './spotlightEffect.js';
import { initTranslation } from './translate.js';


document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initSmoothScroll();
  initspotlightEffect();
  initTranslation();
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const alert = document.getElementById("form-alert");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    // Mostrar botón de carga (opcional)
    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Enviando...";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        form.reset();
        form.classList.remove("was-validated");
        alert.classList.remove("d-none");
        alert.classList.add("animate__animated", "animate__fadeInDown");
      } else {
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
        alert.textContent = "Hubo un error. Intenta de nuevo.";
        alert.classList.remove("d-none");
      }
    } catch (err) {
      alert.classList.remove("alert-success");
      alert.classList.add("alert-danger");
      alert.textContent = "Error de red. Revisa tu conexión.";
      alert.classList.remove("d-none");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "Enviar";
    }
  });
});
// Formulario - alerta de éxito y animación de loading
document.getElementById('contact-form').addEventListener('submit', function (e) {
  const submitBtn = document.getElementById('submitBtn');
  const spinner = document.getElementById('loadingSpinner');
  const successAlert = document.getElementById('successAlert');

  spinner.classList.remove('d-none');
  submitBtn.disabled = true;

  // Espera a que se envíe (simulado)
  setTimeout(() => {
    spinner.classList.add('d-none');
    submitBtn.disabled = false;
    successAlert.classList.remove('d-none');
    this.reset();
  }, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
  // Tema
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggle");
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

  // Idioma
  const languageSelect = document.getElementById("languageSelect");
  const savedLang = localStorage.getItem("language") || "es";
  languageSelect.value = savedLang;
  setLanguage(savedLang);

  languageSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    setLanguage(lang);
  });
});
// Spotlight effect en Hero Section
// Formulario - alerta de éxito y animación de loading
document.getElementById('contact-form').addEventListener('submit', function (e) {
  const submitBtn = document.getElementById('submitBtn');
  const spinner = document.getElementById('loadingSpinner');
  const successAlert = document.getElementById('successAlert');

  spinner.classList.remove('d-none');
  submitBtn.disabled = true;

  // Espera a que se envíe (simulado)
  setTimeout(() => {
    spinner.classList.add('d-none');
    submitBtn.disabled = false;
    successAlert.classList.remove('d-none');
    this.reset();
  }, 2000);
});
