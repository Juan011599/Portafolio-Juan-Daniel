document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successAlert = document.getElementById("successAlert");
  const submitBtn = document.getElementById("submitBtn");
  const spinner = document.getElementById("loadingSpinner");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Evita redirección

    spinner.classList.remove("d-none");
    submitBtn.disabled = true;

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwpqqeld", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        successAlert.classList.remove("d-none");
      } else {
        alert("Hubo un error al enviar tu mensaje. Inténtalo más tarde.");
      }
    } catch (error) {
      alert("Error de conexión. Revisa tu red.");
    } finally {
      spinner.classList.add("d-none");
      submitBtn.disabled = false;
    }
  });
});
