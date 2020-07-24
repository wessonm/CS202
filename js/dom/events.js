/* Events Basics ================  */

// Events are actions or activities that the user or browser can react to.

// click, mouseover, mouseout, load, submit, resize, doubleclick, scroll

// addEventListener

const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    console.log('You clicked me!');
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        // console.log('item click');
        // console.log(e.target);
        e.target.style.textDecoration = 'line-through';
        // e.target.remove();
    });
});








/* Creating and Removing Elements ================  */



