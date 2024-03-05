let user = { name: "Ramu", age: 23 };

// accessing the property
console.log(user.name);

// adding a new property
user.isAdmin = false;

console.log(user); //{ name: "Ramu", age: 23, isAdmin: false }

// deleting a property
delete user.age;

console.log(user); //{ name: "Ramu", isAdmin: false }

// square bracket
// multi word as key

user["likes birds"] = true;

console.log(user); //{name: 'Ramu', isAdmin: false, likes birds: true}

// shorthand for object names
function createUser(name, age) {
  return { name, age }; //same as {name:name, age:age}
}

let user1 = createUser("John", 21);
console.log(user1); //{name: 'John', age: 21}

// "in" operator

let user2 = { name: "Peter", age: 30 };

console.log("age" in user2); // true, user.age exists
console.log("blabla" in user2); //false

// cloning the object
// Object.assign(dest, source1, source2, ..sourceN)
let user3 = { name: "Sonu" };
let permission1 = { canView: true };
let permission2 = { canChange: false };
Object.assign(user3, permission1, permission2);

console.log(user3); //{name: 'Sonu', canView: true, canChange: false}

// Deep clone
// structured clone:
let user4 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};
let clone = structuredClone(user4);

console.log(user4.sizes === clone.sizes); // false, different objects

// user and clone are totally unrelated now
user4.sizes.width = 60; // change a property from one place
console.log(clone.sizes.width);
