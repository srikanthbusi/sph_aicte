// loginscript.js

function login() {
    var username = document.getElementById('yourname').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password');
    } 
    else {
        console.log('Username:', username);
        console.log('Password:', password);

        window.location.href = 'dashboard.html';
    }
}
