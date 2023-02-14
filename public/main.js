'use strict';

const topMenu = document.getElementById('js-top-menu');
const btnToggleTopMenuIcon = document.getElementById('js-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
  if (btnToggleTopMenuIcon.contains(e.target)) {
    topMenu.classList.toggle('hidden');
    topMenu.classList.toggle('ct-topmenu-expanded');
  } else {
    if (topMenu.classList.contains('ct-topmenu-expanded')) {
      topMenu.classList.remove('ct-topmenu-expanded');
      topMenu.classList.add('hidden');
    }
  }
});
