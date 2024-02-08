//findIndex ----> method return the index of the first array element that passes a test function
//takes three argument, item value, item index and array itself
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);
console.log("Index of the item greater than 18 is", first);

function myFunction(value, index, array) {
  return value > 18;
}
