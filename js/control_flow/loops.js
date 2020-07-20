//for loops

/*
 Syntax:

 for(initialization; condition; incremental) {
     //code block//
 }

 */

// for(let i = 3; i < 10; i++) {
//     console.log(i);
// }

let students = ['Nathan', 'Thor', 'Max', 'Wendy', 'Justice'];

for(let i = 0; i < students.length; i++) {
    // run your code here

    // console.log(i);
    console.log(students[i]);

    // template string
    let html = `<li>${students[i]}</li>`

    document.write(html);
}

// while loops

/* initialization:
while(condition) {
    // incremental
} */

// let i = 3;
// while(i < 10) {

//     console.log(i);

//     i++
// }


// do while loops

let i = 3;

do {
    console.log(i);
    i++
} while(i < 5);