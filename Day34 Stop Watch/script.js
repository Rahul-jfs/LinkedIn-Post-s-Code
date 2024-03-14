let btns = document.querySelectorAll("button");
let p = document.querySelector("p");
console.log(p);
console.log(btns);
let val = 0;

function increment() {
  let min = Math.floor(val / 60);
  let sec = val % 60;
  p.innerText = `${String(min).padStart(2, "0")}:${String(sec).padStart(
    2,
    "0"
  )}`;
  val++;
}

function start() {
  timerid = setInterval(() => increment(), 1000);
}

function watch(e) {
  let clickedBtn = e.target.outerText;
  if (clickedBtn === "Start") start();
  else if (clickedBtn === "Stop") clearInterval(timerid);
  else {
    clearInterval(timerid);
    val = 0;
    p.innerText = "00:00";
  }
}

btns.forEach((btn) => btn.addEventListener("click", (e) => watch(e)));
