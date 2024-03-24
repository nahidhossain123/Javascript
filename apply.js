name = {
  firstName: "Nahid",
  lastName: "Hossain",
};
name1 = {
  firstName: "Nahid",
  lastName: "Hossain",
};
const showName = function (city, age) {
  console.log(
    `My name is ${this.firstName} ${this.lastName} and city ${city} age ${age}`
  );
};

showName.apply(name, ["Dhaka", 27]);
showName.apply(name1, ["Briasal", 20]);
