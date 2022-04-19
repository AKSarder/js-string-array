const numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

// const numberSliced = number.slice(2, 6);
// console.log(numberSliced);

// not change original Array
// console.log(numbers);

// const numberSpliced = numbers.splice(3, 2);
// console.log(numberSpliced);

// splice delete an element and change the main Array
// console.log(numbers);

const numberSpliced2 = numbers.splice(4, 3, 44, 55, 66);
console.log(numberSpliced2);
console.log(numbers);



