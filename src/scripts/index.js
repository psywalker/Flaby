import '../styles/index.scss';

const navBtn = document.getElementById('nav-btn');
navBtn.addEventListener('click', function(){
    this.classList.toggle('nav-btn_type_close');
});

window.addEventListener('resize', function(){
    navBtn.classList.remove('nav-btn_type_close');
});