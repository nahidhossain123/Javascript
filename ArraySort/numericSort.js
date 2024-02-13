//sort()--->by defalut sort() method sort values as string
//this works well for strings
// if numbers are sorted as string then "25" is bigger than "100" because "2" is bigger than "1"
// because of this sort() method will produce incorrect result
// this can be fix by providing a compare function

//acending sort
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log("number array sort acending order", points);
// decending sort
points.sort(function (a, b) {
  return b - a;
});
console.log("number array sort decending order", points);
