
// Contact form validation and submission handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation checks
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return; // Don't submit the form if validation fails
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return; // Invalid email format
    }

    // Simulate form submission
    alert(`Thank you for your message, ${name}! We will get back to you at ${email} soon.`);

    // Optionally clear the form fields after submission
    document.getElementById("contactForm").reset();
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
