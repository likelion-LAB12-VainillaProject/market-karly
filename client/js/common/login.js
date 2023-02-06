import { getNode } from "../../lib/index.js";

const form = getNode("#form");

const signUp = (e) => {
  e.preventDefault();

  const idValue = document.getElementById("userId").value;
  const passwordValue = document.getElementById("userPw").value;
  const emailValue = document.getElementById("email").value;

  // let formData = {
  //   id: id,
  //   password: password,
  //   email: email,
  // };

  const formData = [
    { id: "hyebeen2658", password: 2345 },
    { id: "copicat01234", password: 5678 },
    { id: "calco1234", password: 1357 },
    { id: "bowha1234", password: 2468 },
    { id: "jinhe1234", password: 1029 },
  ];

  localStorage.setItem("formData", JSON.stringify(formData));
  console.log(localStorage.getItem("formData"));
  console.log("user added");
};

const formData = [
  { id: "hyebeen2658", password: 2345 },
  { id: "copicat01234", password: 5678 },
  { id: "calco1234", password: 1357 },
  { id: "bowha1234", password: 2468 },
  { id: "jinhe1234", password: 1029 },
];

formData.map((i) => {

  if () {
    
  }

  console.log(i.id);
});


// * 이벤트 리스너 ----------------------------------------------------------------
form.addEventListener("submit", signUp);
