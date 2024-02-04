//copyWithin()--->copies array elements to another position in an array
//overwrite the existing value
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log("New array element ", fruits);
