import { getNode } from '../../lib/index.js';

// '로그아웃' 버튼 기능 구현
export function handlerSignOut(removeKey){
  window.localStorage.removeItem(removeKey)
  getNode('.signOut').className = 'signIn';
}