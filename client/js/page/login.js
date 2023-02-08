import { getNode, getRandom } from "../../lib/index.js";
import { handlerSignIn } from "../sign/index.js";

const loginButton = getNode(".login--button");
loginButton.addEventListener("click", handlerSignIn);

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
          setStorage("Unique ID", serialize(value));

          alert("로그인 되었습니다.");

          // 로그인 완료시 홈으로 돌아가기
          location.href = "index.html";
        }

        // 해당 유저의 Unique ID가 없다면, user data값이랑 같지않다면 경고창 띄우기
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
