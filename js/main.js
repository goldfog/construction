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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          touchMove: true,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

$('.reviews__items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 910,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        PrevArrows: "",
        NextArrows: "",
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
});
