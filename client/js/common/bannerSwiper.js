const bannerSwiper = new Swiper('.banner > .swiper',{
  autoplay:true,
  loop:true,
  speed: 200,
  parallax:true,
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  }

})