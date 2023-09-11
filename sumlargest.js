const sumLargestNumbers = function (data) {
  numOne = 0;
  numTwo = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > numOne) {
      numTwo = numOne;
      numOne = data[i];
    }
  }
  return numOne + numTwo;
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
