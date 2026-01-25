const swiper = new Swiper('.swiper', {
  loop: true, // Бесконечный цикл
  slidesPerView: 1, // Кол-во слайдов в области видимости
  spaceBetween: 20, // Расстояние между слайдами (px)

  pagination: { // точки
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: { // стрелки навигации
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    enabled: true
  },
 
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});