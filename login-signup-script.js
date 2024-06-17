// login-signup-script.js
const loginSection = document.getElementById('login');
const signupSection = document.getElementById('signup');

loginSection.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Login logic here
});

signupSection.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Signup logic here
});
