const reverse = (arr) => [].concat(arr).reverse();

const sort = (arr) => [].concat(arr).sort();

const even = (arr) => [].concat(arr).filter(e => isEven(e));

const isEven = (val) => val % 2 === 0;

numbers = [8, 3, 2, 1, 5, 4, 6];
console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));
