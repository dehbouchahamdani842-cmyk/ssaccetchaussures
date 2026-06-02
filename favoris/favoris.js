function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = totalItems;
}

function displayFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const list = document.getElementById('favoris-list');
  const emptyMessage = document.getElementById('empty-message');

  if (favorites.length === 0) {
    emptyMessage.classList.remove('hidden');
    list.innerHTML = '';
    return;
  }

  emptyMessage.classList.add('hidden');

  list.innerHTML = favorites.map(fav => `
    <div class="favori-card">
      <img src="${fav.img || 'https://via.placeholder.com/300x260?text=Pas+d\'image'}" 
           alt="${fav.name}" 
           onerror="this.src='https://via.placeholder.com/300x260?text=Image+Non+Disponible'">

      <div class="p-5">
        <h3 class="font-semibold text-lg leading-tight mb-3 line-clamp-2 min-h-[52px]">
          ${fav.name}
        </h3>

        <p class="text-2xl font-bold text-[#c26d3f] mb-6">
          ${fav.price || ''}
        </p>

        <button onclick="removeFav('${fav.name.replace(/'/g, "\\'")}')" 
                class="btn-supprimer w-full py-3.5 rounded-2xl text-white font-medium flex items-center justify-center gap-2 text-sm">
          <i class="fas fa-trash-alt"></i>
          Retirer des favoris
        </button>
      </div>
    </div>
  `).join('');
}

function removeFav(productName) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = favorites.filter(fav => fav.name !== productName);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  displayFavorites();
}

function goToFavoris() {
  window.location.href = '../favoris/';
}

window.addEventListener('load', () => {
  updateCartBadge();
  displayFavorites();
});

setInterval(updateCartBadge, 1000);