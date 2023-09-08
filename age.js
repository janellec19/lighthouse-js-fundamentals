const ageCalculator = function (name, yearOfBirth, currentYear) {
let age = currentYear - yearOfBirth
const result = name + " is " + age + " years old.";

return result;
};

console.log(ageCalculator("Suzie", 1984, 2016));
console.log(ageCalculator("Jack", 2004, 2016));
console.log(ageCalculator("Ali", 2016, 2016));