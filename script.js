// Configuration de fullPage.js
let myFullpage = new fullpage('#fullpage', {
  // Configuration de base
  autoScrolling: true,
  scrollHorizontally: true,
  loopBottom: true,
  menu: '#menu',
  anchors: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
  
  // Optimisations mobiles
  touchSensitivity: 15,
  normalScrollElementTouchThreshold: 5,
  
  // Callbacks
  afterLoad: function(origin, destination, direction) {
    // Activer le défilement après le premier chargement
    fullpage_api.setAllowScrolling(true);
  },
  
  // Configuration responsive
  responsiveWidth: 800,
  responsiveHeight: 600
});

// Gestionnaire de chargement initial
document.addEventListener('DOMContentLoaded', function() {
  // Force une mise à jour du défilement
  setTimeout(() => {
    fullpage_api.reBuild();
  }, 300);
});

// Optimisation tactile pour mobile
document.addEventListener('touchstart', function() {
  fullpage_api.setAllowScrolling(true);
}, { once: true });

// color for pages in fullPage.js
document.querySelectorAll('.section').forEach(section => {
  section.style.background = 'radial-gradient(rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%)';
});

//for the menu transition in the mobile vue
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');

menuButton.addEventListener('click', () => {
  if (mobileMenu.classList.contains('max-h-0')) { // Opening the menu

    mobileMenu.classList.remove('max-h-0');
    mobileMenu.classList.add('max-h-screen', 'opacity-100');
    menuOpenIcon.classList.add('hidden');
    menuCloseIcon.classList.remove('hidden');

  } else { //closing the menu

    mobileMenu.classList.remove('max-h-screen');
    mobileMenu.classList.add('max-h-0');
    menuOpenIcon.classList.remove('hidden');
    menuCloseIcon.classList.add('hidden');

  }
});


//adding the action to go to top button
$(document).on('click', '#moveTo', function(){
  fullpage_api.moveTo('Home', 1);
});
