fetch('/api/user')
    .then(response => response.json())
    .then(user => {
        const profileHeader = document.querySelector('#profile h2');
        const profileContent = document.querySelectorAll('#profile p');

        profileHeader.textContent = 'User Profile';
        profileContent[0].textContent = `Name: ${user.name}`;
        profileContent[1].textContent = `Role: ${user.role}`;
        profileContent[2].textContent = `Preferences: ${user.preferences}`;
        
        // Add animation or transition effects if needed
        profileHeader.classList.add('animated', 'fadeInDown'); // Example: using Animate.css classes
        profileContent.forEach(element => {
            element.classList.add('animated', 'fadeInUp'); // Example: using Animate.css classes
        });
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
        // Handle errors gracefully, e.g., display a message to the user
    });
