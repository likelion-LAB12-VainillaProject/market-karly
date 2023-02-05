const swiper = new Swiper('.swiper',{
  autoplay:true,
  loop:true,
  speed: 200,
  parallax:true,
  pagination:{
    el:'.pagination',
    type:'fraction',
    clickable:true,
  },
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  }

})