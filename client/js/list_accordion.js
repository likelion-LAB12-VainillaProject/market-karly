// 아코디언 열고 닫히는 기능
function collapse(element) {
  let before = document.getElementsByClassName("active")[0]; // 기존에 활성화된 버튼
  if (before && document.getElementsByClassName("active")[0] != element) {
    // 자신 이외에 이미 활성화된 버튼이 있으면
    before.nextElementSibling.style.maxHeight = null; // 기존에 펼쳐진 내용 접고
    before.classList.remove("active"); // 버.튼 비활성화
  }
  element.classList.toggle("active"); // 활성화 여부 toggle

  let content = element.nextElementSibling;
  if (content.style.maxHeight != 0) {
    // 버튼 다음 요소가 펼쳐져 있으면
    content.style.maxHeight = null; // 접기
  } else {
    content.style.maxHeight = content.scrollHeight + "px"; // 접혀있는 경우 펼치기
  }
}

function toggleImg() {
  document.getElementById("img").src = "./assets/mainImg/checked.svg";
}
