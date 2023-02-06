import { getNode } from './../lib/dom/getNode.js';

const myPopUp = getNode('.popup')
const buttonClickLeft = getNode('.popup-buttons__left-today--close');
const buttonClickRight = getNode('.popup-buttons__right-close');

// 쿠키 생성
function setCookie(name, value, day){
  let date = new Date();
  date.setDate(date.getDate() + day);

  let mycookie = '';
  mycookie += name + '=' + value + ';';
  mycookie += 'Expires=' + date.toUTCString();

  document.cookie = mycookie;
}

// 쿠키 확인
function checkCookie(name){
  let cookies = document.cookie.split(';');
  let visited = false; // 방문 여부 (거짓)

  for (let i in cookies){
    if(cookies[i].indexOf(name) > -1){
      visited = true;
    }
  }

  if (visited){
    // 재방문
    myPopUp.style.display = 'none';
  } else{
    // 신규방문
    myPopUp.style.display = 'flex';
  }
}

// 왼쪽 버튼 클릭
function handlerButtonLeft(){
  setCookie('karly.com', 'Main', 1);
  myPopUp.style.display = 'none';
}

// 오른쪽 버튼 클릭
function handlerButtonRight(){
  myPopUp.style.display = 'none';
}

checkCookie('karly.com');

buttonClickLeft.addEventListener('click', handlerButtonLeft)
buttonClickRight.addEventListener('click', handlerButtonRight)