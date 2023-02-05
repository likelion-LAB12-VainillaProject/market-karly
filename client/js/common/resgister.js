// 전체 동의버튼 누르면 밑에 버튼들이 다 선택되는 로직
import { getNode } from "./../../lib/index.js";

const checkAgreeAll = getNode("input[name=agreeAll]");

checkAgreeAll.addEventListener("change", (e) => {
  let checkAgree = document.querySelectorAll("input[name = agree]");
  for (let i = 0; i < checkAgree.length; i++) {
    checkAgree[i].checked = e.target.checked;
  }
});
