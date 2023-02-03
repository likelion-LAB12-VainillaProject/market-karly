let target = document.querySelectorAll('.img-button'); 
let btnPopClose = document.querySelectorAll('.addbtn .cancel, .addbtn .purple'); 
let targetID;

// 팝업 열기
for(let i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block';
  });
}

// 팝업 닫기
for(let j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.parentNode.parentNode.style.d/isplay = 'none';
  });
}