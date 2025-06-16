document.getElementById('clear-cart').addEventListener('click', () => {
  if (confirm('Вы уверены, что хотите очистить корзину?')) {
      localStorage.removeItem('cart');
      renderCart();
      document.getElementById('order-status').textContent = 'Корзина была очищена.';
      document.getElementById('order-status').classList.add('visible');
      document.getElementById('order-form').style.display = 'none';
  }
});

const cartList = document.getElementById('cart-list');
const cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  cartList.innerHTML = '';
  if (cart.length === 0) {
      cartList.innerHTML = '<li>Корзина пуста.</li>';
      document.getElementById('order-form').style.display = 'none';
      return;
  }
  cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      cartList.appendChild(li);
  });
}

document.getElementById('order-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const address = document.getElementById('address').value.trim();

  if (!name || !phone || !email || !address) {
      alert('Пожалуйста, заполните все поля.');
      return;
  }

  // Подготовка данных для отправки
  const formData = new FormData();
  formData.append('Имя', name);
  formData.append('Телефон', phone);
  formData.append('Email', email);
  formData.append('Адрес', address);
  formData.append('Товары', cart.join(', '));

  try {
      // Отправка данных на Formspree
      const response = await fetch('https://formspree.io/f/mzzgbdea', {
          method: 'POST',
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
      });

      if (response.ok) {
          localStorage.removeItem('cart');
          document.getElementById('order-status').textContent = 'Заказ успешно оформлен! Мы свяжемся с вами.';
          document.getElementById('order-status').classList.add('visible');
          document.getElementById('order-form').reset();
          renderCart();
      } else {
          throw new Error('Ошибка при отправке формы');
      }
  } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте ещё раз.');
  }
});

renderCart();