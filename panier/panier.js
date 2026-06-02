let panier = JSON.parse(localStorage.getItem('cart')) || [];

// ✅ Lire la devise choisie dans produits.html automatiquement
let currentCurrency = localStorage.getItem('currency') || 'EUR';
const EUR_TO_DZD = 145;

window.onload = function () {
    afficherPanier();
};

// ✅ Convertir un prix EUR vers la devise active
function convertirPrix(prixEUR) {
    if (currentCurrency === 'DZD') {
        return Math.round(prixEUR * EUR_TO_DZD).toLocaleString('fr-FR') + ' DA';
    }
    return prixEUR.toFixed(2).replace('.', ',') + ' €';
}

// ✅ Extraire le montant numérique depuis une chaîne de prix
function extrairePrix(priceStr) {
    return parseFloat(priceStr.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;
}

function afficherPanier() {
    const liste = document.getElementById('liste-produits');
    liste.innerHTML = '';

    // ✅ Mettre à jour le symbole dans le total
    document.getElementById('total-devise').textContent = currentCurrency === 'DZD' ? 'DA' : '€';

    if (panier.length === 0) {
        liste.innerHTML = '<p style="text-align:center; color:#888;">Votre panier est vide.</p>';
        document.getElementById('total-montant').textContent = '0,00';
        return;
    }

    let totalEUR = 0;

    panier.forEach((produit, index) => {
        const item = document.createElement('div');
        item.className = 'item-panier';

        const prixEUR = produit.priceEUR || extrairePrix(produit.price);
        const sousTotalEUR = prixEUR * produit.quantity;
        totalEUR += sousTotalEUR;

        // ✅ Prix unitaire et sous-total convertis selon la devise
        const prixUnitaireAffiche = convertirPrix(prixEUR);
        const sousTotalAffiche = convertirPrix(sousTotalEUR);

        item.innerHTML = `
            <img src="../../im/${produit.img}" alt="${produit.name}" 
                 onerror="this.src='https://via.placeholder.com/80x80?text=Image'"
                 style="width:80px; height:80px; object-fit:cover; border-radius:10px;">
            <div class="info-produit">
                <h3>${produit.name}</h3>
                ${produit.size ? `<p>Pointure : ${produit.size}</p>` : ''}
                <p>Couleur : <span style="display:inline-block; width:20px; height:20px; 
                    background-color:${produit.color}; border:1px solid #ccc; 
                    vertical-align:middle; border-radius:4px;"></span>
                </p>
                <p class="prix-unitaire">Prix unitaire : <strong>${prixUnitaireAffiche}</strong></p>
                <div class="quantite">
                    <button onclick="changerQuantite(${index}, -1)">−</button>
                    <span>${produit.quantity}</span>
                    <button onclick="changerQuantite(${index}, 1)">+</button>
                </div>
            </div>
            <div class="item-droite">
                <p class="prix">${sousTotalAffiche}</p>
                <button class="btn-supprimer" onclick="supprimerProduit(${index})">🗑 Supprimer</button>
            </div>
        `;
        liste.appendChild(item);
    });

    // ✅ Total converti
    if (currentCurrency === 'DZD') {
        document.getElementById('total-montant').textContent =
            Math.round(totalEUR * EUR_TO_DZD).toLocaleString('fr-FR');
    } else {
        document.getElementById('total-montant').textContent = totalEUR.toFixed(2).replace('.', ',');
    }
}

function changerQuantite(index, delta) {
    panier[index].quantity += delta;
    if (panier[index].quantity < 1) panier[index].quantity = 1;
    localStorage.setItem('cart', JSON.stringify(panier));
    afficherPanier();
}

function supprimerProduit(index) {
    if (confirm(`Supprimer "${panier[index].name}" du panier ?`)) {
        panier.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(panier));
        afficherPanier();
    }
}

function confirmerCommande() {
    if (panier.length === 0) {
        alert('Votre panier est vide.');
        return;
    }
    window.location.href = '../commande/';
}