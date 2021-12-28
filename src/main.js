'use strict';

const disableFocusFor = document.querySelectorAll('[data-focus="disabled"]');
const enableFocusFor = document.querySelectorAll('[data-focus="enabled"]');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('hashchange', () => {
  console.log('here')
  if (window.location.hash === '#menu') {
    document.body.classList.add('overflow-hidden');
    
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0')

    disableFocusFor.forEach(disableFocus);
    enableFocusFor.forEach(enableFocus);
  } else {
    document.body.classList.remove('overflow-hidden');

    mobileMenu.classList.remove('translate-x-0')
    mobileMenu.classList.add('translate-x-full');

    disableFocusFor.forEach(enableFocus);
    enableFocusFor.forEach(disableFocus);
  }
});

function disableFocus(el) {
  el.setAttribute('tabindex', '-1');
}

function enableFocus(el) {
  el.removeAttribute('tabindex');
}


/* slider */

$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
  });
});
