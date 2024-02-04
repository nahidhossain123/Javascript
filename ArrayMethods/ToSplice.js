//toSplice()---->similar to splice() method. Changes the contents of an array by removing or replacing the existing elements
//toSplice() vs splice():
//main difference is toSplice() creates a new array, keeping the original array unchanged while splice() method alter the original array
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(`after toSpliced orignal array = ${months} new array = ${spliced}`);
