const form = document.querySelector('.signup-form');
const name = document.querySelector('#name');
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', () => {
    e.preventDefault();

    // console.log('form submitted');

    // console.log(name);

    // console.log(form.name.value);

    // regular expression
    const namecheck = /^[A-Za-z]{3,20}$/;
    const passwordcheck = /^[A-Za-z_@#$%]{3,}$/
    const emailcheck = /^[A-Za-z_]{3,}@[a-z]{3,}[.]{1}[a-z]{2,4}$/
    const phonecheck = /^{0-9}{10}$/

    if(namecheck.test(form.name.value)) {
        feedback.innerHTML = '';
    } else {
        feedback.innerHTML = '** Invalid Password'
        name.style.border = '1px solid red';
        return false;
    }

    if(emailcheck.test(email)) {
        feedback.innerHTML = '';
    } else {
        feedback.innerHTML = '** Invalid Email';
        form.email.focus();
        return false;
    }

    // if(isNaN(phone)) {
    //     feedback.innerHTML = "That's not a number, moron!";
    // } else {

    // }

    // if(password != cpassword) {
    //     feedback.innerHTML = "Password doesn't match";
    // } else {
    //     feedback.innerHTML = "";
    // }

    form.submit();
});

// const password = 'skyFall';

// const pattern = /^[A-Za-z0-9*@]{3,}$/;

// let result = pattern.test(password);

// if(result) {
//     // feedback
//     alert('Password is correct')
// } else {
//     alert("Password is incorrect")
// }