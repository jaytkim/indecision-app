// arguments object - no longer bound with arrow functions

// const add = function(a, b) {
const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}
console.log(add(55, 11, 1001));

// this keyword - no longer bound

const user = {
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
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
            
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

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // muliply = return a new array where the number have been multiplied
    
    numbers: [1, 5, 9],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());