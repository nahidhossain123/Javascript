//splice(start,deleteCount,item,item)--->changes the contents of an array by removing or replacing the exsiting elements;
//return array of deleted items

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(
  `after splice new array is [${fruits}] and return value is ${fruit}`
);

fruit = fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(
  `after splice new array is [${fruits}] and return value is ${fruit}`
);
