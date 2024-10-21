function showModal() {
    document.getElementById('signInModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('signInModal').style.display = 'none';
}

function signIn() {
    event.preventDefault(); // Prevent form submission
    const emailOrUsername = document.getElementById('emailOrUsername').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (!validateEmail(emailOrUsername)) {
        alert('Please enter a valid email.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Proceed with sign-in logic (e.g., API call)
    alert('Signing in as: ' + emailOrUsername);
    closeModal();
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format check
    return re.test(email);
}

// Example of showing the modal (you can trigger this on an event)
showModal();
