//shift()---> removes the first array element and shift all other element to a lower index
//similar to pop() but it works on the first element;
//return the value that was shifted out
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
console.log(
  `after shift updated array is=${fruits} and returned value is=${fruit}`
);
