//Replace()--->method replaces a specified value with another value in a string
//Replace() --- replace the only first match
//Case sensitive
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log("Replaced Text", newText);
//To replace all matche use /g RegExp
let replaceAll = text.replace("Microsoft/g", "W3Schools");
console.log("Replace all text", replaceAll);
//Case insensitive using /i RegExp
let caseInsensitive = text.replace("MICROSOFT/i", "W3Schools");
console.log("Replace all text", caseInsensitive);

//replaceAll()--->In 2021 javascript introduced the string method replaceAll();
//allows to specify a regular expresion instead of a string to be replaced
let text1 = "I love cats. Cats are very easy to love. Cats are very popular.";
text1 = text1.replaceAll("Cats", "Dogs");
console.log("Replace text ", text1);
text1 = text1.replaceAll("cats", "dogs");
console.log("Replace text ", text1);
