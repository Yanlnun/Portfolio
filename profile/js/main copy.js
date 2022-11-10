$(function(){
  
  $(function () {
    $('#fullpage').fullpage({
      //options here
      autoScrolling: true,
      scrollHorizontally: true
    });


  })


  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    autoplay:{
      delay:2000
    },
    loop:true,
    allowTouchMove:false,
    reverseDirection:true
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    
    // allowTouchMove:false,
    scrollbar : {
      el : '.swiper-scrollbar',
      draggable: true,
    },
    slideToClickedSlide:true,
    initialSlide: 1
  });
  var swiper3 = new Swiper(".mySwiper_img", {
    effect: "fade",
    fadeEffect:{
      crossFade:true
    },
    
    allowTouchMove:false,
  });
  
  swiper2.controller.control = swiper3;
  swiper3.controller.control = swiper2;


  // swiper2.controller.control = swiper4;
  // swiper3.controller.control = swiper2;
 
  $('.pf_img').mouseenter(function(){
    $(this).find('.img_link').addClass('link_on');
  });
  $('.pf_img').mouseleave(function(){
    
    $(this).find('.img_link').removeClass('link_on');
  })
  
})