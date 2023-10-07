function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!email.match(emailRegex)) {
        alert('Invalid email address. Please enter a valid email.');
    } else if (!password.match(passwordRegex)) {
        alert('Invalid password. Password must have at least 8 characters, including at least one uppercase letter, one number, and one special character.');
    } else {
        alert('Successful Sign Up!');
    }
}
