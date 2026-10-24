// ========================================
// DIGILOCKER SERVICES - MODAL POPUP
// ========================================

const buttons = document.querySelectorAll(".learn-more");

const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");

const closeModal = document.getElementById("closeModal");
const modalCloseButton = document.getElementById("modalCloseButton");


// DigiLocker service information

const serviceInformation = [
    {
        title: "Digital Documents",
        message:
            "DigiLocker allows users to access eligible digital documents electronically. The availability of documents depends on the issuing organisation."
    },

    {
        title: "Educational Certificates",
        message:
            "Eligible educational certificates may be available digitally through participating educational institutions and issuing organisations."
    },

    {
        title: "Government Documents",
        message:
            "Some government-issued documents can be accessed digitally through DigiLocker when they are available from the relevant issuing organisation."
    },

    {
        title: "DigiLocker Account",
        message:
            "A DigiLocker account can be used to access eligible digital documents and services. Users should follow the official DigiLocker registration process."
    },

    {
        title: "Document Sharing",
        message:
            "DigiLocker provides features that can allow users to share eligible digital documents electronically when supported."
    },

    {
        title: "Document Verification",
        message:
            "Eligible digital documents can be verified using the verification features provided by DigiLocker."
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
// CLOSE POPUP - X BUTTON
// ========================================

closeModal.addEventListener("click", function() {

    modal.classList.remove("active");

});


// ========================================
// CLOSE POPUP - CLOSE BUTTON
// ========================================

modalCloseButton.addEventListener("click", function() {

    modal.classList.remove("active");

});


// ========================================
// CLOSE POPUP - OUTSIDE CLICK
// ========================================

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


// ========================================
// CLOSE POPUP - ESCAPE KEY
// ========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        modal.classList.remove("active");

    }

});