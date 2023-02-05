import {
  getNode,
  css,
  insertAfter,
  disableElement,
  enableElement,
} from "../../lib/index.js";

const form = getNode("#form");
const userId = getNode("#userId");
const userPw = getNode("#userPw");
const checkPassword = getNode("#pwCheck");
const userTel = getNode("#tel");
const userEmail = getNode("#email");

//* Text -------------------------------------------------------
const setText = (element, className) => {
  insertAfter(element, `<p class="${className}"></p>`);
};

//* 유효성을 확인 로직 구현 -------------------------------------------------------
// 이메일 검증
const isValidEmail = (asValue) => {
  const regExpEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/g;
  return regExpEmail.test(String(asValue).toLowerCase());
};

// 아이디 검증
const isValidId = (asValue) => {
  const regExpId = /^[a-z]+[a-z0-9]{5,19}$/g;

  return regExpId.test(asValue);
};

//비밀번호 검증
const isValidPw = (asValue) => {
  const regExpPw = /^.*(?=.{8,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/g;

  return regExpPw.test(asValue);
};

// 휴대폰번호 검증
const isValidTel = (asValue) => {
  const regExpTel = /^\d{3}\d{3,4}\d{4}$/g;

  return regExpTel.test(asValue);
};

// * Event Listener --------------------------------------------------------
const input = getNode(".register__input");

setText(userId, "error");
setText(userPw, "password");
setText(userTel, "number");
setText(userEmail, "email");

const error = getNode(".error");
const password = getNode(".password");
const number = getNode(".number");
const email = getNode(".email");

userId.addEventListener("input", (e) => {
  if (!isValidId(e.target.value)) {
    error.textContent =
      "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합해 주세요.";
    css(userId, "border", "1px solid red");
  } else {
    error.textContent = "";
    css(userId, "border", "1px solid blue");
  }
});

userPw.addEventListener("input", (e) => {
  e.preventDefault();
  if (!isValidPw(e.target.value)) {
    password.textContent = "영문, 숫자 혼합하여 8자리 이상 입력해주세요.";
    css(userPw, "border", "1px solid red");
  } else {
    password.textContent = "";
    css(userPw, "border", "1px solid blue");
  }
});

userEmail.addEventListener("input", (e) => {
  e.preventDefault();
  if (!isValidEmail(e.target.value)) {
    email.textContent = "이메일 형식으로 입력해 주세요.";
    css(userEmail, "border", "1px solid red");
  } else {
    email.textContent = "";
    css(userEmail, "border", "1px solid blue");
  }
});

userTel.addEventListener("input", (e) => {
  e.preventDefault();
  if (!isValidTel(e.target.value)) {
    number.textContent = "휴대폰 번호를 입력해 주세요.";
    css(userTel, "border", "1px solid red");
    disableElement(getNode(".disabled__button"));
  } else {
    number.textContent = "";
    css(userTel, "border", "1px solid blue");
    enableElement(getNode(".disabled__button"));
  }
});

//* ---------------------------------------------------------
// signButton.addEventListener("click", (e) => {
//   e.preventDefault();

// });
