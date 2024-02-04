//delete()--->delete element form an array
//but leaves undefined holes in the array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
console.log("After delete", fruits);
console.log("First element is undefined ", fruits[0]);

//delete() leaves undefined holes in the array so use pop() and shift() instead
