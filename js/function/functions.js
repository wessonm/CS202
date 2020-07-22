// function declaration

/* function functionName(parameter) {
    // run your code here
} */

// function showAlert() {
//     window.alert('Hello, world!');
// }

// // call the function
// showAlert();

// greet();

// function greet() {
//     console.log('Hello, world!');
// }

// greet();
// greet();
// greet();

//function expression
// speak(); /* does not work */

// const speak = function () {
//     console.log('Good day!');
// }

// speak();
// speak();
// speak();


// hoisting - calling a function before declaration


// arguments & parameters

const speak = function (name, time) {
    console.log(`Good ${time}, ${name}!`);
}

speak('Justice', 'Evening');


// returning values

const calcArea = function (radius) {
    let area = 3.14 * radius ** 2;
    console.log(area);

    return area;
}

let area = calcArea(5);

console.log(area);