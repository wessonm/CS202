// template strings

const title = 'Modern Javacript ES6';

const author = 'Justice Banson';

const likes = 10;

// concatenation way

// let result = "The blog called " + title + " by " + author + " has " + likes + " likes";

// console.log(result);


// template string way


let result = `The blog called ${title} by ${author} has ${likes} likes`;

console.log(result);


// creating html templates

let html = `

        <h1>${title}</h1>
        <p>${author}</p>
        <span> This blog has ${likes} likes</span>
`;






