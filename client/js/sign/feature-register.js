import { getNode } from '../../lib/index.js';

// 회원가입 페이지 '가입하기' 버튼 기능 구현
export function handlerSignUp()  {

  const uniqueId = Math.random().toString(36).substring(2,13)
  const userInformation = {
    userId : getNode('#userId').value,
    userPw : getNode('#userPw').value,
    userName : getNode('#name').value,
    userTel : getNode('#tel').value
  }
  window.localStorage.setItem(uniqueId, JSON.stringify(userInformation));

  alert('회원가입이 완료되었습니다.')

  location.href="index.html";
}