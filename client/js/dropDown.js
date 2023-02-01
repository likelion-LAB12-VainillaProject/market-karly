import { getNode, css } from "./../lib/index.js";

// ? 좀더 간단히 코드를 바꾸고 싶은데 이부분을 어떤 식으로 바꾸면 좋을지 해결하지 못했습니다.

function handleDropDown() {
  const dropDown = getNode(".nav-menu__item");
  const handlerOnDropDown = () => {
    css(".nav-sub-menu", "display", "block");
  };
  const handlerOffDropDown = () => {
    css(".nav-sub-menu", "display", "none");
  };
  dropDown.addEventListener("mouseover", handlerOnDropDown);
  return dropDown.addEventListener("mouseout", handlerOffDropDown);
}

// function handleDropDown() {
//   const dropDown = getNode(".nav-menu__item");

//   const handlerOnDropDown = () => {
//     css(".nav-sub-menu", "display", "block");
//   };

//   return bindEvent(dropDown, "mouseover", handlerOnDropDown);
// }

handleDropDown();
