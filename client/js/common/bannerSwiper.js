
const data = [
  {
    "id": 1,
    "src": "banner01.jpg",
    "alt": "앵콜 특가 9,900 원. 접시에 담긴 멜론"
  },
  {
    "id": 2,
    "src": "banner02.jpg",
    "alt": "이달의 카드 혜택 최대 10% 카드 쿠폰 받기"
  },
  {
    "id": 3,
    "src": "banner03.jpg",
    "alt": "kurly purple week 적립률UP + 3종 쿠폰팩"
  },
  {
    "id": 4,
    "src": "banner05.jpg",
    "alt": "이 주의 특가 한 눈에 보기"
  }
]

const swiper = new Swiper('.swiper',{
  autoplay:true,
  loop:true,
  speed: 200,
  parallax:true,
  pagination:{
    el:'.pagination',
    type:'fraction',
    clickable:true,
    renderBullet: function (index,className){
      return /* html */ `
        <span class="${className}">
          <img src="./assets/banner/${data[index].src}" alt="${data[index].alt}" />
        </span>
      `
    }
  }

})