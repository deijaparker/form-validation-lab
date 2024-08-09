// index.js

document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById('registration');
    const loginForm = document.getElementById('login');
    const errorDisplay = document.getElementById('errorDisplay');

    function showError(message) {
        errorDisplay.textContent = message;
        errorDisplay.style.display = 'flex';
        setTimeout(() => {
            errorDisplay.style.display = 'none';
        }, 5000);
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = registrationForm.username.value.trim();
        const email = registrationForm.email.value.trim();
        const password = registrationForm.password.value.trim();
        const passwordCheck = registrationForm.passwordCheck.value.trim();
        const terms = registrationForm.terms.checked;

        if (!username || !email || !password || !passwordCheck) {
            showError('All fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            showError('Invalid email address.');
            return;
        }

        if (password !== passwordCheck) {
            showError('Passwords do not match.');
            return;
        }

        if (!terms) {
            showError('You must agree to the terms.');
            return;
        }

        showError('Registration successful!');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = loginForm.username.value.trim();
        const password = loginForm.password.value.trim();

        if (!username || !password) {
            showError('All fields are required.');
            return;
        }

        showError('Login successful!');
    });
});