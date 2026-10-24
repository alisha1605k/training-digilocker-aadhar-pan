// ========================================
// AADHAAR SERVICES - MODAL POPUP
// ========================================

const buttons = document.querySelectorAll(".learn-more");

const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");

const closeModal = document.getElementById("closeModal");
const modalCloseButton = document.getElementById("modalCloseButton");


// Aadhaar service information

const serviceInformation = [

    {
        title: "Aadhaar Enrolment",
        message:
            "Aadhaar enrolment is the process of registering for Aadhaar through an authorised enrolment centre. Follow the official UIDAI process and provide the required information."
    },

    {
        title: "Update Aadhaar",
        message:
            "Eligible Aadhaar details can be updated through the available UIDAI services. The required process may depend on the type of information being updated."
    },

    {
        title: "Download Aadhaar",
        message:
            "An electronic copy of Aadhaar can be downloaded through the official UIDAI services when the user is eligible and has the required details."
    },

    {
        title: "Check Aadhaar Status",
        message:
            "You can check the status of an Aadhaar enrolment or update request through the appropriate UIDAI service."
    },

    {
        title: "Verify Aadhaar",
        message:
            "Aadhaar verification can be performed using the verification services provided by UIDAI."
    },

    {
        title: "Aadhaar Information",
        message:
            "Aadhaar is a 12-digit identification number issued by UIDAI to eligible residents of India. It is used for identity-related services and verification."
    }

];


// ========================================
// OPEN POPUP
// ========================================

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const serviceIndex = Number(
            button.getAttribute("data-service")
        );

        modalTitle.textContent =
            serviceInformation[serviceIndex].title;

        modalMessage.textContent =
            serviceInformation[serviceIndex].message;

        modal.classList.add("active");

    });

});


// ========================================
// CLOSE USING X
// ========================================

closeModal.addEventListener("click", function() {

    modal.classList.remove("active");

});


// ========================================
// CLOSE USING CLOSE BUTTON
// ========================================

modalCloseButton.addEventListener("click", function() {

    modal.classList.remove("active");

});


// ========================================
// CLOSE BY CLICKING OUTSIDE
// ========================================

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


// ========================================
// CLOSE USING ESCAPE
// ========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        modal.classList.remove("active");

    }

});