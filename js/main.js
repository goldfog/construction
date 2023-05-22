const burger = document.querySelector(".menu__burger");
const menu = document.querySelector(".header__nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});


$(document).ready(function(){
  $('.production__item').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    touchMove: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});