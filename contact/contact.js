
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby4RMwe3LQzv-Gn_0OoqnTjJwOCAfdZeoaSooWdXIyk6_VYJ59KtJwDdJGjh5t-eIOv/exec";

const contactForm = document.getElementById("contactForm");

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

    const submitButton = contactForm.querySelector(
        'button[type="submit"], input[type="submit"]'
    );

    try {
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Submitting...";
        }

        successMessage.textContent = "Submitting your feedback...";

        const formData = new URLSearchParams();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("service", service);
        formData.append("message", message);

        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            body: formData,
            redirect: "follow"
        });

        const result = (await response.text()).trim();

        if (result !== "SUCCESS") {
            throw new Error("Your information could not be saved.");
        }

        successMessage.textContent =
            "✓ Thank you! Your feedback has been saved successfully.";

        contactForm.reset();

    } catch (error) {
        console.error("Contact form error:", error);

        successMessage.textContent =
            "Sorry! Something went wrong. Please try again.";

    } finally {
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = "Submit";
        }
    }
});
