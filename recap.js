
// 1. let and const
const myCourse = 'web development.';

// 2. default parameter
// 5. spread or three dots
function maxNumber(array = []){
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// 3. templeting string
const myNotes = `I am tanju.i am learning ${myCourse} `;
console.log(myNotes);

// 4. arrow function
// function square(x){
//     return x * x;
// }
const square = x => x * x;
console.log(square(9));



