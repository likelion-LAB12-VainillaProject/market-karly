import { getNode } from '../../lib/index.js';

// 로그인 페이지 기능 구현
export function handlerSignIn(){
  const inId = getNode('.login-id').value;
  const inPw = getNode('.login-pw').value;

  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i)
    const userObj = JSON.parse(localStorage.getItem(key))

    if (inId === userObj.userId){
      if (inPw === userObj.userPw){
        alert('로그인 성공!');
        userObj.check = 'true';
        localStorage.setItem(key, JSON.stringify(userObj))
        location.href = 'index.html';
      }else {
        alert('비밀번호를 확인해주세요.')
      }

    }else {
      alert('아이디를 확인해주세요.')
    }
  }
}