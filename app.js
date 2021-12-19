import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

window.addEventListener('DOMContentLoaded', () => {

   const sections = document.querySelectorAll('section');
   //menu
   const burger = document.querySelector('.menu__icon'),
      menu = document.querySelector('.header__navigation'),
      navItems = document.querySelectorAll('.navigation-item');

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
      const section = this.dataset.section;
      for (const sect of sections) {
         if (sect.dataset.section != section) {
            if (!sect.classList.contains('hide')) {
               sect.classList.toggle('hide');
            }
         } else if (sect.classList.contains('hide')) {
            sect.classList.remove('hide');
            document.querySelector(`.menu li[data-section="${section}"]`).classList.add('_active');
         }
      }
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