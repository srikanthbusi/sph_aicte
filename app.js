// Function to toggle between sign-up and sign-in forms
const toggle = () => {
    const container = document.getElementById('container');
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
};

// Dummy function to simulate user sign-up
const signup = () => {
    const name = document.getElementById('name').value; // Ensure you have an element with id='name'
    const email = document.getElementById('emailid').value; // Adjusted to 'emailid' to match your HTML
    const password = document.getElementById('signup-password').value;
    // Ensure you add an input for confirmPassword in your HTML or remove the below lines related to it
    const confirmPassword = document.getElementById('signup-confirm-password'); // Add this element to your HTML if you want to use it

    if (confirmPassword && password !== confirmPassword.value) {
        alert('Passwords do not match.');
        return;
    }

    // Simulating a successful sign-up
    console.log(`Signing up with name: ${name}, email: ${email}`);
    alert('Sign up successful! This is a simulation and no actual user account is created.');
};

// Dummy function to simulate user login
const login = () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simulating a successful login
    console.log(`Logging in with username: ${username}`);
    alert('Login successful! Redirecting...');

    // Redirecting to another page upon successful login.
    window.location.href = 'aicte_home.html'; // Replace 'aicte_home.html' with the actual file or path you intend to use
};

// Ensure you have buttons or form submission events that call these functions appropriately.
// For example, in your HTML, you might need to adjust your form's onsubmit to call signup() for the sign-up form.
// Similarly, add an onclick event to your login button if it's not a form submission, calling login().

// Initialize with sign-in form
const container = document.getElementById('container');
container.classList.add('sign-in');
