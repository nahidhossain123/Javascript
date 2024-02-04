//at() -->return an indexed element from an array
//method return the same as []
//allow negative value to access array from the end

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log("Value at inedex 2 is = ", fruit);
//get the value from end
fruit = fruits.at(-2);
console.log("Value from end is = ", fruit);

//Browser Support
//ES22 introduced array method at()
//at() method is supported in all modern borwsers since march 2022
