var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".cortina", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var ul = document.querySelector('ul');
var menuBtn = document.querySelector('.menu-btn i');



function menuShow() {
 if(ul.classList.contains('open')){
   ul.classList.remove('open')
   document.querySelector('main') .style.opacity = '1'
   document.querySelector('main').style.display ='block'
   document.querySelector('footer') .style.opacity = '1';
  
 }else{
   ul.classList.add('open');
   document.querySelector('main').style.opacity = '0'
   document.querySelector('main').style.display =' none' 
   document.querySelector('footer') .style.opacity = '0'    
 }
};

function blog(){
window.alert('Pagina não Finalizada')
};

AOS.init({
  duration:1000,
  once: true,
})