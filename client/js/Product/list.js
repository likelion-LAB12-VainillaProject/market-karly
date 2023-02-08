import { getNode } from "../../lib/index.js";
import { handlerSignOut } from "../sign/index.js";

// 버튼색깔바뀌는 기능
let tab = document.querySelectorAll(".tab-btn");
let click = true;

function handleClick(element) {
  let btnTarget = element.currentTarget;
  let checkIcon = btnTarget.querySelector(".tab-btn-check");
  let iconImg = btnTarget.querySelector(".tab-icon");

  if (btnTarget.click) {
    checkIcon.setAttribute("src", "./assets/mainImg/checked.svg");
  } else {
    checkIcon.setAttribute("src", "./assets/mainImg/Group.svg");
  }
  btnTarget.click = !btnTarget.click;
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", handleClick);
}

// 상단 스와이퍼 기능
window.addEventListener("load", async () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 18,
    speed: 400,
    navigation: {
      nextEl: ".nextBtn",
      prevEl: ".swiper-button-prev",
    },
  });

  // 추천순,신상품순 클릭시 글자색 변경하는 기능
  document.getElementById("nextbtn").addEventListener("click", () => {
    swiper.slideNext();
  });

  let div2 = document.getElementsByClassName("div2");

  function handleClick(event) {
    console.log(event.target);
    console.log(event.target.classList);

    if (event.target.classList[1] === "clicked") {
      event.target.classList.remove("clicked");
    } else {
      for (let i = 0; i < div2.length; i++) {
        div2[i].classList.remove("clicked");
      }

      event.target.classList.add("clicked");
    }
  }

  function init() {
    for (let i = 0; i < div2.length; i++) {
      div2[i].addEventListener("click", handleClick);
    }
  }

  init();

  // 수량 및 가격변경 기능구현
  const quantityNumber = getNode(".quantity-number");
  const price = getNode(".quantity-price");
  const sum = getNode(".sum");
  getNode(".minusbtn").addEventListener("click", () => {
    const value = Number(quantityNumber.textContent);
    const priceValue = Number(
      price.textContent.replaceAll("원", "").replaceAll(",", "")
    );
    if (value > 1) {
      quantityNumber.textContent = value - 1;
      sum.textContent = (priceValue * (value - 1)).toLocaleString() + "원";
    }
  });

  getNode(".plusbtn").addEventListener("click", () => {
    const value = Number(quantityNumber.textContent);
    const priceValue = Number(
      price.textContent.replaceAll("원", "").replaceAll(",", "")
    );
    quantityNumber.textContent = value + 1;
    sum.textContent = (priceValue * (value + 1)).toLocaleString() + "원";
  });
});

// 장바구니 모양 누르면 팝업창
let target = document.querySelectorAll(".img-button");
let btnPopClose = document.querySelectorAll(".addbtn .cancel, .addbtn .purple");
let targetID;

// 팝업 열기
for (let i = 0; i < target.length; i++) {
  target[i].addEventListener("click", function () {
    targetID = this.getAttribute("href");
    getNode(targetID).style.display = "block";
  });
}
/* 
// 팝업 닫기
for (let j = 0; j < target.length; j++) {
  btnPopClose[j].addEventListener("click", function () {
    this.parentNode.parentNode.parentNode.parentNode.style.display = "none";
  });
}
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