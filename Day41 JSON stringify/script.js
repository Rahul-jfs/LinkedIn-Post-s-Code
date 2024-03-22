let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
};

let json = JSON.stringify(student);

console.log(typeof json); //string

console.log(json);

let user = {
  sayHi() {
    alert("Hello");
  }, //ignored
  something: undefined, //ignored
  [Symbol("id")]: 1223, //ignored
};
console.log(JSON.stringify(user)); // {}  (empty object)
