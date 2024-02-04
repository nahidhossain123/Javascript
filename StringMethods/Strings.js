//String are for storing text
let firstName = "Nahid";
console.log(typeof firstName);

//Template strings or template literals
let title = `We are the so-called from the north.`;
let x = 10;
let y = 20;
let sum = x + y;
//template string allow string interpolation
let result = `sum of ${x} and ${y} = ${x + y}`;
console.log(result);
//template string allow multiple line
let text = `The quick
            brown fox
            jumps over
            the lazy dog`;

//Qoute inside a string:
let text1 = "he's often called 'Nahid'";
let text2 = 'he"s often called "Nahid"';
console.log(text1, text2);

//Escape operator
//    \'  -------> '
//    \"  -------> "
//    \\  -------> \

//Plus operator to concate string or breaking long line
let longText =
  "Lorem Ipsum is" +
  "simply dummy text of the printing " +
  " and typesetting industry. " +
  "Lorem Ipsum has been the industry's";
let name = "Nahid Hossain";
let age = 2;
let myDetails = "My name is" + name + "and my age is " + age;

//Browser Supports
//String literals is ES6 features support by all modern browsers
