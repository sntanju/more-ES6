const numbers = [ 4, 6, 8, 10];
//const output = [];

// function dooubleOld(number){
// return number * 2;
// }

 const doubleIt = number => number * 2;

// for( const number of numbers){
//     const result = doubleIt(number);
//     output.push(result);
// }
//console.log(output);

// 1. loop through for each element
// 2. for each element call the provided function 
// 3. result for each element will be stored in a array

// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x* 2);
console.log(output);



const squares = numbers.map(x => x * x);
console.log(squares);