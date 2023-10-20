const names = document.querySelectorAll('input[type="text"]');
const mail = document.querySelector('input[type="email"]');
const tel = document.querySelector('input[type="tel"]');
const pwds = document.querySelector('input[type="password"]');

const nameRegex = /^[A-Za-z]{2,20}$/;
const mailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const telRegex = /^(\+\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
const pwdRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

