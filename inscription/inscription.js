document.querySelectorAll('.toggle-password').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        const input = this.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            this.textContent = '🙈';
        } else {
            input.type = 'password';
            this.textContent = '👁';
        }
    });
});

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    input.classList.add('error');
    let msg = input.parentNode.nextElementSibling;
    if (!msg || !msg.classList.contains('error-msg')) {
        msg = document.createElement('div');
        msg.classList.add('error-msg');
        input.parentNode.insertAdjacentElement('afterend', msg);
    }
    msg.textContent = message;
    msg.classList.add('visible');
}

function clearError(inputId) {
    const input = document.getElementById(inputId);
    input.classList.remove('error');
    const parent = input.parentNode;
    const msg = parent.nextElementSibling;
    if (msg && msg.classList.contains('error-msg')) {
        msg.classList.remove('visible');
    }
}

function clearAllErrors() {
    ['nom', 'email', 'password', 'confirm-password'].forEach(clearError);
}

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    clearAllErrors();

    const nom             = document.getElementById('nom').value.trim();
    const email           = document.getElementById('email').value.trim();
    const password        = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let valid = true;

    if (nom.length < 3) {
        showError('nom', 'Veuillez entrer votre nom complet (min. 3 caractères).');
        valid = false;
    }

    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Veuillez entrer une adresse email valide.');
        valid = false;
    }

    
    if (password.length < 6) {
        showError('password', 'Le mot de passe doit contenir au moins 6 caractères.');
        valid = false;
    }

  
    if (confirmPassword !== password) {
        showError('confirm-password', 'Les mots de passe ne correspondent pas.');
        valid = false;
    }

    if (!valid) return;

  
    afficherSucces(nom);
});


function afficherSucces(nom) {
   // ====== AFFICHER / MASQUER LES MOTS DE PASSE ======
// ====== AFFICHER / MASQUER LES MOTS DE PASSE ======
document.querySelectorAll('.toggle-password').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        const input = this.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            this.textContent = '🙈';
        } else {
            input.type = 'password';
            this.textContent = '👁';
        }
    });
});

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    input.classList.add('error');
    let msg = input.parentNode.nextElementSibling;
    if (!msg || !msg.classList.contains('error-msg')) {
        msg = document.createElement('div');
        msg.classList.add('error-msg');
        input.parentNode.insertAdjacentElement('afterend', msg);
    }
    msg.textContent = message;
    msg.classList.add('visible');
}

function clearError(inputId) {
    const input = document.getElementById(inputId);
    input.classList.remove('error');
    const parent = input.parentNode;
    const msg = parent.nextElementSibling;
    if (msg && msg.classList.contains('error-msg')) {
        msg.classList.remove('visible');
    }
}

function clearAllErrors() {
    ['nom', 'email', 'password', 'confirm-password'].forEach(clearError);
}

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    clearAllErrors();

    const nom             = document.getElementById('nom').value.trim();
    const email           = document.getElementById('email').value.trim();
    const password        = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let valid = true;

    if (nom.length < 3) {
        showError('nom', 'Veuillez entrer votre nom complet (min. 3 caractères).');
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Veuillez entrer une adresse email valide.');
        valid = false;
    }

    if (password.length < 6) {
        showError('password', 'Le mot de passe doit contenir au moins 6 caractères.');
        valid = false;
    }

    if (confirmPassword !== password) {
        showError('confirm-password', 'Les mots de passe ne correspondent pas.');
        valid = false;
    }

    if (!valid) return;

    // ✅ AFFICHER LE MESSAGE PUIS REDIRIGER
    afficherSucces(nom);
});

function afficherSucces(nom) {
    document.querySelector('.background').innerHTML = `
        <div style="
            text-align: center;
            padding: 60px 40px;
            background: white;
            border-radius: 28px;
            box-shadow: 0 15px 40px rgba(209,143,94,0.2);
            max-width: 420px;
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
                font-size: 2rem;
            ">🎉</div>
            <h2 style="color: #d18f5e; font-size: 1.6rem; margin-bottom: 12px; font-family: 'Segoe UI', sans-serif;">
                Inscription réussie !
            </h2>
            <p style="color: #666; margin-bottom: 8px; font-size: 1rem;">
                Bienvenue <strong>${nom}</strong> !
            </p>
            <p style="color: #999; font-size: 0.9rem; margin-bottom: 32px;">
                Votre compte a été créé avec succès.
            </p>
            <p style="color: #caab87; font-size: 0.9rem;">
                Redirection automatique dans <span id="countdown">3</span> secondes...
            </p>
        </div>
    `;

   
    let count = 3;
    const interval = setInterval(function () {
        count--;
        const el = document.getElementById('countdown');
        if (el) el.textContent = count;
        if (count <= 0) {
            clearInterval(interval);
            window.location.href = 'commande.html';
        }
    }, 1000);
}
}