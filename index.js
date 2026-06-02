function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + (item.qty || item.quantity || 0), 0);
  const badge = document.getElementById('cartCount');
  if (badge) badge.textContent = totalItems;
}

function toggleWishlist() {
  window.location.href = "favoris.html";
}

function toggleAccount() {
  window.location.href = "login.html";
}

window.addEventListener('load', updateCartBadge);
setInterval(updateCartBadge, 500);