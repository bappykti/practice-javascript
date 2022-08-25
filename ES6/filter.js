// array filter
/*
const numbers = [12,14,19,23,45,77,99,34,45,54,56,66];
const bigNumber = numbers.filter(number => number > 20);
const smallNumbers= numbers.filter(n => n < 20);
const even = numbers.filter(n => n % 2 === 0);
console.log(bigNumber);
console.log(smallNumbers);
console.log(even);
*/

const products = [
    {id:1, name: 'laptop', price: 65000 },
    {id:2, name: 'mobile', price: 25000 },
    {id:3, name: 'watch', price: 15000 },
    {id:4, name: 'tablet', price: 45000 },
]

// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 50000);
const expensive = products.filter(product => product.price > 1000);
console.log(expensive);