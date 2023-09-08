const howManyHundreds = function (number) {
  var division = number / 100;
  return Math.floor(division);
};

console.log(howManyHundreds(1000));
console.log(howManyHundreds(1234));
console.log(howManyHundreds(55));
console.log(howManyHundreds(100));
console.log(howManyHundreds(1234));
console.log(howManyHundreds(200));
console.log(howManyHundreds(123456));