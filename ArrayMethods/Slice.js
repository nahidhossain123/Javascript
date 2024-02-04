//slice(start,end)--->slice out a piece of an array into new array.
//doesn't remove any element of an array
//create new array
//if end is omitted then slice out the rest of the array

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
console.log(`After slice = `, citrus);
