const range = function (start, end, step){
const numbers = [start];
if(start < end && step > 0) {
for (let i = 0; i < numbers.length && numbers[i] < end; i++) 
  numbers.push(numbers[i]+step)

} else {return numbers = []};
return numbers;
};
  
console.log(range (0, 10, 2));
console.log(range (10, 30, 5));
console.log(range (-5, 2, 3));
