let currentCurrency = localStorage.getItem('currency') || 'EUR';
const EUR_TO_DZD = 145;

window.setCurrency = function(currency) {
  currentCurrency = currency;
  // ✅ Sauvegarder la devise pour panier.js
  localStorage.setItem('currency', currency);
  document.getElementById('btnEuro').classList.toggle('active', currency === 'EUR');
  document.getElementById('btnDinar').classList.toggle('active', currency === 'DZD');
  const currentCat = document.getElementById('categoryTriggerText').textContent;
  if (categoriesData[currentCat]) showCategory(currentCat);
  else showCategory('Nouveauté');
};

function convertPrice(priceStr) {
  const num = parseFloat(priceStr.replace(/[^0-9.,]/g, '').replace(',', '.'));
  if (isNaN(num)) return priceStr;
  if (currentCurrency === 'DZD') {
    const dinar = Math.round(num * EUR_TO_DZD);
    return dinar.toLocaleString('fr-FR') + ' DA';
  }
  return priceStr;
}

function getColorName(hex) {
  const colors = {
    '#000000': '🖤 Noir',
    '#8B4513': '🟤 Marron',
    '#191970': '💙 Bleu Nuit'
  };
  return colors[hex] || hex;
}

function showColorToast(colorHex) {
  const toast = document.createElement('div');
  toast.className = 'toast-message show';
  toast.textContent = `Couleur sélectionnée : ${getColorName(colorHex)}`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 250);
  }, 2000);
}

