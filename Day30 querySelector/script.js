let p = document.querySelector("p");
let span = document.querySelector("span");

function randomNum(range) {
  return Math.floor(Math.random() * range);
}

function changeShape() {
  p.style.clipPath = `polygon(${randomNum(100)}% ${randomNum(
    100
  )}%, ${randomNum(100)}% ${randomNum(100)}%, ${randomNum(100)}% ${randomNum(
    100
  )}%) `;
  p.style.backgroundColor = changeColor();
}
function changePosition() {
  span.style.backgroundColor = changeColor();
  span.style.left = `${randomNum(80)}%`;
  span.style.top = `${randomNum(80)}%`;
}

function changeColor() {
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    color += `${randomNum(10)}`;
  }
  return color;
}

function changestyle() {
  setTimeout(() => {
    changeShape();
    changePosition();
  }, 1000);
}

setInterval(changestyle, 2000);
