import { getNode, getRandom } from "../../lib/index.js";
import { handlerSignIn } from '../sign/sign.js';
// - 회원가입을 통해 사용자(user)를 생성하고 관리합니다.
//     - 랜덤 한 문자값 (10자 이상) 을 생성 후 사용자의 Unique ID 값으로 넣어주세요.
//     - 해당 유저의 Unique ID를 확인 후 로그인합니다.
//     - 응답받은 Unique ID는 `localStorage`에 저장해주세요
//     - 다음 번에 로그인 시 Unique ID가 존재한다면 루트 경로로 리디렉션 시켜주세요
//     - 어떤 경우든 Unique ID가 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리디렉션 시켜주세요
//     - 로그아웃은 클라이언트 단에서 `localStorage`에 저장된 Unique ID를 삭제하는 방식으로 구현합니다.

const loginButton = getNode('.login--button');
loginButton.addEventListener('click', handlerSignIn);




// 혜빈님 코드
// const registerButton = getNode(".register--button");
// const userInput = getNode(".login--input");

//* storage function ----------------------------------------------------------
/* 
const {
  localStorage: storage,
  JSON: { stringify: serialize, parse: deserialize },
} = globalThis;

const setStorage = (key, value) => {
  if (typeof key === "string") {
    storage.setItem(key, serialize(value));
  }
};

const getStorage = (key) => {
  if (typeof key === "string") {
    return deserialize(storage.getItem(key));
  }
};

const clearStorage = (key) => {
  if (!key) {
    storage.clear();
  } else {
    storage.removeItem(key);
  }
};
 */
//* EventListener ----------------------------------------------------------
/* 
loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("http://localhost:3000/users", { method: "GET" })
    .then((response) => response.json())
    .then((userData) => {
      userData.map((user) => {
        let userIdValue = getNode(".login-id").value;
        let userPwValue = getNode(".login-pw").value;

        if (user.userId === userIdValue && user.userPw === userPwValue) {
          let arr = [];
          // 랜덤 한 문자값 (10자 이상) 을 생성 후 사용자의 Unique ID 값 .
          const uniqueId = user.uniqId + getRandom(10000);
          arr.push(uniqueId);

          // 해당 유저의 Unique ID를 확인 후 로그인
          setStorage("Unique ID", JSON.stringify(arr));

          alert("로그인 되었습니다.");

          // 로그인 완료시 홈으로 돌아가기
          location.assign("index.html");
        }

        if (
          !getStorage("Unique ID") ||
          (user.userId !== userIdValue && user.userPw !== userPwValue)
        ) {
          alert("아이디 또는 비밀번호를 입력해 주세요.");
        }
      });
    });
});
 */


