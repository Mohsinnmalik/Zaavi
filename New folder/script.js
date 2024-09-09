document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    const role = document.getElementById('role').value;
    
    if (role === 'donor') {
        window.location.href = 'donor-dashboard.html'; // Redirect to Donor Dashboard
    } else if (role === 'receiver') {
        window.location.href = 'receiver-dashboard.html'; // Redirect to Receiver Dashboard
    } else if (role === 'helper') {
        window.location.href = 'helper-dashboard.html'; // Redirect to Helper Dashboard
    }
});
