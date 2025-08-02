document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".hero-section .overlay");

  document.querySelector(".hero-section").addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    overlay.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(100, 255, 218, 0.2) 0%, rgba(10, 25, 47, 0.95) 80%)`;
  });
});
