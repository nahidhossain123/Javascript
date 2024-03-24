//a regular expresion is sequence of characters that froms a search patterns
// /w3schools/i  is a regular expression.
//  here 'i' is a modifier
// regular expression modifiers---> i,g,m,d

// i-->perform case insensetive matching
let text = "Visit W3Schools";
console.log(text.match(/w3schools/i));
// g-->perform global match(find all)
text = "Is this all there is?";
console.log(text.match(/is/g));
// m-->perform multiline match
text = "\nIs th\nis it?";
console.log(text.match(/^is/m));

// patterns
// [],(|)
// [abc]---find any character between the brackets
// [0-9]---find any digit between the brackets
// (x|y)---find any of the alternative separated with "|"

// metacharacter
// \d--->find digit
text = "Give 100%!";
let result = text.match(/\d/g);
console.log(result);
// \s--->find space
text = "Is this all there is?";
console.log(text.match(/\s/g));
// \b--->find start or end of a word
text = "HELLO, LOOK AT YOU!";
console.log(text.search(/\bLO/));
// \uxxxx--->find unicode number
text = "Visit W3Schools. Hello World!";
console.log(text.match(/\u0057/g));

//Quantifiers
// n+ matches any string that contains atleast one n
// n* matches
