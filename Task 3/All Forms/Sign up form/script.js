function showModal() {
    document.getElementById('signUpModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('signUpModal').style.display = 'none';
}

function signUp() {
    event.preventDefault(); // Prevent form submission
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation
    if (!fullName || !email || !password || !confirmPassword) {
        alert('All fields are required.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!validatePasswordStrength(password)) {
        alert('Password must be at least 8 characters long and contain special characters.');
        return;
    }

    // Proceed with sign-up logic (e.g., API call)
    alert('Sign Up Successful for: ' + fullName);
    closeModal();
}

function validatePasswordStrength(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthMeter = document.getElementById('passwordStrength');
    
    if (password.length < 8) {
        strengthMeter.className = 'strength-weak';
    } else if (validatePasswordStrength(password)) {
        strengthMeter.className = 'strength-strong';
    } else {
        strengthMeter.className = 'strength-medium';
    }
}

// Example of showing the modal (you can trigger this on an event)
showModal();
