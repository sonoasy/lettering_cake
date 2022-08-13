/* 입력받은 텍스트를 보여주기 위한 코드 */
function setText()  {
  const text = document.getElementById("text").value;
  document.getElementById("result").innerText = text;
}

/* 폰트 색상 변경을 위한 코드 */
let color;
const defaultColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
  color = document.querySelector("#color");
  color.value = defaultColor;
  color.addEventListener("input", updateFirst, false);
  color.addEventListener("change", updateAll, false);
  color.select();
}

function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}

/* 폰트 사이즈 변경을 위한 코드 */
const range = document.getElementById("range");

range.addEventListener('input', function () {
  var size = range.value;
  document.querySelector("p").style.fontSize = size + "px";
});

/* 텍스트 박스 드래그앤 드랍을 위한 코드 */
const container = document.querySelector(".area");
const box = document.querySelector(".area_box");

const {width: containerWidth, height: containerHeight} = container.getBoundingClientRect();
const {width: boxWidth, height: boxHeight} = box.getBoundingClientRect();

let isDragging = null;
let originLeft = null;
let originTop = null;
let originX = null;
let originY = null;

box.addEventListener("mousedown", (e) => {
  isDragging = true;
  originX = e.clientX;
  originY = e.clientY;
  originLeft = box.offsetLeft;
  originTop = box.offsetTop;
});

document.addEventListener("mouseup", (e) => {
  isDragging = false;
});

document.addEventListener("mousemove", (e) => {
  if(isDragging) {
    const diffX = e.clientX - originX;
    const diffY = e.clientY - originY;
    const endOfXPoint = containerWidth - boxWidth;
    const endOfYPoint = containerHeight - boxHeight;
    box.style.left = `${Math.min(Math.max(0, originLeft + diffX), endOfXPoint)}px`;
    box.style.top = `${Math.min(Math.max(0, originTop + diffY), endOfYPoint)}px`;
  }
});

/* 드롭다운 메뉴 선택 */
window.onload=()=>{
  document.querySelector('.dropbtn_click').onclick = ()=>{
    dropdown();
  }
  document.getElementsByClassName('font').onclick = ()=>{
    showMenu(value);
  };
  dropdown = () => {
    var v = document.querySelector('.dropdown-content');
    var dropbtn = document.querySelector('.dropbtn')
    v.classList.toggle('show');
    dropbtn.style.borderColor = 'rgb(94, 94, 94)';
  }

  showMenu=(value)=>{
    var dropbtn_icon = document.querySelector('.dropbtn_icon');
    var dropbtn_content = document.querySelector('.dropbtn_content');
    var dropbtn_click = document.querySelector('.dropbtn_click');
    var dropbtn = document.querySelector('.dropbtn');

    dropbtn_icon.innerText = '';
    dropbtn_content.innerText = value;
    dropbtn_content.style.color = '#252525';
    dropbtn.style.borderColor = '#3992a8';
  }
}
window.onclick= (e)=>{
  if(!e.target.matches('.dropbtn_click')){
    var dropdowns = document.getElementsByClassName("dropdown-content");

    var dropbtn_icon = document.querySelector('.dropbtn_icon');
    var dropbtn_content = document.querySelector('.dropbtn_content');
    var dropbtn_click = document.querySelector('.dropbtn_click');
    var dropbtn = document.querySelector('.dropbtn');

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}