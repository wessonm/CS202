// if statements

const age = 20;

/* if(true) {
    // run this code
} */

// if(false) {
//     console.log('True');
// }

// if(age > 20) {
//     console.log('you are over 20 years old');
// } else if(age == 20) {
//     console.log('you are 20 years old');
// } else {
//     console.log('you are less than 20 years old');
// }

// logical operators OR || ..... AND &&

const password = 'password1234@';

if(password.length >= 12 && password.includes('@')) {
    console.log('Your Password is very strong');
} if(password.length >= 8) {
    console.log('You Password is fairly strong');
} else {
    console.log('Your Password is very weak');
}