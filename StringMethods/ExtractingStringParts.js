//There are three methods for extracting a part of string;
//1. slice(start,end);
//2. substring(start,end)
//3. substr(start,length)

//slice(start,end):
//slice() extract the part of a string and return the extracted part in a new string
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log("Slice() extracted string = ", part);

//if omit the end parameter, the method will slice the rest of the string.
let part1 = text.slice(7);
console.log("Slice() extracted string = ", part1);

//if the parameter is nagetive, the position counted from the end of the string
let part2 = text.slice(-2);
console.log("Slice() extracted string = ", part2);
let part3 = text.slice(-12, -6);
console.log("Slice() extracted string = ", part3);

//substring():
//substring() similar to slice() the main difference is start and end value less than 0 treated as 0 in substring()
let part4 = text.substring(2, 12);
console.log("substring() extracted string = ", part4);
//omiting second parameter will slice the rest of the string.

//substr();
//substr() similar to slice the difference is that second parameter takes the length of the extracted string.
//omiting second parameter extract the rest of the string.
//negative start value will extract from the end of the string.
let part5 = text.substr(2, 4);
console.log("substring() extracted string = ", part5);
