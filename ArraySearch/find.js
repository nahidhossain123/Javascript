//find()--->method return the value of the first array element that passes a test function
//function takes three arguments. item value, item index and array itself
const ages = [4, 9, 16, 25, 29];
let val = ages.find(myFunction);
console.log("Age more than 18 is", val);

function myFunction(value, index, array) {
  return value > 18;
}
