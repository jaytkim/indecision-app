'use strict';

// const square = function (x) {
//     return x * x;
// };

// console.log(square(3));

// const squareArrow = (x) => {
//     return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];    
// };

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));
