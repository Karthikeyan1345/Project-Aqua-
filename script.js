function showCustomerLogin() {
    document.getElementById('customer-login').classList.remove('hidden');
    document.getElementById('office-login').classList.add('hidden');
}

function showOfficeLogin() {
    document.getElementById('customer-login').classList.add('hidden');
    document.getElementById('office-login').classList.remove('hidden');
}

function sendOTP() {
    document.getElementById("otp-section").style.display = 'block';
    let timeLeft = 120;
    let timer = setInterval(() => {
        if (timeLeft <= 0) {
            document.getElementById("resend-otp").innerHTML = "Resend OTP";
            clearInterval(timer);
        } else {
            document.getElementById("timer").innerText = timeLeft;
        }
        timeLeft--;
    }, 1000);
}

function verifyOTP() {
    alert('OTP Verified! Redirecting to user dashboard...');
    window.location.href = 'userlogin.html';
}

function officeLogin() {
    alert('Office login successful! Redirecting to office dashboard...');
    window.location.href = 'officelogin.html';
}

function forgotPassword() {
    const email = prompt("Enter your email to reset password:");
    if (email) {
        alert("Check your email and click the link to reset your password.");
    }
}

// OTP Auto-focus
document.querySelectorAll('.otp-field').forEach((field, index, array) => {
    field.addEventListener('input', () => {
        if (field.value && index < array.length - 1) {
            array[index + 1].focus();
        }
    });
});



function navigateTo(page) {
    window.location.href = page;
}
