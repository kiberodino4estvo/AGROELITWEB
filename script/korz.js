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