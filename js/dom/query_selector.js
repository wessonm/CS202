/* DOM */

// // querySelector()
// const para = document.querySelector('p');
// console.log(para);

// const para1 = document.querySelector('#page-title');
// console.log(para1);

// const content = document.querySelector('.content');
// console.log(content);

// const para2 = document.querySelector('div p.error');
// console.log(para2);

// // querySelectorAll()
// const paras = document.querySelectorAll('p'); /* returns NodeList */
// console.log(paras);

// paras.forEach(person => {
//     console.log(person);
// });



/* Ways to Query the DOM ====================== */

// Get element by id
const title = document.getElementById('page-title');
console.log(title);

// Get elements by class
const content = document.getElementsByClassName('content'); /* returns HTMLCollection */
console.log(content);

// Get elements by TagName
const para = document.getElementsByTagName('p'); /* returns HTMLCollection */
console.log(para);


