import { getNode } from "../../lib/dom/getNode.js";
import { handlerSetText } from "../sign/index.js"

const ckAll1 = getNode(".cart-main-cartlist-radio-frame-checkbox-all--01");
const ckAll2 = getNode(".cart-main-cartlist-radio-frame-checkbox-all--02");
const ckImg1 = getNode(".cart-main-cartlist-radio-frame-label-image--01");
const ckImg2 = getNode(".cart-main-cartlist-radio-frame-label-image--02");

//  이미지 바꿔주는 함수
function setImage(status) {
  if (status) {
    ckImg1.src = "./assets/icons/cart-icon/isChecked-true.svg";
    ckImg2.src = "./assets/icons/cart-icon/isChecked-true.svg";
  } else {
    ckImg1.src = "./assets/icons/cart-icon/isChecked-false.svg";
    ckImg2.src = "./assets/icons/cart-icon/isChecked-false.svg";
  }
}

ckAll1.addEventListener("click", () => {
  ckAll2.checked = ckAll1.checked;
  setImage(ckAll2.checked);
});
ckAll2.addEventListener("click", () => {
  ckAll1.checked = ckAll2.checked;
  setImage(ckAll1.checked);
});

// 로그인 된 상태에서 ID 출력 및 '로그아웃' 버튼 기능 구현
handlerSetText();