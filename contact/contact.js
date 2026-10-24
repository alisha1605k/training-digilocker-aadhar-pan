// ========================================
// CONTACT FORM VALIDATION
// ========================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const service = document.getElementById("service").value;

    const message = document.getElementById("message").value.trim();


    // Error elements

    const nameError = document.getElementById("nameError");

    const emailError = document.getElementById("emailError");

    const serviceError = document.getElementById("serviceError");

    const messageError = document.getElementById("messageError");

    const successMessage = document.getElementById("successMessage");


    // Clear old messages

    nameError.textContent = "";

    emailError.textContent = "";

    serviceError.textContent = "";

    messageError.textContent = "";

    successMessage.textContent = "";


    let isValid = true;


    // Name validation

    if (name === "") {

        nameError.textContent = "Please enter your name.";

        isValid = false;

    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }


    // Service validation

    if (service === "") {

        serviceError.textContent =
            "Please select a service.";

        isValid = false;

    }


    // Message validation

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    }


    // Success

    if (isValid) {

        successMessage.textContent =
            "✓ Thank you! Your feedback has been submitted successfully.";

        contactForm.reset();

    }

});