// regular function
// const calcArea = function (radius) {
//     let area = 3.14 * radius ** 2;
//     console.log(area);

//     return area;
// }

// // let area = calcArea(5);

// // console.log(area);

// console.log(calcArea(5));





// arrow function
// remove the function and use the fat arrow (=>)

// const calcArea = radius => 3.14 * radius ** 2; /* parantesis when < or > 1 parameter */

// let area = calcArea(5);
// console.log(area);

// regular function
// const greet = function () {
//     console.log('Hello, world!');
// }

// greet();

// arrow function
const greet = () => console.log('Hello, world!');

greet();

// regular funciton
// const sumAdd = fucntion(a, b) {
//     add = a + b;
//     return add;
// }

// let c = sumAdd(4, 5);
// console.log(c);

//arrow function
const sumAdd = (a, b) => a + b;

let c = sumAdd(4, 5);
console.log(c);
