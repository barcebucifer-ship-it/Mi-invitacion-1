document.addEventListener("DOMContentLoaded", () => {

  const createButtons = [
    document.getElementById("createTopBtn"),
    document.getElementById("createHeroBtn"),
    document.getElementById("createBottomBtn")
  ];

  const loginBtn = document.getElementById("loginBtn");
  const demoBtn = document.getElementById("demoBtn");

  createButtons.forEach(button => {
    if (!button) return;

    button.addEventListener("click", () => {
      alert(
        "🎉 Muy pronto podrás crear tu invitación desde aquí."
      );
    });
  });

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      alert(
        "🔐 Próximamente agregaremos registro e inicio de sesión."
      );
    });
  }

  if (demoBtn) {
    demoBtn.addEventListener("click", () => {

      const preview = document.querySelector(".hero-preview");

      if (preview) {
        preview.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }

    });
  }


  /* BOTONES DE PLANTILLAS */

  const templateButtons =
    document.querySelectorAll(".template button");

  templateButtons.forEach(button => {

    button.addEventListener("click", () => {

      const template =
        button.closest(".template");

      const templateName =
        template.querySelector("h3").textContent;

      alert(
        `✨ Plantilla "${templateName}" seleccionada.\n\n` +
        "Más adelante podrás editarla con tus datos, fotos y música."
      );

    });

  });


  /* BOTONES DE PLANES */

  const pricingButtons =
    document.querySelectorAll(".price-card button");

  pricingButtons.forEach(button => {

    button.addEventListener("click", () => {

      const card =
        button.closest(".price-card");

      const plan =
        card.querySelector("h3").textContent;

      alert(
        `💌 Elegiste el plan ${plan}.\n\n` +
        "Los planes se activarán cuando agreguemos las cuentas de usuario."
      );

    });

  });


  /* CONFIRMAR ASISTENCIA DE DEMOSTRACIÓN */

  const rsvpButton =
    document.querySelector(".rsvp-button");

  if (rsvpButton) {

    rsvpButton.addEventListener("click", () => {

      alert(
        "✅ En una invitación real, este botón permitirá " +
        "al invitado confirmar su asistencia."
      );

    });

  }

});
