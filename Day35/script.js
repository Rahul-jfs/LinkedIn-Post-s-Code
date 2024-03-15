let div = document.querySelector("div");

div.addEventListener("mouseover", () => {
  let x = Math.floor(Math.random() * 1100);
  let y = Math.floor(Math.random() * 500);
  div.style.left = x + "px";
  div.style.top = y + "px";
});
