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

   new Swiper('.card-slider', {
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
   new Swiper('.beasts .card-slider', {
      pagination: {
         el: '.beasts .swiper-pagination',
         dynamicBullets: true,
      },
      navigation: {
         nextEl: '.beasts .swiper-button-next',
         prevEl: '.beasts .swiper-button-prev',
      },
      centeredSlides: false,
      breakpoints: {
         992: {
            slidesPerView: 3,
         }
      },
      slidesPerView: 1,
      touchRatio: 0
   });
})