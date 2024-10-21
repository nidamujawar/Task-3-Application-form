function showModal() {
    document.getElementById('changePasswordModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('changePasswordModal').style.display = 'none';
    clearStrengthMeter();
}

function changePassword() {
    event.preventDefault(); // Prevent form submission
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;
    
    

    // Validation
    if (!currentPassword || !newPassword || !confirmNewPassword) {
        alert('All fields are required.');
        return;
    }

    if (newPassword !== confirmNewPassword) {
        alert('New password and confirmation do not match.');
        return;
    }

    if (!validatePasswordStrength(newPassword)) {
        alert('New password must be at least 8 characters long and contain special characters.');
        return;
    }

    // Proceed with password change logic (e.g., API call)
    alert('Password changed successfully!');
    closeModal();
}

function validatePasswordStrength(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

function checkPasswordStrength() {
    const password = document.getElementById('newPassword').value;
    const strengthMeter = document.getElementById('passwordStrength');
    
    if (password.length < 8) {
        strengthMeter.className = 'strength-weak';
    } else if (validatePasswordStrength(password)) {
        strengthMeter.className = 'strength-strong';
    } else {
        strengthMeter.className = 'strength-medium';
    }
}

function clearStrengthMeter() {
    document.getElementById('passwordStrength').className = '';
}

// Example of showing the modal (you can trigger this on an event)
showModal();
