import { getNode } from "../../lib/index.js";
import { handlerSignOut } from "./feature-main.js";

export function handlerSetText(){
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
}