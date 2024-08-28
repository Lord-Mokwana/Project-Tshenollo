// script.js

// Log a message to the console when the website is loaded
console.log("Website loaded successfully!");

// Example of adding interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed.");

    // Example: Change the background color of the header when clicked
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        header.style.backgroundColor = '#004d40'; // Change to a darker shade
    });
});
