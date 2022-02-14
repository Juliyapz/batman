const swiper = new Swiper('.main-slider', {
  spaceBetween: 28.43,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    }
  },


  navigation: {
    nextEl: '.main-slider__arrow',
  },
});

let close = document.querySelector('.header__menu-close');
let burger = document.querySelector('.menu-burger');
let menu = document.querySelector('.header');

burger.addEventListener('click', () => {
  menu.style.display = 'block';
  close.style.display = 'block';
})

close.addEventListener('click', () => {
  menu.style.display = 'none';
  close.style.display = 'none';
})
