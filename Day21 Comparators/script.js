// Numeric type conversion using unary operator
let num1 = "2";
let num2 = "3";
console.log(num1 + num2); //"23"	(concatination of strings)
console.log(+num1 + +num2); // 5  (addition of numbers)

// Increment/ Decrement: Can only be used on variables. (5++ will give an error)
let count1 = 1;
console.log(2 * ++count1); //4

let count2 = 1;
console.log(2 * count2++); //2
// Comparision: All the comparison operator return a boolean value(true/false).

// String Comparision:
console.log("Z" > "A"); //true
console.log("Glow" > "Glee"); //true
console.log("Bee" > "Be"); //true

// Comparision of different types:when comparing values of different, JS converts the value to number.
console.log("2" > 1); //true "2" will be converted to number 2
console.log("Z" > "A"); //true
// For Boolean values true become 1 and false become 0.
console.log(true == 1); //true
console.log(false == ""); //true
console.log(false == 0); //true
console.log(null == undefined); //true

// Strict equality(===) Using Strict equality the type conversion doesn't takes place. And returns true only if both value and types are same else returns false.

console.log(false === 0); //flase because the types are different
console.log(null === undefined); //false

// For math and other comparision (<, >, <=, >=),null and undefined are converted to number ie, null becomes 0 and undefied becomes NaN
