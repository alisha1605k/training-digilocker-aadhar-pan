const contactForm = document.getElementById("contactForm");

const scriptURL = "https://script.google.com/macros/s/AKfycby4RMwe3LQzv-Gn_0OoqnTjJwOCAfdZeoaSooWdXIyk6_VYJ59KtJwDdJGjh5t-eIOv/exec";

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const serviceError = document.getElementById("serviceError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    serviceError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (!name) {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!service) {
        serviceError.textContent = "Please select a service.";
        isValid = false;
    }

    if (!message) {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    }

    if (!isValid) return;

    const submitButton = contactForm.querySelector(".submit-button");
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("service", service);
    formData.append("message", message);

    try {
        await fetch(scriptURL, {
            method: "POST",
            body: formData,
            mode: "no-cors"
        });

        successMessage.textContent =
            "✓ Thank you! Your feedback has been submitted.";

        contactForm.reset();

    } catch (error) {
        successMessage.textContent =
            "Unable to submit your feedback. Please try again.";

        console.error(error);

    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Submit Feedback";
    }
});
