//Split()--->covert a string to an array
//we can split string based on some separator.
//split(",")
//split(" ")
//split("|")
//if the separator omitted , the returned array will contain the whole string in index [0]
////split("") returned array will be an array of single characters
let text = "Hello World";
let myArr = text.split("");
console.log("convert string to array", myArr);
myArr = text.split(" ");
console.log("convert string to array", myArr);
text = "Hello|World";
myArr = text.split("|");
console.log("convert string to array", myArr);
text = "Hello,World";
myArr = text.split(",");
console.log("convert string to array", myArr);
