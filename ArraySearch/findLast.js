//findLast()--> method that will start from the end of an array and return the value of the first element that passes the condition
//

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast((x) => x > 40);
console.log("Value", high);
