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

const showName1 = showName.bind(name, "Dhaka", 27);
const showName2 = showName.bind(name1, "Briasal", 20);
showName1();
showName2();
