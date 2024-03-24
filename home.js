// home.js

// Function to simulate new notifications
function showNotification() {
    const notificationDiv = document.querySelector('.notifications');

    // Check if notifications div exists
    if (notificationDiv) {
        notificationDiv.textContent = 'New Notification!';
        notificationDiv.classList.add('show');

        // Hide the notification after 3 seconds (adjust as needed)
        setTimeout(() => {
            notificationDiv.classList.remove('show');
        }, 3000);
    }
}

// Add an event listener to call the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Call the showNotification function when the page loads
    showNotification();
});
