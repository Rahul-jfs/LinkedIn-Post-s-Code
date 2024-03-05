let user = {};
// console.log(user.address.street); //error, since there is no address property it will return undefined and we are trying to access the property which is undefined

// solution to not encounter an error is to use if/ ?:
let user1 = {};

console.log(user1.address ? user1.address.street : undefined);

// But we are repeating the same user1.address and hence we can use optional chaining
// It returns undefined if we are accessing an undefined property

let user2 = {}; // user has no address

console.log(user2?.address?.street); // undefined (no error)
