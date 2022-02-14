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
});

close.addEventListener('click', () => {
  menu.style.display = 'none';
  close.style.display = 'none';
});

let modalWindow = document.querySelector(".modal");
let buttonModal = document.querySelector(".main__button-play");

buttonModal.addEventListener('click', () => {
  modalWindow.classList.add("activ");
})

modalWindow.addEventListener('click', (e) => {
  const inModal = e.target.closest('.modal__inner');

  if (!inModal) {
    modalWindow.classList.remove("activ");
  }
})
