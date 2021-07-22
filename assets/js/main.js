window.addEventListener("scroll", function () {
    let header = document.querySelector(".header-container");
    header.classList.toggle("sticky", window.scrollY >= 60);
  });
let topbar = document.querySelector('.top-bar');
let topbar_icon = document.querySelector('.top-bar__icon');
topbar_icon.addEventListener("click", event =>{
    topbar.classList.add('hide')
})

let link_nav = document.querySelectorAll('.header-nav__link')
link_nav.forEach(item=> {
  item.addEventListener("click",(event)=> {
    event.preventDefault()
  })

})
let i = document.querySelector('.menu-btn-mb i')
let menu_mb = document.querySelector('.menu-btn-mb')
let overlay = document.querySelector('.overlay')
menu_mb.addEventListener("click",ev=>{
  document.querySelector('.header-nav').classList.toggle('show')
  overlay.classList.toggle('show')
  if(i.classList.contains('ti-align-left')){
    i.classList.remove('ti-align-left')
    i.classList.add('ti-close')
  }
  else {
    i.classList.remove('ti-close')
    i.classList.add('ti-align-left')
  }
})
overlay.addEventListener("click",ev=>{
  ev.target.classList.toggle('show')
  document.querySelector('.header-nav').classList.toggle('show')
  if(i.classList.contains('ti-align-left')){
    i.classList.remove('ti-align-left')
    i.classList.add('ti-close')
  }
  else {
    i.classList.remove('ti-close')
    i.classList.add('ti-align-left')
  }
})
$(document).ready(function(){
  let owl_1 = $('.featured-owl-carousel')
  let owl_2 = $('.more-owl-carousel')
  let owl_slider = $('.slider-owl')
  owl_slider.owlCarousel({
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
  })
  owl_1.owlCarousel({
      animateOut: 'fadeOut',
      lazyLoad : true,
      loop:false,
      margin: 30,
      dots:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          400:{
              items:2,
              nav:false
          },
          740:{
            items:3,
            nav:false
          },
          1023:{
            items:4,
            nav:false
          },
          1200:{
              items:5,
              nav:false,
              loop:false
          }
      }
  })
  owl_2.owlCarousel({
    animateOut: 'fadeOut',
    lazyLoad : true,
    loop:false,
    margin: 30,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        400:{
          items:2,
          nav:false
        },
        740:{
            items:3,
            nav:false
        },
        900:{
          items:4,
          nav:false
        },
        1200:{
          items:5,
          nav:false
        },
        1400:{
            items:6,
            nav:false,
            loop:false
        }
    }
  })

});

