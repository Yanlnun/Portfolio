$(function(){

//   $(window).load(function() {
//     $('#load').hide();
// });
  
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
  
 
  var pfgal = new Swiper(".pf_gal", {
    slidesPerView:4,
    spaceBetween:0,
    loop:true,
    allowTouchMove:false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  });
  
  // swiper2.controller.control = swiper3;
  // swiper3.controller.control = swiper2;

 
  $('.pf_img').mouseenter(function(){
    $(this).find('.img_link').addClass('link_on');
  });
  $('.pf_img').mouseleave(function(){
    
    $(this).find('.img_link').removeClass('link_on');
  });

 
  
})