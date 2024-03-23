// syntax: let value = JSON.parse(str, reviver);
// str is the JSON-string to parse.
// reviver is the optional function(key, value) that will be called for each key:value pair and can transform the value.

let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user = JSON.parse(userData);

console.log(user.friends[1]); // 1

// Here are the typical mistakes in hand-written JSON
let json = `{
  name: "John",                     // mistake: property name without quotes
  "surname": 'Smith',               // mistake: single quotes in value (must be double)
  'isAdmin': false                  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              // here all fine
}`;
