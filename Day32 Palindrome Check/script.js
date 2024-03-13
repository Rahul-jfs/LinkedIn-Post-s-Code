let input = document.querySelector("input");
let btn = document.querySelector("button");
let span = document.querySelector("span");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function checkPalindrome() {
  let inputval = input.value;
  console.log(inputval);
  let reverseStr = reverseString(inputval);
  if (inputval === reverseStr) {
    span.innerText = `${inputval} is Palindrome`;
    span.style.color = "limegreen";
  } else {
    span.innerText = `${inputval} is not a Palindrome`;
    span.style.color = "red";
  }
  input.value = "";
}

btn.addEventListener("click", () => {
  checkPalindrome();
});
