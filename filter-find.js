const numbers = [ 5, 13, 41, 79, 30, 5, 2, 19];
const bigNumbers = numbers.filter(Number => Number > 20);
const smallNumbers = numbers.filter(Number => Number < 10);

// console.log(bigNumbers);
// console.log(smallNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow'},
    { name: 'mobile phone', price: 15000, color: 'black'},
    { name: 'smart watch', price: 3000, color: 'black'},
    { name: 'sticky note', price: 30, color: 'pink'},
    { name: 'water glass', price: 3, color: 'white'}
];

const expensive = products.filter(product => product.price > 100);
//console.log(expensive);

const blacks = products.filter(product => product.color == 'pink');
//console.log(blacks);

const whitwItems = products.find(product => product.color == 'k');
console.log(whitwItems);