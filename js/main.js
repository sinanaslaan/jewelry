// alert ('Bu sayfadaki herşey Sinan Aslan tarafından hazırlanmıştır.')
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "coverflow",
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});