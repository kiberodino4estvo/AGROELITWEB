// В этом примере пока базовая заготовка на будущее.
// Здесь можно будет добавить интерактив, если он понадобится позже.
  
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
  
  