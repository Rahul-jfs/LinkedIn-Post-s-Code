let str = "Hello";
console.log(`${str} length is ${str.length}`);

// for (let char of str) {
//   console.log(char);
// }
let upperStr = str.toUpperCase();
console.log(upperStr);
let lowerStr = str.toLowerCase();
console.log(lowerStr);

console.log(`Hello starts with H : ${str.startsWith("H")}`);
console.log(`Hello includes x : ${str.includes("x")}`);

let str2 = "Strings";
console.log(str2.slice(3, 5));

// Arrays Methods
let fruits = ["apple", "banana", "grapes"];
console.log(fruits);
console.log(`Length of fruits array is ${fruits.length}`);

fruits.push("pineapple");
fruits.push("mango");
console.log(fruits);

console.log(`Poped element is ${fruits.pop()}`);
console.log(fruits);

console.log(`removing the first element ${fruits.shift()}`);
console.log(fruits);

fruits.unshift("orange");
console.log(`added an element at the beginning of an fruits is ${fruits}`);

let strArr = fruits.join(",");
console.log(strArr);

let arr = ["I", "study", "JavaScript"];
console.log(arr);
arr.splice(1, 1); //removing and element from an array
console.log(arr);

arr.splice(1, 0, "love"); //adding an element to an array
console.log(arr);

let numArr = [1, 2];
console.log(numArr.concat([3, 4], 5, 6, 7));

let double = numArr.forEach((num) => {
  console.log(`${num} is at ${numArr.indexOf(num)}`);
});

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let someUsers = users.filter((user) => user.id > 1);
console.log(someUsers);

let lengths = users.map((user) => user.name.length);
console.log(lengths);

let arr1 = [1, 2, 3, 4, 5];

let result = arr1.reduce((sum, current) => sum + current, 0);
console.log(result);

console.log(`${Array.isArray(arr1)}`);
