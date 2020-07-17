// single comments
/* multiple line comments */

// variable - placeholder

// define - let, const, var

let age = 30;
let year = 2020;

age = 40;
console.log(age, year);

// const - variable which cannot be changed

const score = 6;
// score = 4; /* does not work */

console.log(score);

// var

var points = 60;
console.log(points);

// let vs var (local vs. global)

if(true) {
    let num = 40;
    var num2 = 80;

    console.log(num);
}

console.log(num) /* does not work */
console.log(num2);