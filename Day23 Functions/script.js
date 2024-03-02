function showMessage1() {
  console.log("Hello JS!");
}

showMessage1();
showMessage1();

// Local variables
function showMessage2() {
  let message = "Hello, I'm JavaScript!"; // local variable

  console.log(message);
}

showMessage2(); // Hello, I'm JavaScript!

// console.log(message); //error message is not defined

// Outer variable

let name = "John";

function greetings() {
  console.log(`Hello ${name}`); //name is outer variable
}

greetings();

// Shadowing : If a same-named variable is declared inside the function then it shadows the outer one

let userName = "John";

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = "Hello, " + userName; // Bob
  console.log(message);
}

// the function will create and use its own userName
showMessage();

console.log(userName); // John, unchanged, the function did not access the outer variable

// Default value is undefined if parameter is not passed

function showMessage3(name, text) {
  console.log(`${name} : ${text}`);
}

showMessage3("Sema"); //Sema : undefined

// hence we need to give a default value so that it's value is used when parameter is not passed.

function showMessage4(name, text = "Good to see you") {
  console.log(`${name} : ${text}`);
}

showMessage4("Sema", "Good Morning!"); //Sema : Good Morning
showMessage4("Sema"); //Sema : undefined
