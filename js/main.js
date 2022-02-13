const swiper = new Swiper('.main-slider', {
  slidesPerView: 1,
  spaceBetween: 28.43,
  loop: true,

  breakpoints: {
    376: {
      slidesPerView: 2,
    }
  },

  navigation: {
    nextEl: '.main-slider__arrow',
  },
});
