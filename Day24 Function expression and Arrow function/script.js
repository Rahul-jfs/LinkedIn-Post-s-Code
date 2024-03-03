//Function expression

let sayHi = function () {
  console.log("Hello");
};

let fun = sayHi; // copy the function sayHi to fun
fun(); //Hello

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    console.log("You agreed.");
  },
  function () {
    console.log("You canceled the execution.");
  }
);

// Assigning a function based on condition.

let age = prompt("What is your age?", 18);

let welcome =
  age < 18
    ? function () {
        console.log("Hello!");
      }
    : function () {
        console.log("Greetings!");
      };

welcome();

// Arrow Function:
// syntax: let func = (arg1, arg2, ..., argN) => expression;
// func accepts arguments and returns the result of an expression implicitely without any return if there is only one line of statement

let sum = (a, b) => a + b;
console.log(`sum of 10 and 20 is ${sum(10, 20)}`);

// one argument can be used without paranthesis
let double = (n) => n * n;

console.log(`double of 5 is ${double(5)}`);

// If there are multiple lines of code has to be executed then we need to provide return statement explicitely.
let sum2 = (a, b) => {
  c = a + b;
  return c;
};

console.log(`Sum of 20 and 30 is ${sum2(20, 30)}`);
