document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("vacancyForm");
    const status = document.getElementById("formStatus");
  
    if (!form) return; // форма не найдена — выходим
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const formData = new FormData(form);
  
      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          status.textContent = "Спасибо! Ваша заявка отправлена.";
          status.classList.add("visible");
          form.reset();
        } else {
          status.textContent = "Ошибка при отправке. Попробуйте позже.";
          status.classList.add("visible");
        }
      } catch (error) {
        status.textContent = "Ошибка сети. Попробуйте позже.";
        status.classList.add("visible");
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("main-nav");
  
    burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
  
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!expanded));
  });
  
  
  
  
    const dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach(drop => {
      drop.addEventListener("click", (e) => {
        e.stopPropagation();
        drop.classList.toggle("open");
      });
    });
  
    document.body.addEventListener("click", () => {
      dropdowns.forEach(d => d.classList.remove("open"));
    });
  });
  
