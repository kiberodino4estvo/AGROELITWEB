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