const categoriesData = {
  "Nouveauté": {
    title: "𝓝𝓸𝓾𝓿𝓮𝓪𝓾𝓽é 𝓹𝓻𝓮𝓶𝓲𝓾𝓶 𝓹𝓸𝓾𝓻 𝓾𝓷𝓮 𝓪𝓵𝓵𝓾𝓻𝓮 𝓻𝓪𝓯𝓯𝓲𝓷é𝓮",
    products: [
      { name: "Ensemble sac et chaussures élégant et harmonieux", img: "../../im/r1.jpg", price: "60,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Duo chic pour un look parfaitement coordonné", img: "../../im/r2.jpg", price: "70,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Ensemble raffiné avec finition haut de gamme", img: "../../im/r3.jpg", price: "55,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "L'accord parfait entre style et luxe", img: "../../im/r4.jpg", price: "50,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Le choix idéal pour une tenue élégante", img: "../../im/r5.jpg", price: "67,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Ensemble avec détails soignés et matériaux de qualité", img: "../../im/r1.jpg", price: "100,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Duo stylé pour une allure distinguée", img: "../../im/r2.jpg", price: "56,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Ensemble avec touche de luxe et d'élégance", img: "../../im/r3.jpg", price: "89,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Design exclusif pour un look unique", img: "../../im/r4.jpg", price: "94,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Ensemble parfait pour les grandes occasions", img: "../../im/r3.jpg", price: "63,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Duo incontournable pour un style affirmé", img: "../../im/r2.jpg", price: "76,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "combo idéal pour sublimer votre tenue", img: "../../im/r1.jpg", price: "84,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
    ]
  },
  "Mini Sac": {
    title: "𝓛𝓮𝓼 𝓲𝓷𝓭𝓲𝓼𝓹𝓮𝓷𝓼𝓪𝓫𝓵𝓮𝓼 𝓶𝓲𝓷𝓲 𝓼𝓪𝓬𝓼 𝓭𝓾 𝓶𝓸𝓶𝓮𝓷𝓽",
    products: [
      { name: "Petit sac chic pour toutes vos sorties", img: "../../im/sacc1.jpg", price: "89,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Mini sac avec fermeture sécurisée", img: "../../im/sacc2.jpg", price: "70 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Le compagnon idéal au quotidien", img: "../../im/sacc3.jpg", price: "55 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Sac compact avec un style moderne", img: "../../im/sacc4.jpg", price: "66 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Sac léger avec design raffiné", img: "../../im/sacc5.jpg", price: "49 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Petit sac avec finition de qualité", img: "../../im/sacc1.jpg", price: "40 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Accessoire indispensable pour votre tenue", img: "../../im/sacc4.jpg", price: "79 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Sac stylé avec plusieurs couleurs disponibles", img: "../../im/sacc2.jpg", price: "50 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Mini sac parfait pour un look casual", img: "../../im/sacc1.jpg", price: "59 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Design minimaliste et élégant", img: "../../im/sacc3.jpg", price: "49 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Mini sac avec fermeture sécurisée", img: "../../im/sacc1.jpg", price: "34 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Mini sac élégant et facile à porter", img: "../../im/sacc2.jpg", price: "44 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
    ]
  },
  "Sac bandoulière": {
    title: "𝓒𝓸𝓵𝓵𝓮𝓬𝓽𝓲𝓸𝓷 𝓮𝔁𝓬𝓵𝓾𝓼𝓲𝓿𝓮 𝓭𝓮 𝓼𝓪𝓬𝓼 𝓹𝓻𝓪𝓽𝓲𝓺𝓾𝓮𝓼 𝓮𝓽 𝓼𝓽𝔂𝓵é𝓼",
    products: [
      { name: "Sac bandoulière élégant et pratique", img: "../../im/n1.jpg", price: "89,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#DC143C"] },
      { name: "Modèle tendance pour un usage quotidien", img: "../../im/sac2.jpg", price: "67,50 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#DC143C"] },
      { name: "Sac confortable avec bandoulière ajustable", img: "../../im/sac3.jpg", price: "94,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#DC143C"] },
      { name: "Design moderne et raffiné", img: "../../im/sac4.jpg", price: "66,50 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Sac idéal pour vos sorties et déplacements", img: "../../im/sac5.jpg", price: "70,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Style chic avec grande praticité", img: "../../im/sac2.jpg", price: "55,70 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Sac compact mais spacieux", img: "../../im/sac1.jpg", price: "77,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Accessoire indispensable pour compléter votre look", img: "../../im/sac5.jpg", price: "65,20 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Sac léger avec finition de qualité", img: "../../im/sac3.jpg", price: "63,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Modèle simple et facile à porter", img: "../../im/sac4.jpg", price: "77,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Sac bandoulière avec fermeture sécurisée", img: "../../im/sac1.jpg", price: "120,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Look casual et élégant", img: "../../im/sac2.jpg", price: "69,80 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
    ]
  },
  "Sac à Dos": {
    title: "𝓒𝓸𝓵𝓵𝓮𝓬𝓽𝓲𝓸𝓷 é𝓵é𝓰𝓪𝓷𝓽𝓮 𝓮𝓽 𝓯𝓸𝓷𝓬𝓽𝓲𝓸𝓷𝓷𝓮𝓵𝓵𝓮",
    products: [
      { name: "Sac à dos pratique et élégant", img: "../../im/ca1.jpg", price: "30,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Modèle tendance pour un usage quotidien", img: "../../im/c2.jpg", price: "40,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Sac confortable avec bretelles ajustables", img: "../../im/c3.jpg", price: "45,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Design moderne et fonctionnel", img: "../../im/c4.jpg", price: "35,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Idéal pour l'école, le travail ou les sorties", img: "../../im/c5.jpg", price: "37,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Sac spacieux et bien organisé", img: "../../im/c2.jpg", price: "47,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Accessoire parfait pour un style casual", img: "../../im/c1.jpg", price: "66,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Sac léger avec grande capacité", img: "../../im/ca1.jpg", price: "45,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Modèle simple et facile à porter", img: "../../im/c4.jpg", price: "50,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Sac à dos avec plusieurs compartiments", img: "../../im/c3.jpg", price: "65,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Look moderne et dynamique", img: "../../im/ca1.jpg", price: "49,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Sac solide avec finition de qualité", img: "../../im/c2.jpg", price: "77,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
    ]
  },
  "Portefeuille": {
    title: "𝓒𝓸𝓵𝓵𝓮𝓬𝓽𝓲𝓸𝓷 𝓶𝓸𝓭𝓮𝓻𝓷𝓮 𝓭𝓮 𝓹𝓮𝓽𝓲𝓽𝓼 𝓪𝓬𝓬𝓮𝓼𝓼𝓸𝓲𝓻𝓮𝓼",
    products: [
      { name: "Porte-monnaie compact et élégant", img: "../../im/p1.jpg", price: "36,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Modèle pratique pour un usage quotidien", img: "../../im/p2.jpg", price: "44,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Modèle pratique pour un usage quotidien", img: "../../im/p3.jpg", price: "54,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Design moderne et raffiné", img: "../../im/p4.jpg", price: "94,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Petit format facile à transporter", img: "../../im/p5.jpg", price: "40,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Accessoire indispensable pour vos sorties", img: "../../im/p1.jpg", price: "34,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Porte-monnaie léger et fonctionnel", img: "../../im/p1.jpg", price: "24,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Style chic avec finition de qualité", img: "../../im/p3.jpg", price: "45,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Modèle simple et pratique", img: "../../im/p4.jpg", price: "48,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Porte-monnaie avec fermeture sécurisée", img: "../../im/p3.jpg", price: "60,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Idéal pour ranger pièces et billets", img: "../../im/p2.jpg", price: "55,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
      { name: "Porte-monnaie tendance et durable", img: "../../im/p1.jpg", price: "34,90 €", sizes: ["Unique"], colors: ["#000000", "#8B4513", "#191970"] },
    ]
  },
  "Boots": {
    title: "𝓝𝓸𝓼 𝓫𝓸𝓸𝓽𝓼 𝓬𝓸𝓾𝓹 𝓭𝓮 𝓬œ𝓾𝓻",
    products: [
      { name: "Boots Classiques Noires", img: "../../im/bo1.jpg", price: "69,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Boots modernes avec design élégant", img: "../../im/bo2.jpg", price: "74,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Boots pratiques et résistantes", img: "../../im/bo3.jpg", price: "79,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "37" },
      { name: "Style moderne et audacieux", img: "../../im/bo4.jpg", price: "89,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Boots faciles à porter au quotidien", img: "../../im/bo5.jpg", price: "72,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Boots Confortables Matelassées", img: "../../im/bo2.jpg", price: "84,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Modèle simple et sophistiqué", img: "../../im/bo1.jpg", price: "77,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Boots avec touche de caractère", img: "../../im/bo5.jpg", price: "82,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "37" },
      { name: "Confort et style réunis", img: "../../im/bo4.jpg", price: "79,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Modèle stylé pour un look affirmé", img: "../../im/bo3.jpg", price: "94,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Boots avec finition soignée", img: "../../im/bo2.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Boots chic pour toutes vos sorties", img: "../../im/bo1.jpg", price: "71,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" }
    ]
  },
  "Mules": {
    title: "𝓓𝓮𝓼 𝓶𝓾𝓵𝓮𝓼 𝓹𝓸𝓾𝓻 𝓼𝓾𝓫𝓵𝓲𝓶𝓮𝓻 𝓿𝓸𝓽𝓻𝓮 𝓼𝓽𝔂𝓵𝓮",
    products: [
      { name: "Mule tendance et confortable", img: "../../im/mu1.jpg", price: "69,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Mules Beiges Élégantes", img: "../../im/mu2.jpg", price: "74,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Mules Roses Poudrées", img: "../../im/mu3.jpg", price: "79,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "37" },
      { name: "Mules Cuir Verni Rouge", img: "../../im/mu4.jpg", price: "89,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Mules Nœud Décoratif", img: "../../im/mu5.jpg", price: "72,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Mules Confortables Matelassées", img: "../../im/mu2.jpg", price: "84,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Mule chic pour toutes vos sorties", img: "../../im/mu1.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Mule légère avec finition soignée", img: "../../im/mu5.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Mule pratique et confortable", img: "../../im/mu4.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Modèle élégant avec plusieurs couleurs disponibles", img: "../../im/mu3.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Élégance et confort réunis", img: "../../im/mu2.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Mule en cuir avec détails élégants", img: "../../im/mu1.jpg", price: "71,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
    ]
  },
  "Escarpins": {
    title: "𝓝𝓸𝓽𝓻𝓮 𝓰𝓪𝓶𝓶𝓮 𝓭'𝓮𝓼𝓬𝓪𝓻𝓹𝓲𝓷𝓼 𝓼𝓽𝔂𝓵é𝓼",
    products: [
      { name: "Escarpin élégant et confortable", img: "../../im/e1.jpg", price: "69,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Escarpin chic pour toutes vos occasions", img: "../../im/e2.jpg", price: "74,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Escarpin moderne avec design raffiné", img: "../../im/e3.jpg", price: "79,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "37" },
      { name: "Modèle féminin et sophistiqué", img: "../../im/e4.jpg", price: "89,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Le choix parfait pour un look élégant", img: "../../im/e5.jpg", price: "72,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Escarpin avec finition de qualité", img: "../../im/e2.jpg", price: "84,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Design glamour et tendance", img: "../../im/e3.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Escarpin avec talon confortable", img: "../../im/e1.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Escarpin idéal pour vos soirées", img: "../../im/e4.jpg", price: "120,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Style classique et intemporel", img: "../../im/e3.jpg", price: "78,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Escarpin avec touche de luxe", img: "../../im/e2.jpg", price: "97,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Escarpin parfait pour un look professionnel", img: "../../im/e1.jpg", price: "91,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
    ]
  },
  "Mocassins": {
    title: "𝓓𝓮𝓼 𝓶𝓸𝓬𝓪𝓼𝓼𝓲𝓷𝓼 𝓹𝓸𝓾𝓻 𝓼𝓾𝓫𝓵𝓲𝓶𝓮𝓻 𝓿𝓸𝓽𝓻𝓮 𝓪𝓵𝓵𝓾𝓻𝓮",
    products: [
      { name: "Mocassin idéal pour toutes les saisons", img: "../../im/m1.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Mocassins avec touche de luxe", img: "../../im/m2.jpg", price: "74,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Mocassin avec semelle confortable", img: "../../im/m3.jpg", price: "79,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "37" },
      { name: "MocassinsCuir Verni Rouge", img: "../../im/m4.jpg", price: "89,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Mocassins Nœud Décoratif", img: "../../im/m5.jpg", price: "72,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Mocassins Confortables Matelassées", img: "../../im/m3jpg", price: "84,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Mocassins Plates Confort Ultime", img: "../../im/m2.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Mocassin facile à porter au quotidien", img: "../../im/m5.jpg", price: "77,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Modèle stylé avec plusieurs couleurs disponible", img: "../../im/m4.jpg", price: "98,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Mocassin avec semelle confortable", img: "../../im/m3.jpg", price: "130,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Style décontracté et chic", img: "../../im/m2.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Mocassin moderne avec design raffiné", img: "../../im/m1.jpg", price: "71,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
    ]
  },
  "Sandales": {
    title: "𝓓𝓮𝓼 𝓼𝓪𝓷𝓭𝓪𝓵𝓮𝓼 𝓹𝓸𝓾𝓻 𝓾𝓷 é𝓽é 𝓹𝓪𝓻𝓯𝓪𝓲𝓽",
    products: [
      { name: "Sandale chic pour toutes vos sorties", img: "../../im/s1.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Sandale légère idéale pour l'été", img: "../../im/s2.jpg", price: "74,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Sandale facile à porter au quotidien", img: "../../im/s3.jpg", price: "79,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "37" },
      { name: "Le choix parfait pour un look estival", img: "../../im/s4.jpg", price: "89,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Sandale avec finition soignée", img: "../../im/s5.jpg", price: "72,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Design raffiné et féminin", img: "../../im/s2.jpg", price: "84,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "sandale Plates Confort Ultime", img: "../../im/s1.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Style décontracté et moderne", img: "../../im/s2.jpg", price: "88,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Sandale avec touche de fraîcheure", img: "../../im/s4.jpg", price: "100,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "sandale Classiques Noires", img: "../../im/s3.jpg", price: "69,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "sandale Beiges Élégantes", img: "../../im/s2.jpg", price: "105,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "sandale Roses Poudrées", img: "../../im/s1.jpg", price: "79,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "37" },
    ]
  },
  "Baskets": {
    title: "𝓤𝓷𝓮 𝓼é𝓵𝓮𝓬𝓽𝓲𝓸𝓷 𝓶𝓸𝓭𝓮𝓻𝓷𝓮 𝓮𝓽 𝓭𝔂𝓷𝓪𝓶𝓲𝓺𝓾𝓮",
    products: [
      { name: "Baskets modernes et confortables", img: "../../im/ba1.jpg", price: "169,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Modèle tendance pour un usage quotidien", img: "../../im/ba2.jpg", price: "174,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Sneakers légères et pratiques", img: "../../im/ba3.jpg", price: "279,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "37" },
      { name: "Design sportif et élégant", img: "../../im/ba4.jpg", price: "189,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Idéales pour le sport et les sorties", img: "../../im/ba5.jpg", price: "172,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Idéales pour le sport et les sorties", img: "../../im/ba2.jpg", price: "184,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Look casual et moderne", img: "../../im/ba1.jpg", price: "167,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Baskets avec semelle confortable", img: "../../im/ba1.jpg", price: "167,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Style dynamique avec finition de qualité", img: "../../im/ba3.jpg", price: "167,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Baskets avec bon maintien du pied", img: "../../im/ba2.jpg", price: "167,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Confort et style réunis", img: "../../im/ba3.jpg", price: "177,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Chaussures parfaites pour un style urbain", img: "../../im/ba1.jpg", price: "171,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
    ]
  },
  "Ballerinnes": {
    title: "𝓑𝓪𝓵𝓮𝓻𝓲𝓷𝓮𝓼 é𝓵é𝓰𝓪𝓷𝓽𝓮𝓼 𝓮𝓽 𝓬𝓸𝓷𝓯𝓸𝓻𝓽𝓪𝓫𝓵𝓮𝓼",
    products: [
      { name: "Balerines élégantes et confortables", img: "../../im/b1.jpg", price: "69,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Modèle chic pour un usage quotidien", img: "../../im/b2.jpg", price: "74,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Design moderne et féminin", img: "../../im/b3.jpg", price: "79,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "37" },
      { name: "Chaussures plates faciles à porter", img: "../../im/b4.jpg", price: "89,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Idéales pour toutes les occasions", img: "../../im/b5.jpg", price: "72,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "39" },
      { name: "Style raffiné avec finition de qualité", img: "../../im/b1.jpg", price: "84,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Balerines légères et pratiques", img: "../../im/b2.jpg", price: "67,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Look simple et élégant", img: "../../im/b5.jpg", price: "97,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Modèle tendance et confortable", img: "../../im/b4.jpg", price: "108,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Chaussures parfaites pour un style casual chic", img: "../../im/b3.jpg", price: "139,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Balerines avec semelle confortable", img: "../../im/b2.jpg", price: "189,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
      { name: "Élégance et confort réunis", img: "../../im/b1.jpg", price: "97,90 €", sizes: ["36","37","38","39","40","41"], colors: ["#000000","#8B4513","#191970"], defaultSize: "38" },
    ]
  }
};

// ==================== FONCTIONS PRINCIPALES ====================

function selectCategory(category) {
  document.getElementById('categoryTriggerText').textContent = category;
  const trigger = document.getElementById('categoryTrigger');
  const menu = document.getElementById('categoryMenu');
  trigger.classList.remove('open');
  trigger.setAttribute('aria-expanded', 'false');
  menu.classList.remove('show');
  showCategory(category);
}

function showCategory(category) {
  const catData = categoriesData[category];
  if (!catData) {
    console.error("Catégorie non trouvée :", category);
    return;
  }

  const grid = document.getElementById('productsGrid');
  const titleEl = document.getElementById('selectedCategoryTitle');

  titleEl.textContent = catData.title.toUpperCase();
  grid.innerHTML = '';

  const shoeCategories = ['Ballerines', 'Mules', 'Escarpins', 'Mocassins', 'Sandales', 'Baskets', 'Boots'];

  catData.products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const isBag = product.sizes && product.sizes.length === 1 && product.sizes[0] === 'Unique';
    const isShoe = shoeCategories.includes(category);
    const isNew = category === 'Nouveauté';
    const isMocassin = category === 'Mocassins';

    let priceHTML = `<p class="price">${convertPrice(product.price)}</p>`;

    if (isMocassin) {
      const priceNum = parseFloat(product.price.replace(/[^0-9.,]/g, '').replace(',', '.'));
      const discounted = priceNum * 0.8;
      const discountedStr = currentCurrency === 'DZD'
        ? Math.round(discounted * EUR_TO_DZD).toLocaleString('fr-FR') + ' DA'
        : discounted.toFixed(2).replace('.', ',') + ' €';
      priceHTML = `
        <div class="price-container">
          <p class="price-discounted">${discountedStr}</p>
          <p class="price-original">${convertPrice(product.price)}</p>
        </div>`;
    }

    if (isBag) {
      card.innerHTML = `
        <div class="product-image-wrapper">
          <img src="${product.img}" alt="${product.name}"
            onerror="this.onerror=null; this.src='https://via.placeholder.com/300x360?text=Image+Non+Disponible';">
          <button class="favorite-btn" onclick="toggleFavorite(this)">♡</button>
          ${isNew ? '<div class="badge-new">✨ Nouveau</div>' : ''}
        </div>
        <div class="product-info">
          <h4>${product.name}</h4>
          ${priceHTML}
          <div class="details">
            <strong>Couleurs :</strong>
            <div class="colors-box">
              ${product.colors.map((color, i) => `
                <div class="color-dot ${i===0 ? 'selected' : ''}" data-color="${color}"
                     style="background-color: ${color};"></div>`).join('')}
            </div>
          </div>
          <div class="bottom-row">
            <div class="quantity">
              <button onclick="changeQuantity(this, -1)">−</button>
              <span>1</span>
              <button onclick="changeQuantity(this, 1)">+</button>
            </div>
            <button class="cart-emoji-btn" onclick="addToCartBag(${index}, '${category}')">🛒</button>
          </div>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="product-image-wrapper">
          <img src="${product.img}" alt="${product.name}"
            onerror="this.onerror=null; this.src='https://via.placeholder.com/300x360?text=Image+Non+Disponible';">
          ${isNew ? '<div class="badge-new">✨ Nouveau</div>' : ''}
          ${isMocassin ? '<div class="badge-discount">-20%</div>' : ''}
        </div>
        <div class="product-info">
          <h4>${product.name}</h4>
          ${priceHTML}
          ${isShoe ? `
          <div class="details">
            <strong>Pointure :</strong>
            <div class="sizes" style="display:flex; gap:6px; margin-top:8px; flex-wrap:wrap;">
              ${product.sizes.map(size => `
                <button class="size-btn" data-size="${size}">${size}</button>
              `).join('')}
            </div>
          </div>` : ''}
          <div class="details">
            <strong>Couleurs :</strong>
            <div class="colors-box">
              ${product.colors.map((color, i) => `
                <div class="color-dot ${i===0 ? 'selected' : ''}" data-color="${color}"
                     style="background-color: ${color};"></div>`).join('')}
            </div>
          </div>
          <div class="bottom-row">
            <div class="quantity">
              <button onclick="changeQuantity(this, -1)">−</button>
              <span>1</span>
              <button onclick="changeQuantity(this, 1)">+</button>
            </div>
            <button class="cart-emoji-btn" onclick="addToCart(${index}, '${category}')">🛒</button>
          </div>
        </div>
      `;
    }

    grid.appendChild(card);

    setTimeout(() => {
      card.querySelectorAll('.color-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          card.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
          dot.classList.add('selected');
          dot.style.border = '3px solid #e91e63';
          dot.style.transform = 'scale(1.15)';
          showColorToast(dot.getAttribute('data-color'));
        });
      });

      const sizeBtns = card.querySelectorAll('.size-btn');
      sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          sizeBtns.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
        });
      });
    }, 10);
  });

  loadFavorites();
}

window.changeQuantity = function(btn, change) {
  const span = btn.parentElement.querySelector('span');
  let qty = parseInt(span.textContent) || 1;
  qty = Math.max(1, Math.min(10, qty + change));
  span.textContent = qty;
};

window.toggleFavorite = function(btn) {
  btn.classList.toggle('active');
  btn.textContent = btn.classList.contains('active') ? '♥' : '♡';

  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const card = btn.closest('.product-card');
  const productName = card.querySelector('h4').textContent;
  const productPriceEl = card.querySelector('.price, .price-discounted');
  const productPrice = productPriceEl ? productPriceEl.textContent : '';
  const productImg = card.querySelector('img').src;

  if (btn.classList.contains('active')) {
    favorites.push({ name: productName, price: productPrice, img: productImg, addedAt: new Date().toLocaleString() });
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`✅ Ajouté aux favoris !\n${productName}`);
  } else {
    favorites = favorites.filter(f => f.name !== productName);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`❌ Retiré des favoris`);
  }
};

// ✅ AJOUT AU PANIER - SAC (taille unique)
window.addToCartBag = function(productIndex, category) {
  const product = categoriesData[category].products[productIndex];
  const card = event.currentTarget.closest('.product-card');

  const selectedColorDot = card.querySelector('.color-dot.selected') || card.querySelector('.color-dot');
  const colorHex = selectedColorDot ? selectedColorDot.getAttribute('data-color') : product.colors[0];
  const colorName = getColorName(colorHex);
  const qty = parseInt(card.querySelector('.quantity span').textContent) || 1;

  // ✅ Toujours stocker le prix en EUR
  const priceNum = parseFloat(product.price.replace(/[^0-9.,]/g, '').replace(',', '.'));

  // ✅ Message selon la devise active
  const totalAffiche = currentCurrency === 'DZD'
    ? Math.round(priceNum * qty * EUR_TO_DZD).toLocaleString('fr-FR') + ' DA'
    : (priceNum * qty).toFixed(2).replace('.', ',') + ' €';

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({
    name: product.name,
    priceEUR: priceNum,                                      // ✅ pour conversion dans panier.js
    price: priceNum.toFixed(2).replace('.', ',') + ' €',    // toujours en EUR
    img: product.img,
    color: colorName,
    quantity: qty,
    category: category,
    addedAt: new Date().toLocaleString()
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();

  alert(`✅ Ajouté au panier !\n\n${qty} × ${product.name}\nCouleur : ${colorName}\nTotal : ${totalAffiche}`);
};

// ✅ AJOUT AU PANIER - CHAUSSURES (avec pointure)
window.addToCart = function(productIndex, category) {
  const product = categoriesData[category].products[productIndex];
  const card = event.currentTarget.closest('.product-card');

  const selectedSizeBtn = card.querySelector('.size-btn.selected') || card.querySelector('.size-btn');
  const selectedColorDot = card.querySelector('.color-dot.selected') || card.querySelector('.color-dot');

  const selectedSize = selectedSizeBtn ? selectedSizeBtn.getAttribute('data-size') : product.defaultSize || "39";
  const colorHex = selectedColorDot ? selectedColorDot.getAttribute('data-color') : product.colors[0];
  const colorName = getColorName(colorHex);
  const qty = parseInt(card.querySelector('.quantity span').textContent) || 1;

  const priceNum = parseFloat(product.price.replace(/[^0-9.,]/g, '').replace(',', '.'));
  const isMocassin = category === 'Mocassins';
  const finalPriceEUR = isMocassin ? priceNum * 0.8 : priceNum;

  // ✅ Message selon la devise active
  const totalAffiche = currentCurrency === 'DZD'
    ? Math.round(finalPriceEUR * qty * EUR_TO_DZD).toLocaleString('fr-FR') + ' DA'
    : (finalPriceEUR * qty).toFixed(2).replace('.', ',') + ' €';

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({
    name: product.name,
    priceEUR: finalPriceEUR,                                          // ✅ pour conversion dans panier.js
    price: finalPriceEUR.toFixed(2).replace('.', ',') + ' €',        // toujours en EUR
    img: product.img,
    size: selectedSize,
    color: colorName,
    quantity: qty,
    category: category,
    addedAt: new Date().toLocaleString()
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();

  alert(`✅ Ajouté au panier !\n\n${qty} × ${product.name}\nPointure : ${selectedSize}\nCouleur : ${colorName}\nTotal : ${totalAffiche}`);
};

window.updateCartCount = function() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartBadge = document.getElementById('cart-badge');
  if (cartBadge) {
    const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartBadge.textContent = total;
  }
};

window.goToFavoris = function() {
  window.location.href = '../favoris/';
};

window.loadFavorites = function() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const favoriteNames = favorites.map(f => f.name);

  document.querySelectorAll('.favorite-btn').forEach(btn => {
    const name = btn.closest('.product-card').querySelector('h4').textContent;
    if (favoriteNames.includes(name)) {
      btn.classList.add('active');
      btn.textContent = '♥';
    } else {
      btn.classList.remove('active');
      btn.textContent = '♡';
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  // ✅ Appliquer la devise sauvegardée au chargement
  const savedCurrency = localStorage.getItem('currency') || 'EUR';
  currentCurrency = savedCurrency;
  if (document.getElementById('btnEuro')) {
    document.getElementById('btnEuro').classList.toggle('active', savedCurrency === 'EUR');
    document.getElementById('btnDinar').classList.toggle('active', savedCurrency === 'DZD');
  }

  showCategory("Nouveauté");
  updateCartCount();

  const trigger = document.getElementById('categoryTrigger');
  const menu = document.getElementById('categoryMenu');

  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.classList.toggle('open');
    this.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('show');
  });

  document.addEventListener('click', function(e) {
    if (!document.getElementById('categoryDropdown').contains(e.target)) {
      trigger.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
      menu.classList.remove('show');
    }
  });
});