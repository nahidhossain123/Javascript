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

showName.call(name, "Dhaka", 27);
showName.call(name1, "Briasal", 20);
