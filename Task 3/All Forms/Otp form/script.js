let otpTimer;
let timeLeft = 60; // 60 seconds timer

function showModal() {
    document.getElementById('otpModal').style.display = 'block';
    startTimer();
}

function closeModal() {
    document.getElementById('otpModal').style.display = 'none';
    clearInterval(otpTimer);
}

function moveToNext(current) {
    if (current.value.length === 1) {
        const next = current.nextElementSibling;
        if (next) next.focus();
    }
}

function verifyOTP() {
    const otpInputs = document.querySelectorAll('.otp-box');
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    
    if (otp.length === 6) {
        alert('OTP Verified: ' + otp);
        closeModal();
    } else {
        alert('Please enter a valid 6-digit OTP.');
    }
}

function resendOTP() {
    alert('OTP has been resent!');
    resetTimer();
}

function startTimer() {
    document.getElementById('timer').innerText = `Time left: ${timeLeft} seconds`;
    otpTimer = setInterval(() => {
        timeLeft -= 1;
        document.getElementById('timer').innerText = `Time left: ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(otpTimer);
            document.getElementById('timer').innerText = 'OTP expired. Please resend.';
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(otpTimer);
    timeLeft = 60;
    startTimer();
}

// Example of showing the modal (you can trigger this on an event)
showModal();
