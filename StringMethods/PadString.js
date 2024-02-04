//padStart()-->pads a string from the start
let text = "5";
let padded = text.padStart(4, "0");
console.log("Padded String start=", padded);
//padEnd()-->pads a string from the end
let padded1 = text.padEnd(4, "X");
console.log("Padded String end=", padded1);

//Browser Support :
//support all modern browser since 2017
//padEnd and padStart ES17 feature
