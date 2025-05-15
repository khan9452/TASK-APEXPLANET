// form-validation.js
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value || !email.value || !message.value) {
        alert("Please fill out all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email.");
        return;
    }

    alert("Form submitted successfully!");
    this.reset();
});