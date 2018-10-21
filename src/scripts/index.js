import '../styles/index.scss';
import $ from "jquery";
require("slick-carousel");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");

const navBtn = document.getElementById('nav-btn');
navBtn.addEventListener('click', function(){
    this.classList.toggle('nav-btn_type_close');
});

window.addEventListener('resize', function(){
    navBtn.classList.remove('nav-btn_type_close');
});

$('#nav-btn').click(function() {
    console.log('clicked');
  });
  $(document).ready(function(){
    $('.about-slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        variableWidth: true,
        arrows: true,
        infinite: true,
        draggable: true,
        nextArrow: document.querySelector('.about-slider-next'),
        prevArrow: document.querySelector('.about-slider-prev')
      });
  });
