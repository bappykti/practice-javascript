// array filter
/*
const numbers = [12,14,19,25,35,23,45,75,99,34,45,54,56,85,66];
const bigNumber = numbers.find(number => number > 20);
const smallNumbers= numbers.find(n => n < 20);
const even = numbers.find(n => n % 2 === 0);
const numberDivisible = numbers.find(num => num % 5 === 0);
const numberDivisible2 = numbers.filter(num => num % 5 === 0);
console.log(bigNumber);
console.log(smallNumbers);
console.log(even);
console.log(numberDivisible);
console.log(numberDivisible2);
*/

const products = [
    {id:1, name: 'laptop', price: 65000 },
    {id:2, name: 'mobile', price: 25000 },
    {id:3, name: 'watch', price: 15000 },
    {id:4, name: 'tablet', price: 45000 },
]

// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 50000);
// const expensive = products.filter(product => product.price > 1000);
const expensive = products.find(product => product.price > 40000);

console.log(expensive);

