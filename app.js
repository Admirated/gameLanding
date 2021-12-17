import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

window.addEventListener('DOMContentLoaded', () => {
   //menu
   const burger = document.querySelector('.menu__icon'),
      menu = document.querySelector('.header__navigation'),
      navItems = menu.querySelectorAll('.navigation-item');

   burger.addEventListener('click', () => {
      menu.classList.toggle('_active');
      burger.classList.toggle('_active');
   })

   navItems.forEach(nav => {
      nav.addEventListener('click', setActiveLink);
   })

   function setActiveLink(e) {
      document.querySelector('.navigation-item._active').classList.remove('_active');
      this.classList.add('_active');
   }

   const swiper = new Swiper('.card-slider', {
      loop: true,
      pagination: {
         el: '.swiper-pagination',
         dynamicBullets: true,
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      centeredSlides: true
   });
})