let selectedCard = null;

function selectCard(btn) {
  document.querySelectorAll('.card-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedCard = btn.getAttribute('data-card');
  document.getElementById('card-error').style.display = 'none';
}
document.getElementById('card-number').addEventListener('input', function () {
    let val = this.value.replace(/\D/g, '').substring(0, 16);
    this.value = val.replace(/(.{4})/g, '$1-').replace(/-$/, '');
});

['exp-month', 'exp-year', 'cvv'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '');
    });
});

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    input.classList.add('error');
    let msg = input.nextElementSibling;
    if (!msg || !msg.classList.contains('error-msg')) {
        msg = document.createElement('div');
        msg.classList.add('error-msg');
        input.parentNode.insertBefore(msg, input.nextSibling);
    }
    msg.textContent = message;
    msg.classList.add('visible');
}

function clearError(inputId) {
    const input = document.getElementById(inputId);
    input.classList.remove('error');
    const msg = input.nextElementSibling;
    if (msg && msg.classList.contains('error-msg')) {
        msg.classList.remove('visible');
    }
}

function clearAllErrors() {
    const ids = ['full-name','email','address','city','zip','card-name','card-number','exp-month','exp-year','cvv'];
    ids.forEach(clearError);
}

// ====== SOUMISSION DU FORMULAIRE ======
document.getElementById('payment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    clearAllErrors();

    const fullName   = document.getElementById('full-name').value.trim();
    const email      = document.getElementById('email').value.trim();
    const address    = document.getElementById('address').value.trim();
    const city       = document.getElementById('city').value.trim();
    const zip        = document.getElementById('zip').value.trim();
    const cardName   = document.getElementById('card-name').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expMonth   = document.getElementById('exp-month').value.trim();
    const expYear    = document.getElementById('exp-year').value.trim();
    const cvv        = document.getElementById('cvv').value.trim();

    let valid = true;

    
    if (fullName.length < 3) {
        showError('full-name', 'Veuillez entrer un nom complet valide.');
        valid = false;
    }

  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Veuillez entrer une adresse email valide.');
        valid = false;
    }

  
    if (address.length < 5) {
        showError('address', 'Veuillez entrer une adresse complète.');
        valid = false;
    }

    
    if (city.length < 2) {
        showError('city', 'Veuillez entrer une ville valide.');
        valid = false;
    }

    
    if (!/^\d{4,10}$/.test(zip)) {
        showError('zip', 'Code postal invalide (4 à 10 chiffres).');
        valid = false;
    }

   
    if (cardName.length < 3) {
        showError('card-name', 'Veuillez entrer le nom sur la carte.');
        valid = false;
    }

    
    const cardClean = cardNumber.replace(/[-\s]/g, '');
    if (!/^\d{16}$/.test(cardClean)) {
        showError('card-number', 'Numéro de carte invalide (16 chiffres requis).');
        valid = false;
    }

    const month = parseInt(expMonth, 10);
    if (isNaN(month) || month < 1 || month > 12) {
        showError('exp-month', 'Mois invalide (01 à 12).');
        valid = false;
    }

    
    const year = parseInt(expYear, 10);
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    if (isNaN(year) || year < currentYear || (year === currentYear && month < currentMonth)) {
        showError('exp-year', 'Carte expirée ou année invalide.');
        valid = false;
    }

   
    if (!/^\d{3,4}$/.test(cvv)) {
        showError('cvv', 'CVV invalide (3 ou 4 chiffres).');
        valid = false;
    }
if (!selectedCard) {
  document.getElementById('card-error').style.display = 'block';
  valid = false;
}
    if (!valid) return;

    localStorage.removeItem('panier');
    document.getElementById('cart-badge').textContent = '0';
    afficherSucces(fullName, email);
});


function afficherSucces(nom, email) {
    document.querySelector('.container').innerHTML = `
        <div style="
            text-align: center;
            padding: 60px 40px;
            background: white;
            border-radius: 14px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.12);
            max-width: 520px;
            width: 90%;
        ">
            <div style="
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, #f0d2bb, #e4c49a);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 24px;
            ">
                <i class="fas fa-check" style="color: white; font-size: 2rem;"></i>
            </div>
            <h2 style="color: #caab87; font-size: 1.6rem; margin-bottom: 12px; font-family: 'Segoe UI', sans-serif;">
                Commande confirmée !
            </h2>
            <p style="color: #555; margin-bottom: 8px; font-size: 1rem;">
                Merci <strong>${nom}</strong> pour votre commande.
            </p>
            <p style="color: #888; font-size: 0.92rem; margin-bottom: 32px;">
                Un email de confirmation sera envoyé à <strong>${email}</strong>.
            </p>
            <a href="../index.html" style="
                display: inline-block;
                padding: 14px 36px;
                background: linear-gradient(135deg, #f0d2bb, #e4c49a);
                color: white;
                border-radius: 12px;
                text-decoration: none;
                font-weight: 600;
                font-size: 1rem;
                transition: transform 0.2s, box-shadow 0.2s;
            "
            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(236,202,170,0.5)';"
            onmouseout="this.style.transform=''; this.style.boxShadow='';">
                Retour à l'accueil
            </a>
        </div>
    `;
}