document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach((faq) => {
        faq.classList.remove("active");
        faq.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("active");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  const form = document.getElementById("contact-form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = form.elements.nombre.value.trim();
    const consulta = form.elements.consulta.value.trim();

    if (!nombre || !consulta) {
      message.textContent = "Completa todos los campos antes de enviar.";
      return;
    }

    message.textContent = `Gracias, ${nombre}. Tu consulta ha sido enviada con éxito.`;
    form.reset();
  });
});