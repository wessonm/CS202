// callbacks & forEach

const myFunction = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
}

myFunction((value) => {
    console.log(value);
});



//callback Function Example

let people = ['Thor', 'Max', 'Abbi', 'Nathan', 'Ana', 'Justice'];

// people.forEach((person, index) => {
//     // console.log('something');
//     console.log(index, person);    
// });


// call back function
const logPerson = (person, index) => {
    console.log(`${index} - Hello, ${person}`)

    let html = `<li>${index} - Welcome, ${person}`;

    document.write(html);
}

people.forEach(logPerson);




