const firstName = document.querySelector('.f-name');
const secName = document.querySelector('.l-name');
const mail = document.querySelector('input[type="email"]');
const tel = document.querySelector('input[type="tel"]');
const firstPwd = document.querySelector('.f-pwd');
const secPwd = document.querySelector('.s-pwd');

const nameRegex = /^[A-Za-z -]{2,20}$/;
const mailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const telRegex = /^(\+\d{1,4}\s?)?(\(?\d{1,4}\)?[\s.-]?)?\d{1,5}[\s.-]?\d{1,5}[\s.-]?\d{1,5}$/;
const pwdRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validateInput (input, regex) {
    input.addEventListener('change', () => {
        span.innerHTML = '';
        if (regex.test(input.value)) {
            input.style.backgroundColor = 'rgb(205, 223, 178)';
        } else {
            input.style.backgroundColor = 'rgb(221, 146, 146)';
        }
    })
}

const span = document.querySelector('.sub-secs span');

firstPwd.addEventListener('input', () => {
    span.innerHTML = 'At least one uppercase.<br>At least one lowercase.<br>At least one digit.<br>At least one special character.<br>Min length of 8 characters.';
    span.style.animation = 'fadeIn 2s ease';
    span.style.left = '5%';
})

secPwd.addEventListener('change', () => {
    if (pwdRegex.test(secPwd.value) && firstPwd.value === secPwd.value) {
        span.textContent = 'Password matched!';
        secPwd.style.backgroundColor = 'rgb(205, 223, 178)';
    } else {
        span.textContent = 'Password did not match.';
        secPwd.style.backgroundColor = 'rgb(221, 146, 146)';
    }
    span.style.animation = 'fadeIn 0.5s ease';
    span.style.left = '70%';
})

validateInput(firstName, nameRegex);
validateInput(secName, nameRegex);
validateInput(mail, mailRegex);
validateInput(tel, telRegex);
validateInput(firstPwd, pwdRegex);





// const names = document.querySelectorAll('input[type="text"]');
// const mail = document.querySelector('input[type="email"]');
// const tel = document.querySelector('input[type="tel"]');
// const pwds = document.querySelectorAll('input[type="password"]');
// const inputs = document.querySelectorAll('input');


// Second Method
// inputs.forEach(input => {
//     input.addEventListener('change', () => {
//         names.forEach(name => {
//             pwds.forEach(pwd => {
//                 if (input === mail) {
//                     if (mailRegex.test(mail.value)) {
//                         mail.style.backgroundColor = 'rgb(205, 223, 178)';
//                     } else {
//                         mail.style.backgroundColor = 'rgb(221, 146, 146)';
//                     }
//                 } else if (input === tel) {
//                     if (telRegex.test(tel.value)) {
//                         tel.style.backgroundColor = 'rgb(205, 223, 178)';
//                     } else {
//                         tel.style.backgroundColor = 'rgb(221, 146, 146)';
//                     }
//                 } else if (input === name) {
//                     if (nameRegex.test(name.value)) {
//                         name.style.backgroundColor = 'rgb(205, 223, 178)';
//                     } else {
//                         name.style.backgroundColor = 'rgb(221, 146, 146)';
//                     }
//                 } else if (input === pwd) {
//                     if (pwdRegex.test(pwd.value)) {
//                         pwd.style.backgroundColor = 'rgb(205, 223, 178)';
//                     } else {
//                         pwd.style.backgroundColor = 'rgb(221, 146, 146)';
//                     }
//                 }
//             })
//         })
//     })
// })


// First Method
// names.forEach(name => {
//     name.addEventListener('change', () => {
//         if (nameRegex.test(name.value)) {
//             name.style.backgroundColor = 'rgb(205, 223, 178)';
//         } else {
//             name.style.backgroundColor = 'rgb(221, 146, 146)';
//         }
//     })
// })

// mail.addEventListener('change', () => {
//     if (mailRegex.test(mail.value)) {
//         mail.style.backgroundColor = 'rgb(205, 223, 178)';
//     } else {
//         mail.style.backgroundColor = 'rgb(221, 146, 146)';
//     }
// })

// tel.addEventListener('change', () => {
//     if (telRegex.test(tel.value)) {
//         tel.style.backgroundColor = 'rgb(205, 223, 178)';
//     } else {
//         tel.style.backgroundColor = 'rgb(221, 146, 146)';
//     }
// })

// pwds.forEach(pwd => {
//     pwd.addEventListener('change', () => {
//         if (pwdRegex.test(pwd.value)) {
//         pwd.style.backgroundColor = 'rgb(205, 223, 178)';
//         } else {
//         pwd.style.backgroundColor = 'rgb(221, 146, 146)';
//         }
//     })
// })