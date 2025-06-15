document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.name;
      cart.push(name);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} добавлен в корзину.`);
    });
  });
});
  
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

  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const grainCards = document.querySelectorAll(".grain-card");

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Активная кнопка
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        grainCards.forEach((card) => {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            // Показать с анимацией
            if (card.classList.contains("hidden")) {
              card.classList.remove("hidden");
              card.style.position = "static";
              card.setAttribute("data-visible", "true");
              setTimeout(() => {
                card.style.display = "block";
              }, 10);
            }
          } else {
            // Скрыть с анимацией
            if (!card.classList.contains("hidden")) {
              card.classList.add("hidden");
              setTimeout(() => {
                card.style.display = "none";
                card.setAttribute("data-visible", "false");
                card.style.position = "absolute";
              }, 400); // совпадает с transition-duration
            }
          }
        });
      });
    });
  });
  
