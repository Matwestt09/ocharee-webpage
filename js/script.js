document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    console.log(hamburger, navLinks); // Check if these elements are correctly selected

    hamburger.addEventListener('click', function () {
        console.log("Hamburger Clicked");
        navLinks.classList.toggle('show');
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// JavaScript (script.js)

function toggleMenu() {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');

    // Function to handle contact form submission
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        // Here you can add code to handle form submission, e.g., sending data to server
        // For demonstration, let's log the form data
        const formData = new FormData(contactForm);
        console.log('Contact Form Data:', formData);
        alert('Form submitted successfully!'); // Replace with your own success handling
        contactForm.reset(); // Optional: Reset the form after submission
    });

    // Function to handle newsletter form submission
    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        // Here you can add code to handle newsletter subscription, e.g., sending email to server
        // For demonstration, let's log the email
        const newsletterEmail = document.getElementById('newsletterEmail').value;
        console.log('Newsletter Email:', newsletterEmail);
        alert('Subscribed to newsletter successfully!'); // Replace with your own success handling
        newsletterForm.reset(); // Optional: Reset the form after submission
    });
});

function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const bars = document.querySelectorAll('.bar');

    menu.classList.toggle('open');

    bars.forEach(bar => {
        bar.classList.toggle('open');
    });
}


function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const bars = document.querySelectorAll('.bar');

    menu.classList.toggle('open');

    bars.forEach(bar => {
        bar.classList.toggle('open');
    });
}


