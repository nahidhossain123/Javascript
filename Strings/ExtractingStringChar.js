//There are four method for extracting string character
//1. at();
//2. charAt();
//3. charCodeAt()

//charAt():
// return the character at specified index in a string.
let text = "Hello World";
console.log("Extract 0 th character", text.charAt(0));

//charCodeAt():
// return the code or ascii code of the specified index character in a string.
console.log("Extract 0 th character", text.charAt(0));

//at():
// return the character at specified index in a string.
console.log("Extract 0 th character", text.at(0));

//at(): vs charAt():
// at() allow negetive index but charAt() don't
// at() is a new addition of ES22

//Property Access []
let char = text[0];
console.log("Property access of index zero", char);
//It makes string look like arrays they are not;
//if no character found return undefined while charAt() return empty string
//it is read only str[0] = "A" gives no error but does not work
text[0] = "A"; // Gives no error, but does not work
