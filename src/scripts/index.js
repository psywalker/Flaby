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
    $('.your-class').slick({
        dots: true,
        speed: 500,
        arrows: true,
      });
  });
