//findLastIndex() method find the index of the last element that satisfies the condition
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex((x) => x > 40);

console.log("Last element index", pos);
