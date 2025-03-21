document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple event listener for a button click
    const button = document.getElementById('submit-button');
    if (button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // Add form validation or other functionality here
            alert('Button clicked!');
        });
    }

    // Example of dynamically updating content
    const dynamicContent = document.getElementById('dynamic-content');
    if (dynamicContent) {
        dynamicContent.textContent = 'Welcome to our landing page!';
    }
});