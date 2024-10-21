function showModal() {
    document.getElementById('forgotPasswordModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('forgotPasswordModal').style.display = 'none';
    clearFeedback();
}

function sendResetLink() {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value;
    const feedbackMessage = document.getElementById('feedbackMessage');

    if (!validateEmail(email)) {
        feedbackMessage.textContent = 'Please enter a valid email address.';
        feedbackMessage.className = 'feedback';
        feedbackMessage.style.display = 'block';
        return;
    }

    // Simulate sending the reset link (replace with actual API call)
    feedbackMessage.textContent = 'A password reset link has been sent to your email!';
    feedbackMessage.className = 'feedback success';
    feedbackMessage.style.display = 'block';
    document.getElementById('forgotPasswordForm').reset();
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format check
    return re.test(email);
}

function clearFeedback() {
    const feedbackMessage = document.getElementById('feedbackMessage');
    feedbackMessage.style.display = 'none';
}

// Example of showing the modal (you can trigger this on an event)
showModal();
