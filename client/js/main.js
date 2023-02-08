import { getNode} from "../lib/dom/index.js";
import { handlerSignOut } from './sign/sign.js';

//상단 스와이퍼 기능




  const mainSwiper = new Swiper('.swiper1', {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 10,
      speed: 400,
      navigation: {
          nextEl: '.nextbtn',
          prevEl: '.prevbtn',
      },
  });


  const mainSwiper2 = new Swiper('.swiper2', {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 10,
      speed: 400,
      navigation: {
          nextEl: '.nextbtn2',
          prevEl: '.prevbtn2',
      },
  });

  // const mainSwiper = new Swiper('.swiper2', {
  //     slidesPerView: 4,
  //     slidesPerGroup: 4,
  //     spaceBetween: 10,
  //     speed: 400,
  //     navigation: {
  //         nextEl: '.products > .swiper-button-next',
  //         prevEl: '.products > .swiper-button-prev',
  //     },
  // });



// window.addEventListener('load', async () => {
//   const mainSwiper = new Swiper('.swiper1', {
//       slidesPerView: 4,
//       slidesPerGroup: 4,
//       spaceBetween: 10,
//       speed: 400,
//       navigation: {
//           nextEl: '.nextBtn',
//           prevEl: '.swiper-button-prev',
//       },
//   });

//   document.getElementById('nextbtn').addEventListener('click', () => {
//   mainSwiper.slideNext();
//   })


  // 수량 및 가격변경 기능구현

  const quantityNumber = document.querySelector('.quantity-number');
  const price = document.querySelector('.quantity-price');
  const sum = document.querySelector('.sum');
  document.querySelector('.minusbtn').addEventListener('click', () => {
      const value = Number(quantityNumber.textContent);
      const priceValue = Number(price.textContent.replaceAll('원', '').replaceAll(',', ''));
      if (value > 1) {
          quantityNumber.textContent = value - 1;
          sum.textContent = (priceValue * (value - 1)).toLocaleString() + '원';
      }
  });

  document.querySelector('.plusbtn').addEventListener('click', () => {
      const value = Number(quantityNumber.textContent);
      const priceValue = Number(price.textContent.replaceAll('원', '').replaceAll(',', ''));
      quantityNumber.textContent = value + 1;
      sum.textContent = (priceValue * (value + 1)).toLocaleString() + '원';
  });







// 장바구니 모양 누르면 팝업창

let target = document.querySelectorAll('.img-button');
// let btnPopClose = document.querySelectorAll('.addbtn .cancel, .addbtn .purple');
let targetID;




// 팝업 열기
for(let i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block';
  });
}
/* 
//팝업 닫기
for(let j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
  });
};
 */


// 로그인 된 상태에서 글자 변경 및 '로그아웃' 버튼 기능 구현
for (let i = 0; i < window.localStorage.length; i++) {
  const key = window.localStorage.key(i)
  const userObj = JSON.parse(localStorage.getItem(key))
  if (userObj.check === 'true'){
    getNode('.register').innerHTML = `${userObj.userId}`;
  
    getNode('.signIn').innerHTML = '<a href="index.html">로그아웃</a>'
    getNode('.signIn').className = 'signOut'
    const signOut = getNode('.signOut')

    signOut.addEventListener('click', () => 
      handlerSignOut(key)
    );
  }
}