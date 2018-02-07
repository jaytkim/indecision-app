'use strict';

// arguments object - no longer bound with arrow functions

// const add = function(a, b) {
var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 11, 1001));

// this keyword - no longer bound

var user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    // ES5
    // printPlacesLived: function () {
    // const that = this;

    // console.log(this.name);
    // console.log(this.cities);

    // this.cities.forEach(function (city) {
    //     console.log(that.name + ' has lived in ' + city);
    // });
    // }
    // ES6
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        // const cityMessages = this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city;
        // });
        // return cityMessages;

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());

// Challenge area

var multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // muliply = return a new array where the number have been multiplied

    numbers: [1, 5, 9],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());