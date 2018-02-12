// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>THIS IS JSX FROM WEBPACK</p>;
ReactDOM.render(template, document.getElementById('app'));


// import './utils.js'
// import minus, { square, add } from './utils';

// console.log('app.js is running!');
// console.log(square(4));
// console.log(add(1, 2));
// console.log(minus(2, 1));


// person.js
// named export isAdult(18) - true if adult, otherwise false
// named export canDrink(18) - true if 21 and over, otherwise false

// import isAdult and canDrink
// use both printing result to the console
// import isSenior, { isAdult, canDrink } from './person.js';

// Setting the default export and function
// Grab the default and call it

// console.log(isAdult(18));
// console.log(canDrink(18));
// console.log(isSenior(65));


// install -> import -> use : validator
// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));