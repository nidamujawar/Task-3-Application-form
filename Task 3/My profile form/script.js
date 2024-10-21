function showModal() {
    document.getElementById('profileModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('profileModal').style.display = 'none';
}

function saveChanges() {
    event.preventDefault(); // Prevent form submission
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const profilePicture = document.getElementById('profilePicture').files[0];

    // Validation
    if (!validatePhoneNumber(phoneNumber)) {
        alert('Please enter a valid phone number.');
        return;
    }

    if (profilePicture && !validateImage(profilePicture)) {
        alert('Please upload a valid image (max 2MB, jpg/png).');
        return;
    }

    // Proceed with saving changes logic (e.g., API call)
    alert('Profile updated successfully!');
    closeModal();
}

function validatePhoneNumber(phoneNumber) {
    const re = /^\d{10}$/; // Basic phone number format (10 digits)
    return re.test(phoneNumber);
}

function validateImage(file) {
    const maxSize = 2 * 1024 * 1024; // 2MB
    const allowedTypes = ['image/jpeg', 'image/png'];
    return file.size <= maxSize && allowedTypes.includes(file.type);
}

function previewImage(event) {
    const imagePreview = document.getElementById('imagePreview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.style.display = 'none';
    }
}

function resetToDefault() {
    document.getElementById('profileForm').reset();
    document.getElementById('imagePreview').style.display = 'none';
}

// Example of showing the modal (you can trigger this on an event)
showModal();
