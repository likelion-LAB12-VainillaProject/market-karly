import {
  getNode,
  bindEvent,
  css,
  visibleElement,
  invisibleElement,
} from "./../lib/index.js";

const dropDown = getNode(".nav-menu__list");
const dropDownItem = getNode(".nav-sub-menu ");

const handler = (() => {
  let isEnter = false;

  return () => {
    !isEnter ? visibleElement(dropDownItem) : invisibleElement(dropDownItem);
    isEnter = !isEnter;
  };
})();

bindEvent(dropDown, "mouseover focus", handler);
bindEvent(dropDown, "mouseout blur", handler);
