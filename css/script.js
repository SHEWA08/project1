// script.js
document.getElementById('login-button').addEventListener('click', () => {
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.getElementById('modal-title').textContent = 'Войти';
  });
  
  document.getElementById('register-button').addEventListener('click', () => {
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.getElementById('modal-title').textContent = 'Регистрация';
  });
  
  document.getElementById('switch-modal').addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('modal-title');
    title.textContent = title.textContent === 'Войти' ? 'Регистрация' : 'Войти';
  });
  
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') {
      document.getElementById('modal-overlay').classList.add('hidden');
    }
  });
  
  // Корзина
  let cartCount = 0;
  document.getElementById('cart-button').addEventListener('click', () => {
    alert('Корзина пока пуста!');
  });
  
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      document.getElementById('cart-count').textContent = cartCount;
    });
  });
  