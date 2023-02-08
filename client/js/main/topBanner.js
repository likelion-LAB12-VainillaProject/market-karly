// TopBanner close 버튼 클릭시 사라지게 하기

import { getNode } from "../../lib/index.js";

const bannerCloseButton = getNode(".banner--close__btn");

console.log(bannerCloseButton);
bannerCloseButton.addEventListener("click", () => {
  console.log("hi");
});
