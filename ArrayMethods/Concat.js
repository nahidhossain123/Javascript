//concat()--->create new array by merging exsiting arrays
//does not change the exsiting arrays
//can take any number of array agruments
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const thirdArray = ["one ", "two", "three"];

let myChildrens = myGirls.concat(myBoys, thirdArray);
console.log("New array is ", myChildrens);

//can take string as arguments
myChildrens = myChildrens.concat("New string to children");
console.log("New array is ", myChildrens);
