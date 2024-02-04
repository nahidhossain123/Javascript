//join() ---> method also convert an array into a string
//behaves just like toString() but in addition can specify separator;
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let string = fruits.join(" * ");
console.log("After join=", string);
string = fruits.join(" | ");
console.log("After join=", string);
string = fruits.join(" = ");
console.log("After join=", string);
