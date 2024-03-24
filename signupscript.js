function registerUser() {
    // Retrieve form values
    var name = document.getElementById("yourname").value;
    var email = document.getElementById("emailaddress").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var phone = document.getElementById("phone").value;
    var gender = document.querySelector('input[name="gender"]:checked');

    // Validate form fields (add your own validation logic here)

    // Assuming registration is successful, redirect to the home page
    if (name && email && password && confirmPassword && phone && gender) {
        // Add your registration logic here (e.g., sending data to the server)
        alert("Registration successful!"); // Replace with your actual registration logic
        window.location.href = "home.html"; // Redirect to the home page
    } else {
        alert("Please fill in all the required fields."); // Display an error message if fields are not filled
    }
}

