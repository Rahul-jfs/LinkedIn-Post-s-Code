console.log("Hello");
// is the same as
window.console.log("Hello");

var gVar = 5;

console.log(window.gVar); // 5 (became a property of the global object)

let gLet = 5;

console.log(window.gLet); // undefined (doesn't become a property of the global object)
