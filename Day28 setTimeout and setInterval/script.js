function randomNum() {
  alert(`Random Number is ${Math.floor(Math.random() * 10)}`);
}
let timerId = setInterval(randomNum, 2000); //This will alert random number between 0 to 10 every 2 sec.

function stopInterval() {
  clearInterval(timerId);
}
setTimeout(stopInterval, 20000); //This will run after 20 sec and then stops the setInterval
