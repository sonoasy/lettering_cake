function setText()  {
  const text = document.getElementById("text").value;
  document.getElementById("result").innerText = text;
}

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

function setSize() {

}

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