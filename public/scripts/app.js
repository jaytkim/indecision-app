'use strict';

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// Block scoping

var fullName = 'Jen Mead';
var firstName = void 0;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
